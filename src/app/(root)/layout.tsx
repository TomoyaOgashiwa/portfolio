import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import { Toaster } from "react-hot-toast";
import FloatingDotsCanvas from "../components/layout/float-dot-canvas";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        <div className="flex flex-col gap-1">
          <FloatingDotsCanvas />
          <Header />
          <main className="size-full overflow-auto">{children}</main>
          <Footer />
        </div>
        <SpeedInsights />
        <Toaster />
      </body>
    </html>
  );
}
