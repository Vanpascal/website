import { Comments, columns } from "./columns";
import { DataTable } from "./data-table";
import { fetchComments } from "@/app/actions/commentsActions";

async function getData(): Promise<Comments[]> {
  return await fetchComments();
}

export default async function CommentsPage() {
  const data = await getData();

  return (
    <div className="ontainer mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg p-4 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Manage Comments
        </h1>
        <DataTable data={data} columns={columns} />
      </div>
    </div>
  );
}
