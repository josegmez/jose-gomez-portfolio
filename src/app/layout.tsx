import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "👨‍💻Dev - Jose Gómez",
  description:
    "Programar es mi pasión y disfruto hacerlo tanto en entornos laborales como por hobby, me genera gran curiosidad todo lo relacionado con el desarrollo web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${Inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
