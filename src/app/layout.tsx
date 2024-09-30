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
    "I'm a Full Stack Developer passionate about learning and creating new things. I'm studying Systems Engineering at the Universidad de Antioquia.",
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
