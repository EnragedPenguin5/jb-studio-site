import { TRACKING } from "@/lib/site";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

/**
 * Google Analytics 4 + Microsoft Clarity tags, rendered in <head>.
 * Page views on client-side navigation are picked up automatically by GA4's
 * enhanced measurement ("page changes based on browser history events").
 */
export function AnalyticsTags() {
  const ga = TRACKING.ga4MeasurementId;
  const clarity = TRACKING.clarityProjectId;

  return (
    <>
      {ga ? (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${ga}');`,
            }}
          />
        </>
      ) : null}
      {clarity ? (
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${clarity}");`,
          }}
        />
      ) : null}
    </>
  );
}

/** Fire a GA4 event if the tag is loaded. Never throws. */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  try {
    window.gtag?.("event", name, params);
  } catch {
    // analytics must never break the site
  }
}
