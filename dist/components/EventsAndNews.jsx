"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const RecentUpdates_1 = __importDefault(require("./events-and-news/RecentUpdates"));
const Announcements_1 = __importDefault(require("./events-and-news/Announcements"));
const DocumentCenter_1 = __importDefault(require("./events-and-news/DocumentCenter"));
function EventsAndNews() {
    return (<div className="container mx-auto py-10 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <RecentUpdates_1.default />
      <Announcements_1.default />
      <DocumentCenter_1.default />
    </div>);
}
exports.default = EventsAndNews;
