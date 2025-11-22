import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  fetchAnnouncements,
  recordView,
} from "@/app/actions/announcementActions";

type Announcement = {
  id: number;
  title: string;
  date: string;
  link: string;
};

function Announcements() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    const getAnnouncements = async () => {
      try {
        const data = await fetchAnnouncements();
        const formattedData: Announcement[] = data.map((announcement) => ({
          id: announcement.id,
          title: announcement.title,
          date: new Date(announcement.createdAt).toLocaleDateString(),
          link: announcement.link ? announcement.link : "#",
        }));
        setAnnouncements(formattedData);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    getAnnouncements();
  }, []);

  const handleLinkClick = async (id: number) => {
    try {
      await recordView(id);
    } catch (err) {
      console.error("Error recording view:", err);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-5 overflow-hidden">
      <h3 className="text-xl font-semibold text-purple-900 border-b-2 border-blue-800 pb-2 mb-5">
        Announcements
      </h3>
      <ul className="space-y-4">
        {announcements.map((announcement, index) => (
          <li key={index}>
            <div className="flex items-start">
              <Image
                src="/images/news.gif"
                alt="New Update Icon"
                width={64}
                height={64}
                className="mr-3"
              />
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-gray-800 break-words">
                  {announcement.title}
                </h4>
                <p className="text-xs text-gray-600 mb-1">
                  Posted On: {announcement.date}
                </p>
                <a
                  href={announcement.link}
                  onClick={() => handleLinkClick(announcement.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-xs underline hover:text-blue-800"
                >
                  Download
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Announcements;
