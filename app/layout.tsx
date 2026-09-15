import type { Metadata } from "next";
import { Caveat, Quicksand } from "next/font/google";
import "./globals.css";
import { birthdayData } from "@/lib/data";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  title: `Happy Birthday, ${birthdayData.girlfriendName} ♡`,
  description: `A little birthday scrapbook, made just for ${birthdayData.girlfriendName}.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${caveat.variable} ${quicksand.variable} font-body bg-cream text-plum antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
