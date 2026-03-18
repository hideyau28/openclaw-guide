import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "OpenClaw 繁中教學站";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1A1A1A",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "60px",
          }}
        >
          <div style={{ fontSize: "160px", lineHeight: 1 }}>🦞</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div
              style={{
                fontSize: "56px",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.2,
              }}
            >
              OpenClaw 繁中教學
            </div>
            <div
              style={{
                fontSize: "28px",
                color: "#9CA3AF",
                lineHeight: 1.4,
              }}
            >
              安全設定 · 安裝教學 · 排錯避坑
            </div>
            <div
              style={{
                fontSize: "22px",
                color: "#C53030",
                marginTop: "8px",
              }}
            >
              openclawguidehk.com
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
