import React from "react";
import Image from "next/image";

function OurSponsors() {
  const sponsors = [
    {
      name: "Polish Aid",
      logo: "/images/sponsors/polish.jpeg",
      link: "https://www.gov.pl/web/polishaid",
    },
    {
      name: "Charles Stewart MOTT Foundation",
      logo: "/images/sponsors/charles.png",
      link: "https://www.mott.org/",
    },
    {
      name: "Don Bosco",
      logo: "/images/sponsors/don-bosco.png",
      link: "http://donboscointernational.eu/",
    },
    {
      name: "Via Don Bosco",
      logo: "/images/sponsors/via.jpg",
      link: "https://www.viadonbosco.org/en/",
    },
    {
      name: "Swiss Contacts",
      logo: "/images/sponsors/swisscontact.png",
      link: "https://www.swisscontact.org/en",
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-start text-purple-900 mb-8">
        Our Development Partners
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-24 h-24 mb-4">
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              {sponsor.name}
            </h3>
            <a
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-900 mt-3 text-sm underline hover:text-blue-800"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurSponsors;
