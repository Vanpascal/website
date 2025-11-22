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
exports.default = DashboardLayout;
const react_1 = __importStar(require("react"));
const Navbar_1 = __importDefault(require("@/components/Navbar"));
const Sidebar_1 = __importDefault(require("@/components/Sidebar"));
function DashboardLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = (0, react_1.useState)(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (<div className="h-screen flex">
      {/* Sidebar */}
      <Sidebar_1.default isOpen={isSidebarOpen} onToggleSidebar={toggleSidebar}/>

      {/* Main Content */}
      <div className="lg:pl-64 flex-1 bg-gray-100 overflow-hidden flex flex-col">
        {/* Sticky Navbar */}
        <div className="sticky top-0 z-30 bg-white shadow-md">
          <Navbar_1.default onToggleSidebar={toggleSidebar}/>
        </div>

        {/* Children content */}
        <div className="p-6 mt-10 overflow-auto flex-1">{children}</div>
      </div>
    </div>);
}
