import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Start Your Project",
  description: "Get in touch with letsgroww. Let's build something extraordinary together. Inquire about web development, AI automation, or digital marketing.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
