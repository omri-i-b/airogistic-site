import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-src",
  subsets: ["latin"],
});

const calSans = localFont({
  src: "../../public/cal-sans.woff2",
  variable: "--font-display-src",
  weight: "400 700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Airogistic",
  description:
    "Fleet, parameter, and test management for teams flying unmanned vehicles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${calSans.variable} h-full antialiased`}
    >
      <body className="h-full bg-black font-sans text-white/90">
        {children}
      </body>
    </html>
  );
}
