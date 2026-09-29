# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline for the Needle In A Haystack fan guide hub.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | Needle In A Haystack | Confirm right game, see launch window, reach first-day help | Identity / Release / Modes / FAQ | Hub | Homepage with quick answer, sources, internal links. |
| `/what-is-needle-in-a-haystack` | `src/data/pages/page-identity-overview.ts` | Guide | Needle In A Haystack | Confirm Steam co-op identity and separate from KCD / Tarkov / Stalker 2 / Windrose / House MD | Disambiguation / Release / Modes / Languages | Hub | id alias "guides" for template fixture. |
| `/release-date-and-price` | `src/data/pages/page-release-window-and-price.ts` | Status | Needle In A Haystack release date | Find launch date, launch window, and price status | Identity / Co-op / FAQ | Supporting hub | Steam AppID 5085740, release 2026-09-29; price unannounced. |
| `/co-op-and-multiplayer` | `src/data/pages/page-co-op-and-multiplayer.ts` | Guide | Needle In A Haystack co-op | Understand online co-op, party size, single-player | Modes / Equipment / FAQ | Supporting | 6-player online co-op + single-player. |
| `/game-modes` | `src/data/pages/page-game-modes.ts` | Explanation | Needle In A Haystack game modes | Learn Campaign and Free Play differences | Co-op / Equipment / How-to-find | Supporting | Two named launch modes. |
| `/equipment-and-progression` | `src/data/pages/page-equipment-and-progression.ts` | Explanation | Needle In A Haystack equipment | Understand money → equipment loop, metal detector, sorter | Modes / How-to-find / Collection | Supporting | Equipment roster unannounced as of 2026-09-29. |
| `/how-to-find-needles` | `src/data/pages/page-how-to-find-needles.ts` | Guide | Needle In A Haystack how to find needles | Practical ways to locate needles in the pile | Modes / Equipment / Collection | Supporting | New-player starter guidance. |
| `/collection-needle-types` | `src/data/pages/page-collection-needle-types.ts` | List | Needle In A Haystack needle types | Different needle types and collection reward loop | How-to-find / Equipment | Supporting | "Collect them all" loop. |
| `/not-kcd-tarkov-stalker-windrose` | `src/data/pages/page-disambiguation-vs-legacy-quests.ts` | Comparison | Needle In A Haystack not KCD | Disambiguate from KCD / Tarkov / Stalker 2 / Windrose / House MD | Identity / Release | Redirect | Legacy-quest redirect. |
| `/system-requirements` | `src/data/pages/page-system-requirements.ts` | Reference | Needle In A Haystack system requirements | Windows minimum / recommended specs | FAQ / Languages | Supporting | Windows 10/11, i5-3570 + 4 GB minimum. |
| `/languages` | `src/data/pages/page-languages-and-ui.ts` | Reference | Needle In A Haystack languages | 31 supported UI / audio / subtitle languages | System requirements / FAQ | Supporting | Full Interface, Full Audio, Subtitles coverage. |
| `/faq-and-troubleshooting` | `src/data/pages/page-launch-faq-and-troubleshooting.ts` | Reference | Needle In A Haystack launch FAQ | Resolve first-day save and Steam runtime ID issues | Release / System / Languages | Answer hub | Save-file restore error, Steam Cloud / co-op connection. |
| `/wiki` | `src/data/pages/page-wiki.ts` | Wiki | Needle In A Haystack wiki | Reference wiki for Needle In A Haystack | Guides / FAQ | Hub | Auxiliary template fixture page. |
| `/faq` | `src/data/pages/page-faq.ts` | FAQ | Needle In A Haystack FAQ | Top launch questions | Guides / Release | Answer hub | Auxiliary template fixture page. |
| `/about` | `src/data/pages/page-about.ts` | About | About Needle In A Haystack Hub | Trust and editorial policy | Contact / FAQ | Trust | Auxiliary template fixture page. |

## Generated Route Families

- Fixed and tool pages: authored in `src/data/pages/page-*.ts` with explicit locale and final URL.
- Entity Hubs and details: not used for this site (Planning Contract declares `entity_families: []`).
- Final route inventory: `npm run routes:manifest`.
- Primary locale remains on root paths.
