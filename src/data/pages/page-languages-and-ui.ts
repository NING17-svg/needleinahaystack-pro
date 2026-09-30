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
  "quickAnswer": "Needle In A Haystack ships with 31 supported languages on Steam for full interface, full audio, and subtitles at launch on September 29, 2026. English is the reference locale for community support and developer posts on Steam Discussions. Audio is included in every supported language on the Steam store page, so switching the Steam language does not produce a silent build. Content-translation coverage beyond the interface chrome has not been broken out publicly and is labelled unconfirmed.",
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
      "id": "languages-and-ui-full-list-of-needle-in-a-haystack-languages",
      "type": "prose",
      "heading": "Full List of Needle In A Haystack Languages",
      "body": "The Steam store page for AppID 5085740 lists every supported language under Interface, Full Audio, and Subtitles. The launch package treats Interface, Full Audio, and Subtitles as one bundle: changing the Steam language flips UI text, voice lines, and subtitle text in the same selection. The following 31 languages are currently flagged at full UI / full audio / subtitles on the Steam store page as of the 2026-09-29 snapshot:\n\n- English\n- Simplified Chinese\n- Traditional Chinese\n- Japanese\n- Korean\n- French\n- French (Canada)\n- Italian\n- German\n- Spanish (Spain)\n- Spanish (Latin America)\n- Portuguese (Portugal)\n- Portuguese (Brazil)\n- Russian\n- Polish\n- Turkish\n- Dutch\n- Ukrainian\n- Czech\n- Hungarian\n- Romanian\n- Bulgarian\n- Greek\n- Finnish\n- Swedish\n- Norwegian\n- Danish\n- Thai\n- Vietnamese\n- Indonesian\n- Arabic\n\nIf your native language is not on this list, the Steam store currently treats it as not officially supported for the launch build. Community translation layers, browser translation, or external mod files are not part of the official build and are not endorsed by the developer."
    },
    {
      "id": "languages-and-ui-english-only-audio-caveats",
      "type": "prose",
      "heading": "English-Only Audio Caveats",
      "body": "The Steam store snapshot does not separate \"voice lines dubbed in language X\" from \"interface translated to language X\" — every supported language is flagged at full audio on the store page. English remains the primary voice-over language based on the developer's Steam Discussions activity in English, and full multilingual voiceover coverage has not been confirmed for any non-English locale. If a voiceover line is missing in your selected language, the game falls back to English audio with translated subtitles; this fallback has not been publicly itemized."
    },
    {
      "id": "languages-and-ui-changing-your-language-in-steam",
      "type": "prose",
      "heading": "Changing Your Language in Steam",
      "body": "The launch build follows the standard Steam language pipeline: change the language under Steam → Settings → Interface → Language, restart Steam, then launch Needle In A Haystack. In-game text respects the Steam-wide setting; no separate in-game language selector is confirmed on the launch store page. If the UI still appears in English after a Steam language change, verify the Steam client itself has been restarted (not just the game window) and that the overlay language matches. Players who prefer the original English text should keep English as their Steam library language regardless of the Windows system locale."
    },
    {
      "id": "languages-and-ui-audio-and-subtitle-behaviour",
      "type": "prose",
      "heading": "Audio and Subtitle Behaviour",
      "body": "Because the launch build ships full audio for every supported language on the Steam listing, no separate language pack install is needed to hear voice lines. Subtitle text tracks the interface language automatically; there is no documented toggle to mix English audio with translated subtitles or vice versa. Family Sharing users inherit the library owner's Steam language selection, which can cause UI text to differ from a guest's Windows system language."
    },
    {
      "id": "languages-and-ui-what-is-and-is-not-translated",
      "type": "prose",
      "heading": "What Is and Is Not Translated",
      "body": "The Steam store listing covers interface chrome, in-game menu text, and subtitle lines, but does not guarantee that every word of community-generated content (workshop item descriptions or user-named saves) has been translated. The launch store page does not list a separate \"in-game text\" tier distinct from the Interface tier, so reviewers should treat the Interface column as the source of truth for what the player reads on screen."
    },
    {
      "id": "languages-and-ui-content-locale-coverage-caveat",
      "type": "prose",
      "heading": "Content-Locale Coverage Caveat",
      "body": "The Steam store snapshot for Needle In A Haystack languages treats all 31 locales as full UI / full audio / subtitles, but the developer has not published a side-by-side coverage matrix showing which languages receive fully localized narrative copy versus translated menus only., that content-translation status is labelled unconfirmed and may be revised after post-launch testing. Players who depend on a specific narrative language should verify coverage in the Steam Discussions thread tagged for that language before launch."
    },
    {
      "id": "languages-and-ui-does-language-affect-gameplay",
      "type": "prose",
      "heading": "Does Language Affect Gameplay",
      "body": "The hidden-object co-op loop is language-independent: finding needles in the hay pile, earning money, buying equipment, and collecting needle types work the same regardless of locale. Localized strings only change the text you read and the audio you hear. Save files, achievements, Steam Cloud syncs, and Family Sharing restrictions do not vary by language. If you start the game in one language and switch later, your save file remains compatible because the runtime data is not language-locked."
    },
    {
      "id": "languages-and-ui-if-a-language-is-missing",
      "type": "prose",
      "heading": "If a Language Is Missing",
      "body": "If your preferred language is not on the 31-language list, the only supported path is to play in one of the officially supported languages. The developer has not announced a post-launch language expansion, and Steam does not accept user-contributed translations as an official tier for retail launch. Community-run guides in other languages may help with menu navigation, but they cannot replace the official interface translation. Subscribe to the Steam Discussions thread tagged for your language for any future expansion announcement."
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
