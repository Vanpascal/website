export default async function sitemap() {
  const baseUrl = "https://donboscoiringa.org";

  try {
    const staticPages = [
      { url: `${baseUrl}/contact`, lastModified: new Date().toISOString() },
      { url: `${baseUrl}/programs/long-courses`, lastModified: new Date().toISOString() },
      { url: `${baseUrl}/programs/short-courses`, lastModified: new Date().toISOString() },
      { url: `${baseUrl}/admission`, lastModified: new Date().toISOString() },
    ];

    return [
      // Added homepage to the sitemap
      { url: baseUrl, lastModified: new Date().toISOString(), priority: 1.0, changefreq: "daily" },
      ...staticPages,
    ];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return [{ url: baseUrl, lastModified: new Date().toISOString() }];
  }
}
