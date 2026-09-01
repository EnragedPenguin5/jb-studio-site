/**
 * Swap any image by replacing the matching file in public/photos/
 * (PHOTO_01.jpg, PHOTO_02.jpg, …). Tell me the id and I will swap it.
 *
 * PHOTO_01  DJs on stage
 * PHOTO_02  Portrait, man
 * PHOTO_03  Portrait in the woods
 * PHOTO_04  Couple
 * PHOTO_05  Family outdoors
 * PHOTO_06  Maternity, studio (hero)
 * PHOTO_07  Maternity, floral set
 * PHOTO_08  Nightlife, dance floor
 */
export type PhotoId =
  | "PHOTO_01"
  | "PHOTO_02"
  | "PHOTO_03"
  | "PHOTO_04"
  | "PHOTO_05"
  | "PHOTO_06"
  | "PHOTO_07"
  | "PHOTO_08";

export type Photo = {
  id: PhotoId;
  src: `/photos/${PhotoId}.jpg`;
  alt: string;
  width: number;
  height: number;
};

function photo(id: PhotoId, alt: string, width: number, height: number): Photo {
  return { id, src: `/photos/${id}.jpg`, alt, width, height };
}

export const PHOTOS = {
  PHOTO_01: photo("PHOTO_01", "Two DJs on stage under blue lights", 1920, 1371),
  PHOTO_02: photo("PHOTO_02", "Portrait of a man in a patterned shirt", 1536, 1920),
  PHOTO_03: photo("PHOTO_03", "Portrait from behind on a wooded path", 1536, 1920),
  PHOTO_04: photo("PHOTO_04", "Couple at an event", 1536, 1920),
  PHOTO_05: photo("PHOTO_05", "Family gathered outdoors", 1371, 1920),
  PHOTO_06: photo("PHOTO_06", "Maternity couple in studio", 1920, 1280),
  PHOTO_07: photo("PHOTO_07", "Maternity couple with a floral studio set", 1371, 1920),
  PHOTO_08: photo("PHOTO_08", "Dance floor at night", 1536, 1920),
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
    photos: [PHOTOS.PHOTO_03, PHOTOS.PHOTO_02, PHOTOS.PHOTO_04],
  },
  {
    id: "family",
    name: "Family",
    photos: [PHOTOS.PHOTO_05, PHOTOS.PHOTO_06, PHOTOS.PHOTO_07],
  },
  {
    id: "nightlife",
    name: "Nightlife",
    photos: [PHOTOS.PHOTO_01, PHOTOS.PHOTO_08],
  },
] as const;

export const ABOUT_PHOTO = PHOTOS.PHOTO_03;
