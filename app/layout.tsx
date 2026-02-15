import type { Metadata } from "next";
import { siteMeta } from "@/data/sections";
import "./globals.css";

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.url,
    type: "website",
    images: [{ url: siteMeta.ogImage }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const htmlClassName = process.env.NODE_ENV === "production" ? "isProd" : undefined;

  return (
    <html lang="ru" className={htmlClassName}>
      <body>{children}</body>
    </html>
  );
}
