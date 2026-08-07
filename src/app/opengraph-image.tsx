import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Koqi — The performance OS for real estate";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "60%",
            height: "80%",
            background:
              "radial-gradient(ellipse, rgba(42,157,143,0.15) 0%, transparent 60%)",
          }}
        />

        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#2A9D8F",
            letterSpacing: "0.04em",
            marginBottom: 48,
          }}
        >
          Koqi
        </div>

        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            color: "white",
            lineHeight: 1.15,
            maxWidth: 750,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>The agents who price it</span>
          <span>right don't guess.</span>
        </div>

        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            color: "rgba(255,255,255,0.3)",
            lineHeight: 1.15,
            marginTop: 8,
          }}
        >
          They know.
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 100,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <span
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.02em",
            }}
          >
            koqi.ai
          </span>
          <span
            style={{
              fontSize: 14,
              color: "rgba(42,157,143,0.6)",
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
            }}
          >
            Free during beta
          </span>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "#2A9D8F",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
