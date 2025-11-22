import { Employee, columns } from "./columns";
import { DataTable } from "./data-table";
import { fetchEmployees } from "../../../../actions/staffActions";

async function getData(): Promise<Employee[]> {
  return await fetchEmployees();
}

export default async function UsersPage() {
  const data = await getData();

  return (
    <div className="ontainer mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg p-4 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Manage Employees
        </h1>
        <DataTable data={data} columns={columns} />
      </div>
    </div>
  );
}
