
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mohammad-portfolio-nu.vercel.app"),

  title: "Mohammad Telfah | Portfolio",

  description:
    "Personal Portfolio of Mohammad Telfah - Full-Stack Developer.",

  openGraph: {
    title: "Mohammad Telfah | Portfolio",
    description:
      "Explore Mohammad Telfah's portfolio, projects, and development skills.",
    url: "https://mohammad-portfolio-nu.vercel.app",
    siteName: "Mohammad Telfah Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 512,
        height: 512,
        alt: "Mohammad Telfah Personal Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohammad Telfah | Portfolio",
    description:
      "Explore Mohammad Telfah's portfolio, projects, and development skills.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
