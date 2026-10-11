import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: "#050505",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
          fontWeight: 900,
          borderRadius: 6,
          border: "1px solid #3B82F6",
          fontFamily: "sans-serif",
        }}
      >
        NT<span style={{ color: "#3B82F6" }}>.</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
