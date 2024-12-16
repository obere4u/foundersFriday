import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "@/lib/font";
import Header from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import { generateMetadata } from "@/lib/Metadata";

export const metadata = generateMetadata({
  title: "Home",
  description:
    "A platform fostering collaboration among founders, innovators, and tech enthusiasts in Abuja's vibrant startup ecosystem.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className}  min-h-screen flex flex-col bg-[#FDF7FF] antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
