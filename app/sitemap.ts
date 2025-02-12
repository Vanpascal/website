import { fetchRecentUpdate } from "./actions/recentUpdatesActions";

export default async function sitemap() {
  const baseUrl = "https://donboscoiringa.org";

  try {
    const response = await fetchRecentUpdate();

    const updates = response.map((update: any) => ({
      url: `${baseUrl}/events/${update.slug}`,
      lastModified: new Date(update?.createdAt).toISOString(),
      changefreq: "daily",
      priority: 0.9,
    }));

    const staticPages = [
      { url: `${baseUrl}/about`, lastModified: new Date().toISOString() },
      { url: `${baseUrl}/contact`, lastModified: new Date().toISOString() },
      {
        url: `${baseUrl}/long-courses`,
        lastModified: new Date().toISOString(),
      },
      {
        url: `${baseUrl}/short-courses`,
        lastModified: new Date().toISOString(),
      },
      { url: `${baseUrl}/admission`, lastModified: new Date().toISOString() },
    ];

    return [
      { url: baseUrl, lastModified: new Date().toISOString() },
      ...staticPages,
      ...updates,
    ];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return [{ url: baseUrl, lastModified: new Date().toISOString() }];
  }
}
