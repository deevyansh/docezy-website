import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DocEzy",
  description: "Your documents. Instantly found.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}