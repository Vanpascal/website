"use client";

import { useEffect } from "react";
import { logVisitor } from "@/app/actions/visitorActions";

const VisitorLogger = () => {
  useEffect(() => {
    const logVisit = async () => {
      try {
        const ip = await fetch("https://api.ipify.org?format=json")
          .then((response) => response.json())
          .then((data) => data.ip);
        const userAgent = navigator.userAgent;
        await logVisitor(ip, userAgent);
      } catch (error) {
        console.error("Error logging visitor:", error);
      }
    };

    logVisit();
  }, []); // Empty dependency array ensures this runs only once on component mount

  return null;
};

export default VisitorLogger;
