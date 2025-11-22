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
const recentUpdatesActions_1 = require("@/app/actions/recentUpdatesActions");
const fa_1 = require("react-icons/fa");
function RecentUpdates() {
    const [updates, setUpdates] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const getUpdates = async () => {
            try {
                const data = await (0, recentUpdatesActions_1.fetchRecentUpdate)();
                const formattedData = await Promise.all(data.map(async (update) => ({
                    id: update.id,
                    title: update.title,
                    date: new Date(update.createdAt).toLocaleDateString(),
                    img: update.photo ? update.photo : "/images/default-image.png",
                    eventId: update.id.toString(),
                })));
                setUpdates(formattedData);
            }
            catch (error) {
                console.error("Error fetching updates:", error);
            }
        };
        getUpdates();
    }, []);
    return (<div className="bg-white shadow-lg rounded-lg p-5 overflow-hidden">
      <h3 className="text-xl font-semibold text-purple-900 border-b-2 border-blue-800 pb-2 mb-5">
        Recent Updates
      </h3>
      <ul className="space-y-4">
        {updates.map((update, index) => (<li key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg shadow-md">
            <div className="flex-shrink-0 relative w-16 h-16">
              <image_1.default src={update.img} alt={update.title} fill style={{ objectFit: "cover" }} className="rounded-lg shadow-lg"/>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-gray-800 break-words">
                <a href={`/events/${update.eventId}`} className="hover:text-purple-600">
                  {update.title}
                </a>
              </h4>
              <p className="text-xs text-gray-600 flex items-center mt-2">
                <fa_1.FaCalendarAlt className="mr-2"/> Posted On: {update.date}
              </p>
            </div>
          </li>))}
      </ul>
    </div>);
}
exports.default = RecentUpdates;
