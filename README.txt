JB Studio
Photographer site for Johnathon, Saskatoon.

WHAT IS IN HERE
- src/            pages and layout
- public/photos/  the 8 web-sized photos used on the site
- src/lib/site.ts email, Instagram, prices, turnaround
- src/lib/photos.ts  which photo is the hero, featured, and galleries

BEFORE YOU PUBLISH
1. Open src/lib/site.ts and put in your real email.
   The contact form currently sends to hello@jbstudio.ca as a placeholder.
2. Fill in $PRICE and TURNAROUND on the Services packages in the same file.
3. Swap photos by replacing files in public/photos/ (keep the PHOTO_01.jpg names).

RUN IT ON YOUR COMPUTER
You need Node.js 22+.
  npm install
  npm run dev
Then open the local address it prints.

PUT IT ON THE INTERNET
Connect this folder to GitHub and import it into Vercel, or from a computer:
  npm install
  npm run build

PHOTOS
PHOTO_01  DJs
PHOTO_02  Portrait, man
PHOTO_03  Portrait in the woods
PHOTO_04  Couple at an event
PHOTO_05  Family outdoors
PHOTO_06  Maternity, studio (hero)
PHOTO_07  Maternity, floral set
PHOTO_08  Nightlife, dance floor
