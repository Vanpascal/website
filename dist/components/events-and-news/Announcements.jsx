"use strict";
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
const image_1 = __importDefault(require("next/image"));
const announcementActions_1 = require("@/app/actions/announcementActions");
function Announcements() {
    const [announcements, setAnnouncements] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const getAnnouncements = async () => {
            try {
                const data = await (0, announcementActions_1.fetchAnnouncements)();
                const formattedData = data.map((announcement) => ({
                    id: announcement.id,
                    title: announcement.title,
                    date: new Date(announcement.createdAt).toLocaleDateString(),
                    link: announcement.link ? announcement.link : "#",
                }));
                setAnnouncements(formattedData);
            }
            catch (error) {
                console.error("Error fetching announcements:", error);
            }
        };
        getAnnouncements();
    }, []);
    const handleLinkClick = async (id) => {
        try {
            await (0, announcementActions_1.recordView)(id);
        }
        catch (err) {
            console.error("Error recording view:", err);
        }
    };
    return (<div className="bg-white shadow-lg rounded-lg p-5 overflow-hidden">
      <h3 className="text-xl font-semibold text-purple-900 border-b-2 border-blue-800 pb-2 mb-5">
        Announcements
      </h3>
      <ul className="space-y-4">
        {announcements.map((announcement, index) => (<li key={index}>
            <div className="flex items-start">
              <image_1.default src="/images/news.gif" alt="New Update Icon" width={64} height={64} className="mr-3"/>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-gray-800 break-words">
                  {announcement.title}
                </h4>
                <p className="text-xs text-gray-600 mb-1">
                  Posted On: {announcement.date}
                </p>
                <a href={announcement.link} onClick={() => handleLinkClick(announcement.id)} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs underline hover:text-blue-800">
                  Download
                </a>
              </div>
            </div>
          </li>))}
      </ul>
    </div>);
}
exports.default = Announcements;
