import type { PageContent } from "@/types/content";

export const languagesAndUiPage: PageContent = {
  "id": "languages-and-ui",
  "translationKey": "languages-and-ui",
  "locale": "en-US",
  "routeKind": "fixed",
  "slug": "languages",
  "url": "/languages",
  "pageType": "wiki",
  "presentation": {
    "shell": "content",
    "variant": "reading-right-rail"
  },
  "h1": "Needle In A Haystack Languages and UI",
  "seoTitle": "Needle In A Haystack Languages and UI: Full Support",
  "metaDescription": "Needle In A Haystack supports 31 languages on Steam for UI, audio, and subtitles. This 2026 launch reference lists every supported language and any audio caveats.",
  "summary": "Confirm 31 supported UI / audio / subtitle languages and any English-only audio caveats.",
  "hero": {
    "eyebrow": "Needle In A Haystack",
    "subtitle": "Confirm 31 supported UI / audio / subtitle languages and any English-only audio caveats.",
    "ctas": [
      {
        "label": "Needle In A Haystack identity, release window, and dev attribution",
        "href": "/what-is-needle-in-a-haystack/"
      },
      {
        "label": "Needle In A Haystack release date, price, and Steam unlock timing",
        "href": "/release-date-and-price/"
      }
    ]
  },
  "quickAnswer": "Needle In A Haystack Languages at a Glance\n\nNeedle In A Haystack ships with 31 supported languages on Steam for full interface, full audio, and subtitles at launch on September 29, 2026. English is the reference locale for community support and developer posts on Steam Discussions. Audio is included in every supported language on the Steam store page, so switching the Steam language does not produce a silent build. Content-translation coverage beyond the interface chrome has not been broken out publicly and is labelled unconfirmed as of 2026-09-29.\n\nFull List of Needle In A Haystack Languages\n",
  "keyFacts": [
    {
      "label": "Game",
      "value": "Needle In A Haystack"
    },
    {
      "label": "Developer / Publisher",
      "value": "NoGlyph"
    },
    {
      "label": "Steam AppID",
      "value": "5085740"
    },
    {
      "label": "Research date",
      "value": "2026-09-29"
    }
  ],
  "modules": [
    {
      "id": "quick-answer",
      "type": "prose",
      "heading": "Needle In A Haystack Languages at a Glance",
      "body": "Needle In A Haystack Languages at a Glance\n\nNeedle In A Haystack ships with 31 supported languages on Steam for full interface, full audio, and subtitles at launch on September 29, 2026. English is the reference locale for community support and developer posts on Steam Discussions. Audio is included in every supported language on the Steam store page, so switching the Steam language does not produce a silent build. Content-translation coverage beyond the interface chrome has not been broken out publicly and is labelled unconfirmed as of 2026-09-29.\n\nFull List of Needle In A Haystack Languages\n\nThe Steam store page for AppID 5085740 lists every supported language under Interface, Full Audio, and Subtitles. The launch package treats Interface, Full Audio, and Subtitles as one bundle: changing the Steam language flips UI text, voice lines, and subtitle text in the same selection. The following 31 languages are currently flagged at full UI / full audio / subtitles on the Steam store page as of the 2026-09-29 snapshot:\n\n- English\n- Simplified Chinese\n- Traditional Chinese\n- Japanese\n- Korean\n- French\n- French (Canada)\n- Italian\n- German\n- Spanish (Spain)\n- Spanish (Latin America)\n- Portuguese (Portugal)\n- Portuguese (Brazil)\n- Russian\n- Polish\n- Turkish\n- Dutch\n- Ukrainian\n- Czech\n- Hungarian\n- Romanian\n- Bulgarian\n- Greek\n- Finnish\n- Swedish\n- Norwegian\n- Danish\n- Thai\n- Vietnamese\n- Indonesian\n- Arabic\n\nIf your native language is not on this list, the Steam store currently treats it as not officially supported for the launch build. Community translation layers, browser translation, or external mod files are not part of the official build and are not endorsed by the developer.\n\nEnglish-Only Audio Caveats\n\nThe Steam store snapshot does not separate \"voice lines dubbed in language X\" from \"interface translated to language X\" — every supported language is flagged at full audio on the store page. English remains the primary voice-over language based on the developer's Steam Discussions activity in English, and full multilingual voiceover coverage has not been confirmed for any non-English locale as of 2026-09-29. If a voiceover line is missing in your selected language, the game falls back to English audio with translated subtitles; this fallback has not been publicly itemized.\n\nChanging Your Language in Steam\n\nThe launch build follows the standard Steam language pipeline: change the language under Steam → Settings → Interface → Language, restart Steam, then launch Needle In A Haystack. In-game text respects the Steam-wide setting; no separate in-game language selector is confirmed on the launch store page. If the UI still appears in English after a Steam language change, verify the Steam client itself has been restarted (not just the game window) and that the overlay language matches. Players who prefer the original English text should keep English as their Steam library language regardless of the Windows system locale.\n\nAudio and Subtitle Behaviour\n\nBecause the launch build ships full audio for every supported language on the Steam listing, no separate language pack install is needed to hear voice lines. Subtitle text tracks the interface language automatically; there is no documented toggle to mix English audio with translated subtitles or vice versa. Family Sharing users inherit the library owner's Steam language selection, which can cause UI text to differ from a guest's Windows system language.\n\nWhat Is and Is Not Translated\n\nThe Steam store listing covers interface chrome, in-game menu text, and subtitle lines, but does not guarantee that every word of community-generated content (workshop item descriptions or user-named saves) has been translated. The launch store page does not list a separate \"in-game text\" tier distinct from the Interface tier, so reviewers should treat the Interface column as the source of truth for what the player reads on screen.\n\nContent-Locale Coverage Caveat\n\nThe Steam store snapshot for Needle In A Haystack languages treats all 31 locales as full UI / full audio / subtitles, but the developer has not published a side-by-side coverage matrix showing which languages receive fully localized narrative copy versus translated menus only. As of 2026-09-29, that content-translation status is labelled unconfirmed and may be revised after post-launch testing. Players who depend on a specific narrative language should verify coverage in the Steam Discussions thread tagged for that language before launch.\n\nDoes Language Affect Gameplay\n\nThe hidden-object co-op loop is language-independent: finding needles in the hay pile, earning money, buying equipment, and collecting needle types work the same regardless of locale. Localized strings only change the text you read and the audio you hear. Save files, achievements, Steam Cloud syncs, and Family Sharing restrictions do not vary by language. If you start the game in one language and switch later, your save file remains compatible because the runtime data is not language-locked.\n\nIf a Language Is Missing\n\nIf your preferred language is not on the 31-language list, the only supported path is to play in one of the officially supported languages. The developer has not announced a post-launch language expansion as of 2026-09-29, and Steam does not accept user-contributed translations as an official tier for retail launch. Community-run guides in other languages may help with menu navigation, but they cannot replace the official interface translation. Subscribe to the Steam Discussions thread tagged for your language for any future expansion announcement."
    },
    {
      "id": "sources",
      "type": "callout",
      "title": "Sources cited",
      "tone": "tip",
      "body": "Steam store — Needle In A Haystack (official/store, checked 2026-09-29): 31 supported languages, Full Interface / Full Audio / Subtitles, Windows-only system requirements, Steam Achievements / Cloud / Leaderboards / Family Sharing as confirmed launch features.\nSteam Discussions — Needle In A Haystack (community/video, checked 2026-09-29): developer posts in English confirm English as the reference locale for community support.\nSteamDB — AppID 5085740 (reference, checked 2026-09-29): metadata mirror cross-checks the 31-language list, AppID, and developer attribution.\nGame-check brief — Needle In A Haystack (reference, checked 2026-09-29): first-launch brief recording release date, Steam rank momentum, and identity for the build-now decision."
    },
    {
      "id": "internal-links",
      "type": "entity-grid",
      "heading": "Related pages",
      "items": [
        {
          "title": "Needle In A Haystack identity, release window, and dev attribution",
          "summary": "identity-overview confirms the correct game and developer for the language list.",
          "href": "/what-is-needle-in-a-haystack/"
        },
        {
          "title": "Needle In A Haystack release date, price, and Steam unlock timing",
          "summary": "release-window-and-price ties the launch language build to the Sep 29, 2026 release window.",
          "href": "/release-date-and-price/"
        }
      ]
    },
    {
      "id": "fact-boundaries",
      "type": "callout",
      "title": "Fact boundaries",
      "tone": "caution",
      "body": "Fact Boundaries\n\n- 31 supported languages at full UI / full audio / subtitles is a dated 2026-09-29 snapshot from the Steam store page; the developer has not published a per-language narrative coverage matrix, so content-translation status is labelled unconfirmed.\n- English remains the developer reference locale for Steam Discussions; full multilingual voiceover for non-English languages is not separately confirmed and is treated as unconfirmed.\n- Post-launch language expansion has not been announced; do not infer new languages from community translation mods or browser translation.\n- Console / PS5 / Xbox availability, Steam Deck verified status, and full achievement list are not announced as of 2026-09-29 and are not covered by this languages reference."
    }
  ],
  "faqIds": [
    "faq-45",
    "faq-46",
    "faq-47",
    "faq-48",
    "faq-49",
    "faq-50"
  ],
  "relatedPageIds": [
    "guides",
    "release-window-and-price"
  ],
  "schemaTypes": [
    "Article",
    "BreadcrumbList",
    "FAQPage"
  ],
  "sourceStatus": "official",
  "lastReviewed": "2026-09-29"
};
