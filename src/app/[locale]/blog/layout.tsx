import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Engineering Blog",
  description: "Read the latest insights on SEO, AI Automation, Web Development, and Digital Strategy from the letsgroww engineering team.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
