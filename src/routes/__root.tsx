import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { AnalyticsTags } from "@/components/analytics";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PACKAGES, SITE } from "@/lib/site";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE.name },
      { name: "theme-color", content: "#080808" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      // Fallback icon: the platform-generated /__grok/icon-180.png 404s on
      // some deploy targets, so ship a real one alongside it.
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    ],
  }),
  component: RootDocument,
});

// LocalBusiness structured data so Google can connect this site to local
// search / Google Business Profile results for "photographer Saskatoon".
const prices = PACKAGES.map((item) => Number(item.startingPrice.replace(/[^0-9.]/g, "")));
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  alternateName: SITE.brand,
  image: `${SITE.url}/og.jpg`,
  logo: `${SITE.url}/apple-touch-icon.png`,
  url: SITE.url,
  email: SITE.email,
  description: SITE.positioning,
  founder: { "@type": "Person", name: SITE.photographer },
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  areaServed: { "@type": "City", name: `${SITE.city}, ${SITE.region}` },
  priceRange: `$${Math.min(...prices).toFixed(2)}-$${Math.max(...prices).toFixed(2)}`,
  knowsAbout: ["Portrait photography", "Family photography", "Maternity photography", "Nightlife photography"],
  sameAs: [SITE.instagramUrl],
};

function RootDocument() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
        <AnalyticsTags />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="bg-bg text-fg">
        <PreviewHostBridge />
        <AuthProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg"
          >
            Skip to content
          </a>
          <SiteHeader />
          <div id="main">
            <Outlet />
          </div>
          <SiteFooter />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
