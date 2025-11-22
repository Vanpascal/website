import React, { useEffect, useState } from "react";
import { fetchDocuments, recordView } from "@/app/actions/documentActions";
import { FaFilePdf } from "react-icons/fa";

// Define the Document type
type Document = {
  id: number;
  title: string;
  link: string;
  views: number;
};

function DocumentCenter() {
  const [documents, setDocuments] = useState<Document[]>([]);

  useEffect(() => {
    const getDocuments = async () => {
      try {
        const data = await fetchDocuments();
        const formattedData: Document[] = data.map((document) => ({
          id: document.id,
          title: document.title,
          link: document.link ? document.link : "#", // Provide a default link if null
          views: document.views,
        }));
        setDocuments(formattedData);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    getDocuments();
  }, []);

  const handleLinkClick = async (documentId: number) => {
    try {
      await recordView(documentId);
    } catch (error) {
      console.error("Error recording view:", error);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-5 overflow-hidden">
      <h3 className="text-xl font-semibold text-purple-900 border-b-2 border-blue-800 pb-2 mb-5">
        Document Center
      </h3>
      <ul className="space-y-4">
        {documents.map((document, index) => (
          <li key={index} className="flex items-center">
            <FaFilePdf className="text-red-600 mr-3" size={24} />{" "}
            <a
              href={document.link}
              onClick={() => handleLinkClick(document.id)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-800 break-words underline hover:text-blue-800"
            >
              {document.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DocumentCenter;
