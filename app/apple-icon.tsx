import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ashirarif.com";

  const logoData = await fetch(`${siteUrl}/branding/logo.png`).then((r) =>
    r.arrayBuffer()
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "40px",
          background: "linear-gradient(135deg, #09090f 0%, #130828 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* @ts-ignore */}
        <img
          src={logoData as unknown as string}
          width={130}
          height={130}
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { ...size }
  );
}
