import { fetchRecentUpdate } from "./actions/recentUpdatesActions";

export default async function sitemap() {
  const baseUrl = "https://donboscoiringa.org";
  const response = await fetchRecentUpdate();

  const updates = response.map((update: any) => {
    return {
      url: `${baseUrl}/events/${update.slug}`,
      lastModified: update?.createdAt,
      changefreq: "daily",
      priority: 0.9,
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...updates,
  ];
}
