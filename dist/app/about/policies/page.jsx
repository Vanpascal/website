"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const Policies_1 = __importDefault(require("@/components/about/Policies"));
const Footer_1 = __importDefault(require("@/components/Footer"));
const Header_1 = __importDefault(require("@/components/Header"));
exports.metadata = {
    title: "Our Policies",
};
const Policy = () => {
    return (<div>
      <Header_1.default />
      <Policies_1.default />
      <Footer_1.default />
    </div>);
};
exports.default = Policy;
