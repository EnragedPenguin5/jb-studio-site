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
  positioning: "Portraits, family, and nightlife. Photographed in our Riversdale studio or anywhere around Saskatoon.",
  // One-line promise under the homepage headline.
  promise: "You bring yourself. We take care of the lighting, the direction and the editing.",
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

/**
 * Show the promo's poster image on the homepage. Off by default: the poster
 * is made for print and Instagram, and the promo reads cleaner as text here.
 */
export const SHOW_PROMO_POSTER = false;

/** Homepage headline and the line under it. */
export const HERO_COPY = {
  headline: "Something a little different.",
  sub: "Portraits, headshots, family, maternity and nightlife in Saskatoon. Any style you can picture, lit and finished properly.",
} as const;

/** The "any style" statement on the homepage. */
export const RANGE_COPY = {
  heading: "Whatever you can picture.",
  body: [
    "We're for people who want something a little different from the usual holiday-card photo. Hard light, colour, shadow, a little fog. Or clean, bright and classic. We do that too, and we do it properly.",
    "We aren't mainstream. The quality is undeniable. The only limits are the size of the room and our imaginations, yours included.",
  ],
} as const;

/** Practical "where is it" block near the bottom of the homepage. */
export const FIND_US = {
  heading: "Finding the studio",
  body: "Studio B is on the lower level of The Two Twenty in Riversdale. The building keeps its doors locked, so we'll meet you at the front entrance at your booking time and walk you in.",
  lost: "Running late or not sure you're in the right spot? Message us.",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=The+Two+Twenty%2C+220+20th+Street+West%2C+Saskatoon%2C+SK",
} as const;

/** What the studio is set up with. Used in the About page. */
export const STUDIO_KIT = [
  "black velvet",
  "seamless paper backdrops",
  "a snoot with gobos for shadow patterns",
  "RGB tube lights",
  "a fog machine",
] as const;

/** Jolie Bête: the free creative project series. */
export const JOLIE_BETE = {
  name: "Jolie Bête",
  meaning: "French for pretty beast.",
  body: [
    "Jolie Bête is the name for the free creative projects we shoot in the studio. No client, no brief, nobody to keep happy. Just an idea we can't stop thinking about, and someone willing to step into the light for it.",
    "Paid sessions keep the lights on. This is what the lights are for.",
  ],
  cta: "Want to be in one? Tell us your idea",
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

/** Square Appointments page. It always lists every bookable service. */
export const BOOKING_URL =
  "https://square.site/book/LX63D74K241VZ/jet-black-studio-saskatoon-sk";

/**
 * The options on the Book page. Each one shows three example photos.
 *
 *  - square: true  -> the button goes straight to Square Appointments.
 *                     Only turn this on once the matching service exists in
 *                     Square, or people land on a page without it.
 *  - square: false -> the button fills in the request form further down.
 *
 * `examples` are photo ids from src/lib/photos.ts. `formType` is the shoot
 * type the request form gets pre-filled with (see SHOOT_TYPES).
 */
export const BOOKING_OPTIONS = [
  {
    id: "headshot-sprint",
    name: "Headshot Sprint",
    price: "$49 + PST",
    blurb: "Twenty minutes in the studio, three edited photos. In, out, and looking sharp.",
    examples: ["PHOTO_25", "PHOTO_26", "PHOTO_38"],
    square: true,
    formType: "portraits",
  },
  {
    id: "portraits",
    name: "Portraits",
    price: "From $200",
    blurb: "A full directed session, in the studio or on location. Clean and classic, or as far from it as you like.",
    examples: ["PHOTO_35", "PHOTO_34", "PHOTO_22"],
    square: true,
    formType: "portraits",
  },
  {
    id: "family",
    name: "Family",
    price: "From $250",
    blurb: "Groups, couples, kids and pets. Relaxed enough that everyone still looks like themselves.",
    examples: ["PHOTO_05", "PHOTO_17", "PHOTO_12"],
    square: true,
    formType: "family",
  },
  {
    id: "maternity",
    name: "Maternity",
    price: "From $250",
    blurb: "Calm, unhurried sessions in the studio or outdoors. Partners, kids and pets welcome.",
    examples: ["PHOTO_07", "PHOTO_21", "PHOTO_18"],
    square: true,
    formType: "family",
  },
  {
    id: "editorial",
    name: "Editorial",
    price: "Quoted per concept",
    blurb: "A concept shoot built around an idea, a wardrobe and a location. Tell us the vision and we'll price it.",
    examples: ["PHOTO_42", "PHOTO_39", "PHOTO_43"],
    square: false,
    formType: "other",
  },
  {
    id: "nightlife",
    name: "Nightlife and events",
    price: "From $275",
    blurb: "Club nights, DJ sets, parties and events. Tell us the date and venue and we'll confirm.",
    examples: ["PHOTO_08", "PHOTO_01", "PHOTO_14"],
    square: false,
    formType: "nightlife",
  },
] as const;

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
