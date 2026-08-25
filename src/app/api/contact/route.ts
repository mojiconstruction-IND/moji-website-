import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ─────────────────────────────────────────────────────────────────────────────
//  Types
// ─────────────────────────────────────────────────────────────────────────────
interface ContactPayload {
  name: string;
  organization: string;
  email: string;
  phone: string;
  service: string;
  voltage: string;
  location: string;
  message: string;
}

// ─────────────────────────────────────────────────────────────────────────────
//  Shared SMTP Transporter (Gmail + App Password)
// ─────────────────────────────────────────────────────────────────────────────
function createTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

// ─────────────────────────────────────────────────────────────────────────────
//  Email 1 — Internal Notification to Moji Construction Team
// ─────────────────────────────────────────────────────────────────────────────
function buildInternalHtml(d: ContactPayload): string {
  const ts = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'short',
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Inquiry — Moji Construction</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 16px;">
    <tr><td align="center">
      <table width="620" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;box-shadow:0 4px 16px rgba(15,23,42,0.10);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1d4e89 0%,#2563eb 60%,#06b6d4 100%);padding:28px 36px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <p style="margin:0;color:rgba(255,255,255,0.6);font-size:11px;letter-spacing:2px;text-transform:uppercase;">Moji Construction Private Limited</p>
                  <h1 style="margin:6px 0 0;color:#ffffff;font-size:22px;font-weight:700;">&#9889; New Commercial Inquiry</h1>
                </td>
                <td align="right">
                  <span style="background:rgba(255,255,255,0.2);color:#fff;font-size:12px;padding:6px 14px;border-radius:20px;white-space:nowrap;">&#128197; ${ts}</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px 36px;">

            <!-- Submitter Info -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              <tr>
                <td colspan="2">
                  <p style="margin:0 0 16px;color:#64748b;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;font-weight:600;">Submitter Details</p>
                </td>
              </tr>
              ${row('Full Name', escapeHtml(d.name))}
              ${row('Organisation', escapeHtml(d.organization))}
              ${row('Email', '<a href="mailto:' + d.email + '" style="color:#1d4e89;text-decoration:none;">' + d.email + '</a>')}
              ${row('Phone', escapeHtml(d.phone))}
            </table>

            <hr style="border:none;border-top:1px solid #e2e8f0;margin:0 0 24px;" />

            <!-- Technical Scope -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              <tr>
                <td colspan="2">
                  <p style="margin:0 0 16px;color:#64748b;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;font-weight:600;">Technical Scope</p>
                </td>
              </tr>
              ${row('Scope of Work', escapeHtml(d.service) || '&mdash;')}
              ${row('Voltage Level', escapeHtml(d.voltage) || '&mdash;')}
              ${row('Project Location', escapeHtml(d.location) || '&mdash;')}
            </table>

            <hr style="border:none;border-top:1px solid #e2e8f0;margin:0 0 24px;" />

            <!-- Message -->
            <p style="margin:0 0 10px;color:#64748b;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;font-weight:600;">Project Description</p>
            <div style="background:#f8fafc;border-left:3px solid #ea580c;border-radius:6px;padding:16px 20px;color:#334155;font-size:15px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(d.message)}</div>

            <!-- CTA -->
            <div style="margin-top:28px;text-align:center;">
              <a href="mailto:${d.email}?subject=Re: Your Inquiry" style="display:inline-block;background:linear-gradient(135deg,#1d4e89,#2563eb);color:#ffffff;font-size:14px;font-weight:600;padding:12px 28px;border-radius:8px;text-decoration:none;">Reply to ${escapeHtml(d.name)} &rarr;</a>
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f8fafc;padding:20px 36px;text-align:center;border-top:1px solid #e2e8f0;">
            <p style="margin:0;color:#94a3b8;font-size:12px;">This notification was generated automatically by the Moji Construction website contact form.</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─────────────────────────────────────────────────────────────────────────────
//  Email 2 — Auto-Reply with Professional Signature to the Enquirer
// ─────────────────────────────────────────────────────────────────────────────
function buildAutoReplyHtml(d: ContactPayload): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Inquiry Received — Moji Construction</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 16px;">
    <tr><td align="center">
      <table width="620" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;box-shadow:0 4px 16px rgba(15,23,42,0.10);">

        <!-- Header Banner -->
        <tr>
          <td style="background:linear-gradient(135deg,#1d4e89 0%,#2563eb 60%,#06b6d4 100%);padding:36px 36px 28px;text-align:center;">
            <p style="margin:0 0 6px;color:rgba(255,255,255,0.6);font-size:11px;letter-spacing:3px;text-transform:uppercase;">Moji Construction Private Limited</p>
            <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:800;letter-spacing:-0.5px;">&#9889; Inquiry Confirmed</h1>
            <p style="margin:10px 0 0;color:#bfdbfe;font-size:14px;">Your commercial / technical enquiry has been successfully received.</p>
          </td>
        </tr>

        <!-- Greeting -->
        <tr>
          <td style="padding:32px 36px 20px;">
            <p style="margin:0 0 16px;color:#0f172a;font-size:16px;line-height:1.7;">
              Dear <strong style="color:#1d4e89;">${escapeHtml(d.name)}</strong>,
            </p>
            <p style="margin:0 0 16px;color:#334155;font-size:15px;line-height:1.8;">
              Thank you for reaching out to <strong style="color:#0f172a;">Moji Construction Private Limited</strong>. We have received your inquiry and our engineering &amp; commercial team will review your project specifications and respond within <strong style="color:#ea580c;">24&ndash;48 business hours</strong>.
            </p>
            <p style="margin:0;color:#334155;font-size:15px;line-height:1.8;">
              Below is a summary of the details you submitted for your reference:
            </p>
          </td>
        </tr>

        <!-- Inquiry Summary Box -->
        <tr>
          <td style="padding:0 36px 28px;">
            <div style="background:#f8fafc;border-radius:10px;border:1px solid #e2e8f0;padding:24px;">
              <p style="margin:0 0 16px;color:#64748b;font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:600;">Your Submission Summary</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                ${summaryRow('Organisation', escapeHtml(d.organization))}
                ${summaryRow('Scope of Work', escapeHtml(d.service) || '&mdash;')}
                ${summaryRow('Voltage Level', escapeHtml(d.voltage) || '&mdash;')}
                ${summaryRow('Project Location', escapeHtml(d.location) || '&mdash;')}
              </table>
            </div>
          </td>
        </tr>

        <!-- What Happens Next -->
        <tr>
          <td style="padding:0 36px 28px;">
            <p style="margin:0 0 16px;color:#64748b;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;font-weight:600;">What Happens Next</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="44" valign="top">
                  <div style="width:36px;height:36px;background:linear-gradient(135deg,#1d4e89,#2563eb);border-radius:50%;text-align:center;line-height:36px;color:#fff;font-size:14px;font-weight:700;">1</div>
                </td>
                <td style="padding-bottom:16px;">
                  <p style="margin:0;color:#0f172a;font-size:14px;font-weight:600;">Engineering Review</p>
                  <p style="margin:4px 0 0;color:#64748b;font-size:13px;line-height:1.6;">Our technical team reviews your project scope, voltage level, and location requirements.</p>
                </td>
              </tr>
              <tr>
                <td width="44" valign="top">
                  <div style="width:36px;height:36px;background:linear-gradient(135deg,#1d4e89,#2563eb);border-radius:50%;text-align:center;line-height:36px;color:#fff;font-size:14px;font-weight:700;">2</div>
                </td>
                <td style="padding-bottom:16px;">
                  <p style="margin:0;color:#0f172a;font-size:14px;font-weight:600;">Feasibility &amp; Proposal Preparation</p>
                  <p style="margin:4px 0 0;color:#64748b;font-size:13px;line-height:1.6;">We prepare a preliminary engineering feasibility assessment or commercial bid proposal.</p>
                </td>
              </tr>
              <tr>
                <td width="44" valign="top">
                  <div style="width:36px;height:36px;background:linear-gradient(135deg,#1d4e89,#2563eb);border-radius:50%;text-align:center;line-height:36px;color:#fff;font-size:14px;font-weight:700;">3</div>
                </td>
                <td>
                  <p style="margin:0;color:#0f172a;font-size:14px;font-weight:600;">Direct Response Within 24&ndash;48 Hours</p>
                  <p style="margin:4px 0 0;color:#64748b;font-size:13px;line-height:1.6;">A senior team member will contact you directly at <strong style="color:#ea580c;">${escapeHtml(d.email)}</strong>.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Divider -->
        <tr><td style="padding:0 36px;"><hr style="border:none;border-top:1px solid #e2e8f0;" /></td></tr>

        <!-- PROFESSIONAL SIGNATURE -->
        <tr>
          <td style="padding:28px 36px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td valign="top">
                  <p style="margin:0 0 4px;color:#1d4e89;font-size:17px;font-weight:800;letter-spacing:-0.3px;">Moji Construction Private Limited</p>
                  <p style="margin:0 0 2px;color:#64748b;font-size:13px;">Turnkey EPC Contractor &middot; Transmission Lines &amp; Grid Substations</p>
                  <p style="margin:0 0 16px;color:#94a3b8;font-size:12px;">33kV &ndash; 400kV / 765kV &middot; Est. 1990 &middot; CIN: U45204RJ2002PTC017968</p>

                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding-bottom:8px;">
                        <span style="color:#ea580c;font-size:13px;">&#127968;</span>
                        <span style="color:#64748b;font-size:13px;margin-left:6px;">29, Sheopur, Sector-7, Pratap Nagar, Sanganer, Jaipur, Rajasthan &ndash; 302033</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-bottom:8px;">
                        <span style="color:#ea580c;font-size:13px;">&#9993;</span>
                        <a href="mailto:moji.304@gmail.com" style="color:#1d4e89;font-size:13px;margin-left:6px;text-decoration:none;">moji.304@gmail.com</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-bottom:8px;">
                        <span style="color:#ea580c;font-size:13px;">&#128222;</span>
                        <a href="tel:+919929733743" style="color:#1d4e89;font-size:13px;margin-left:6px;text-decoration:none;">+91-99297-33743</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-bottom:8px;">
                        <span style="color:#ea580c;font-size:13px;">&#127758;</span>
                        <a href="https://mojiconstruction.com" style="color:#1d4e89;font-size:13px;margin-left:6px;text-decoration:none;">mojiconstruction.com</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span style="color:#ea580c;font-size:13px;">&#128336;</span>
                        <span style="color:#64748b;font-size:13px;margin-left:6px;">Mon &ndash; Sat: 09:00 AM &ndash; 06:00 PM IST</span>
                      </td>
                    </tr>
                  </table>

                  <!-- Accreditation Pills -->
                  <div style="margin-top:18px;">
                    <span style="display:inline-block;background:#eff6ff;border:1px solid #bfdbfe;color:#1d4e89;font-size:11px;padding:4px 10px;border-radius:20px;margin-right:6px;margin-bottom:6px;">&#9889; 4,000+ KM Energised</span>
                    <span style="display:inline-block;background:#fff7ed;border:1px solid #fed7aa;color:#c2410c;font-size:11px;padding:4px 10px;border-radius:20px;margin-right:6px;margin-bottom:6px;">&#127959; 150+ Major Projects</span>
                    <span style="display:inline-block;background:#ecfdf5;border:1px solid #a7f3d0;color:#059669;font-size:11px;padding:4px 10px;border-radius:20px;margin-bottom:6px;">&#10003; RRVPNL Approved</span>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Confidentiality Notice -->
        <tr>
          <td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:18px 36px;text-align:center;">
            <p style="margin:0;color:#94a3b8;font-size:11px;line-height:1.6;">
              &#128274; <strong style="color:#64748b;">Confidentiality Notice:</strong> This message and any attached documents are intended solely for the addressee and may contain commercially sensitive information. If you received this in error, please notify us immediately and delete all copies.
            </p>
            <p style="margin:10px 0 0;color:#94a3b8;font-size:11px;">
              &copy; ${new Date().getFullYear()} Moji Construction Private Limited. All rights reserved.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─────────────────────────────────────────────────────────────────────────────
//  Helpers
// ─────────────────────────────────────────────────────────────────────────────
function row(label: string, value: string): string {
  return `
  <tr>
    <td style="padding:7px 0;color:#64748b;font-size:13px;width:160px;vertical-align:top;">${label}</td>
    <td style="padding:7px 0 7px 12px;color:#0f172a;font-size:14px;font-weight:500;">${value}</td>
  </tr>`;
}

function summaryRow(label: string, value: string): string {
  return `
  <tr>
    <td style="padding:8px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:13px;width:145px;vertical-align:top;">${label}</td>
    <td style="padding:8px 0 8px 12px;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:13px;font-weight:500;">${value}</td>
  </tr>`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ─────────────────────────────────────────────────────────────────────────────
//  POST /api/contact
// ─────────────────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const data: ContactPayload = await req.json();

    // Basic validation
    const required: (keyof ContactPayload)[] = ['name', 'email', 'phone', 'organization', 'service', 'location', 'message'];
    for (const field of required) {
      if (!data[field]?.trim()) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    // Simple email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const transporter = createTransporter();

    // Send both emails in parallel
    await Promise.all([
      // 1. Internal notification to the company
      transporter.sendMail({
        from: `"Moji Construction Website" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_TO,
        replyTo: data.email,
        subject: `New Inquiry: ${data.service} — ${data.organization} [${data.location}]`,
        html: buildInternalHtml(data),
      }),

      // 2. Auto-reply with signature to the enquirer
      transporter.sendMail({
        from: `"Moji Construction Pvt. Ltd." <${process.env.SMTP_USER}>`,
        to: data.email,
        subject: `Inquiry Received — ${data.service} | Moji Construction`,
        html: buildAutoReplyHtml(data),
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[/api/contact] Error:', err);
    return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 });
  }
}
