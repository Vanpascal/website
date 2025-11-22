"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const Footer_1 = __importDefault(require("@/components/Footer"));
const Header_1 = __importDefault(require("@/components/Header/Header"));
const react_1 = __importDefault(require("react"));
const Donate_1 = __importDefault(require("@/components/donate/Donate"));
exports.metadata = {
    title: "Donate",
};
function Doanation() {
    return (<div>
      <Header_1.default />
      <Donate_1.default />
      <Footer_1.default />
    </div>);
}
exports.default = Doanation;
