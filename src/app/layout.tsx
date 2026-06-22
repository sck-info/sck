import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sharathkancherla.com"),
  title: "Sharath Chandra Kancherla | Healing, Wisdom & Holistic Wellness",
  description:
    "Explore 1-on-1 sessions and workshops in CranioSacral Therapy, Rakkenho, Music Therapy, Vedic Astrology, and NLP by Sharath Chandra Kancherla.",
  icons: {
    icon: "/favicon.png?v=2",
    apple: "/favicon.png?v=2",
  },
  openGraph: {
    title: "Sharath Chandra Kancherla | Holistic Well-being & Healing",
    description:
      "Transformative sessions in CST, Rakkenho, Music Therapy, Vedic Astrology, and NLP.",
    images: ["/images/profile-hero.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
