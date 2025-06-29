import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "berserkarch.xyz",
    template: "%s | berserkarch.xyz",
  },
  description: "Berserk Arch is a bleeding-edge, security-centric Arch-based Linux distribution crafted for hackers, developers, and nerds alike.",
  openGraph: {
    title: "berserkarch.xyz",
    description:
      "Berserk Arch is a bleeding-edge, security-centric Arch-based Linux distribution crafted for hackers, developers, and nerds alike.",
    url: "https://berserkarch.xyz",
    siteName: "berserkarch.xyz",
    images: [
      {
        url: "https://berserkarch.xyz/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "thehackersbrain",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.svg",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
