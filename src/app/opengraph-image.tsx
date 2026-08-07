import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Koqi — The performance OS for real estate";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const SITE = "https://koqi.ai";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0A",
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Accent glow behind phones */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "5%",
            width: "55%",
            height: "120%",
            background:
              "radial-gradient(ellipse, rgba(42,157,143,0.2) 0%, transparent 55%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-30%",
            left: "30%",
            width: "40%",
            height: "60%",
            background:
              "radial-gradient(ellipse, rgba(42,157,143,0.08) 0%, transparent 60%)",
          }}
        />

        {/* Left - Logo + tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 80,
            width: 420,
            flexShrink: 0,
          }}
        >
          <svg viewBox="0 0 1080 1080" width="150" height="150">
            <g fill="#2A9D8F">
              <path d="M265.3,86.13s-13.63-1.43-13.63,13.15v343.59l168.81-171.92V97.13s.92-10.18-10.18-10.18-145-.82-145-.82Z" />
              <path d="M613.23,91.73s3.74-5.61,8.73-5.82,180.77,0,180.77,0c0,0,6.86-1.45,6.65,5.82-.21,7.27-238.82,242.87-238.82,242.87,0,0-11.17,10.24,0,21.42,11.17,11.17,241.31,246.34,241.31,246.34,0,0,6.11,5.12,6.11,9.17s.22,7.35-5.95,7.35h-165.42l-173.04-176s-7.83-8.46-16.29,0-172.26,176-172.26,176h-24.9s-9.22,1.7-9.22-9.22v-144.83L613.23,91.73Z" />
            </g>
            <g fill="#2A9D8F">
              <path d="M205.09,667.02h39.19v152.45l69.39-80.18h44.58l-75.14,84.85,80.18,102.83h-46.38l-72.63-98.51v98.51h-39.19v-259.95Z" />
              <path d="M470.79,734.61c57.89,0,99.59,42.07,99.59,98.51s-42.43,98.51-99.59,98.51-99.23-41.35-99.23-98.16,42.79-98.87,99.23-98.87ZM470.79,896.77c34.88,0,60.4-26.97,60.4-63.64s-25.53-63.64-60.4-63.64-59.68,27.33-59.68,64,24.81,63.28,59.68,63.28Z" />
              <path d="M780.36,994.2h-38.83v-92.04c-5.03,7.91-25.17,29.48-60.76,29.48-53.57,0-89.17-40.63-89.17-98.87s37.75-98.16,91.68-98.16c36.31,0,55.37,22.65,60.04,29.48v-24.81h37.03v254.92ZM686.88,769.49c-32,0-56.09,24.81-56.09,63.28s23.37,64,55.73,64,56.09-23.37,56.09-64c0-34.52-20.85-63.28-55.73-63.28Z" />
              <path d="M844,668.46c13.66,0,24.45,10.79,24.45,24.45s-10.79,24.45-24.45,24.45-24.45-10.79-24.45-24.45,10.79-24.45,24.45-24.45ZM824.58,739.29h39.19v187.68h-39.19v-187.68Z" />
            </g>
          </svg>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 20,
            }}
          >
            <span
              style={{
                fontSize: 24,
                fontWeight: 500,
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "-0.01em",
              }}
            >
              Performance intelligence
            </span>
            <span
              style={{
                fontSize: 24,
                fontWeight: 500,
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "-0.01em",
              }}
            >
              for real estate
            </span>
          </div>
        </div>

        {/* Right - Phone mockups */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            position: "relative",
          }}
        >
          {/* Phone 1 - CMA Report, back left */}
          <div
            style={{
              position: "absolute",
              left: 120,
              top: 95,
              display: "flex",
              width: 160,
              height: 346,
              borderRadius: 26,
              background: "#1A1A1A",
              padding: 3,
              transform: "rotate(-6deg)",
              boxShadow:
                "0 25px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 154,
                height: 340,
                borderRadius: 23,
                overflow: "hidden",
              }}
            >
              <img
                src={`${SITE}/media/screen-cma-report.png`}
                width={154}
                height={340}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Phone 2 - Dashboard, center front */}
          <div
            style={{
              position: "absolute",
              left: 245,
              top: 45,
              display: "flex",
              width: 190,
              height: 412,
              borderRadius: 30,
              background: "#1A1A1A",
              padding: 3,
              boxShadow:
                "0 35px 80px rgba(0,0,0,0.8), 0 0 60px rgba(42,157,143,0.08), 0 0 0 1px rgba(255,255,255,0.08)",
              zIndex: 2,
            }}
          >
            <div
              style={{
                display: "flex",
                width: 184,
                height: 406,
                borderRadius: 27,
                overflow: "hidden",
              }}
            >
              <img
                src={`${SITE}/media/mobile-dashboard.png`}
                width={184}
                height={406}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Phone 3 - Koqi AI, back right */}
          <div
            style={{
              position: "absolute",
              left: 400,
              top: 95,
              display: "flex",
              width: 160,
              height: 346,
              borderRadius: 26,
              background: "#1A1A1A",
              padding: 3,
              transform: "rotate(6deg)",
              boxShadow:
                "0 25px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 154,
                height: 340,
                borderRadius: 23,
                overflow: "hidden",
              }}
            >
              <img
                src={`${SITE}/media/mobile-ai.png`}
                width={154}
                height={340}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Bottom accent gradient bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background:
              "linear-gradient(90deg, transparent 10%, #2A9D8F 50%, transparent 90%)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
