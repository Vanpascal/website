"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = robots;
function robots() {
    const baseUrl = "https://donboscoiringa.org";
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/admin", "/api"],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
