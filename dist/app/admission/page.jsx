"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = AdmissionInf;
const react_1 = __importDefault(require("react"));
const AdmissionInfo_1 = __importDefault(require("@/components/academics/AdmissionInfo"));
const Footer_1 = __importDefault(require("@/components/Footer"));
const Header_1 = __importDefault(require("@/components/Header/Header"));
exports.metadata = {
    title: "Admission Info",
};
function AdmissionInf() {
    return (<div>
      <Header_1.default />
      <AdmissionInfo_1.default />
      <Footer_1.default />
    </div>);
}
