"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const visitorActions_1 = require("@/app/actions/visitorActions");
const VisitorLogger = () => {
    (0, react_1.useEffect)(() => {
        const logVisit = async () => {
            try {
                const ip = await fetch("https://api.ipify.org?format=json")
                    .then((response) => response.json())
                    .then((data) => data.ip);
                const userAgent = navigator.userAgent;
                await (0, visitorActions_1.logVisitor)(ip, userAgent);
            }
            catch (error) {
                console.error("Error logging visitor:", error);
            }
        };
        logVisit();
    }, []); // Empty dependency array ensures this runs only once on component mount
    return null;
};
exports.default = VisitorLogger;
