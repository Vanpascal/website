"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Table = ({ data, columns }) => {
    return (<div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-200">
          <tr>
            {columns.map((column) => (<th key={column.key} className="py-3 px-6 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                {column.header}
              </th>))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (<tr key={rowIndex} className={`${rowIndex % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-gray-50`}>
              {columns.map((column) => (<td key={column.key} className="py-3 px-6 border-b text-gray-700">
                  {(() => {
                    const cellData = row[column.key];
                    if (cellData instanceof Date) {
                        return cellData.toLocaleDateString();
                    }
                    else {
                        return (cellData === null || cellData === void 0 ? void 0 : cellData.toString()) || ""; // Handle undefined and null values
                    }
                })()}
                </td>))}
            </tr>))}
        </tbody>
      </table>
    </div>);
};
exports.default = Table;
