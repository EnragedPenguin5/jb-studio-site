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
  | "PHOTO_14";

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
} as const satisfies Record<PhotoId, Photo>;

export const HERO = PHOTOS.PHOTO_06;

export const FEATURED: Photo[] = [
  PHOTOS.PHOTO_02,
  PHOTOS.PHOTO_05,
  PHOTOS.PHOTO_08,
  PHOTOS.PHOTO_03,
  PHOTOS.PHOTO_07,
  PHOTOS.PHOTO_04,
];

export const GALLERIES = [
  {
    id: "portraits",
    name: "Portraits",
    photos: [
      PHOTOS.PHOTO_02,
      PHOTOS.PHOTO_04,
      PHOTOS.PHOTO_09,
      PHOTOS.PHOTO_10,
      PHOTOS.PHOTO_13,
    ],
  },
  {
    id: "family",
    name: "Family",
    photos: [
      PHOTOS.PHOTO_05,
      PHOTOS.PHOTO_06,
      PHOTOS.PHOTO_07,
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

export const ABOUT_PHOTO = PHOTOS.PHOTO_03;
