import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 24,
        background: siteConfig.branding.backgroundColor,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: siteConfig.branding.primaryColor,
        fontWeight: 600,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      P
    </div>,
    {
      ...size,
    },
  );
}
