import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Needle In A Haystack",
  brandMark: "NH",
  gameName: "Needle In A Haystack",
  domain: "needleinahaystack.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://needleinahaystack.pro").replace(/\/$/, ""),
  description:
    "Unofficial fan guide hub for Needle In A Haystack — identity, release, co-op modes, equipment, and launch-day FAQs.",
  tagline: "Guides, release info, co-op modes, and launch FAQs for Needle In A Haystack.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "Needle In A Haystack Fan Guide",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Official Steam store page",
      href: "https://store.steampowered.com/app/5085740",
      description: "Steam store page for Needle In A Haystack (AppID 5085740).",
    },
  ],
  disclaimer:
    "This is an unofficial fan guide for Needle In A Haystack. All facts are sourced from the Steam store page, SteamDB, and the developer / community Steam Discussions as of 2026-09-29.",
};
