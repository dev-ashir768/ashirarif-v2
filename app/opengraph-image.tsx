import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ashir Arif — AI Automation Developer & MERN Stack Expert";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ashirarif.com";

  const logoData = await fetch(`${siteUrl}/branding/logo.png`).then((r) =>
    r.arrayBuffer()
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #09090f 0%, #130828 50%, #0d001a 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Purple glow top-left */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(121,40,202,0.35) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        {/* Purple glow bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-100px",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(121,40,202,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(121,40,202,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            display: "flex",
          }}
        />

        {/* Logo image */}
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            border: "2px solid rgba(121,40,202,0.6)",
            overflow: "hidden",
            marginBottom: "28px",
            display: "flex",
            boxShadow: "0 0 40px rgba(121,40,202,0.5)",
          }}
        >
          {/* @ts-ignore */}
          <img
            src={logoData as unknown as string}
            width={100}
            height={100}
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Name — gradient like hero */}
        <div
          style={{
            fontSize: "88px",
            fontWeight: 800,
            letterSpacing: "-3px",
            lineHeight: 1,
            marginBottom: "16px",
            backgroundImage: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.5) 100%)",
            backgroundClip: "text",
            color: "transparent",
            display: "flex",
          }}
        >
          Ashir Arif
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: "26px",
            fontWeight: 300,
            color: "rgba(255,255,255,0.55)",
            marginBottom: "20px",
            letterSpacing: "1px",
            display: "flex",
          }}
        >
          MERN Stack & AI Automation Developer
        </div>

        {/* Divider */}
        <div
          style={{
            width: "60px",
            height: "3px",
            background: "linear-gradient(90deg, #7928ca, #9b5cf6)",
            borderRadius: "2px",
            marginBottom: "22px",
            display: "flex",
          }}
        />

        {/* Pills */}
        <div style={{ display: "flex", gap: "12px" }}>
          {["AI Chatbots", "Voice Agents", "Workflow Automation", "Next.js"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "rgba(121,40,202,0.18)",
                border: "1px solid rgba(121,40,202,0.45)",
                borderRadius: "100px",
                padding: "8px 22px",
                fontSize: "16px",
                fontWeight: 600,
                color: "#a78bfa",
                display: "flex",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Site URL */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            fontSize: "18px",
            color: "rgba(255,255,255,0.25)",
            letterSpacing: "2px",
            display: "flex",
          }}
        >
          ashirarif.com
        </div>
      </div>
    ),
    { ...size }
  );
}
