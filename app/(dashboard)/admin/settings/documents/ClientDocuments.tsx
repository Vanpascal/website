// settings/documents/ClientDocuments.tsx
"use client";

import React from "react";
import { Announcement, columns } from "./columns";
import { DataTable } from "./data-table";

interface ClientDocumentsProps {
  data: Announcement[];
}

const ClientDocuments: React.FC<ClientDocumentsProps> = ({ data }) => {
  return <DataTable data={data} columns={columns} />;
};

export default ClientDocuments;
