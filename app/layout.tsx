import type { Metadata } from "next";
import { Poppins, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { MotionWrapper } from "@/lib/lazy-ui";
import { ViewTransitions } from "@/lib/ViewTransitions";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Padilla Design & Build",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
