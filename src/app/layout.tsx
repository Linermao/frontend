import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Providers } from "./providers";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Linermao's kiosk",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className="dark">
      <body className={`antialiased`}>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            {children}
            <Sidebar />
            <Footer />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
