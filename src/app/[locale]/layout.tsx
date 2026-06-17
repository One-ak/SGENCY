import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"]
});

import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: {
      template: '%s | SGENCY',
      default: t('title'),
    },
    description: t('description'),
    keywords: t('keywords').split(','),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://sgency.com',
      siteName: 'SGENCY Premium Digital Agency',
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/images/og-image.jpg'],
    },
    alternates: {
      canonical: `https://sgency.com/${locale}`,
      languages: {
        'en': 'https://sgency.com/en',
        'hi': 'https://sgency.com/hi',
      },
    },
  };
}

import { CustomCursor } from "@/components/custom-cursor";
import { AiWidget } from "@/components/ai-widget";

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  
  // Set locale for the request so getMessages knows what to fetch
  const { setRequestLocale } = await import('next-intl/server');
  setRequestLocale(locale);

  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} min-h-full flex flex-col bg-noise-texture font-sans cursor-default`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <CustomCursor />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <AiWidget />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
