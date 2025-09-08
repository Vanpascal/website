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
const link_1 = __importDefault(require("next/link"));
const fi_1 = require("react-icons/fi");
const Sidebar = ({ isOpen, onToggleSidebar }) => {
    const [settingsOpen, setSettingsOpen] = (0, react_1.useState)(false);
    const [projectsOpen, setProjectsOpen] = (0, react_1.useState)(false);
    return (<>
      <aside className={`${isOpen ? "w-64" : "w-0"} lg:w-64 bg-gray-800 mt-16 text-white h-screen fixed top-0 left-0 transition-all duration-300 overflow-hidden z-10`}>
        <div className="h-full flex flex-col overflow-y-auto">
          <nav className="flex-1 px-2 mt-6">
            <ul className="space-y-2">
              <li>
                <link_1.default href="/admin" className="flex items-center gap-4 px-3 py-3 rounded hover:bg-gray-700 transition">
                  <fi_1.FiBarChart2 size={24}/>
                  <span>Dashboard</span>
                </link_1.default>
              </li>
              <li>
                <link_1.default href="/admin/users" className="flex items-center gap-4 px-3 py-3 rounded hover:bg-gray-700 transition">
                  <fi_1.FiUsers size={24}/>
                  <span>Manage Users</span>
                </link_1.default>
              </li>
              <li>
                <link_1.default href="/admin/courses" className="flex items-center gap-4 px-3 py-3 rounded hover:bg-gray-700 transition">
                  <fi_1.FiBook size={24}/>
                  <span>Courses</span>
                </link_1.default>
              </li>

              <li>
                <div onClick={() => {
            setSettingsOpen(!settingsOpen);
            onToggleSidebar(); // Add this line to handle sidebar toggle
        }} className="flex items-center gap-4 px-3 py-3 rounded hover:bg-gray-700 transition cursor-pointer">
                  <fi_1.FiSettings size={24}/>
                  <span>General</span>
                  {settingsOpen ? (<fi_1.FiChevronUp size={20} className="ml-2"/>) : (<fi_1.FiChevronDown size={20} className="ml-2"/>)}
                </div>
                {settingsOpen && (<ul className="space-y-2 pl-8 mt-2">
                    <li>
                      <link_1.default href="/admin/settings/staff" className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 transition">
                        <span>Management & Staff</span>
                      </link_1.default>
                    </li>
                    <li>
                      <link_1.default href="/admin/settings/banners" className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 transition">
                        <span>Banners</span>
                      </link_1.default>
                    </li>
                    <li>
                      <link_1.default href="/admin/settings/comments" className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 transition">
                        <span>Comments</span>
                      </link_1.default>
                    </li>
                    <li>
                      <link_1.default href="/admin/settings/recent-updates" className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 transition">
                        <span>Updates</span>
                      </link_1.default>
                    </li>
                    <li>
                      <link_1.default href="/admin/settings/announcements" className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 transition">
                        <span>Announcements</span>
                      </link_1.default>
                    </li>
                    <li>
                      <link_1.default href="/admin/settings/documents" className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 transition">
                        <span>Documents Center</span>
                      </link_1.default>
                    </li>
                  </ul>)}
              </li>

              <li>
                <div onClick={() => {
            setProjectsOpen(!projectsOpen);
            onToggleSidebar(); // Add this line to handle sidebar toggle
        }} className="flex items-center gap-4 px-3 py-3 rounded hover:bg-gray-700 transition cursor-pointer">
                  <fi_1.FiBriefcase size={24}/>
                  <span>Projects</span>
                  {projectsOpen ? (<fi_1.FiChevronUp size={20} className="ml-2"/>) : (<fi_1.FiChevronDown size={20} className="ml-2"/>)}
                </div>
                {projectsOpen && (<ul className="space-y-2 pl-8 mt-2">
                    <li>
                      <link_1.default href="/admin/projects/ongoing" className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 transition">
                        <span>On-going Projects</span>
                      </link_1.default>
                    </li>
                    <li>
                      <link_1.default href="/admin/projects/completed" className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 transition">
                        <span>Completed Projects</span>
                      </link_1.default>
                    </li>
                  </ul>)}
              </li>

              <li>
                <link_1.default href="/admin/production" className="flex items-center gap-4 px-3 py-3 rounded hover:bg-gray-700 transition">
                  <fi_1.FiBarChart2 size={24}/>
                  <span>Products</span>
                </link_1.default>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>);
};
exports.default = Sidebar;
