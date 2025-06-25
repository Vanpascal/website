"use client";
import React, { useState, useEffect } from "react";
import { FiUsers } from "react-icons/fi";
import {
  getYearlyVisitors,
  getMonthlyVisitors,
} from "@/app/actions/visitorActions";
import { fetchAnnouncements } from "@/app/actions/announcementActions";
import { fetchDocuments } from "@/app/actions/documentActions";
import Table from "@/app/(dashboard)/admin/components/Table";

interface Document {
  id: number;
  title: string;
  link: string;
  views: number;
  createdAt: Date;
  [key: string]: string | number | Date;
}

interface Announcement {
  id: number;
  title: string;
  link: string;
  views: number;
  createdAt: Date;
  [key: string]: string | number | Date;
}

const Dashboard = () => {
  const [yearlyVisitors, setYearlyVisitors] = useState(0);
  const [monthlyVisitors, setMonthlyVisitors] = useState(0);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    const fetchVisitorData = async () => {
      try {
        const yearlyVisitorsCount = await getYearlyVisitors();
        const monthlyVisitorsCount = await getMonthlyVisitors();
        const documentsData: Document[] = await fetchDocuments();
        const announcementsData: Announcement[] = (
          await fetchAnnouncements()
        ).map((announcement) => ({
          ...announcement,
          link: announcement.link ?? "",
        }));

        setYearlyVisitors(yearlyVisitorsCount);
        setMonthlyVisitors(monthlyVisitorsCount);
        setDocuments(documentsData);
        setAnnouncements(announcementsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchVisitorData();
  }, []);

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        {/* Visitors - Yearly & Monthly */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <FiUsers className="text-4xl text-blue-500 mr-4" />
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
          <Table
            data={documents}
            columns={[
              { header: "Title", key: "title" },
              { header: "Views", key: "views" },
              { header: "Created At", key: "createdAt" },
            ]}
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Announcements</h2>
          <Table
            data={announcements}
            columns={[
              { header: "Title", key: "title" },
              { header: "Views", key: "views" },
              { header: "Created At", key: "createdAt" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
