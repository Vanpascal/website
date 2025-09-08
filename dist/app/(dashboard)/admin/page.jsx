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
const fi_1 = require("react-icons/fi");
const visitorActions_1 = require("@/app/actions/visitorActions");
const announcementActions_1 = require("@/app/actions/announcementActions");
const documentActions_1 = require("@/app/actions/documentActions");
const Table_1 = __importDefault(require("@/app/(dashboard)/admin/components/Table"));
const Dashboard = () => {
    const [yearlyVisitors, setYearlyVisitors] = (0, react_1.useState)(0);
    const [monthlyVisitors, setMonthlyVisitors] = (0, react_1.useState)(0);
    const [documents, setDocuments] = (0, react_1.useState)([]);
    const [announcements, setAnnouncements] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const fetchVisitorData = async () => {
            try {
                const yearlyVisitorsCount = await (0, visitorActions_1.getYearlyVisitors)();
                const monthlyVisitorsCount = await (0, visitorActions_1.getMonthlyVisitors)();
                const documentsData = await (0, documentActions_1.fetchDocuments)();
                const announcementsData = (await (0, announcementActions_1.fetchAnnouncements)()).map((announcement) => {
                    var _a;
                    return (Object.assign(Object.assign({}, announcement), { link: (_a = announcement.link) !== null && _a !== void 0 ? _a : "" }));
                });
                setYearlyVisitors(yearlyVisitorsCount);
                setMonthlyVisitors(monthlyVisitorsCount);
                setDocuments(documentsData);
                setAnnouncements(announcementsData);
            }
            catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchVisitorData();
    }, []);
    return (<div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        {/* Visitors - Yearly & Monthly */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <fi_1.FiUsers className="text-4xl text-blue-500 mr-4"/>
            <div>
              <p className="text-lg font-semibold">Visitors</p>
              <p className="text-2xl font-bold">
                {yearlyVisitors}{" "}
                <span className="text-sm text-gray-500">This year</span>
              </p>
              <p className="text-xl">
                {monthlyVisitors}{" "}
                <span className="text-sm text-gray-500">This month</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Tables for Documents and Announcements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Documents</h2>
          <Table_1.default data={documents} columns={[
            { header: "Title", key: "title" },
            { header: "Views", key: "views" },
            { header: "Created At", key: "createdAt" },
        ]}/>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Announcements</h2>
          <Table_1.default data={announcements} columns={[
            { header: "Title", key: "title" },
            { header: "Views", key: "views" },
            { header: "Created At", key: "createdAt" },
        ]}/>
        </div>
      </div>
    </div>);
};
exports.default = Dashboard;
