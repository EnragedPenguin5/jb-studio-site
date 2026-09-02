import { z } from "zod";
import { SITE } from "@/lib/site";

const shootType = z.enum(["portraits", "nightlife", "family", "other"]);
const referralSource = z.enum(["instagram", "google", "referral", "other"]);

export const inquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(80),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .max(120)
    .refine((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), "Enter a valid email"),
  phone: z.string().trim().max(40).optional().default(""),
  shootType,
  date: z.string().trim().max(40).optional().default(""),
  location: z.string().trim().max(120).optional().default(""),
  referralSource,
  message: z.string().trim().min(1, "Tell me a bit about what you're looking for").max(2000),
  honey: z.string().max(80).optional().default(""),
});

export type InquiryInput = z.infer<typeof inquirySchema>;

// Runs in the browser (called from a client event handler), not on the
// server. formsubmit.co is built for direct browser-side AJAX calls like
// this one; calling it from a server (e.g. inside a TanStack server
// function) gets blocked by Cloudflare's bot protection in front of it.
export async function submitInquiry({ data }: { data: InquiryInput }) {
  if (data.honey) {
    return { ok: true as const };
  }

  const body = {
    _subject: `JB Studio: ${data.shootType} inquiry from ${data.name}`,
    _template: "table",
    _replyto: data.email,
    name: data.name,
    email: data.email,
    phone: data.phone || "-",
    shootType: data.shootType,
    date: data.date || "-",
    location: data.location || "-",
    referralSource: data.referralSource,
    message: data.message,
  };

  const target = `https://formsubmit.co/ajax/${encodeURIComponent(SITE.email)}`;
  const res = await fetch(target, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`formsubmit responded ${res.status}`);
  }

  return { ok: true as const };
}
