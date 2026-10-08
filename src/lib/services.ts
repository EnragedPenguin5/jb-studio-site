import { PHOTOS, type Photo } from "@/lib/photos";
import { PACKAGES, SITE } from "@/lib/site";

type PackageId = (typeof PACKAGES)[number]["id"];

export type ServiceFaq = { q: string; a: string };

export type ServicePageContent = {
  slug: string;
  /** Short name used in nav/footer links */
  label: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  packageId: PackageId;
  /** Value passed to the contact form's shoot type */
  bookType: string;
  photos: Photo[];
  sections: { heading: string; body: string[] }[];
  faqs: ServiceFaq[];
};

const STUDIO =
  "my studio (Studio B at The Two Twenty, 220 20th Street West in Riversdale)";

export const SERVICE_PAGES: ServicePageContent[] = [
  {
    slug: "/maternity-photography",
    label: "Maternity",
    title: "Maternity Photographer in Saskatoon | JB Photo Studio",
    description:
      "Relaxed maternity photography in Saskatoon, in studio or on location. Sessions starting at $250.00.",
    h1: "Maternity photographer in Saskatoon",
    intro: [
      "Maternity photos are one of those things you'll be really glad you have. I keep the session calm and easy: a little direction here and there, lots of time to settle in, and no awkward posing marathon.",
      `Sessions happen at ${STUDIO} or on location anywhere around Saskatoon.`,
    ],
    packageId: "family",
    bookType: "family",
    photos: [PHOTOS.PHOTO_07, PHOTOS.PHOTO_18, PHOTOS.PHOTO_19, PHOTOS.PHOTO_21, PHOTOS.PHOTO_20, PHOTOS.PHOTO_06],
    sections: [
      {
        heading: "Studio or outdoors",
        body: [
          "The studio gives you a clean, controlled look that works in any weather or season, which matters in Saskatchewan. Outdoor sessions work great from late spring into fall, especially around golden hour.",
          "Partners, kids and pets are welcome in the frame. Just let me know who's coming when you book.",
        ],
      },
      {
        heading: "What to wear",
        body: [
          "Pick something you feel good in. Fitted dresses and simple solid colours photograph well, and it's easy to bring a second outfit for a change partway through. If you're unsure, send me what you're thinking and I'll help you choose.",
        ],
      },
    ],
    faqs: [
      {
        q: "When should I book my maternity session?",
        a: "A lot of people book for around 28 to 34 weeks, when the bump is showing but you're still comfortable. Reach out early so you can get the date you want.",
      },
      {
        q: "How much does a maternity session cost?",
        a: "Maternity sessions start at $250.00. A typical session includes around 20-25 edited, print-ready photos, and I'll confirm your exact quote when we book, based on location, timing and what you'd like.",
      },
      {
        q: "How long until I get my photos?",
        a: "Typical turnaround is 10-14 business days. Photos are delivered in a private online gallery you can download from and share.",
      },
      {
        q: "Can my partner and kids be in the photos?",
        a: "Absolutely. Most maternity sessions include a partner, and kids or pets are welcome too.",
      },
    ],
  },
  {
    slug: "/family-photography",
    label: "Family",
    title: "Family Photographer in Saskatoon | JB Photo Studio",
    description:
      "Natural, relaxed family photos in Saskatoon. On location or in studio, starting at $250.00.",
    h1: "Family photographer in Saskatoon",
    intro: [
      "What I love most is catching a real moment between people, not a stiff pose. Family sessions are relaxed: I'll guide you a bit, but mostly I want everyone to feel normal so the good stuff happens on its own.",
      `We can shoot on location somewhere that means something to you, at one of Saskatoon's parks or river spots, or at ${STUDIO}.`,
    ],
    packageId: "family",
    bookType: "family",
    photos: [PHOTOS.PHOTO_05, PHOTOS.PHOTO_17, PHOTOS.PHOTO_16, PHOTOS.PHOTO_12, PHOTOS.PHOTO_04],
    sections: [
      {
        heading: "Groups, couples and kids",
        body: [
          "Family sessions cover anything from a couple to a big extended-family group. Kids don't need to sit still. Some of the best frames come from letting them be kids.",
        ],
      },
      {
        heading: "Get them printed",
        body: [
          "Photos hit differently a year, five years, ten years later. Every gallery comes with print-ready files, and I always push people to actually print their favourites and put them somewhere you'll see them.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much do family photos cost?",
        a: "Family sessions start at $250.00. A typical session includes around 20-25 edited, print-ready photos. Bigger groups or longer sessions get quoted when we book.",
      },
      {
        q: "Where do family sessions take place?",
        a: `Anywhere around Saskatoon that works for you, or at ${STUDIO}.`,
      },
      {
        q: "How long until we get our photos?",
        a: "Typical turnaround is 10-14 business days, delivered in a private online gallery.",
      },
      {
        q: "What if my kids won't cooperate?",
        a: "That's normal and totally fine. I keep things loose and work with the energy in the room instead of fighting it.",
      },
    ],
  },
  {
    slug: "/portrait-photography",
    label: "Portrait",
    title: "Portrait & Headshot Photographer in Saskatoon | JB Photo Studio",
    description:
      "Portrait and headshot photography in Saskatoon, in studio or on location. Sessions starting at $200.00.",
    h1: "Portrait photographer in Saskatoon",
    intro: [
      "Portraits for you: personal photos, model and creative work, or a headshot for work, dating or socials. I direct as much or as little as you want.",
      `Sessions are at ${STUDIO} or on location around Saskatoon.`,
    ],
    packageId: "portraits",
    bookType: "portraits",
    photos: [PHOTOS.PHOTO_02, PHOTOS.PHOTO_15, PHOTOS.PHOTO_13, PHOTOS.PHOTO_10, PHOTOS.PHOTO_09],
    sections: [
      {
        heading: "Studio portraits and headshots",
        body: [
          "The studio is set up for clean, consistent portraits and headshots, with controlled lighting that doesn't depend on the weather.",
        ],
      },
      {
        heading: "Creative and on-location",
        body: [
          "If you have an idea, a concept, or a place that suits you, bring it. Outdoor and creative sessions are some of my favourite shoots.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does a portrait session cost?",
        a: "Portrait sessions start at $200.00. A typical session includes around 15-20 edited, print-ready photos, and I'll confirm your quote once I know what you're after.",
      },
      {
        q: "Do you do headshots?",
        a: "Yes. Headshots are booked as a portrait session, in studio or on location.",
      },
      {
        q: "How long until I get my photos?",
        a: "Typical turnaround is 7-10 business days, delivered in a private online gallery.",
      },
      {
        q: "I'm awkward in front of the camera. Is that a problem?",
        a: "Not at all. Most people say that. I'll give you simple direction and keep it relaxed.",
      },
    ],
  },
  {
    slug: "/nightlife-photography",
    label: "Nightlife",
    title: "Nightlife & Event Photographer in Saskatoon | JB Photo Studio",
    description:
      "Nightclub, party and event photography in Saskatoon. Coverage starting at $275.00, sneak peeks in 24-48 hours.",
    h1: "Nightlife & event photographer in Saskatoon",
    intro: [
      "Club nights, DJ sets, parties and events. I shoot the energy of the room: the crowd, the performers, and the candid moments in between.",
      "Fast sneak peeks so you can post while the night is still fresh, then the full gallery a few days later.",
    ],
    packageId: "nightlife",
    bookType: "nightlife",
    photos: [PHOTOS.PHOTO_08, PHOTOS.PHOTO_14, PHOTOS.PHOTO_01, PHOTOS.PHOTO_11],
    sections: [
      {
        heading: "For venues, promoters and hosts",
        body: [
          "Coverage built for social media: wide crowd shots, performers on stage, and candid portraits of your guests. I work low-light and keep out of the way.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does nightlife or event coverage cost?",
        a: "Nightlife coverage starts at $275.00, usually with around 50-70 edited photos of the night. Final pricing depends on the event length and venue, and I'll quote it when we book.",
      },
      {
        q: "How fast do we get photos?",
        a: "A sneak peek in 24-48 hours, then the full gallery in 3-5 business days.",
      },
      {
        q: "Do you shoot private parties and other events?",
        a: "Yes. Tell me about the event, date and venue and I'll put together a quote.",
      },
    ],
  },
];

export function serviceHead(page: ServicePageContent) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
  return {
    meta: [
      { title: page.title },
      { name: "description", content: page.description },
      { property: "og:title", content: page.title },
      { property: "og:description", content: page.description },
      { property: "og:image", content: `${SITE.url}${page.photos[0].src}` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}${page.slug}` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  };
}


export function getServicePage(slug: string): ServicePageContent {
  return SERVICE_PAGES.find((item) => item.slug === slug)!;
}
