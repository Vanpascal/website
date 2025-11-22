import { fetchBanners } from "@/app/actions/bannerActions";
import { Banner, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Banner[]> {
  const banners = await fetchBanners();
  return banners.map((banner) => ({
    ...banner,
    link: banner.link ?? undefined,
  }));
}

export default async function RecentUpdatesPage() {
  const data = await getData();

  return (
    <div className="ontainer mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg p-4 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Manage Banners
        </h1>
        <DataTable data={data} columns={columns} />
      </div>
    </div>
  );
}
