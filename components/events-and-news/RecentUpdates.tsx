import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchRecentUpdate } from "@/app/actions/recentUpdatesActions";
import { FaCalendarAlt } from "react-icons/fa";

type Update = {
  id: number;
  title: string;
  date: string;
  img: string;
  eventId: string;
};

function RecentUpdates() {
  const [updates, setUpdates] = useState<Update[]>([]);

  useEffect(() => {
    const getUpdates = async () => {
      try {
        const data = await fetchRecentUpdate();
        const formattedData: Update[] = await Promise.all(
          data.map(async (update) => ({
            id: update.id,
            title: update.title,
            date: new Date(update.createdAt).toLocaleDateString(),
            img: update.photo ? update.photo : "/images/default-image.png",
            eventId: update.id.toString(),
          }))
        );
        setUpdates(formattedData);
      } catch (error) {
        console.error("Error fetching updates:", error);
      }
    };

    getUpdates();
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-5 overflow-hidden">
      <h3 className="text-xl font-semibold text-purple-900 border-b-2 border-blue-800 pb-2 mb-5">
        Recent Updates
      </h3>
      <ul className="space-y-4">
        {updates.map((update, index) => (
          <li
            key={index}
            className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg shadow-md"
          >
            <div className="flex-shrink-0 relative w-16 h-16">
              <Image
                src={update.img}
                alt={update.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-gray-800 break-words">
                <a
                  href={`/events/${update.eventId}`}
                  className="hover:text-purple-600"
                >
                  {update.title}
                </a>
              </h4>
              <p className="text-xs text-gray-600 flex items-center mt-2">
                <FaCalendarAlt className="mr-2" /> Posted On: {update.date}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentUpdates;
