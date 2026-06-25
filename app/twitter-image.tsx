import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ashir Arif — AI Automation Developer & MERN Stack Expert";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default async function TwitterImage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ashirarif.com";

  const logoData = await fetch(`${siteUrl}/branding/logo.png`).then((r) =>
    r.arrayBuffer()
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "600px",
          background: "linear-gradient(135deg, #09090f 0%, #130828 50%, #0d001a 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
          gap: "60px",
          paddingLeft: "80px",
          paddingRight: "80px",
        }}
      >
        {/* Glow left */}
        <div style={{ position: "absolute", top: "-80px", left: "-80px", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(121,40,202,0.4) 0%, transparent 70%)", display: "flex" }} />
        {/* Glow right */}
        <div style={{ position: "absolute", bottom: "-80px", right: "-80px", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)", display: "flex" }} />
        {/* Grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(121,40,202,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(121,40,202,0.05) 1px, transparent 1px)", backgroundSize: "60px 60px", display: "flex" }} />

        {/* Left: Logo */}
        <div style={{ display: "flex", flexShrink: 0 }}>
          <div style={{ width: "140px", height: "140px", borderRadius: "50%", border: "3px solid rgba(121,40,202,0.6)", overflow: "hidden", boxShadow: "0 0 60px rgba(121,40,202,0.5)", display: "flex" }}>
            {/* @ts-ignore */}
            <img src={logoData as unknown as string} width={140} height={140} style={{ objectFit: "cover" }} />
          </div>
        </div>

        {/* Right: Text */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          {/* Name */}
          <div style={{ fontSize: "72px", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1, marginBottom: "12px", backgroundImage: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.5) 100%)", backgroundClip: "text", color: "transparent", display: "flex" }}>
            Ashir Arif
          </div>

          {/* Role */}
          <div style={{ fontSize: "22px", fontWeight: 300, color: "rgba(255,255,255,0.55)", marginBottom: "24px", letterSpacing: "0.5px", display: "flex" }}>
            MERN Stack & AI Automation Developer
          </div>

          {/* Pills */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {["🤖 AI Chatbots", "🎙️ Voice Agents", "⚡ n8n & Zapier", "🌐 Next.js"].map((tag) => (
              <div key={tag} style={{ background: "rgba(121,40,202,0.2)", border: "1px solid rgba(121,40,202,0.45)", borderRadius: "100px", padding: "6px 18px", fontSize: "15px", fontWeight: 600, color: "#a78bfa", display: "flex" }}>
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom URL */}
        <div style={{ position: "absolute", bottom: "28px", right: "48px", fontSize: "16px", color: "rgba(255,255,255,0.2)", letterSpacing: "2px", display: "flex" }}>
          ashirarif.com
        </div>
      </div>
    ),
    { ...size }
  );
}
