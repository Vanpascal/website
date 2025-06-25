"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";
import { fetchRecentUpdate } from "@/app/actions/recentUpdatesActions";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/legacy/image";
import Head from "next/head";

type Update = {
  id: number;
  title: string;
  date: string;
  img: string;
  content: string;
};

type UpdateDetailsProps = {
  params: Promise<{ eventId: string }>;
};

const UpdateDetails: React.FC<UpdateDetailsProps> = ({ params }) => {
  const [update, setUpdate] = useState<Update | null>(null);
  const [otherUpdates, setOtherUpdates] = useState<Update[]>([]);
  const [eventId, setEventId] = useState<string | null>(null);

  useEffect(() => {
    const unwrapParams = async () => {
      const unwrappedParams = await params;
      setEventId(unwrappedParams.eventId);
    };

    unwrapParams();
  }, [params]);

  useEffect(() => {
    if (!eventId) return;

    const getUpdateDetails = async () => {
      try {
        const data = await fetchRecentUpdate();
        const updateData = data.find(
          (update) => update.id === parseInt(eventId)
        );
        if (updateData) {
          const formattedData: Update = {
            id: updateData.id,
            title: updateData.title,
            date: new Date(updateData.createdAt).toLocaleDateString(),
            img: updateData.photo
              ? updateData.photo
              : "/images/default-image.png",
            content: updateData.content ?? "No content available",
          };
          setUpdate(formattedData);
        }
        const formattedOtherUpdates = data
          .filter((update) => update.id !== parseInt(eventId))
          .map((update) => ({
            id: update.id,
            title: update.title,
            date: new Date(update.createdAt).toLocaleDateString(),
            img: update.photo ? update.photo : "/images/default-image.png",
            content: update.content ?? "No content available",
          }));
        setOtherUpdates(formattedOtherUpdates);
      } catch (error) {
        console.error("Error fetching update details:", error);
      }
    };

    getUpdateDetails();
  }, [eventId]);

  if (!update) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-lg text-gray-700">Loading update details...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{update.title} | DBYTC Updates</title>
        <meta name="description" content={update.content.slice(0, 150)} />
        <meta property="og:title" content={update.title} />
        <meta
          property="og:description"
          content={update.content.slice(0, 150)}
        />
        <meta property="og:image" content={update.img} />
        <meta
          property="og:url"
          content={`https://donboscoiringa.org/events/${update.id}`}
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={update.title} />
        <meta
          name="twitter:description"
          content={update.content.slice(0, 150)}
        />
        <meta name="twitter:image" content={update.img} />
      </Head>

      <Header />
      <div className="container mx-auto min-h-screen flex flex-col pt-14 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 shadow-lg rounded-lg p-6 md:p-10">
            {/* Image Section */}
            <div className="w-full mb-6 md:mb-10">
              <div className="relative overflow-hidden rounded-lg shadow-lg h-96 md:h-[600px]">
                <Image
                  src={update.img}
                  alt={update.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-purple-900 mb-4 text-center">
                {update.title}
              </h1>
              <p className="text-sm text-gray-600 flex items-center justify-center mb-6">
                <FaCalendarAlt className="mr-2 text-purple-600" />
                Posted On: {update.date}
              </p>
              <div className="text-gray-800 leading-relaxed text-justify whitespace-pre-wrap">
                {update.content}
              </div>
            </div>
          </div>

          {/* Other Updates Section */}
          <div className="lg:w-1/4 pt-8">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">
              Other Updates
            </h2>
            <ul className="space-y-4">
              {otherUpdates.map((update) => (
                <li key={update.id} className="border-b pb-4">
                  <Link href={`/events/${update.id}`} legacyBehavior>
                    <a className="text-lg text-blue-600 hover:text-blue-800">
                      {update.title}
                    </a>
                  </Link>
                  <p className="text-sm text-gray-600 flex items-center">
                    <FaCalendarAlt className="mr-2 text-purple-600" />
                    Posted On: {update.date}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UpdateDetails;
