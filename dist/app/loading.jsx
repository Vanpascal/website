"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Loading;
const react_1 = __importDefault(require("react"));
function Loading() {
    return (<div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center space-y-2">
        <div className="flex space-x-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce delay-150"></div>
          <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce delay-300"></div>
        </div>
        <p className="text-gray-700 text-sm font-medium">
          Loading, please wait...
        </p>
      </div>
    </div>);
}
