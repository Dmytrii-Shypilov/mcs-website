import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";

import Header from "@/components/Header/Header";
import ExpandableHeader from "@/components/ExpandableHeader/ExpandableHeader";
import Footer from "@/components/Footer/Footer";
import ScrollUpButton from "@/components/ui/ScrollUpButton/ScrollUpButton";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MCS Consultants",
  description: "You business consultants",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon"  href="/images/favicon.ico"  />
        <link rel="preload" href="/images/walking-persons.webp" as="image"/>
      </head>
      <body className={roboto.className}>
        <div id="modal-root"></div>
        {/* <Header /> */}
        <ExpandableHeader/>
        {children}
        <Footer />
        <ScrollUpButton />
      </body>
    </html>
  );
}
