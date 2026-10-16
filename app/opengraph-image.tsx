import { ImageResponse } from "next/og";

export const alt = "Naga Tejasri | Student | Full-Stack & AI/ML";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0F172A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 76,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "#ffffff",
            marginBottom: 20,
          }}
        >
          <span>NAGA TEJASRI</span>
          <span style={{ color: "#3B82F6" }}>.</span>
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: "#94A3B8",
            letterSpacing: "0.04em",
          }}
        >
          Student · Full-Stack & AI/ML
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
