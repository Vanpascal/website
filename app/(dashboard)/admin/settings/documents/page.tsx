import { fetchDocuments } from "@/app/actions/documentActions";
import { Announcement, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Announcement[]> {
  return await fetchDocuments();
}

export default async function DocumentsPage() {
  const data = await getData();

  return (
    <div className="ontainer mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg p-4 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Documents Center
        </h1>
        <DataTable data={data} columns={columns} />
      </div>
    </div>
  );
}
