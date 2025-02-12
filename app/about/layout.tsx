import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About DBYTC - Iringa",
  description:
    "Learn about Don Bosco Youth Training Center-Iringa and its mission to empower young people through technical and vocational education.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
