import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Portfolio | Case Studies & Results",
  description: "Explore our latest projects and case studies. See how letsgroww drives revenue and builds stunning digital experiences for clients worldwide.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
