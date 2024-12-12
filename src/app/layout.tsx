import type { Metadata } from "next";

import "./globals.css";


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Camp Travel",
  description: "Travel UI/UX App for Camping",
  icons:{
    icon:'/camp.svg'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
         <main className="relative overflow-hidden">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
