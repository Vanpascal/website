"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UsersPage;
const coursesActions_1 = require("@/app/actions/coursesActions");
const columns_1 = require("./columns");
const data_table_1 = require("./data-table");
async function getData() {
    const data = await (0, coursesActions_1.fetchCourse)();
    return data.map((course) => (Object.assign(Object.assign({}, course), { createdAt: new Date(course.createdAt) })));
}
async function UsersPage() {
    const data = await getData();
    return (<div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg p-4 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Course Management Panel
        </h1>
        <data_table_1.DataTable data={data} columns={columns_1.columns}/>
      </div>
    </div>);
}
