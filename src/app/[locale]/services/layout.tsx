import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Services & Capabilities",
  description: "End-to-end digital services including AI Automation, Custom Web Development, SEO, and Brand Strategy to scale your business.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
