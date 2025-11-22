"use server";

import { revalidatePath } from "next/cache";
import { getErrorMessages } from "@/lib/errorUtils";
import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";
import { prisma } from "@/lib/prisma";

// Fetch all products
export const fetchProducts = async () => {
  try {
    const products = await prisma.products.findMany();
    return products;
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

// Fetch all carpentry products
export const fetchCarpentryProducts = async () => {
  try {
    const product = await prisma.products.findMany({
      where: {
        department: "Carpentry",
      },
    });
    return product;
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

// Fetch all Masonry products
export const fetchMasonryProducts = async () => {
  try {
    const product = await prisma.products.findMany({
      where: {
        department: "Masonry",
      },
    });
    return product;
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

// Fetch all Tailoring products
export const fetchTailoringProducts = async () => {
  try {
    const product = await prisma.products.findMany({
      where: {
        department: "Tailoring",
      },
    });
    return product;
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

// Fetch all Printing products
export const fetchPrintingProducts = async () => {
  try {
    const product = await prisma.products.findMany({
      where: {
        department: "Printing",
      },
    });
    return product;
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

// Fetch all Welding products
export const fetchWeldingProducts = async () => {
  try {
    const product = await prisma.products.findMany({
      where: {
        department: "Welding",
      },
    });
    return product;
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

// Create a new product
export const createProduct = async (formData: FormData) => {
  try {
    const productName = formData.get("product_name") as string | null;
    const department = formData.get("department") as string | null;
    const price = formData.get("price") as string | null;
    const photo = formData.get("photo") as File | null;

    if (!productName || !department || !price) {
      throw new Error("Invalid form data");
    }

    // Handle the photo file
    let photoFilePath = "";
    if (photo) {
      const photoBuffer = await photo.arrayBuffer();
      const imagesDir = path.join(process.cwd(), "public/images/products");
      const uniqueFilename = `${randomUUID()}-${photo.name}`;
      const filePath = path.join(imagesDir, uniqueFilename);
      await fs.mkdir(imagesDir, { recursive: true });
      await fs.writeFile(filePath, Buffer.from(photoBuffer));
      photoFilePath = `/images/products/${uniqueFilename}`;
    }

    await prisma.products.create({
      data: {
        product_name: productName,
        department,
        price,
        photo: photoFilePath,
      },
    });

    revalidatePath("/admin/products");
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

// Update an existing product
export const updateProduct = async (id: number, formData: FormData) => {
  try {
    const productName = formData.get("product_name") as string | null;
    const department = formData.get("department") as string | null;
    const price = formData.get("price") as string | null;
    const photo = formData.get("photo") as File | null;

    if (!productName || !department || !price) {
      throw new Error("Invalid form data");
    }

    const updateData: {
      product_name: string;
      department: string;
      price: string;
      photo?: string;
    } = {
      product_name: productName,
      department,
      price,
    };

    // If a new photo is provided, handle the photo
    if (photo && photo.size > 0) {
      const existingProduct = await prisma.products.findUnique({
        where: { id },
      });

      if (existingProduct && existingProduct.photo) {
        const oldPhotoPath = path.join(
          process.cwd(),
          "public",
          existingProduct.photo
        );
        try {
          await fs.unlink(oldPhotoPath);
        } catch (err) {
          console.error(`Error deleting old photo file: ${oldPhotoPath}`, err);
        }
      }

      // Process the new photo
      const photoBuffer = await photo.arrayBuffer();
      const imagesDir = path.join(process.cwd(), "public/images/products");
      const uniqueFilename = `${randomUUID()}-${photo.name}`;
      const filePath = path.join(imagesDir, uniqueFilename);

      await fs.mkdir(imagesDir, { recursive: true });
      await fs.writeFile(filePath, Buffer.from(photoBuffer));
      updateData.photo = `/images/products/${uniqueFilename}`;
    }

    // Update the product in the database
    await prisma.products.update({
      where: { id },
      data: updateData,
    });

    revalidatePath("/admin/products");
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};

// Delete a product
export const deleteProduct = async (id: number) => {
  try {
    const product = await prisma.products.findUnique({
      where: { id },
    });

    if (!product) {
      throw new Error("Product not found");
    }

    if (product.photo) {
      const photoPath = path.join(process.cwd(), "public", product.photo);
      try {
        await fs.unlink(photoPath);
      } catch (err) {
        console.error(`Error deleting photo file: ${photoPath}`, err);
      }
    }

    await prisma.products.delete({
      where: { id },
    });

    revalidatePath("/admin/products");
  } catch (error) {
    console.error(getErrorMessages(error));
    throw error;
  }
};
