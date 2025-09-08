"use strict";
// settings/documents/ClientDocuments.tsx
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const columns_1 = require("./columns");
const data_table_1 = require("./data-table");
const ClientDocuments = ({ data }) => {
    return <data_table_1.DataTable data={data} columns={columns_1.columns}/>;
};
exports.default = ClientDocuments;
