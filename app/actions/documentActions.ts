"use server";

import { revalidatePath } from "next/cache";
import { getErrorMessages } from "@/lib/errorUtils";
import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";

import { prisma } from "@/lib/prisma";

// Create a new document
export const createDocument = async (formData: FormData) => {
  try {
    const title = formData.get("title") as string | null;
    const document = formData.get("document") as File | null;

    if (!title || title.trim() === "") {
      throw new Error("Title is required and must be a string.");
    }

    let documentLink = "";
    if (document && document.size > 0) {
      const documentBuffer = await document.arrayBuffer();
      const documentsDir = path.join(process.cwd(), "public/documents");
      const uniqueFilename = `${randomUUID()}-${document.name}`;
      const filePath = path.join(documentsDir, uniqueFilename);
      await fs.mkdir(documentsDir, { recursive: true });
      await fs.writeFile(filePath, Buffer.from(documentBuffer));
      documentLink = `/documents/${uniqueFilename}`;
    }

    await prisma.documents.create({
      data: {
        title,
        link: documentLink,
      },
    });

    revalidatePath("/admin/settings/documents");
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

// Update an existing document with a new file
export const updateDocument = async (id: number, formData: FormData) => {
  try {
    const title = formData.get("title") as string | null;
    const document = formData.get("document") as File | null;

    if (!title || title.trim() === "") {
      throw new Error("Title is required and must be a string.");
    }

    const updateData: {
      title: string;
      link?: string;
    } = { title };

    if (document && document.size > 0) {
      const existingDocument = await prisma.documents.findUnique({
        where: { id },
      });

      // Delete old document if it exists
      if (existingDocument?.link) {
        const oldDocumentPath = path.join(
          process.cwd(),
          "public",
          existingDocument.link
        );
        try {
          await fs.unlink(oldDocumentPath);
        } catch (err) {
          console.error(
            `Error deleting old document file: ${oldDocumentPath}`,
            err
          );
        }
      }

      // Save the new document
      const documentBuffer = await document.arrayBuffer();
      const documentsDir = path.join(process.cwd(), "public/documents");
      const uniqueFilename = `${randomUUID()}-${document.name}`;
      const filePath = path.join(documentsDir, uniqueFilename);
      await fs.mkdir(documentsDir, { recursive: true });
      await fs.writeFile(filePath, Buffer.from(documentBuffer));
      updateData.link = `/documents/${uniqueFilename}`;
    }

    await prisma.documents.update({
      where: { id },
      data: updateData,
    });

    revalidatePath("/admin/settings/documents");
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

// Delete a document along with its file
export const deleteDocument = async (id: number) => {
  try {
    const document = await prisma.documents.findUnique({
      where: { id },
    });

    if (!document) {
      throw new Error("Document not found.");
    }

    // Delete document file if it exists
    if (document.link) {
      const documentPath = path.join(process.cwd(), "public", document.link);
      try {
        await fs.unlink(documentPath);
      } catch (err) {
        console.error(`Error deleting document file: ${documentPath}`, err);
      }
    }

    await prisma.documents.delete({
      where: { id },
    });

    revalidatePath("/admin/settings/documents");
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

// Fetch all documents
export const fetchDocuments = async () => {
  try {
    const documents = await prisma.documents.findMany({
      orderBy: { createdAt: "desc" }, // Order by newest first
    });
    return documents;
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

export const recordView = async (id: number) => {
  try {
    await prisma.documents.update({
      where: { id },
      data: {
        views: {
          increment: 1,
        },
      },
    });
  } catch (error) {
    console.error("Error recording view:", error);
  }
};
