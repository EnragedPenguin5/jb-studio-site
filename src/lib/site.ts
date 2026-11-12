/**
 * Replaceable site copy: email, Instagram, prices, turnaround.
 * Tell me the real values and I will swap them here.
 */
export const SITE = {
  // Official business name: matches insurance, registration, signage and the
  // Google Business Profile. Use this everywhere Google might read it.
  name: "Jet Black Studio",
  // Brand wordmark used in the header. Registered name (SK Corporate Registry,
  // business no. 102246788): keep it matching `name`.
  brand: "Jet Black Studio",
  photographer: "Johnathon",
  city: "Saskatoon",
  region: "Saskatchewan",
  url: "https://www.jbstudiosaskatoon.ca",
  email: "hello@jbstudiosaskatoon.ca",
  instagramHandle: "@jet.black.studio",
  instagramUrl: "https://www.instagram.com/jet.black.studio",
  address: {
    street: "220 20th Street West, Studio B",
    city: "Saskatoon",
    region: "SK",
    postalCode: "S7M 0W9",
    country: "CA",
  },
  positioning: "Portraits, family, and nightlife. Photographed in my Riversdale studio or anywhere around Saskatoon.",
  // One-line promise under the homepage headline.
  promise: "You bring yourself. I take care of the lighting, the direction and the editing.",
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
  { value: "studio", label: "Hosted studio time" },
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

/** Square Appointments page. It always lists every bookable service. */
export const BOOKING_URL =
  "https://square.site/book/LX63D74K241VZ/jet-black-studio-saskatoon-sk";

export interface Promo {
  id: string;
  label: string;
  title: string;
  blurb: string;
  price: string;
  details: readonly string[];
  cta: string;
  bookingUrl: string;
  poster?: { src: string; alt: string; width: number; height: number };
}

/**
 * Current promos shown on the homepage. Add, edit or remove entries here;
 * an empty list hides the section entirely.
 */
export const PROMOS: readonly Promo[] = [
  {
    id: "headshot-sprint",
    label: "Now booking",
    title: "Headshot Sprint",
    blurb:
      "A quick headshot session in the studio. Come on down to Studio B, in the basement of The Two Twenty.",
    price: "$49 + PST",
    details: ["3 edited photos", "20-minute session", "Book online, pay at the studio"],
    cta: "Book your slot",
    bookingUrl: BOOKING_URL,
    poster: {
      src: "/photos/headshot-sprint-poster.png",
      alt: "Headshot Sprint poster: $49 plus PST for 3 edited photos in a 20-minute session at Studio B, in the basement of The Two Twenty, Saskatoon.",
      width: 1224,
      height: 1584,
    },
  },
];

export function pageHead(title: string, description: string, path = "/") {
  return {
    meta: [
      { title },
      { name: "description", content: description },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}${path}` }],
  };
}
