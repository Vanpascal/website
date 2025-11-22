"use client";

import { useEffect, useState } from "react";
import {
  getAllPublications,
  createPublication,
  updatePublication,
  deletePublication,
} from "@/app/actions/publicationActions";

type Publication = {
  id: number;
  title: string;
  youtubeId: string;
  createdAt: string;
  updatedAt: string;
};

export default function AdminPublications() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [title, setTitle] = useState("");
  const [youtubeId, setYoutubeId] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  const loadPublications = async () => {
    const data = await getAllPublications();
    // Convert Date objects to ISO strings
    setPublications(
      data.map((pub: any) => ({
        ...pub,
        createdAt:
          typeof pub.createdAt === "string"
            ? pub.createdAt
            : pub.createdAt.toISOString(),
        updatedAt:
          typeof pub.updatedAt === "string"
            ? pub.updatedAt
            : pub.updatedAt.toISOString(),
      }))
    );
  };

  useEffect(() => {
    loadPublications();
  }, []);

  const handleSubmit = async () => {
    if (!title || !youtubeId) return alert("Fill all fields");
    if (editingId) {
      await updatePublication(editingId, { title, youtubeId });
    } else {
      await createPublication({ title, youtubeId });
    }
    setTitle("");
    setYoutubeId("");
    setEditingId(null);
    loadPublications();
  };

  const handleEdit = (pub: Publication) => {
    setEditingId(pub.id);
    setTitle(pub.title);
    setYoutubeId(pub.youtubeId);
  };

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this publication?")) {
      await deletePublication(id);
      loadPublications();
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6 text-purple-900">
        Manage Publications
      </h1>

      {/* Form */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Title"
          className="flex-1 p-3 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="YouTube ID"
          className="flex-1 p-3 border rounded"
          value={youtubeId}
          onChange={(e) => setYoutubeId(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="px-6 py-3 bg-purple-900 text-white rounded hover:bg-purple-700 transition"
        >
          {editingId ? "Update" : "Add"}
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-purple-900 text-white">
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">YouTube ID</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {publications.map((pub) => (
              <tr key={pub.id} className="border-b hover:bg-gray-100">
                <td className="p-3">{pub.title}</td>
                <td className="p-3">{pub.youtubeId}</td>
                <td className="p-3 flex gap-2">
                  <button
                    className="px-3 py-1 bg-yellow-500 rounded hover:bg-yellow-600 text-purple-900 font-semibold"
                    onClick={() => handleEdit(pub)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-3 py-1 bg-red-500 rounded hover:bg-red-600 text-white font-semibold"
                    onClick={() => handleDelete(pub.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
