"use client";
import React from "react";

interface TableRow {
  [key: string]: string | number | Date;
}

interface TableProps {
  data: TableRow[];
  columns: Array<{ header: string; key: string }>;
}

const Table: React.FC<TableProps> = ({ data, columns }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-200">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="py-3 px-6 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${
                rowIndex % 2 === 0 ? "bg-gray-100" : "bg-white"
              } hover:bg-gray-50`}
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="py-3 px-6 border-b text-gray-700"
                >
                  {(() => {
                    const cellData = row[column.key];
                    if (cellData instanceof Date) {
                      return cellData.toLocaleDateString();
                    } else {
                      return cellData?.toString() || ""; // Handle undefined and null values
                    }
                  })()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
