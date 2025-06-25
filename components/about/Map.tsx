import React from "react";

function Map() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-purple-900">Visit Us</h2>
            <p className="text-gray-700">
              Don Bosco Youth Training Center, Iringa Community
              <br />
              162 Don Bosco A<br />
              51111 Don Bosco <br />
              IRINGA, TANZANIA
            </p>
            <p className="font-bold text-purple-900">
              Phone: +255 123 456 789
              <br />
              Email: info@donbosco.co.tz
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.213233472322!2d35.673980875893776!3d-7.767198277043452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1854163d0d5618cf%3A0x5926df675f40c187!2sDon%20Bosco%20Youth%20Center!5e0!3m2!1sen!2stz!4v1733119109517!5m2!1sen!2stz"
            width="100%"
            height="300"
            className="rounded-lg"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Map;
