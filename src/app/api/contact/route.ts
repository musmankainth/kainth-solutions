import { NextRequest } from "next/server";
import { z } from "zod/v4";
import { Resend } from "resend";

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  if (entry.count > MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  return false;
}

// Periodically clean up stale entries
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [key, value] of rateLimitMap.entries()) {
      if (now > value.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }, 60_000);
}

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be at most 100 characters"),
  email: z.email("Please provide a valid email address"),
  phone: z
    .string()
    .max(20, "Phone number is too long")
    .optional()
    .or(z.literal("")),
  service: z.enum(
    [
      "web-development",
      "mobile-app-development",
      "digital-marketing",
      "other",
    ],
    { error: "Please select a valid service" }
  ),
  budget: z
    .string()
    .max(50, "Budget value is too long")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be at most 5000 characters"),
  honeypot: z
    .string()
    .max(0, "Bot detected")
    .optional()
    .or(z.literal("")),
});

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return Response.json(
        {
          success: false,
          message: "Too many requests. Please try again in a minute.",
        },
        { status: 429 }
      );
    }

    // Parse body
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return Response.json(
        {
          success: false,
          message: "Invalid request body. Please send valid JSON.",
        },
        { status: 400 }
      );
    }

    // Validate with Zod
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const errors = result.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      }));

      return Response.json(
        {
          success: false,
          message: "Validation failed. Please check your input.",
          errors,
        },
        { status: 422 }
      );
    }

    const data = result.data;

    // Honeypot check (spam bot detection)
    if (data.honeypot && data.honeypot.length > 0) {
      // Silently reject but return success to fool bots
      return Response.json({
        success: true,
        message:
          "Thank you for your message! We will get back to you within 24 hours.",
      });
    }

    // Send email using Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    const serviceNames: Record<string, string> = {
      "web-development": "Web Development",
      "mobile-app-development": "Mobile App Development",
      "digital-marketing": "Digital Marketing",
      "other": "Other",
    };

    const serviceName = serviceNames[data.service] || data.service;

    // Send notification email to company
    const adminEmailResult = await resend.emails.send({
      from: "noreply@kainthsolutions.com",
      to: "info@kainthsolutions.com",
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <p><strong>Service:</strong> ${serviceName}</p>
        <p><strong>Budget:</strong> ${data.budget || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
      `,
    });

    // Send confirmation email to user
    const userEmailResult = await resend.emails.send({
      from: "noreply@kainthsolutions.com",
      to: data.email,
      subject: "We received your message - Kainth Solutions",
      html: `
        <h2>Thank you for contacting Kainth Solutions!</h2>
        <p>Hi ${data.name},</p>
        <p>We've received your message and will get back to you within 24 hours.</p>
        <p><strong>Your Details:</strong></p>
        <p>Service: ${serviceName}</p>
        <p>Message: ${data.message.replace(/\n/g, "<br>")}</p>
        <p>Best regards,<br>Kainth Solutions Team</p>
      `,
    });

    if (adminEmailResult.error || userEmailResult.error) {
      console.error("Email sending error:", {
        adminError: adminEmailResult.error,
        userError: userEmailResult.error,
      });
    }

    console.log("Contact form submission:", {
      name: data.name,
      email: data.email,
      phone: data.phone || "Not provided",
      service: data.service,
      budget: data.budget || "Not specified",
      message: data.message,
      timestamp: new Date().toISOString(),
      emailsSent: !adminEmailResult.error && !userEmailResult.error,
    });

    return Response.json(
      {
        success: true,
        message:
          "Thank you for your message! We will get back to you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
