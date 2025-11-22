"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const Footer_1 = __importDefault(require("@/components/Footer"));
const Header_1 = __importDefault(require("@/components/Header/Header"));
const Welding_1 = __importDefault(require("@/components/production-units/Welding"));
exports.metadata = {
    title: "Welding",
};
function Metalfab() {
    return (<div>
      <Header_1.default />
      <Welding_1.default />
      <Footer_1.default />
    </div>);
}
exports.default = Metalfab;
