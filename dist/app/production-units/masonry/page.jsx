"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const Footer_1 = __importDefault(require("@/components/Footer"));
const Header_1 = __importDefault(require("@/components/Header/Header"));
const Masonry_1 = __importDefault(require("@/components/production-units/Masonry"));
exports.metadata = {
    title: "Masonry",
};
function page() {
    return (<div>
      <Header_1.default />
      <Masonry_1.default />
      <Footer_1.default />
    </div>);
}
exports.default = page;
