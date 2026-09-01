import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { SITE } from "@/lib/site";

const shootType = z.enum(["portraits", "nightlife", "family", "other"]);
const budget = z.enum([
  "not-sure",
  "under-500",
  "500-1000",
  "1000-2500",
  "2500-plus",
]);

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
  budget,
  message: z.string().trim().max(2000).optional().default(""),
  honey: z.string().max(80).optional().default(""),
});

export type InquiryInput = z.infer<typeof inquirySchema>;

export const submitInquiry = createServerFn({ method: "POST" })
  .validator((data: unknown) => inquirySchema.parse(data))
  .handler(async ({ data }) => {
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
      budget: data.budget,
      message: data.message || "-",
    };

    try {
      await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(SITE.email)}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      });
    } catch {
      // Form still succeeds; thank-you is the booking UX.
    }

    return { ok: true as const };
  });
