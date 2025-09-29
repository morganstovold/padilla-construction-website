import type { Metadata } from "next";
import { Poppins, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData";
import { siteConfig } from "@/config/site";
import { MotionWrapper } from "@/lib/lazy-ui";
import { generateMetadata as generateSEO } from "@/lib/seo";
import { generateLocalBusinessSchema } from "@/lib/structured-data";
import { ViewTransitions } from "@/lib/ViewTransitions";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...generateSEO(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema = generateLocalBusinessSchema();

  return (
    <html lang="en">
      <head>
        <StructuredData data={businessSchema} />
      </head>
      <body
        className={`${robotoCondensed.variable} ${poppins.variable} antialiased`}
      >
        <MotionWrapper>
          <ViewTransitions />
          {children}
        </MotionWrapper>
      </body>
    </html>
  );
}
