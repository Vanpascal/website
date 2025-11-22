"use client";

import React from "react";
import Testimonials from "./Testimonials";

function AboutDb() {
  return (
    <div className="bg-white">
      {/* About Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Column - About */}
            <div className="space-y-6">
              <h2 className="text-2xl text-justify font-extrabold text-purple-900 tracking-wide">
                About Don Bosco Iringa
              </h2>
              <p className="text-gray-700 leading-loose text-justify">
                Don Bosco Youth Training Center, Iringa Community, runs the
                Technical College and daily Youth Center. VTC Iringa is located
                in the city’s deprived suburbs. The center, which opened in
                1981, also serves as a home for young people aspiring to become
                Salesians. In the Youth Centers, various activities are
                conducted to ensure the physical, psychological, and emotional
                well-being of young people.
              </p>
              <p className="text-gray-700 leading-loose text-justify">
                In the Technical College, the Salesians impart social values to
                students, preparing them for life. The center offers courses in
                Printing, Masonry, Carpentry, Computer, Solar Energy, Tailoring,
                Electrical, Motor Vehicle Mechanics, Welding, and Fabrication.
                Courses range from 6 months to 2-3 years and lead to a
                recognized NACTVET Level III certification. The community
                strives to provide all students access to excellence and
                opportunities for better livelihoods.
              </p>
            </div>

            {/* Right Column - Vision and Mission */}
            <div className="flex flex-col space-y-10">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold text-purple-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  To equip the poor and marginalized boys and girls with
                  marketable skills and empower them with Habit, Values and
                  Character which will make them successful men and women of the
                  Nation.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold text-purple-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  We at Don Bosco Youth Training Centre believe that we are
                  called to share our lives, to empower young people through
                  offering a family atmosphere which fosters mutual
                  understanding and growth depending on their faith and offering
                  opportunities for wholesome recreation and talent-building,
                  inculcating life skills thus enriching their lives and the
                  lives of others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Support Section */}
      <section className="py-24 bg-gradient-to-r from-purple-50 via-gray-100 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 items-stretch">
            {/* Left Column - Testimonials */}
            <div className="md:col-span-2 flex flex-col justify-center">
              <Testimonials />
            </div>

            {/* Right Column - Support */}
            <div className="relative flex flex-col justify-center items-center text-center bg-white p-10 rounded-2xl shadow-lg border border-purple-100 space-y-6">
              {/* Decorative Accent */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-purple-100 rounded-br-full opacity-30 pointer-events-none" />

              <h2 className="text-3xl font-bold text-purple-900 tracking-wide">
                Support Our Vision
              </h2>

              <p className="text-gray-700  leading-relaxed max-w-md mx-auto">
                Every contribution you make helps us{" "}
                <span className="font-semibold text-purple-800">
                  empower marginalized youth
                </span>{" "}
                with skills, values, and opportunities for a brighter future.
              </p>

              <button
                onClick={() => (window.location.href = "/donate")}
                className="px-8 py-3 bg-gradient-to-r from-purple-900 to-purple-700 text-white font-semibold rounded-full shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300 flex items-center gap-2"
              >
                Donate Now <span>❤️</span>
              </button>

              <p className="text-sm text-gray-500">
                100% of your donation goes directly to supporting education and
                training for young people.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutDb;
