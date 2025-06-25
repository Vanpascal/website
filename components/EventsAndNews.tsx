import React from "react";
import RecentUpdates from "./events-and-news/RecentUpdates";
import Announcements from "./events-and-news/Announcements";
import DocumentCenter from "./events-and-news/DocumentCenter";

function EventsAndNews() {
  return (
    <div className="container mx-auto py-10 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <RecentUpdates />
      <Announcements />
      <DocumentCenter />
    </div>
  );
}

export default EventsAndNews;
