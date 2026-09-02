/**
 * Replaceable site copy: email, Instagram, prices, turnaround.
 * Tell me the real values and I will swap them here.
 */
export const SITE = {
  name: "JB Studio",
  photographer: "Johnathon",
  city: "Saskatoon",
  region: "Saskatchewan",
  email: "hello@jbstudiosaskatoon.ca",
  instagramHandle: "@jb_photo.studio",
  instagramUrl: "https://www.instagram.com/jb_photo.studio",
  positioning: "Portraits, family, and nightlife. Photographed in Saskatoon.",
} as const;

export const NAV = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
] as const;

export const SHOOT_TYPES = [
  { value: "portraits", label: "Portraits" },
  { value: "family", label: "Family" },
  { value: "nightlife", label: "Nightlife" },
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
    startingPrice: "$200",
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
    startingPrice: "$250",
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
    startingPrice: "$275",
    turnaround: "Sneak peek in 24-48 hrs, full gallery in 3-5 business days",
    includes: [
      "Coverage of the night: candid and portraits",
      "50-70 edited photos",
      "Print-ready files",
    ],
  },
] as const;

export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
    ],
  };
}
