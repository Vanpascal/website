import PublicationsSection from "./Publications";
import { getAllPublications } from "@/app/actions/publicationActions";

export default async function PublicationsSectionWrapper() {
  console.log("📦 PublicationsSectionWrapper: fetching publications");
  const publications = await getAllPublications();
  console.log("📦 PublicationsSectionWrapper received:", publications);

  return <PublicationsSection initialPublications={publications} />;
}
