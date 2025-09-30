import type { Metadata } from "next";
import { Poppins, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
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
        <meta name="description" content={siteConfig.description} />
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:alt" content="About Acme" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body
        className={`${robotoCondensed.variable} ${poppins.variable} antialiased`}
      >
        <MotionWrapper>
          <ViewTransitions />
          {children}
        </MotionWrapper>
        <Analytics />
      </body>
    </html>
  );
}
