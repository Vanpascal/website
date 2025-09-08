"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTable = DataTable;
const react_table_1 = require("@tanstack/react-table");
const button_1 = require("@/components/ui/button");
const input_1 = require("@/components/ui/input");
const table_1 = require("@/components/ui/table");
const AddStaff_1 = __importDefault(require("@/app/(dashboard)/admin/components/AddStaff"));
const react_1 = require("react");
function DataTable({ columns, data, }) {
    var _a, _b, _c;
    const [sorting, setSorting] = (0, react_1.useState)([]);
    const [columnFilters, setColumnFilters] = (0, react_1.useState)([]);
    const table = (0, react_table_1.useReactTable)({
        data,
        columns,
        state: {
            sorting,
            columnFilters,
        },
        getCoreRowModel: (0, react_table_1.getCoreRowModel)(),
        getPaginationRowModel: (0, react_table_1.getPaginationRowModel)(),
        onSortingChange: setSorting,
        getSortedRowModel: (0, react_table_1.getSortedRowModel)(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: (0, react_table_1.getFilteredRowModel)(),
    });
    return (<div className="space-y-4">
      <div className="flex items-center justify-between py-4">
        <input_1.Input placeholder="Search by name..." value={(_b = (_a = table.getColumn("fullname")) === null || _a === void 0 ? void 0 : _a.getFilterValue()) !== null && _b !== void 0 ? _b : ""} onChange={(event) => { var _a; return (_a = table.getColumn("fullname")) === null || _a === void 0 ? void 0 : _a.setFilterValue(event.target.value); }} className="max-w-sm"/>

        <AddStaff_1.default />
      </div>
      <div className="ounded-md border bg-white shadow">
        <table_1.Table>
          <table_1.TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (<table_1.TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                return (<table_1.TableHead key={header.id} className="bg-gray-100 text-gray-700 font-medium text-center py-1 px-2 text-sm">
                      {header.isPlaceholder
                        ? null
                        : (0, react_table_1.flexRender)(header.column.columnDef.header, header.getContext())}
                    </table_1.TableHead>);
            })}
              </table_1.TableRow>))}
          </table_1.TableHeader>
          <table_1.TableBody>
            {((_c = table.getRowModel().rows) === null || _c === void 0 ? void 0 : _c.length) ? (table.getRowModel().rows.map((row) => (<table_1.TableRow key={row.id} className="hover:bg-gray-100" data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (<table_1.TableCell key={cell.id} className="text-gray-800 text-center py-1 max-w-xs overflow-hidden text-ellipsis">
                      {(0, react_table_1.flexRender)(cell.column.columnDef.cell, cell.getContext())}
                    </table_1.TableCell>))}
                </table_1.TableRow>))) : (<table_1.TableRow>
                <table_1.TableCell colSpan={columns.length} className="h-24 text-center text-gray-500">
                  No results.
                </table_1.TableCell>
              </table_1.TableRow>)}
          </table_1.TableBody>
        </table_1.Table>
      </div>
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Rows per page</span>
          <select value={table.getState().pagination.pageSize} onChange={(e) => {
            table.setPageSize(Number(e.target.value));
        }} className="border border-gray-300 rounded-md text-sm px-2 py-1 focus:ring focus:ring-blue-500">
            {[5, 10, 20, 50].map((pageSize) => (<option key={pageSize} value={pageSize}>
                {pageSize}
              </option>))}
          </select>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </span>
          <div className="flex items-center space-x-1">
            <button_1.Button variant="outline" onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
              «
            </button_1.Button>
            <button_1.Button variant="outline" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
              ‹
            </button_1.Button>
            <button_1.Button variant="outline" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
              ›
            </button_1.Button>
            <button_1.Button variant="outline" onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>
              »
            </button_1.Button>
          </div>
        </div>
      </div>
    </div>);
}
