"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Spinner = () => {
    return (<div className="flex justify-center items-center space-x-2">
      <div className="animate-spin rounded-full h-6 w-6 border-2 border-t-transparent border-purple-700"/>
      <span className="text-purple-700 font-medium">Processing...</span>
    </div>);
};
exports.default = Spinner;
