export type PhotoId =
  | "PHOTO_01"
  | "PHOTO_02"
  | "PHOTO_03"
  | "PHOTO_04"
  | "PHOTO_05"
  | "PHOTO_06"
  | "PHOTO_07"
  | "PHOTO_08"
  | "PHOTO_09"
  | "PHOTO_10"
  | "PHOTO_11"
  | "PHOTO_12"
  | "PHOTO_13"
  | "PHOTO_14"
  | "PHOTO_15"
  | "PHOTO_16"
  | "PHOTO_17"
  | "PHOTO_18"
  | "PHOTO_19"
  | "PHOTO_20"
  | "PHOTO_21"
  | "PHOTO_22"
  | "PHOTO_23"
  | "PHOTO_24"
  | "PHOTO_25"
  | "ABOUT";

export type Photo = {
  id: PhotoId;
  src: string;
  alt: string;
  width: number;
  height: number;
};

/**
 * File names in public/photos/ are descriptive on purpose (Google reads them).
 * To swap a photo, replace the file but keep its name, or update the name here.
 */
function photo(id: PhotoId, file: string, alt: string, width: number, height: number): Photo {
  return { id, src: `/photos/${file}.jpg`, alt, width, height };
}

export const PHOTOS = {
  PHOTO_01: photo("PHOTO_01", "saskatoon-nightlife-djs-on-stage", "Two DJs on stage under blue lights at a Saskatoon club night", 1920, 1371),
  PHOTO_02: photo("PHOTO_02", "saskatoon-portrait-man-patterned-shirt", "Portrait of a man in a patterned shirt, Saskatoon portrait session", 1536, 1920),
  PHOTO_03: photo("PHOTO_03", "saskatoon-outdoor-portrait-wooded-path", "Outdoor portrait from behind on a wooded path near Saskatoon", 1536, 1920),
  PHOTO_04: photo("PHOTO_04", "saskatoon-couple-event-photo", "Couple photographed at an event in Saskatoon", 1536, 1920),
  PHOTO_05: photo("PHOTO_05", "saskatoon-family-photographer-outdoors", "Family gathered outdoors during a Saskatoon family photo session", 1371, 1920),
  PHOTO_06: photo("PHOTO_06", "saskatoon-maternity-studio-photo", "Maternity couple in the studio, Saskatoon maternity photography", 1920, 1280),
  PHOTO_07: photo("PHOTO_07", "saskatoon-maternity-floral-studio-set", "Maternity couple with a floral studio set in Saskatoon", 1371, 1920),
  PHOTO_08: photo("PHOTO_08", "saskatoon-nightclub-dance-floor", "Packed dance floor at a Saskatoon nightclub", 1536, 1920),
  PHOTO_09: photo("PHOTO_09", "saskatoon-creative-portrait-forest", "Creative portrait in a forest holding a bar of soap", 1536, 1920),
  PHOTO_10: photo("PHOTO_10", "saskatoon-portrait-woman-with-camera", "Woman smiling while holding a camera, Saskatoon portrait", 1536, 1920),
  PHOTO_11: photo("PHOTO_11", "saskatoon-event-photographer-performer", "Man performing into a microphone at a Saskatoon gallery event", 1536, 1920),
  PHOTO_12: photo("PHOTO_12", "saskatoon-family-photo-kids-baseball", "Two young baseball players at a fence, Saskatoon family photos", 1536, 1920),
  PHOTO_13: photo("PHOTO_13", "saskatoon-portrait-heart-sunglasses", "Woman peering over heart-shaped sunglasses, Saskatoon portrait", 1536, 1920),
  PHOTO_14: photo("PHOTO_14", "saskatoon-nightclub-photographer-smoke-lights", "Man exhaling smoke under purple club lighting in Saskatoon", 1536, 1920),
  PHOTO_15: photo("PHOTO_15", "saskatoon-outdoor-portrait-man-orange-tee", "Smiling man in a backwards cap and orange tee, outdoor portrait in Saskatoon", 1536, 1920),
  PHOTO_16: photo("PHOTO_16", "saskatoon-group-portrait-honda-civic", "Group of friends posing with a silver Honda Civic on a tree-lined Saskatoon street", 1536, 1920),
  PHOTO_17: photo("PHOTO_17", "saskatoon-family-photo-girl-with-dog", "Smiling girl crouched beside a Bernese mountain dog, Saskatoon family photos", 1536, 1920),
  PHOTO_18: photo("PHOTO_18", "saskatoon-maternity-photo-winter-window", "Expecting mother in a white dress by a window overlooking the river in winter", 1536, 1920),
  PHOTO_19: photo("PHOTO_19", "saskatoon-maternity-couple-colourful-wall", "Maternity couple embracing in front of a colourful art wall in Saskatoon", 1536, 1920),
  PHOTO_20: photo("PHOTO_20", "saskatoon-maternity-couple-seated-studio", "Maternity couple seated together in the studio, hands on the bump", 1536, 1920),
  PHOTO_21: photo("PHOTO_21", "saskatoon-maternity-couple-pink-cloud-set", "Laughing maternity couple on a pink cloud and flower studio set in Saskatoon", 1536, 1920),
  PHOTO_22: photo("PHOTO_22", "saskatoon-studio-portrait-cyan-gobo-red-sunglasses", "Studio portrait of a man in red round sunglasses, lit in cyan with striped gobo shadows, Saskatoon", 1536, 1920),
  PHOTO_23: photo("PHOTO_23", "saskatoon-creative-studio-portrait-dot-gobo", "Creative studio portrait with a dotted gobo light pattern on a black backdrop in Saskatoon", 1920, 1440),
  PHOTO_24: photo("PHOTO_24", "saskatoon-studio-portrait-leather-jacket-lattice-gobo", "Man in a vintage leather flight jacket lit through a lattice gobo, Saskatoon studio portrait", 1600, 1600),
  PHOTO_25: photo("PHOTO_25", "saskatoon-headshot-photographer-studio-grey-backdrop", "Studio headshot of a smiling man with glasses on a grey backdrop, Saskatoon headshot photographer", 1536, 1920),
} as const satisfies Record<Exclude<PhotoId, "ABOUT">, Photo>;

