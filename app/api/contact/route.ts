import { NextResponse } from "next/server";
import { Resend } from "resend";

// --- Email Templates ---

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ashirarif.com";
const logoUrl = `${siteUrl}/branding/logo.png`;

const generateUserEmail = (name: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank you for getting in touch</title>
</head>
<body style="margin:0;padding:0;background-color:#09090f;font-family:'Segoe UI',Arial,sans-serif;">

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#09090f;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:580px;">

          <!-- HEADER -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a0533 0%,#0d001a 100%);border-radius:16px 16px 0 0;padding:40px 40px 32px;text-align:center;border-bottom:1px solid rgba(121,40,202,0.3);">
              <!-- Logo -->
              <img src="${logoUrl}" alt="Ashir Arif" width="72" height="72"
                style="border-radius:50%;border:2px solid rgba(121,40,202,0.5);display:block;margin:0 auto 20px;object-fit:cover;" />
              <!-- Name -->
              <h1 style="margin:0;font-size:32px;font-weight:800;letter-spacing:-0.5px;color:transparent;background:linear-gradient(180deg,#ffffff 0%,rgba(255,255,255,0.55) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">
                Ashir Arif
              </h1>
              <p style="margin:8px 0 0;font-size:12px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:#9b5cf6;">
                MERN Stack &amp; AI Automation Developer
              </p>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="background:#0f0f1a;padding:40px 40px 32px;border-left:1px solid rgba(255,255,255,0.05);border-right:1px solid rgba(255,255,255,0.05);">
              <p style="margin:0 0 8px;font-size:22px;font-weight:700;color:#ffffff;">
                Hello ${name}, 👋
              </p>
              <p style="margin:0 0 20px;font-size:15px;line-height:1.75;color:#a1a1aa;">
                Thank you for reaching out! I've received your message and truly appreciate you taking the time to contact me.
              </p>
              <p style="margin:0 0 32px;font-size:15px;line-height:1.75;color:#a1a1aa;">
                I typically respond within <strong style="color:#ffffff;">24 hours</strong>. In the meantime, feel free to explore my latest work on my portfolio.
              </p>

              <!-- Divider -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">
                <tr>
                  <td style="height:1px;background:linear-gradient(90deg,transparent,rgba(121,40,202,0.5),transparent);"></td>
                </tr>
              </table>

              <!-- Services pills -->
              <p style="margin:0 0 14px;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#6b7280;">
                What I can help you with
              </p>
              <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">
                <tr>
                  <td style="padding:0 8px 8px 0;">
                    <span style="display:inline-block;background:rgba(121,40,202,0.15);color:#a78bfa;font-size:12px;font-weight:600;padding:6px 14px;border-radius:100px;border:1px solid rgba(121,40,202,0.3);">AI Chatbots</span>
                  </td>
                  <td style="padding:0 8px 8px 0;">
                    <span style="display:inline-block;background:rgba(121,40,202,0.15);color:#a78bfa;font-size:12px;font-weight:600;padding:6px 14px;border-radius:100px;border:1px solid rgba(121,40,202,0.3);">Voice Agents</span>
                  </td>
                  <td style="padding:0 8px 8px 0;">
                    <span style="display:inline-block;background:rgba(121,40,202,0.15);color:#a78bfa;font-size:12px;font-weight:600;padding:6px 14px;border-radius:100px;border:1px solid rgba(121,40,202,0.3);">Workflow Automation</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 8px 0 0;">
                    <span style="display:inline-block;background:rgba(121,40,202,0.15);color:#a78bfa;font-size:12px;font-weight:600;padding:6px 14px;border-radius:100px;border:1px solid rgba(121,40,202,0.3);">Next.js</span>
                  </td>
                  <td style="padding:0 8px 0 0;">
                    <span style="display:inline-block;background:rgba(121,40,202,0.15);color:#a78bfa;font-size:12px;font-weight:600;padding:6px 14px;border-radius:100px;border:1px solid rgba(121,40,202,0.3);">MERN Stack</span>
                  </td>
                  <td></td>
                </tr>
              </table>

              <!-- CTA Button -->
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="border-radius:100px;background:linear-gradient(135deg,#7928ca,#9b5cf6);">
                    <a href="${siteUrl}" target="_blank"
                      style="display:inline-block;padding:13px 32px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:100px;letter-spacing:0.3px;">
                      View My Portfolio →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#07070f;border-radius:0 0 16px 16px;padding:24px 40px;border-top:1px solid rgba(255,255,255,0.05);border-left:1px solid rgba(255,255,255,0.05);border-right:1px solid rgba(255,255,255,0.05);">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <p style="margin:0;font-size:13px;color:#52525b;">
                      Best regards, <strong style="color:#a1a1aa;">Ashir Arif</strong>
                    </p>
                    <p style="margin:4px 0 0;font-size:12px;color:#3f3f46;">
                      <a href="mailto:info.ashirarif@gmail.com" style="color:#7c3aed;text-decoration:none;">info.ashirarif@gmail.com</a>
                    </p>
                  </td>
                  <td align="right">
                    <p style="margin:0;font-size:12px;color:#3f3f46;">
                      &copy; ${new Date().getFullYear()} Ashir Arif. All rights reserved.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
`;

const generateAdminEmail = (name: string, email: string, message: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Submission</title>
</head>
<body style="margin:0;padding:0;background-color:#09090f;font-family:'Segoe UI',Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#09090f;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:580px;">

          <!-- HEADER -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a0533 0%,#0d001a 100%);border-radius:16px 16px 0 0;padding:28px 40px;border-bottom:1px solid rgba(121,40,202,0.3);">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <img src="${logoUrl}" alt="Ashir Arif" width="40" height="40"
                      style="border-radius:50%;border:1px solid rgba(121,40,202,0.5);vertical-align:middle;margin-right:12px;" />
                    <span style="font-size:18px;font-weight:700;color:#ffffff;vertical-align:middle;">Ashir Arif</span>
                  </td>
                  <td align="right">
                    <span style="display:inline-block;background:rgba(121,40,202,0.2);color:#a78bfa;font-size:11px;font-weight:600;padding:5px 12px;border-radius:100px;border:1px solid rgba(121,40,202,0.4);letter-spacing:1px;text-transform:uppercase;">
                      New Lead
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="background:#0f0f1a;padding:36px 40px;border-left:1px solid rgba(255,255,255,0.05);border-right:1px solid rgba(255,255,255,0.05);">

              <p style="margin:0 0 28px;font-size:20px;font-weight:700;color:#ffffff;">
                New Contact Submission 🚀
              </p>
              <p style="margin:0 0 28px;font-size:13px;color:#52525b;">
                Received on ${new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" })}
              </p>

              <!-- Name field -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:20px;">
                <tr>
                  <td style="background:#18181f;border-radius:10px;padding:16px 20px;border:1px solid rgba(255,255,255,0.06);">
                    <p style="margin:0 0 4px;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6b7280;">Name</p>
                    <p style="margin:0;font-size:16px;font-weight:600;color:#ffffff;">${name}</p>
                  </td>
                </tr>
              </table>

              <!-- Email field -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:20px;">
                <tr>
                  <td style="background:#18181f;border-radius:10px;padding:16px 20px;border:1px solid rgba(255,255,255,0.06);">
                    <p style="margin:0 0 4px;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6b7280;">Email</p>
                    <a href="mailto:${email}" style="font-size:16px;font-weight:600;color:#a78bfa;text-decoration:none;">${email}</a>
                  </td>
                </tr>
              </table>

              <!-- Message field -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">
                <tr>
                  <td style="background:#18181f;border-radius:10px;padding:16px 20px;border:1px solid rgba(255,255,255,0.06);">
                    <p style="margin:0 0 10px;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6b7280;">Message</p>
                    <p style="margin:0;font-size:15px;color:#d4d4d8;line-height:1.7;white-space:pre-wrap;">${message}</p>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
                <tr>
                  <td style="height:1px;background:linear-gradient(90deg,transparent,rgba(121,40,202,0.5),transparent);"></td>
                </tr>
              </table>

              <!-- Reply button -->
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="border-radius:100px;background:linear-gradient(135deg,#7928ca,#9b5cf6);">
                    <a href="mailto:${email}?subject=Re: Your inquiry — Ashir Arif"
                      style="display:inline-block;padding:13px 32px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:100px;">
                      Reply to ${name.split(" ")[0]} →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#07070f;border-radius:0 0 16px 16px;padding:20px 40px;border-top:1px solid rgba(255,255,255,0.05);border-left:1px solid rgba(255,255,255,0.05);border-right:1px solid rgba(255,255,255,0.05);">
              <p style="margin:0;font-size:12px;color:#3f3f46;text-align:center;">
                &copy; ${new Date().getFullYear()} Ashir Arif — AI Automation Developer &amp; MERN Stack Expert
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
`;

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Ashir Arif <onboarding@resend.dev>";
    const adminEmail = process.env.ADMIN_EMAIL || "info.ashirarif@gmail.com";

    await Promise.allSettled([
      resend.emails.send({
        from: fromEmail,
        to: adminEmail,
        replyTo: email,
        subject: `New Lead: ${name}`,
        html: generateAdminEmail(name, email, message),
      }),
      resend.emails.send({
        from: fromEmail,
        to: email,
        subject: "Thank you for getting in touch",
        html: generateUserEmail(name),
      }),
    ]);

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Request error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
