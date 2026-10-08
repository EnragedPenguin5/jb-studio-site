/**
 * Replaceable site copy: email, Instagram, prices, turnaround.
 * Tell me the real values and I will swap them here.
 */
export const SITE = {
  // Official business name: matches insurance, registration, signage and the
  // Google Business Profile. Use this everywhere Google might read it.
  name: "JB Photo Studio",
  // Short brand mark used in the logo / header wordmark.
  brand: "JB Studio",
  photographer: "Johnathon",
  city: "Saskatoon",
  region: "Saskatchewan",
  url: "https://www.jbstudiosaskatoon.ca",
  email: "hello@jbstudiosaskatoon.ca",
  instagramHandle: "@jb_photo.studio",
  instagramUrl: "https://www.instagram.com/jb_photo.studio",
  address: {
    street: "220 20th Street West, Studio B",
    city: "Saskatoon",
    region: "SK",
    postalCode: "S7M 0W9",
    country: "CA",
  },
  positioning: "Portraits, family, and nightlife. Photographed in Saskatoon.",
} as const;

/**
 * Tracking IDs (public, safe to commit). Leave a value empty to turn that
 * tool off.
 *  - GA4: analytics.google.com -> Admin -> Data streams
 *  - Clarity: clarity.microsoft.com -> Settings -> Overview -> Project ID
 */
export const TRACKING = {
  ga4MeasurementId: "G-3WLP1334BH",
  clarityProjectId: "",
} as const;

export const NAV = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
] as const;

/** Dedicated service pages (content lives in src/lib/services.ts). */
export const SERVICE_LINKS = [
  { href: "/maternity-photography", label: "Maternity" },
  { href: "/family-photography", label: "Family" },
  { href: "/portrait-photography", label: "Portrait" },
  { href: "/nightlife-photography", label: "Nightlife" },
] as const;

export const SHOOT_TYPES = [
  { value: "portraits", label: "Portraits" },
  { value: "family", label: "Family" },
  { value: "nightlife", label: "Nightlife" },
  { value: "donation", label: "By donation" },
  { value: "other", label: "Other" },
] as const;

export const REFERRAL_SOURCES = [
  { value: "instagram", label: "Instagram" },
  { value: "google", label: "Google" },
  { value: "referral", label: "Referral" },
  { value: "other", label: "Other" },
] as const;

export const PACKAGES = [
  {
    id: "portraits",
    name: "Portraits",
    startingPrice: "$200.00",
    turnaround: "7-10 business days",
    includes: [
      "Directed session, studio or on location",
      "15-20 edited photos",
      "Print-ready files",
    ],
  },
  {
    id: "family",
    name: "Family",
    startingPrice: "$250.00",
    turnaround: "10-14 business days",
    includes: [
      "Groups, couples, or maternity on location",
      "20-25 edited photos",
      "Print-ready files",
    ],
  },
  {
    id: "nightlife",
    name: "Nightlife",
    startingPrice: "$275.00",
    turnaround: "Sneak peek in 24-48 hrs, full gallery in 3-5 business days",
    includes: [
      "Coverage of the night: candid and portraits",
      "50-70 edited photos",
      "Print-ready files",
    ],
  },
] as const;

export function pageHead(title: string, description: string, path = "/") {
  return {
    meta: [
      { title },
      { name: "description", content: description },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}${path}` }],
  };
}
