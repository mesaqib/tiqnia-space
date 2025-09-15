import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TiqniaSpace - Digital Solutions Company",
  description: "TiqniaSpace is a digital solutions company that helps businesses grow through innovative design and technology. We offer UI Design, Custom Web Design, Web Application Development, and Digital Web Products & Solutions.",
  keywords: "digital solutions, web design, web development, UI design, custom web development, business growth, technology solutions",
  authors: [{ name: "TiqniaSpace" }],
  openGraph: {
    title: "TiqniaSpace - Digital Solutions Company",
    description: "Helping businesses grow through innovative design and technology",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