export const HERO = PHOTOS.PHOTO_06;

// Homepage carousel: one of each kind of work, alternating so no two
// neighbours look alike. The first photo sits in front on page load.
export const FEATURED: Photo[] = [
  PHOTOS.PHOTO_02, // portrait
  PHOTOS.PHOTO_05, // family
  PHOTOS.PHOTO_22, // creative studio portrait
  PHOTOS.PHOTO_07, // maternity, studio
  PHOTOS.PHOTO_08, // nightlife
  PHOTOS.PHOTO_25, // headshot
  PHOTOS.PHOTO_17, // family, kids and pets
  PHOTOS.PHOTO_19, // maternity, outdoors
];

export const GALLERIES = [
  {
    id: "portraits",
    name: "Portraits",
    photos: [
      PHOTOS.PHOTO_22,
      PHOTOS.PHOTO_02,
      PHOTOS.PHOTO_25,
      PHOTOS.PHOTO_23,
      PHOTOS.PHOTO_15,
      PHOTOS.PHOTO_24,
      PHOTOS.PHOTO_04,
      PHOTOS.PHOTO_09,
      PHOTOS.PHOTO_10,
      PHOTOS.PHOTO_13,
      PHOTOS.PHOTO_03,
    ],
  },
  {
    id: "maternity",
    name: "Maternity",
    photos: [
      PHOTOS.PHOTO_07,
      PHOTOS.PHOTO_18,
      PHOTOS.PHOTO_19,
      PHOTOS.PHOTO_21,
      PHOTOS.PHOTO_20,
      PHOTOS.PHOTO_06,
    ],
  },
  {
    id: "family",
    name: "Family",
    photos: [
      PHOTOS.PHOTO_05,
      PHOTOS.PHOTO_17,
      PHOTOS.PHOTO_16,
      PHOTOS.PHOTO_12,
    ],
  },
  {
    id: "nightlife",
    name: "Nightlife",
    photos: [
      PHOTOS.PHOTO_01,
      PHOTOS.PHOTO_08,
      PHOTOS.PHOTO_11,
      PHOTOS.PHOTO_14,
    ],
  },
] as const;

export const ABOUT_PHOTO = photo(
  "ABOUT",
  "johnathon-saskatoon-photographer-headshot",
  "Johnathon, the photographer behind JB Photo Studio in Saskatoon",
  1600,
  1600,
);
