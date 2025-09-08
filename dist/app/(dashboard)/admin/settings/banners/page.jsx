"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RecentUpdatesPage;
const bannerActions_1 = require("@/app/actions/bannerActions");
const columns_1 = require("./columns");
const data_table_1 = require("./data-table");
async function getData() {
    const banners = await (0, bannerActions_1.fetchBanners)();
    return banners.map((banner) => {
        var _a;
        return (Object.assign(Object.assign({}, banner), { link: (_a = banner.link) !== null && _a !== void 0 ? _a : undefined }));
    });
}
async function RecentUpdatesPage() {
    const data = await getData();
    return (<div className="ontainer mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg p-4 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Manage Banners
        </h1>
        <data_table_1.DataTable data={data} columns={columns_1.columns}/>
      </div>
    </div>);
}
