"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const ManagementAndStaff_1 = __importDefault(require("@/components/about/ManagementAndStaff"));
const Footer_1 = __importDefault(require("@/components/Footer"));
const Header_1 = __importDefault(require("@/components/Header/Header"));
exports.metadata = {
    title: "Management and Staff",
};
const Management = () => {
    return (<div>
      <Header_1.default />
      <ManagementAndStaff_1.default />
      <Footer_1.default />
    </div>);
};
exports.default = Management;
