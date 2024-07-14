import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/general/header/header";
import Footer from "@/components/general/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Apple Clone",
    template: `%s | Apple Clone`,
  },
  openGraph: {
    description:
      "A high-fidelity clone of the Apple.com website, built with Next.js and modern web technologies.",
    images: [],
  },
  keywords: [
    "Apple",
    "Apple Clone",
    "Next.js",
    "React",
    "Web Development",
    "Frontend",
    "Modern Web",
    "Responsive Design",
    "Apple Website",
  ],
  metadataBase: new URL("https://apple-clone-ecru-five.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
