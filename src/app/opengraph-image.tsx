import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1d4ed8 58%, #22c55e 100%)",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: 999,
              backgroundColor: "#22c55e",
              boxShadow: "0 0 0 10px rgba(34, 197, 94, 0.18)",
            }}
          />
          Tamilselvan
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: 86,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.05em",
              maxWidth: "900px",
            }}
          >
            Full-Stack Engineer
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.35,
              color: "rgba(248, 250, 252, 0.9)",
              maxWidth: "960px",
            }}
          >
            Building scalable backend systems, cloud-ready platforms, and
            reliable digital products.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "18px",
            fontSize: 24,
            color: "rgba(248, 250, 252, 0.92)",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "14px 22px",
              borderRadius: 999,
              backgroundColor: "rgba(248, 250, 252, 0.12)",
              border: "1px solid rgba(248, 250, 252, 0.18)",
            }}
          >
            Backend Systems
          </div>
          <div
            style={{
              display: "flex",
              padding: "14px 22px",
              borderRadius: 999,
              backgroundColor: "rgba(248, 250, 252, 0.12)",
              border: "1px solid rgba(248, 250, 252, 0.18)",
            }}
          >
            Cloud Infrastructure
          </div>
          <div
            style={{
              display: "flex",
              padding: "14px 22px",
              borderRadius: 999,
              backgroundColor: "rgba(248, 250, 252, 0.12)",
              border: "1px solid rgba(248, 250, 252, 0.18)",
            }}
          >
            Product Engineering
          </div>
        </div>
      </div>
    ),
    size
  );
}
