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
const react_1 = __importStar(require("react"));
const navigation_1 = require("next/navigation");
const image_1 = __importDefault(require("next/legacy/image"));
const link_1 = __importDefault(require("next/link"));
const fi_1 = require("react-icons/fi");
const ai_1 = require("react-icons/ai");
const authActions_1 = require("@/app/actions/authActions");
const Navbar = ({ onToggleSidebar }) => {
    const router = (0, navigation_1.useRouter)();
    const [adminName, setAdminName] = (0, react_1.useState)(null);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [, startTransition] = (0, react_1.useTransition)();
    (0, react_1.useEffect)(() => {
        startTransition(async () => {
            const response = await (0, authActions_1.getLoggedUser)();
            if (response.success) {
                setAdminName(`${response.firstname} ${response.lastname}`);
            }
            else {
                console.error(response.error);
            }
        });
    }, []);
    const handleLogout = () => {
        startTransition(async () => {
            setLoading(true);
            const response = await (0, authActions_1.logoutUser)();
            setLoading(false);
            if (response.success) {
                router.push("/login");
            }
            else {
                console.error(response.error);
            }
        });
    };
    return (<div className="flex items-center justify-between p-4 bg-gray-800 shadow-md fixed top-0 left-0 w-full z-20">
      {/* Toggle Sidebar Button (for small screens) */}
      <button onClick={onToggleSidebar} className="lg:hidden flex items-center gap-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition">
        <fi_1.FiMenu size={24}/>
      </button>

      {/* Logo and Organization Name */}
      <link_1.default href="/" className="flex items-center gap-3">
        <image_1.default src="/images/logo.jpg" width="48" height="48" alt="DB Logo" className="w-12 h-12 rounded-full"/>
        <span className="font-bold text-lg md:text-xl text-white hidden lg:inline-block">
          DBYTC-Iringa
        </span>
      </link_1.default>

      {/* Admin Info and Actions */}
      <div className="relative group">
        {/* Admin Info */}
        <div className="flex items-center gap-2 text-white cursor-pointer">
          <fi_1.FiUser size={24}/>
          <span className="hidden sm:inline-block">
            {adminName || "Loading..."}
          </span>
        </div>

        {/* Dropdown Menu */}
        <div className="absolute top-full right-0 bg-gray-700 text-white rounded shadow-lg w-48 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none invisible group-hover:visible transition-all duration-200">
          <button className="w-full text-left px-4 py-2 hover:bg-gray-600 transition">
            <fi_1.FiSettings className="inline mr-2"/>
            Change Password
          </button>
          <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-gray-600 transition flex items-center">
            {loading ? (<ai_1.AiOutlineLoading3Quarters className="mr-2 animate-spin"/>) : (<fi_1.FiLogOut className="mr-2"/>)}
            Logout
          </button>
        </div>
      </div>
    </div>);
};
exports.default = Navbar;
