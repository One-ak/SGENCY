import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About letsgroww | Engineering Digital Dominance",
  description: "Learn about letsgroww's core values, mission, and the expert team behind our premium digital solutions. We build scalable AI architectures and web platforms.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
