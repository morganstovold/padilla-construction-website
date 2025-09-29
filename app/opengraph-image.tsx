import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = siteConfig.name;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: siteConfig.branding.backgroundColor,
        backgroundImage: `linear-gradient(135deg, ${siteConfig.branding.backgroundColor} 0%, #2a2a2a 100%)`,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: 600,
            color: siteConfig.branding.primaryColor,
            marginBottom: 20,
            fontFamily: "system-ui, sans-serif",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          Padilla
        </div>
        <div
          style={{
            fontSize: 48,
            color: "white",
            marginBottom: 40,
            fontFamily: "system-ui, sans-serif",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Design & Build
        </div>
        <div
          style={{
            fontSize: 32,
            color: "rgba(255, 255, 255, 0.8)",
            textAlign: "center",
            maxWidth: "800px",
            fontFamily: "system-ui, sans-serif",
            lineHeight: 1.4,
          }}
        >
          Expert Home Remodeling in Alamo, CA
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 24,
            color: siteConfig.branding.primaryColor,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Over 20 Years of Experience
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
