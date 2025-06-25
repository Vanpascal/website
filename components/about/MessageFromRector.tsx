"use client";
import { useState } from "react";
import Image from "next/image";

function MessageFromRector() {
  const [showFullMessage, setShowFullMessage] = useState(false);

  const toggleMessage = () => {
    setShowFullMessage(!showFullMessage);
  };

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Column - Rector's Image, Name, and Message */}
          <div className="flex-1 space-y-5">
            <div className="flex items-center space-x-4">
              <div className="relative w-32 h-32">
                <Image
                  src="/images/rector.jpg"
                  alt="Rector"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-full shadow-lg"
                />
              </div>
              <div>
                <p className="font-semibold text-purple-900">
                  Message From Rector
                </p>
                <h2 className="text-xl font-semibold text-purple-900 mt-2">
                  Fr. Josephat Utouh SDB
                </h2>
              </div>
            </div>

            {/* Justified Paragraph */}
            <p className="text-gray-700 text-justify">
              I’m pleased to introduce you to the Don Bosco Youth Training
              Center (DBYTC) Iringa. Choosing the right training center is a
              major decision, and it’s important to choose one that aligns with
              your aspirations. Our website provides a glimpse of what it is
              like to be a student at DBYTC Iringa through the perspectives of
              our past and present students and staff. However, a website can
              only convey so much, and the best way to truly experience the
              spirit of DBYTC is to visit us and see for yourself.
              <br />
              Our center is located in the heart of Iringa City, a vibrant
              community with a population of over 150,000 residents. Iringa is
              known for its beautiful landscapes, including the Ruaha National
              Park, the Udzungwa Mountains, and the Kalenga Historical Site. The
              city thrives on agriculture, tourism, and small-scale industries,
              and its friendly people are known for their hospitality and
              community values. This makes Iringa an ideal place for education,
              training, and personal development.
              <br />
              <br />
              At DBYTC Iringa, we are committed to providing a hands-on,
              competence-based learning approach that equips our students with
              the skills and knowledge they need to succeed. Our staff is
              student-centered, career-focused, and dedicated to your success.
              As you explore our website, you will find comprehensive
              information about the professional courses we offer, including
              Printing, Masonry, Carpentry, Computer Studies, Solar Energy,
              Tailoring, Electrical Installation, Motor Vehicle Mechanics, and
              Welding and Fabrication.
            </p>

            {showFullMessage && (
              <p className="text-gray-700 text-justify">
                <br />
                The center is registered by the Vocational Education and
                Training Authority (VETA) and provides training that leads to
                VETA Level III certification. These programs are designed to
                ensure that our graduates are ready to enter the workforce,
                whether as skilled employees, self-employed individuals, or
                future employers.
                <br />
                DBYTC Iringa has a long-standing tradition of fostering youth
                development, not only through technical education but also by
                instilling life skills and values that support holistic growth.
                Over the years, we have expanded our programs to meet the needs
                of the community and to support the socio-economic development
                of the region and beyond.
                <br />
                Our Student Services team is here to support you throughout your
                journey with us. We aim to ensure that you not only gain the
                technical knowledge and skills required for your career but also
                enjoy the vibrant community life at DBYTC Iringa. Our graduates
                are known for making meaningful contributions in their
                communities, and we look forward to helping you achieve the same
                as you pursue your goals with us.
                <br />
                Welcome to DBYTC Iringa, where education, values, and community
                come together to create a brighter future.
              </p>
            )}
            {!showFullMessage && (
              <button
                className="mt-4 text-purple-900 font-semibold hover:text-purple-700"
                onClick={toggleMessage}
              >
                Read More
              </button>
            )}
            {showFullMessage && (
              <button
                className="mt-4 text-purple-900 font-semibold hover:text-purple-700"
                onClick={toggleMessage}
              >
                Read Less
              </button>
            )}
          </div>

          {/* Right Column - Video */}
          <div className="flex-1 flex flex-col items-stretch lg:pt-20 space-y-4">
            {/* Video Container */}
            <div className="relative overflow-hidden rounded-lg shadow-lg border-2 border-gray-300 w-full h-[32rem]">
              <iframe
                className="w-full h-full object-cover"
                src="https://www.youtube.com/embed/bObZXd9dGgE"
                title="MAISHA YA BRO PASCAL DON BOSCO IRINGA | THANK YOU."
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default MessageFromRector;
