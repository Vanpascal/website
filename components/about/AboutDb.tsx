import React from "react";

import Testimonials from "./Testimonials";

function AboutDb() {
  return (
    <div>
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Left Column - About Don Bosco Iringa */}
            <div className="flex-1 space-y-5">
              <h2 className="text-xl font-semibold text-purple-900">
                About Don Bosco Iringa
              </h2>
              <p className="text-gray-700  text-justify">
                Don Bosco Youth Training Center, Iringa Community, runs the
                Technical College and daily Youth Center. VTC Iringa is located
                in the city’s deprived suburbs. The center, which opened in
                1981, also serves as a home for young people aspiring to become
                Salesians. In the Youth Centers, various activities are
                conducted to ensure the physical, psychological, and emotional
                well-being of young people.
                <br />
                <br />
                In the Technical College, the Salesians impart social values to
                students, preparing them for life. The center offers courses in
                Printing, Masonry, Carpentry, Computer, Solar Energy, Tailoring,
                Electrical, Motor Vehicle Mechanics, Welding, and Fabrication.
                Courses range from 6 months to 2-3 years and lead to a
                recognized VETA Level III certification. The community strives
                to provide all students access to excellence and opportunities
                for better livelihoods.
              </p>
            </div>

            {/* Right Column - Vision and Mission */}
            <div className="flex-1 space-y-5">
              <h2 className="text-xl font-semibold text-purple-900">
                Our Vision
              </h2>
              <p className="text-gray-700  text-justify">
              To equip the poor and marginalized boys and girls with marketable skills and empower them with Habit, Values and Character which will make them successful men and women of the Nation.
              </p>

              <h2 className="text-xl font-semibold text-purple-900">
                Our Mission
              </h2>
              <p className="text-gray-700  text-justify">
              We at Don Bosco Youth Training Centre believe that we are called to share our lives, to empower young people through offering a family atmosphere which fosters mutual understanding and growth depending on their faith and offering opportunities for wholesome recreation and talent-building, inculcating life skills thus enriching their lives and the lives of others.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials and Support Our Vision Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Column - Testimonials */}
            <div className="flex flex-col space-y-5">
              <Testimonials />
            </div>

            {/* Right Column - Support Our Vision */}
            <div className="flex flex-col space-y-10 bg-white p-8 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold text-purple-900 text-center">
                Support Our Vision
              </h2>

              <p className="mt-6 text-center  text-gray-700">
                Your support will help us extend our reach and offer more
                opportunities to marginalized youth, giving them a brighter
                future through education and training.
              </p>
              <button
                onClick={() => (window.location.href = "/donate")}
                className="mt-6 bg-purple-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-800"
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutDb;
