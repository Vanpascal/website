"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UsersPage;
const columns_1 = require("./columns");
const data_table_1 = require("./data-table");
const productActions_1 = require("@/app/actions/productActions");
async function getData() {
    return await (0, productActions_1.fetchProducts)();
}
async function UsersPage() {
    const data = await getData();
    return (<div className="ontainer mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg p-4 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Products Management Panel
        </h1>
        <data_table_1.DataTable data={data} columns={columns_1.columns}/>
      </div>
    </div>);
}
