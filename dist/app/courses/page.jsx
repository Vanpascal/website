"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const dynamic_1 = __importDefault(require("next/dynamic"));
const Header_1 = __importDefault(require("@/components/Header/Header"));
const Footer_1 = __importDefault(require("@/components/Footer"));
// Dynamically import CoursesPage for client-side rendering
const CoursesPage = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require("@/components/academics/CoursesPage"))), { ssr: false });
const Courses = () => {
    return (<div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header_1.default />

      {/* Main scrollable content */}
      <main className="flex-1 pt-[45px] pb-24 overflow-hidden">
        <div className="h-full overflow-y-auto">
          <CoursesPage />
        </div>
      </main>

      {/* Footer */}
      <Footer_1.default />
    </div>);
};
exports.default = Courses;
