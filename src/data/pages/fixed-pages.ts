import type { PageContent } from "@/types/content";

import { coOpAndMultiplayerPage } from "./page-co-op-and-multiplayer";
import { collectionNeedleTypesPage } from "./page-collection-needle-types";
import { disambiguationVsLegacyQuestsPage } from "./page-disambiguation-vs-legacy-quests";
import { equipmentAndProgressionPage } from "./page-equipment-and-progression";
import { gameModesPage } from "./page-game-modes";
import { howToFindNeedlesPage } from "./page-how-to-find-needles";
import { guidesPage } from "./page-guides";
import { languagesAndUiPage } from "./page-languages-and-ui";
import { launchFaqAndTroubleshootingPage } from "./page-launch-faq-and-troubleshooting";
import { releaseWindowAndPricePage } from "./page-release-window-and-price";
import { systemRequirementsPage } from "./page-system-requirements";
import { wikiPage } from "./page-wiki";
import { aboutPage } from "./page-about";
import { faqPage } from "./page-faq";

export const fixedPages: PageContent[] = [
  {
    "id": "co-op-and-multiplayer",
    "translationKey": "co-op-and-multiplayer",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "co-op-and-multiplayer",
    "url": "/co-op-and-multiplayer",
    "pageType": "guides",
    "presentation": {
      "shell": "content",
      "variant": "reading-right-rail"
    },
    "h1": "Needle In A Haystack Co-op: Six-Player Online Multiplayer On Steam",
    "seoTitle": "Needle In A Haystack Co-op - 6-Player Online Multiplayer On Steam",
    "metaDescription": "Needle In A Haystack supports six-player online co-op and a single-player option on Steam (AppID 5085740). Console and PS5 status unannounced as of 2026-09-29.",
    "summary": "Understand online co-op / single-player split, party size, and cross-platform availability.",
    "hero": {
      "eyebrow": "Needle In A Haystack",
      "subtitle": "Understand online co-op / single-player split, party size, and cross-platform availability.",
      "ctas": [
        {
          "label": "Needle In A Haystack release date and price",
          "href": "/release-date-and-price/"
        },
        {
          "label": "Needle In A Haystack system requirements",
          "href": "/system-requirements/"
        }
      ]
    },
    "quickAnswer": "Needle In A Haystack supports online co-op for up to six players on Steam, plus a single-player option for players who want to run sessions alone. Online co-op requires a broadband Internet connection. The Steam store lists Online Co-op (up to six), Single-player, Steam Achievements, Steam Cloud, Steam Leaderboards, and Family Sharing. Console availability (Xbox, PS5) and Steam Deck required status are not announced.",
    "keyFacts": [
      {
        "label": "Online Co-op",
        "value": "up to 6 players in one session"
      },
      {
        "label": "Single-player",
        "value": "yes"
      },
      {
        "label": "Steam Achievements",
        "value": "supported"
      },
      {
        "label": "Steam Cloud",
        "value": "supported"
      }
    ],
    "modules": [
      {
        "id": "co-op-and-multiplayer-needle-in-a-haystack-party-size-and-online-co-op-features",
        "type": "prose",
        "heading": "Needle In A Haystack Party Size And Online Co-op Features",
        "body": "The Steam store page lists the co-op party size and the Steam-side features that come with the launch build:\n\n- Online Co-op: up to 6 players in one session\n- Single-player: yes\n- Steam Achievements: supported\n- Steam Cloud: supported\n- Steam Leaderboards: supported\n- Family Sharing: supported\n- Cross-platform multiplayer: not announced\n\nThe Online Co-op player ceiling is six players, which matches the developer store copy that talks about spreading out, digging together, and arguing over which part of the pile is promising. The Family Sharing line means a primary owner can share access with a Steam family member on a separate account, and Steam Cloud means the save file syncs between machines the same owner plays on."
      },
      {
        "id": "co-op-and-multiplayer-single-player-option-for-solo-runs",
        "type": "prose",
        "heading": "Single-Player Option For Solo Runs",
        "body": "The Single-player tag on the Steam store page means players can run the same hay pile without joining a co-op session. This is useful for players who want to learn the loop, try a new equipment purchase, or finish a personal collection goal before bringing friends online. The single-player mode uses the same Campaign and Free Play modes described on the Game Modes page."
      },
      {
        "id": "co-op-and-multiplayer-system-and-connection-requirements-for-co-op",
        "type": "prose",
        "heading": "System And Connection Requirements For Co-op",
        "body": "Online co-op requires a broadband Internet connection per the Steam store page. There is no offline co-op mode listed. For local play, players connect to each other through Steam rather than through a local area network.\n\nThe Windows-only system requirements for the launch build are:\n\n- Minimum: Intel Core i5-3570, 4 GB RAM, NVIDIA GeForce GTX 1050, 4 GB storage, Windows 10/11\n- Recommended: Intel Core i7-3770, 8 GB RAM, NVIDIA GeForce GTX 1650\n- Broadband Internet required for online co-op\n\nThe full Windows spec table lives on the System Requirements page. If your PC is on the minimum spec, online co-op should still launch, but the recommended spec gives more headroom for larger co-op sessions and longer Campaign runs."
      },
      {
        "id": "co-op-and-multiplayer-cross-platform-and-console-availability",
        "type": "prose",
        "heading": "Cross-Platform And Console Availability",
        "body": "Cross-platform multiplayer is not announced. The Steam store page shows Windows 10/11 only, and there is no Steam store listing for macOS, Linux, Xbox, PlayStation 5, or Nintendo Switch. NoGlyph has not posted a separate cross-platform announcement on Steam Discussions.\n\nWhat would change the cross-platform status:\n\n- A new Steam store listing for macOS or Linux from NoGlyph.\n- A console announcement from NoGlyph or a publishing partner on Steam Discussions.\n- A Steam Deck required-status update on the Steam store page.\n\nUntil one of those surfaces, treat any claim of Xbox, PS5, or Switch availability as not announced."
      },
      {
        "id": "co-op-and-multiplayer-family-sharing-and-steam-cloud-behavior",
        "type": "prose",
        "heading": "Family Sharing And Steam Cloud Behavior",
        "body": "Family Sharing is listed on the Steam store page and works through the standard Steam family library. A family member who has been invited can launch the build, and their session uses the same Steam Cloud save file the primary owner uses. Steam Leaderboards let you compare find rates and equipment milestones with other players on Steam. Steam Achievements unlock per Steam account, so a family member gets their own achievement list rather than sharing with the primary owner."
      },
      {
        "id": "co-op-and-multiplayer-first-day-co-op-tips",
        "type": "prose",
        "heading": "First-Day Co-op Tips",
        "body": "The launch-day Steam Discussions hub already shows first-day troubleshooting, including a save-file restore message (\"The farm could not be restored. Your save has been preserved. Please reload it.\") and a Steam runtime ID mismatch warning. If a co-op session fails to start, check the Launch FAQ And Troubleshooting page for the documented workarounds.\n\nA few co-op-specific tips for launch day:\n\n- Have the host run a solo session first to verify the build launches before inviting others.\n- Confirm each player is on Windows 10/11 with broadband; mixed-platform sessions are not part of the launch build.\n- Use Steam Cloud to recover save files after a host disconnect; the cloud sync covers the farm state.\n- If a Steam Achievements unlock fails to register, the Steam Discussions bug channel has a developer-tracked thread."
      }
    ],
    "faqIds": [
      "faq-5",
      "faq-6",
      "faq-7",
      "faq-8",
      "faq-9"
    ],
    "relatedPageIds": [
      "release-window-and-price",
      "system-requirements",
      "launch-faq-and-troubleshooting"
    ],
    "schemaTypes": [
      "Article",
      "BreadcrumbList",
      "FAQPage"
    ],
    "sourceStatus": "official",
    "lastReviewed": "2026-09-29"
  },
  {
    "id": "collection-needle-types",
    "translationKey": "collection-needle-types",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "collection-needle-types",
    "url": "/collection-needle-types",
    "pageType": "wiki",
    "presentation": {
      "shell": "content",
      "variant": "reading-right-rail"
    },
    "h1": "Needle In A Haystack Needle Types and Collection System",
    "seoTitle": "Needle In A Haystack Needle Types: Collection and Rewards",
    "metaDescription": "Discover the Needle In A Haystack needle types collection system. Learn what needle types are referenced, the collection reward loop, and how crazy looks fit in.",
    "summary": "See the different needle types and the collection reward loop in Needle In A Haystack.",
    "hero": {
      "eyebrow": "Needle In A Haystack",
      "subtitle": "See the different needle types and the collection reward loop in Needle In A Haystack.",
      "ctas": [
        {
          "label": "Equipment and progression loop",
          "href": "/equipment-and-progression/"
        },
        {
          "label": "Identity overview",
          "href": "/what-is-needle-in-a-haystack/"
        }
      ]
    },
    "quickAnswer": "Needle In A Haystack needle types are the second core collectible layer underneath the hay pile. The official Steam store description confirms that you collect different needle types, each with their own crazy look, for your collection. A full public roster of every needle type was not announced, so the page below documents what the developer has confirmed publicly, how the collection reward loop fits the money to equipment system, and what evidence would change the answer.",
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
        "id": "collection-needle-types-what-needle-in-a-haystack-needle-types-are-confirmed-so-far",
        "type": "prose",
        "heading": "What Needle In A Haystack Needle Types Are Confirmed So Far",
        "body": "The Steam store description for Needle In A Haystack explicitly states one sentence about the collection system: \"Collect them all - Collect different needle types, each with their own crazy look, for your collection.\" That single sentence is the entire confirmed public surface for the needle types. NoGlyph has not published a screenshot deck, an in-game list, or a wiki export that enumerates every needle type by name.\n\nWhat the confirmed sentence does tell you:\n\n- There is more than one needle type. The plural form \"different needle types\" means the collection is multi-entry, not a single needle per player.\n- Each needle type has a distinct visual identity. The phrase \"each with their own crazy look\" implies the type you collect changes how it appears in your collection menu.\n- There is a collection reward. The phrase \"for your collection\" implies the needle types feed into a structured collection view, not just an inventory list. Whether that reward is a single bonus at full completion or a per-type unlock was not announced.\n\nSteam Discussions threads on launch day confirm players are already encountering different needle visuals while digging, and they are posting screenshots of unusual finds. Those screenshots are community observations dated 2026-09-29, not an official type roster."
      },
      {
        "id": "collection-needle-types-the-three-things-the-collection-page-does-not-yet-tell-you",
        "type": "prose",
        "heading": "The Three Things the Collection Page Does Not Yet Tell You",
        "body": "A reader coming to this page wants to know how many needle types there are, what each one looks like, and what the collection reward is., none of those three things have been published publicly by NoGlyph. The honest answer for any visitor is that the official collection roster is not yet published, and the only way to see a needle type today is to find one in-game and look at your own collection menu.\n\nThis is the right way to handle a launch-day collection page for two reasons. First, the Steam store description is the only authoritative surface, and it does not contain a roster. Second, community wikis and creator videos may speculate about needle-type names that are not actually in the build. Listing those as facts would mislead readers and contradict the source tier rules."
      },
      {
        "id": "collection-needle-types-how-the-collection-loop-connects-to-money-and-equipment",
        "type": "prose",
        "heading": "How the Collection Loop Connects to Money and Equipment",
        "body": "The collection system in Needle In A Haystack is not isolated from the rest of the game. It sits on top of the same money to equipment loop that powers every other progression system. The way the two connect:\n\n1. You dig through hay to find needles. The first time you encounter a needle, you will see one of the needle types the collection tracks.\n2. You sell what you can sell. Ordinary needles sell for cash like any other find. Rare needles and unusual-looking needles may sell for more, or may be flagged for your collection instead of the shop.\n3. You buy equipment upgrades. The cash funds the metal detector and sorter that make finding rarer needles easier.\n4. You collect as you go. The collection menu fills up as you find new needles, independent of whether you sell them.\n\nThat is why the developer described the collection with the phrase \"Collect them all.\" It is meant to be a passive completion goal that runs alongside the active money loop, not a separate game mode. Players who want to fill the collection will naturally upgrade their equipment faster, because the rarer needles are the ones that benefit most from the metal detector and sorter."
      },
      {
        "id": "collection-needle-types-why-a-public-needle-type-roster-helps-co-op-more-than-solo",
        "type": "prose",
        "heading": "Why a Public Needle-Type Roster Helps Co-op More Than Solo",
        "body": "The collection is shared in spirit even though it is per-player. In a six-player co-op session, the fastest way to fill your collection is to spread out across the hay pile and let each player find a different needle type, then compare notes at the end of the session. Solo players fill the collection more slowly but at their own pace. Neither approach is wrong; the design just rewards different play styles."
      },
      {
        "id": "collection-needle-types-what-would-change-this-page",
        "type": "prose",
        "heading": "What Would Change This Page",
        "body": "The page above would change in three concrete ways once NoGlyph publishes more:\n\n- A public roster would let the page list every type by name, with the visual description sourced from the official screenshot or in-game text.\n- A collection reward description would let the page explain what happens at full completion, whether that is a single bonus or a per-type unlock.\n- A patch note or Steam update mentioning new needle types would let the page track additions after launch.\n\nUntil any of those surfaces, this page deliberately stays at the level the Steam store description supports."
      }
    ],
    "faqIds": [
      "faq-10",
      "faq-11",
      "faq-12",
      "faq-13",
      "faq-14",
      "faq-15"
    ],
    "relatedPageIds": [
      "equipment-and-progression",
      "guides"
    ],
    "schemaTypes": [
      "Article",
      "BreadcrumbList",
      "FAQPage"
    ],
    "sourceStatus": "official",
    "lastReviewed": "2026-09-29"
  },
  {
    "id": "disambiguation-vs-legacy-quests",
    "translationKey": "disambiguation-vs-legacy-quests",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "not-kcd-tarkov-stalker-windrose",
    "url": "/not-kcd-tarkov-stalker-windrose",
    "pageType": "wiki",
    "presentation": {
      "shell": "content",
      "variant": "reading-right-rail"
    },
    "h1": "Needle In A Haystack Is Not the KCD, Tarkov, or Stalker 2 Quests",
    "seoTitle": "Needle In A Haystack Is Not KCD, Tarkov, Stalker 2, or Windrose",
    "metaDescription": "Searching needle in a haystack leads to old quests. Learn how Needle In A Haystack by NoGlyph is not the KCD, Tarkov, Stalker 2, Windrose, or House MD quest.",
    "summary": "Disambiguate the Steam hidden-object co-op game Needle In A Haystack from KCD, Tarkov, Stalker 2, Windrose, and House MD episodes that share the literal phrase.",
    "hero": {
      "eyebrow": "Needle In A Haystack",
      "subtitle": "Disambiguate the Steam hidden-object co-op game Needle In A Haystack from KCD, Tarkov, Stalker 2, Windrose, and House MD episodes that share the literal phrase.",
      "ctas": [
        {
          "label": "Identity overview",
          "href": "/what-is-needle-in-a-haystack/"
        },
        {
          "label": "Release window and price",
          "href": "/release-date-and-price/"
        }
      ]
    },
    "quickAnswer": "If you searched \"needle in a haystack\" and landed on a Kingdom Come: Deliverance walkthrough, an Escape from Tarkov task, a Stalker 2 choice, a Windrose guide, or a House MD episode, you are looking at the wrong title. Needle In A Haystack by NoGlyph is a separate Steam hidden-object co-op game released September 29, 2026 on Steam AppID 5085740. The shared phrase is an idiom several unrelated games and shows have reused; this page exists to redirect you to the right one.",
    "keyFacts": [
      {
        "label": "Title",
        "value": "Needle In A Haystack."
      },
      {
        "label": "Developer and publisher",
        "value": "NoGlyph."
      },
      {
        "label": "Platform",
        "value": "Steam (Windows)."
      },
      {
        "label": "Steam AppID",
        "value": "5085740."
      }
    ],
    "modules": [
      {
        "id": "disambiguation-vs-legacy-quests-why-the-search-results-are-confusing",
        "type": "prose",
        "heading": "Why the Search Results Are Confusing",
        "body": "The phrase \"needle in a haystack\" is older than any of the games that use it. It is a common idiom for finding something small inside something large, and at least five well-known titles have used it as a quest title, episode title, or task name over the last decade. Search engines cluster those results together, which is why a user typing the literal idiom today lands on a Kingdom Come: Deliverance walkthrough before they ever see NoGlyph's launch-day Steam store page.\n\nThe Steam hidden-object co-op game was launched today (September 29, 2026) and has not yet gained first-page ranking on generic search engines for the literal idiom. The Steam store page, Steam Discussions, and the Steam metadata mirror at steamdb.info are the surfaces that confirm the current game's identity. The legacy quests and episodes are referenced here only to help redirect readers who arrived through the wrong door; none of them are facts about the current game."
      },
      {
        "id": "disambiguation-vs-legacy-quests-what-the-current-game-is",
        "type": "prose",
        "heading": "What the Current Game Is",
        "body": "The current game, confirmed by the Steam store snapshot dated 2026-09-29:\n\n- Title: Needle In A Haystack.\n- Developer and publisher: NoGlyph.\n- Platform: Steam (Windows).\n- Steam AppID: 5085740.\n- Release date: September 29, 2026.\n- Genre on the Steam store: Casual, Simulation, with Online Co-Op for up to six players, plus a single-player option.\n- Steam features: Steam Achievements, Steam Cloud, Steam Leaderboards, Family Sharing.\n- Languages: 31 supported UI / audio / subtitle languages at full tier.\n- Social channels: Discord (discord.gg/ZCdSfJBqn3), TikTok (tiktok.com/@noglyphstudio), X (x.com/NoGlyphStudio).\n\nThe above is the confirmed identity for the current game. Anything about naming a title, naming a quest, naming a task, naming a choice, or naming an episode in any other title is described below as legacy context for the purpose of redirection, not as a fact about Needle In A Haystack."
      },
      {
        "id": "disambiguation-vs-legacy-quests-side-by-side-comparison-with-the-titles-that-share-the-phras",
        "type": "prose",
        "heading": "Side-by-Side Comparison With the Titles That Share the Phrase",
        "body": "The table below compares the current Steam hidden-object co-op game to the other titles that use the literal phrase. The columns are the facts about each respective title. The current-game column is the only one supported by the Steam store and developer channels. The other columns are described only for the purpose of disambiguation and are sourced as the user-typed legacy context that appeared in autocomplete and Reddit threads.\n\n| Title or source | What the phrase refers to there | Genre | Year of original release | Relation to Needle In A Haystack |\n| --- | --- | --- | --- | --- |\n| Needle In A Haystack (NoGlyph, Steam AppID 5085740) | A Steam hidden-object co-op game where up to six players dig through a hay pile for needles | Casual, Simulation, Online Co-Op | September 29, 2026 | This is the current game |\n| Kingdom Come: Deliverance (KCD / KCD1) | A side quest titled \"Needle in a Haystack\" in the KCD quest log | Medieval open-world RPG | 2018 (KCD1) | A legacy quest, not the current game |\n| Escape from Tarkov (EFT) | A side task with the literal phrase on the Escape from Tarkov wiki | Hardcore tactical shooter | Ongoing since 2017 | A legacy task, not the current game |\n| S.T.A.L.K.E.R. 2 | A player choice referred to on Reddit threads as the \"needle in a haystack\" option | First-person survival shooter | 2024 | A legacy option, not the current game |\n| Windrose | A walkthrough titled \"Needle in a Haystack\" on Windrose community guides | Pirate survival crafting | Early access | A legacy walkthrough, not the current game |\n| House MD | A television episode titled \"Needle in a Haystack\" | Medical drama series | 2008 episode | A TV episode, not a game |\n\nThe current game is in the top row. Every other row is the kind of search result that brought a reader here, and every other row is described only to make the redirection clear."
      },
      {
        "id": "disambiguation-vs-legacy-quests-why-noglyph-has-already-addressed-this-confusion",
        "type": "prose",
        "heading": "Why NoGlyph Has Already Addressed This Confusion",
        "body": "The Steam Discussions page for the current game has developer posts addressing accusations that the game is a clone of an older title. That developer post is the on-record clarification that the current game is its own product, separate from every legacy quest and TV episode that has used the same literal phrase. Steam Discussions is the right place to look for ongoing developer answers to the \"is this the same as KCD / Tarkov / Stalker 2 / Windrose / House MD?\" question."
      },
      {
        "id": "disambiguation-vs-legacy-quests-how-to-tell-you-are-on-the-right-page",
        "type": "prose",
        "heading": "How to Tell You Are on the Right Page",
        "body": "There are four checks that confirm you are looking at the current game and not one of the legacy titles in the table above.\n\n1. The page is about a Windows PC build you can buy or wishlist on Steam under AppID 5085740.\n2. The page mentions up to six players in online co-op, with a single-player option.\n3. The page mentions the money to equipment loop, the metal detector, the sorter, or rare hay.\n4. The page is published by NoGlyph, the developer of the current Steam hidden-object co-op game.\n\nIf the page you are reading fails any one of those checks, you are on a legacy quest walkthrough or a TV episode summary, not the current game."
      }
    ],
    "faqIds": [
      "faq-16",
      "faq-17",
      "faq-18",
      "faq-19",
      "faq-20",
      "faq-21"
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
  },
  {
    "id": "equipment-and-progression",
    "translationKey": "equipment-and-progression",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "equipment-and-progression",
    "url": "/equipment-and-progression",
    "pageType": "guides",
    "presentation": {
      "shell": "content",
      "variant": "reading-right-rail"
    },
    "h1": "Needle In A Haystack Equipment and Progression Loop",
    "seoTitle": "Needle In A Haystack Equipment: Tools, Progression & Money Loop",
    "metaDescription": "Learn how Needle In A Haystack equipment works, what the metal detector and sorter do, and how rare hay fits the money to tools progression in NoGlyph's co-op game.",
    "summary": "Understand the money to equipment progression loop and the metal detector, sorter, and rare hay mechanics in Needle In A Haystack.",
    "hero": {
      "eyebrow": "Needle In A Haystack",
      "subtitle": "Understand the money to equipment progression loop and the metal detector, sorter, and rare hay mechanics in Needle In A Haystack.",
      "ctas": [
        {
          "label": "Game modes overview",
          "href": "/game-modes/"
        },
        {
          "label": "How to find needles guide",
          "href": "/how-to-find-needles/"
        }
      ]
    },
    "quickAnswer": "Needle In A Haystack equipment is the second half of a simple money to tools loop. You dig through hay to find valuable pieces, take the cash you earn into the shop, and unlock new equipment that changes how you tackle the pile. The metal detector and sorter are the two headline tools named by players on launch day, and rare hay is the unusual material that ties them together. A full equipment roster and price list were not announced.",
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
        "id": "equipment-and-progression-what-the-money-to-equipment-loop-looks-like-in-needle-in-a-h",
        "type": "prose",
        "heading": "What the Money to Equipment Loop Looks Like in Needle In A Haystack",
        "body": "The Steam store description frames the entire game around a single repeating loop: you and up to five friends dig through the hay pile, you find things worth money, you spend that money on new equipment, and you use the new equipment to dig faster, more accurately, or in completely new ways. NoGlyph explicitly tells players they can dig together, spread out across the pile, or argue about which section is most promising, which is the design team's way of saying the loop is meant to reward whatever play style your co-op group settles into.\n\nOn launch day the only equipment names referenced publicly are the metal detector and the sorter. Both come up repeatedly in Steam Discussions threads where players report that the metal detector is not detecting anything in the rare hay, and the sorter is not working the way they expected. Those reports do not contradict the official equipment loop. They are exactly the kind of first-day friction a money to tools design produces when players are still learning where to point the metal detector and which tray of hay to feed into the sorter.\n\nThe loop has three practical checkpoints new players should understand:\n\n1. Earn phase. Spend your first session just finding and selling anything you can. Anything that is not hay has a price, and the first haul funds the first upgrade.\n2. Buy phase. The shop sells new equipment tiers. The exact roster and price list were not announced, so treat anything you read on a wiki or video as speculation until NoGlyph publishes an official in-game list or Steam screenshot.\n3. Use phase. New tools only matter if you actually bring them into the hay pile. A common launch-day mistake is buying a tool, leaving it in storage, and forgetting it exists.\n\nMoney, Equipment, and the Role of Co-op\n\nCo-op is not a cosmetic addition to the equipment progression. With six people in a session, the money phase ends much faster than it does solo, which means the buy phase happens earlier, and the use phase has more players trying out unfamiliar tools at the same time. That is why the developer copy leans into trolling, arguing, and abandoning plans; those are the social textures of a six-player equipment upgrade moment.\n\nIf you plan to play solo, the loop still works. The single-player option is part of the Steam feature list. The pace is slower, the money phase takes longer, and you have to do all the noticing the co-op version spreads across five other players. The equipment progression is the same on paper, but the practical rhythm is different.\n\nMetal Detector, Sorter, and Rare Hay Mechanics\n\nRare hay is the central mechanic the metal detector and sorter are built around. NoGlyph's store copy talks about discoveries being tucked away, things happening around you, and opportunities to abandon plans, and the Steam Discussions threads confirm that rare hay is the special material players are trying to detect and sort. The metal detector's purpose is to surface rare hay you would otherwise walk past, and the sorter's purpose is to process what you have already gathered into something you can sell or use.\n\nHow those tools are supposed to behave, based on what players have reported and what NoGlyph has officially described:\n\n- Metal detector. A handheld tool you carry into the hay pile. When it is working as expected, it reacts to rare hay so you do not have to inspect every handful manually. Launch-day reports on Steam Discussions describe the tool as not detecting anything in certain areas, which is most often a positioning or aim issue rather than a broken tool.\n- Sorter. A station you feed hay into once you have a pile to work through. The sorter separates rare hay from ordinary hay so the rare hay can be sold at a higher price or processed further. Launch-day reports describe the sorter as not working as expected when the wrong type of hay is loaded into it.\n- Rare hay. The material that ties the two tools together. Detected with the metal detector, sorted with the sorter, and the reason both tools exist. Its full visual and mechanical description were not announced."
      },
      {
        "id": "equipment-and-progression-why-the-loop-feels-different-in-the-launch-window",
        "type": "prose",
        "heading": "Why the Loop Feels Different in the Launch Window",
        "body": "The Steam store page snapshot dated 2026-09-29 says the planned unlock was approximately twelve hours from page load at the time of the snapshot. That timing is not just a launch fact. It is also a hint about how NoGlyph wants the first day to feel. A short unlock window plus a money to equipment loop plus a metal detector plus a sorter is a deliberately short feedback arc. You dig, you earn, you buy, you try the new tool, you repeat."
      }
    ],
    "faqIds": [
      "faq-22",
      "faq-23",
      "faq-24",
      "faq-25",
      "faq-26",
      "faq-27"
    ],
    "relatedPageIds": [
      "game-modes",
      "how-to-find-needles",
      "launch-faq-and-troubleshooting"
    ],
    "schemaTypes": [
      "Article",
      "BreadcrumbList",
      "FAQPage"
    ],
    "sourceStatus": "official",
    "lastReviewed": "2026-09-29"
  },
  {
    "id": "game-modes",
    "translationKey": "game-modes",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "game-modes",
    "url": "/game-modes",
    "pageType": "guides",
    "presentation": {
      "shell": "content",
      "variant": "reading-right-rail"
    },
    "h1": "Needle In A Haystack Game Modes: Campaign And Free Play",
    "seoTitle": "Needle In A Haystack Game Modes - Campaign And Free Play Guide",
    "metaDescription": "Needle In A Haystack launches with two named modes, Campaign and Free Play, on Steam. Learn how they differ and how to choose for your first session.",
    "summary": "Learn the launch modes Campaign and Free Play and how they differ.",
    "hero": {
      "eyebrow": "Needle In A Haystack",
      "subtitle": "Learn the launch modes Campaign and Free Play and how they differ.",
      "ctas": [
        {
          "label": "Needle In A Haystack equipment and progression",
          "href": "/equipment-and-progression/"
        },
        {
          "label": "How to find needles in Needle In A Haystack",
          "href": "/how-to-find-needles/"
        }
      ]
    },
    "quickAnswer": "Needle In A Haystack ships with two named modes at launch: Campaign and Free Play. The developer announced both modes by name in a Steam Discussions post tied to the demo launch. Campaign drives the player through a structured sequence, while Free Play opens the hay pile without a fixed objective. The Steam store copy supports the broader gameplay loop (find needles, earn money, buy equipment) and the demo history, but the mode names themselves come from the developer Steam Discussions post rather than the Steam store header.",
    "keyFacts": [
      {
        "label": "Campaign",
        "value": "a structured sequence of objectives the player progresses through, drawing on the same hay pile, equipment loop, and needle collection as Free Play."
      },
      {
        "label": "Free Play",
        "value": "an open-ended mode without a fixed objective sequence, suitable for solo tinkering with new equipment or extended co-op sessions."
      }
    ],
    "modules": [
      {
        "id": "game-modes-needle-in-a-haystack-the-two-launch-modes",
        "type": "prose",
        "heading": "Needle In A Haystack: The Two Launch Modes",
        "body": "The two modes announced by NoGlyph are:\n\n- Campaign: a structured sequence of objectives the player progresses through, drawing on the same hay pile, equipment loop, and needle collection as Free Play.\n- Free Play: an open-ended mode without a fixed objective sequence, suitable for solo tinkering with new equipment or extended co-op sessions.\n\nBoth modes use the same core loop from the Steam store description: find needles, earn money, buy equipment, and unlock new ways to tackle the pile. The differences between Campaign and Free Play live in the structure of objectives and how the player advances through them, not in the basic equipment set."
      },
      {
        "id": "game-modes-where-the-mode-names-come-from",
        "type": "prose",
        "heading": "Where The Mode Names Come From",
        "body": "The mode names are stated in a developer Steam Discussions post on the game's community hub. The Steam store description does not name Campaign or Free Play by name, but it does describe the gameplay loop (\"Troll your friends — Dig together, spread out, or argue about which part of the pile is promising\" and \"Discoveries tucked away, things happening around you, opportunities to abandon plans\"). Together, the Steam Discussions post and the Steam store copy give a complete picture: the Steam store supplies the loop, and the Steam Discussions post supplies the mode names."
      },
      {
        "id": "game-modes-how-campaign-mode-works",
        "type": "prose",
        "heading": "How Campaign Mode Works",
        "body": "Campaign mode runs the hay pile as a sequence of objectives. Players work through the structured targets in order, with the Campaign framing providing context for each new find. The Campaign mode is the place to learn the loop for the first time, since the structured sequence exposes players to each mechanic in turn rather than asking them to figure out the hay pile on their own."
      },
      {
        "id": "game-modes-campaign-mode-in-a-six-player-co-op-session",
        "type": "prose",
        "heading": "Campaign Mode In A Six-Player Co-op Session",
        "body": "In a six-player co-op session, the Campaign mode gives the group a shared objective list. The store copy encourages players to dig together, spread out, or argue about which part of the pile is promising, and the Campaign structure gives the argument a target. The Campaign mode in co-op is best approached with a host who has run a solo Campaign session first, since the host sets the pace and the objective rollout."
      },
      {
        "id": "game-modes-equipment-progression-in-campaign",
        "type": "prose",
        "heading": "Equipment Progression In Campaign",
        "body": "Campaign mode is also where the equipment progression pays off. The store copy explains that \"you can also just buy new equipment, which unlocks new ways to tackle the pile,\" and the Campaign mode sequences the equipment unlocks in step with the objectives. Players who hit a wall on a Campaign objective should check the Equipment And Progression page for the broader equipment loop."
      },
      {
        "id": "game-modes-how-free-play-mode-works",
        "type": "prose",
        "heading": "How Free Play Mode Works",
        "body": "Free Play mode drops the player into the hay pile without a fixed objective sequence. It is the place to test new equipment, run an extended co-op session with friends, or chase the collection loop on the player's own terms. The Collection Needle Types page covers the needle collection loop that Free Play mode is well-suited for."
      },
      {
        "id": "game-modes-free-play-mode-as-a-solo-sandbox",
        "type": "prose",
        "heading": "Free Play Mode As A Solo Sandbox",
        "body": "For solo players, Free Play mode is the place to experiment with equipment and money without burning Campaign progress. Since the same equipment and money loop backs both modes, Free Play sessions contribute to the player's overall progression through the same in-game economy."
      },
      {
        "id": "game-modes-free-play-mode-in-a-co-op-session",
        "type": "prose",
        "heading": "Free Play Mode In A Co-op Session",
        "body": "For a co-op group, Free Play mode lets six players spread out across the hay pile without a Campaign structure governing the session. The store copy encourages spreading out and arguing about promising parts of the pile, and Free Play is the mode where that style of play fits naturally."
      },
      {
        "id": "game-modes-demo-history-and-the-launch-build",
        "type": "prose",
        "heading": "Demo History And The Launch Build",
        "body": "The developer Steam Discussions post that names Campaign and Free Play is the same post that announces the demo going live. The demo is a separate play surface from the launch build; the launch build is the September 29, 2026 Steam release, and the demo is a pre-launch or launch-adjacent play surface with the same modes. If you played the demo, you have already seen both Campaign and Free Play in their launch form."
      },
      {
        "id": "game-modes-choosing-your-first-mode",
        "type": "prose",
        "heading": "Choosing Your First Mode",
        "body": "For a first-time player:\n\n- Pick Campaign if you want a structured introduction to the loop and the equipment progression.\n- Pick Free Play if you want to test equipment, run a long co-op session, or chase collection goals without a Campaign sequence.\n- For a co-op group of new players, pick Campaign so the group has a shared objective list and the host can pace the session.\n\nFor returning players from the demo:\n\n- Pick Campaign to finish any uncompleted Campaign objectives.\n- Pick Free Play to try out new equipment combinations that the demo did not cover.\n\nThe full equipment roster with prices is not announced, so neither mode lists a specific gear milestone yet. The Equipment And Progression page covers the loop and will be updated once NoGlyph publishes the full roster."
      }
    ],
    "faqIds": [
      "faq-28",
      "faq-29",
      "faq-30",
      "faq-31",
      "faq-32"
    ],
    "relatedPageIds": [
      "equipment-and-progression",
      "how-to-find-needles",
      "guides"
    ],
    "schemaTypes": [
      "Article",
      "BreadcrumbList",
      "FAQPage"
    ],
    "sourceStatus": "official",
    "lastReviewed": "2026-09-29"
  },
  {
    "id": "how-to-find-needles",
    "translationKey": "how-to-find-needles",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "how-to-find-needles",
    "url": "/how-to-find-needles",
    "pageType": "guides",
    "presentation": {
      "shell": "content",
      "variant": "reading-right-rail"
    },
    "h1": "How to Find Needles in Needle In A Haystack: A New Player Guide",
    "seoTitle": "How to Find Needles in Needle In A Haystack: First-Day Tips",
    "metaDescription": "Need practical ways to find needles as a new player? Learn how to find needles in Needle In A Haystack with co-op coordination, the metal detector, and sorter.",
    "summary": "Find practical ways to locate needles in the hay pile as a new player in Needle In A Haystack.",
    "hero": {
      "eyebrow": "Needle In A Haystack",
      "subtitle": "Find practical ways to locate needles in the hay pile as a new player in Needle In A Haystack.",
      "ctas": [
        {
          "label": "Equipment and progression loop",
          "href": "/equipment-and-progression/"
        },
        {
          "label": "Game modes overview",
          "href": "/game-modes/"
        }
      ]
    },
    "quickAnswer": "The fastest way to find needles in Needle In A Haystack is to treat the hay pile like a cooperative search area, not a solo speedrun. Spread out across the pile so you are not all digging in the same handful, sell your first finds immediately to unlock the metal detector, and use the detector on rare hay before you sort it. NoGlyph built the entire game around the idiom, so the simplest answer is also the right one: dig, share the cash, upgrade your tools, and repeat.",
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
        "id": "how-to-find-needles-a-practical-day-one-plan-to-find-needles-in-needle-in-a-hays",
        "type": "prose",
        "heading": "A Practical Day-One Plan to Find Needles in Needle In A Haystack",
        "body": "If you have just launched the game for the first time, the goal of your first session is not to find every needle. It is to learn how to find the easy ones so you can fund the tools that find the harder ones. NoGlyph's own description tells you this is the intended rhythm. The store copy says you can dig together, spread out, or argue about which part of the pile is promising, and that is the design team telling you out loud that the search is a co-op social activity first and a needle-finding puzzle second.\n\nA practical day-one plan looks like this:\n\n1. Drop into the hay pile and spend the first few minutes just walking the edges. You will see ordinary hay immediately and rare hay occasionally. The first thing to internalize is what the common hay looks like so the unusual hay stands out.\n2. Spread out. With up to six players in the session, you can cover six times the area in the same amount of time. The developer copy explicitly encourages arguing about which section of the pile is promising, which is a friendlier way of saying that solo players should pick a wedge and stick to it.\n3. Sell your first finds as soon as you have a handful. The money you earn funds the metal detector, which is the first big upgrade for finding needles you would otherwise walk past.\n4. Equip the metal detector as soon as you buy it. A common day-one mistake is buying a tool and forgetting to bring it into the pile. The detector only helps if it is actually pointed at the hay you want to scan.\n5. Use the detector on rare hay first. The Steam Discussions threads on launch day show players reporting that the metal detector is not detecting anything in some sessions, and the usual cause is aiming it at ordinary hay instead of the rare material."
      },
      {
        "id": "how-to-find-needles-read-the-floor-before-you-read-the-tools",
        "type": "prose",
        "heading": "Read the Floor Before You Read the Tools",
        "body": "The fastest way to get better at finding needles is to learn the visual language of the hay pile before you start relying on equipment. Rare hay looks different from ordinary hay. Once you have seen it once, you will recognize it across every later session, and the metal detector becomes a confirmation tool rather than a discovery tool. Reading the floor first also makes your co-op coordination easier because you can call out \"rare hay here\" and have your teammates know what you mean."
      },
      {
        "id": "how-to-find-needles-coordinate-with-your-co-op-team-without-slowing-down",
        "type": "prose",
        "heading": "Coordinate With Your Co-op Team Without Slowing Down",
        "body": "The Campaign and Free Play modes both support six-player online co-op, but neither one punishes you for being quiet. The coordination that actually works on day one is short callouts. \"Found rare hay by the wall\" is more useful than a long explanation. \"Sorting over here, don't dump on me\" prevents the sorter from getting fed the wrong hay, which is one of the launch-day bug patterns reported on Steam Discussions."
      },
      {
        "id": "how-to-find-needles-common-first-session-pitfalls-and-how-to-avoid-them",
        "type": "prose",
        "heading": "Common First-Session Pitfalls and How to Avoid Them",
        "body": "The Steam Discussions threads on launch day show a small number of recurring patterns new players hit when trying to find needles. None of them are deal breakers. They are the predictable friction of a money to equipment game where the equipment roster and exact mechanics were not announced.\n\n- Detector not reacting. If the metal detector is not detecting anything, reposition it. Most launch-day reports turn out to be the detector pointed at ordinary hay rather than rare hay, or pointed at the wrong layer of the pile.\n- Sorter rejecting input. If the sorter is not working as expected, double-check what you have loaded. The launch-day bug pattern is the wrong type of hay in the tray, not a broken sorter.\n- Solo players feeling slow. If you are playing alone, the money phase simply takes longer than co-op. The fix is patience, not a hidden trick. The single-player option is part of the Steam feature list and the loop works at solo pace.\n- Forgetting the equipment you bought. Buy and equip are two separate steps. If you bought the metal detector but left it at the shop, walk back and equip it before continuing."
      },
      {
        "id": "how-to-find-needles-why-this-game-rewards-a-slow-first-hour",
        "type": "prose",
        "heading": "Why This Game Rewards a Slow First Hour",
        "body": "The store copy is unusually explicit about the design philosophy. NoGlyph says discoveries are tucked away, things are happening around you, and there are opportunities to abandon plans. That is a deliberate pacing choice. The first hour is meant to feel slow so the upgrade moments feel earned. Players who try to rush past the earn phase and skip the buy phase tend to be the ones who post on Steam Discussions that the equipment is not working. In most cases the equipment was working, and the player just had not yet bought or equipped the right tool."
      }
    ],
    "faqIds": [
      "faq-33",
      "faq-34",
      "faq-35",
      "faq-36",
      "faq-37",
      "faq-38"
    ],
    "relatedPageIds": [
      "equipment-and-progression",
      "game-modes",
      "collection-needle-types"
    ],
    "schemaTypes": [
      "Article",
      "BreadcrumbList",
      "FAQPage"
    ],
    "sourceStatus": "official",
    "lastReviewed": "2026-09-29"
  },
  {
    "id": "guides",
    "translationKey": "identity-overview",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "what-is-needle-in-a-haystack",
    "url": "/what-is-needle-in-a-haystack",
    "pageType": "guides",
    "presentation": {
      "shell": "content",
      "variant": "reading-right-rail"
    },
    "h1": "What Is Needle In A Haystack: The NoGlyph Steam Co-op Identity",
    "seoTitle": "What Is Needle In A Haystack - NoGlyph Steam Hidden-Object Co-op",
    "metaDescription": "Needle In A Haystack is the Steam hidden-object co-op game by NoGlyph (AppID 5085740). Released September 29, 2026. Six-player online co-op, single-player mode.",
    "summary": "Confirm the Steam hidden-object co-op title by NoGlyph released Sep 29 2026 and separate it from KCD / Tarkov / Stalker 2 / Windrose / House MD look-alikes.",
    "hero": {
      "eyebrow": "Needle In A Haystack",
      "subtitle": "Confirm the Steam hidden-object co-op title by NoGlyph released Sep 29 2026 and separate it from KCD / Tarkov / Stalker 2 / Windrose / House MD look-alikes.",
      "ctas": [
        {
          "label": "Needle In A Haystack disambiguation vs legacy quests",
          "href": "/not-kcd-tarkov-stalker-windrose/"
        },
        {
          "label": "Needle In A Haystack release date and price",
          "href": "/release-date-and-price/"
        }
      ]
    },
    "quickAnswer": "Needle In A Haystack is a Steam hidden-object co-op game developed and published by NoGlyph, released on Steam on September 29, 2026 with AppID 5085740. It is a new first-launch title, not a remake or re-release, and it supports online co-op for up to six players plus a single-player option. The literal phrase \"needle in a haystack\" also names unrelated quests in Kingdom Come: Deliverance, Escape from Tarkov, Stalker 2, Windrose, and a House MD episode; this page covers only the new Steam game.",
    "keyFacts": [
      {
        "label": "Official title",
        "value": "Needle In A Haystack"
      },
      {
        "label": "Developer and publisher",
        "value": "NoGlyph"
      },
      {
        "label": "Release date",
        "value": "September 29, 2026"
      },
      {
        "label": "Steam AppID",
        "value": "5085740"
      }
    ],
    "modules": [
      {
        "id": "guides-needle-in-a-haystack-identity-card-for-the-steam-game",
        "type": "prose",
        "heading": "Needle In A Haystack Identity Card For The Steam Game",
        "body": "The identity of Needle In A Haystack on Steam is straightforward and verifiable from the Steam store page and SteamDB:\n\n- Official title: Needle In A Haystack\n- Developer and publisher: NoGlyph\n- Release date: September 29, 2026\n- Steam AppID: 5085740\n- Steam store URL: https://store.steampowered.com/app/5085740\n- SteamDB mirror: https://steamdb.info/app/5085740/\n- Steam community hub: https://steamcommunity.com/app/5085740\n- Discord: https://discord.gg/ZCdSfJBqn3\n- TikTok: https://tiktok.com/@noglyphstudio\n- X (Twitter): https://x.com/NoGlyphStudio\n\nThe \"simulator\" suffix that surfaces in autocomplete and search queries is a brand-extension users type on their own. It is not part of the Steam title and it does not appear on the Steam store header."
      },
      {
        "id": "guides-how-the-steam-identity-was-verified",
        "type": "prose",
        "heading": "How The Steam Identity Was Verified",
        "body": "The Steam store page lists NoGlyph as both developer and publisher and displays the September 29, 2026 release date. The SteamDB record mirrors the AppID and the release date, which lets cross-checkers confirm that the AppID is associated with this title rather than a legacy quest or a different indie listing. The Steam Discussions hub shows developer activity on launch day, including a post that names the two launch modes, Campaign and Free Play, and addresses first-day bug reports. Those three surfaces together establish the identity."
      },
      {
        "id": "guides-what-kind-of-game-it-is",
        "type": "prose",
        "heading": "What Kind Of Game It Is",
        "body": "The Steam store copy describes Needle In A Haystack as a hidden-object co-op game where players search a pile of hay for needles, then use the money earned from finds to buy equipment that unlocks new ways to tackle the pile. Genres on the Steam store include Casual and Simulation. The store copy encourages drawing circles about what's promising, with text that reads \"Troll your friends — Dig together, spread out, or argue about which part of the pile is promising\" and \"Discoveries tucked away, things happening around you, opportunities to abandon plans.\""
      },
      {
        "id": "guides-cooperative-search-as-the-core-loop",
        "type": "prose",
        "heading": "Cooperative Search As The Core Loop",
        "body": "Cooperative search is the headline feature. Players can join an online co-op session for up to six players, or play solo through the same pile. Steam Achievements, Steam Cloud, Steam Leaderboards, and Family Sharing are all listed on the Steam store page as supported Steam features for this title.\n\nEquipment, Currency, And Collection\n\nMoney earned from finds flows back into equipment purchases. The store copy tells players that \"you can also just buy new equipment, which unlocks new ways to tackle the pile.\" A separate collection loop rewards finding different needle types, each with their own look, as the store copy explains in the \"Collect them all\" line. The exact equipment roster with prices is not announced, and full equipment details are deferred to post-launch updates from the developer."
      },
      {
        "id": "guides-how-this-game-differs-from-the-legacy-quests",
        "type": "prose",
        "heading": "How This Game Differs From The Legacy Quests",
        "body": "Search engines surface many results for the literal phrase \"needle in a haystack,\" and several of those results are unrelated:\n\n- Kingdom Come: Deliverance (KCD and KCD1) has a side quest called \"Needle in a Haystack.\"\n- Escape from Tarkov (EFT) has a task by that name.\n- Stalker 2 has a player choice named \"Needle in a Haystack.\"\n- Windrose has a walkthrough guide for a needle-in-a-haystack objective.\n- A House MD episode references the phrase in its title.\n\nNone of those legacy quests refer to this Steam game. The Steam store, SteamDB, and Steam Discussions are the only surfaces that carry current-game facts about Needle In A Haystack. The disambiguation page on this site provides a side-by-side comparison so legacy-quest readers can land on the new game page instead of bouncing."
      },
      {
        "id": "guides-languages-and-localization-snapshot",
        "type": "prose",
        "heading": "Languages And Localization Snapshot",
        "body": "The Steam store page lists 31 supported languages at Full Interface, Full Audio, and Subtitles coverage, which means every Steam-supported language at launch has a translated interface, full voice acting, and subtitles. The English copy serves as the reference locale for store and community material. Content-side translation coverage beyond the UI and audio is not announced, and reviewer-side coverage for languages outside English and Chinese is still being collected."
      },
      {
        "id": "guides-what-is-not-announced-yet",
        "type": "prose",
        "heading": "What Is Not Announced Yet",
        "body": "A few commonly searched facts are not announced:\n\n- The Steam store price was not yet listed at the research snapshot, with the page showing a planned-unlock notice around launch time.\n- Console availability (Xbox, PS5) is not announced.\n- Steam Deck required status is not announced.\n- The full achievement list is not announced.\n- The full equipment roster with prices is not announced.\n\nThose items will be updated post-launch once the developer publishes them on Steam or Steam Discussions."
      }
    ],
    "faqIds": [
      "faq-39",
      "faq-40",
      "faq-41",
      "faq-42",
      "faq-43",
      "faq-44"
    ],
    "relatedPageIds": [
      "disambiguation-vs-legacy-quests",
      "release-window-and-price",
      "game-modes",
      "languages-and-ui"
    ],
    "schemaTypes": [
      "Article",
      "BreadcrumbList",
      "FAQPage"
    ],
    "sourceStatus": "official",
    "lastReviewed": "2026-09-29"
  },
  {
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
  },
  {
    "id": "launch-faq-and-troubleshooting",
    "translationKey": "launch-faq-and-troubleshooting",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "faq-and-troubleshooting",
    "url": "/faq-and-troubleshooting",
    "pageType": "faq",
    "presentation": {
      "shell": "content",
      "variant": "reading-right-rail"
    },
    "h1": "Needle In A Haystack Troubleshooting and Launch FAQ",
    "seoTitle": "Needle In A Haystack Launch Day FAQ and Troubleshooting",
    "metaDescription": "Needle In A Haystack troubleshooting for launch day: fix save-file restore errors, Steam runtime ID mismatches, co-op connection drops, and achievement sync.",
    "summary": "Resolve first-day launch issues: save-file restore error, Steam runtime ID mismatch, Steam Cloud / Co-op connection, achievements setup.",
    "hero": {
      "eyebrow": "Needle In A Haystack",
      "subtitle": "Resolve first-day launch issues: save-file restore error, Steam runtime ID mismatch, Steam Cloud / Co-op connection, achievements setup.",
      "ctas": [
        {
          "label": "Needle In A Haystack 6-player co-op, single-player split, and platform availability",
          "href": "/co-op-and-multiplayer/"
        },
        {
          "label": "Needle In A Haystack Windows minimum and recommended system requirements",
          "href": "/system-requirements/"
        }
      ]
    },
    "quickAnswer": "Needle In A Haystack troubleshooting on launch day centers on three confirmed first-day reports: a save-file restore error (\"The farm could not be restored. Your save has been preserved. Please reload it.\"), a Steam runtime ID mismatch (\"Steam is running App ID 5158470, but this build expects 5085740\"), and Steam Cloud / 6-player co-op connection drops. Most fixes start with restarting Steam and verifying the build, then move into Steam Cloud toggle and a bug report on Steam Discussions or the developer Discord if the issue persists.",
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
        "id": "launch-faq-and-troubleshooting-needle-in-a-haystack-save-file-restore-troubleshooting",
        "type": "prose",
        "heading": "Needle In A Haystack Save-File Restore Troubleshooting",
        "body": "The save-file restore error reads \"The farm could not be restored. Your save has been preserved. Please reload it.\" and appears after a Steam Cloud sync or offline / online switch. The save is preserved per the message text; the error is a Steam Cloud desync, not data loss — the most common Needle In A Haystack troubleshooting case."
      },
      {
        "id": "launch-faq-and-troubleshooting-save-restore-fix-steps",
        "type": "prose",
        "heading": "Save Restore Fix Steps",
        "body": "1. Fully exit the game and the Steam client.\n2. Right-click the game in your Library → Properties → Installed Files → Verify integrity of game files.\n3. Right-click again → Properties → General, uncheck \"Keep game saves in the Steam Cloud for Needle In A Haystack\", launch once to force a local save, then re-check on next launch.\n\nIf the error persists, back up the local save (Steam → userdata → your SteamID → 5085740), let the remote sync slot expire, and let Steam re-upload. If the save still does not load, back up the local folder and post a Steam Discussions thread with your save's timestamp — the developer is responding in English and Chinese."
      },
      {
        "id": "launch-faq-and-troubleshooting-steam-runtime-id-mismatch-troubleshooting",
        "type": "prose",
        "heading": "Steam Runtime ID Mismatch Troubleshooting",
        "body": "A runtime ID mismatch reading \"Steam is running App ID 5158470, but this build expects 5085740\" means Steam launched a different AppID context than the build expects — usually another Steam game in the foreground, the overlay grabbing the wrong context, or a misaligned beta. The correct AppID is 5085740."
      },
      {
        "id": "launch-faq-and-troubleshooting-runtime-id-mismatch-fix-steps",
        "type": "prose",
        "heading": "Runtime ID Mismatch Fix Steps",
        "body": "1. Quit every other Steam game so a foreign AppID does not leak into the launch context.\n2. Right-click the game → Properties → Betas → select \"No beta selected\" if not on a public beta, then restart Steam.\n3. Launch from the Steam Library entry, not a desktop shortcut, so Steam sets the right AppID context.\n\nThis kind of Needle In A Haystack troubleshooting is benign — a Steam client context bug, not a corrupted game build — and almost always lands on a clean Steam restart plus correct beta selection."
      },
      {
        "id": "launch-faq-and-troubleshooting-co-op-connection-and-steam-cloud-sync",
        "type": "prose",
        "heading": "Co-Op Connection and Steam Cloud Sync",
        "body": "The launch build runs 6-player online co-op on Windows with Steam Cloud syncing save farms. On launch day, players report lobby drops and Cloud stalls, separate from save corruption and runtime bugs."
      },
      {
        "id": "launch-faq-and-troubleshooting-co-op-lobby-connection-drops",
        "type": "prose",
        "heading": "Co-Op Lobby Connection Drops",
        "body": "Co-op drops on launch day usually trace to Steam Friends being Offline, the host's NAT being strict, or the Steam relay being overloaded at peak launch. Confirm both players are Online, allow Steam through Windows firewall, and have the host restart the game and Steam. If the lobby still fails, switch the host to a different network (mobile hotspot is a useful temporary test) to rule out router-side issues. Tethering can be flaky for a 6-player session."
      },
      {
        "id": "launch-faq-and-troubleshooting-steam-cloud-sync-stalls",
        "type": "prose",
        "heading": "Steam Cloud Sync Stalls",
        "body": "Cloud stalls happen when a second device uploads a competing save at the same moment, or when the local file is large after a long Campaign save. Quit the game on every device, open Steam → Settings → Cloud, disable Steam Cloud for Needle In A Haystack, restart Steam, and re-enable it. The most recent successful launch's save becomes the canonical version. Do not delete the local save before next launch — an accidental delete can race with a remote overwrite."
      },
      {
        "id": "launch-faq-and-troubleshooting-achievement-setup-and-family-sharing",
        "type": "prose",
        "heading": "Achievement Setup and Family Sharing",
        "body": "Steam Achievements are a confirmed launch feature, but the full achievement list has not been published. Enable Steam Cloud and Steam Community in your account settings, then launch once with an Internet connection so the tracker registers your session. The full list of unlock conditions is not public yet, so focus on Campaign mode objectives rather than rumored hidden achievements."
      },
      {
        "id": "launch-faq-and-troubleshooting-family-sharing-caveats",
        "type": "prose",
        "heading": "Family Sharing Caveats",
        "body": "Family Sharing is supported at launch, but the library owner's Steam language and settings propagate to the guest. The guest cannot launch while the owner is playing another game that locks the family-shared slot, and achievements accrue to the library owner. The purchasing account must launch the game if you want achievements on the correct account."
      },
      {
        "id": "launch-faq-and-troubleshooting-when-the-steps-do-not-resolve-it",
        "type": "prose",
        "heading": "When the Steps Do Not Resolve It",
        "body": "Open a Steam Discussions thread or Discord ticket when the documented Needle In A Haystack troubleshooting steps do not resolve the issue. Include your Windows version, GPU driver date, Steam client version, and the literal error text., the developer responds in English and Chinese on Steam Discussions, and the official Discord at https://discord.gg/ZCdSfJBqn3 is monitored for launch-day blockers."
      }
    ],
    "faqIds": [
      "faq-51",
      "faq-52",
      "faq-53",
      "faq-54",
      "faq-55",
      "faq-56"
    ],
    "relatedPageIds": [
      "co-op-and-multiplayer",
      "system-requirements",
      "release-window-and-price"
    ],
    "schemaTypes": [
      "Article",
      "BreadcrumbList",
      "FAQPage"
    ],
    "sourceStatus": "official",
    "lastReviewed": "2026-09-29"
  },
  {
    "id": "release-window-and-price",
    "translationKey": "release-window-and-price",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "release-date-and-price",
    "url": "/release-date-and-price",
    "pageType": "release",
    "presentation": {
      "shell": "content",
      "variant": "reading-right-rail"
    },
    "h1": "Needle In A Haystack Release Date And Price: Steam Status",
    "seoTitle": "Needle In A Haystack Release Date And Price - Steam Status",
    "metaDescription": "Needle In A Haystack launched on Steam September 29, 2026. Price has not been announced as of 2026-09-29. Includes the simulator alias users type.",
    "summary": "Find the release date, launch window and price of Needle In A Haystack on Steam (also when users add 'simulator' as a brand extension).",
    "hero": {
      "eyebrow": "Needle In A Haystack",
      "subtitle": "Find the release date, launch window and price of Needle In A Haystack on Steam (also when users add 'simulator' as a brand extension).",
      "ctas": [
        {
          "label": "What Is Needle In A Haystack",
          "href": "/what-is-needle-in-a-haystack/"
        },
        {
          "label": "Needle In A Haystack co-op and multiplayer",
          "href": "/co-op-and-multiplayer/"
        }
      ]
    },
    "quickAnswer": "Needle In A Haystack released on Steam on September 29, 2026 under AppID 5085740. NoGlyph confirmed the date through Steam Discussions. The Steam store price has not been announced; the page showed a planned-unlock message at launch. Search users who add the simulator word to their query land on the same launch title.",
    "keyFacts": [
      {
        "label": "Release date",
        "value": "September 29, 2026"
      },
      {
        "label": "Steam AppID",
        "value": "5085740"
      },
      {
        "label": "Steam store URL",
        "value": "https://store.steampowered.com/app/5085740"
      },
      {
        "label": "Steam metadata mirror",
        "value": "https://steamdb.info/app/5085740/"
      }
    ],
    "modules": [
      {
        "id": "release-window-and-price-needle-in-a-haystack-release-date-and-launch-window",
        "type": "prose",
        "heading": "Needle In A Haystack Release Date And Launch Window",
        "body": "The release date is confirmed and dated:\n\n- Release date: September 29, 2026\n- Steam AppID: 5085740\n- Steam store URL: https://store.steampowered.com/app/5085740\n- Steam metadata mirror: https://steamdb.info/app/5085740/\n\nThe SteamDB record mirrors the September 29, 2026 release date, and Steam Discussions show developer activity on launch day, including a developer post that names the Campaign and Free Play modes. The launch window is therefore a single-day release rather than an early-access window or a staggered regional launch."
      },
      {
        "id": "release-window-and-price-price-status-as-of-2026-09-29",
        "type": "prose",
        "heading": "Price Status As Of 2026-09-29",
        "body": "The Steam store page did not display a numeric price at the research snapshot. The page showed a planned-unlock notice indicating the price would publish at a scheduled unlock time near launch. The price is therefore not announced. NoGlyph has not posted a separate price announcement on Steam Discussions, and the SteamDB metadata mirror does not display a price field.\n\nUntil a numeric price appears on the Steam store, an announcement lands on Steam Discussions, or a regional price updates on SteamDB, treat any third-party price as not announced."
      },
      {
        "id": "release-window-and-price-the-simulator-alias-and-why-it-matters",
        "type": "prose",
        "heading": "The Simulator Alias And Why It Matters",
        "body": "Many search users type the simulator word as a brand extension even though the official Steam title is just Needle In A Haystack. The Steam store header reads \"Needle In A Haystack\" without the simulator word. The simulator phrase does not point at a separate product or a DLC, and any related autocomplete variations all resolve to the same Steam game by NoGlyph.\n\nIf you searched using the simulator phrase, the launch date and the price status on this page apply to the same game. The release date was September 29, 2026 and the price is not announced."
      },
      {
        "id": "release-window-and-price-cross-region-price-caveat",
        "type": "prose",
        "heading": "Cross-Region Price Caveat",
        "body": "Steam prices can vary by country and storefront currency, and the SteamDB price history is the place to verify a specific regional price after the planned-unlock moment. This page records the global status (price not announced) rather than a single regional number. If you need a country-specific price, check the Steam store for your region after the price is published."
      }
    ],
    "faqIds": [
      "faq-57",
      "faq-58",
      "faq-59",
      "faq-60"
    ],
    "relatedPageIds": [
      "guides",
      "co-op-and-multiplayer",
      "system-requirements"
    ],
    "schemaTypes": [
      "Article",
      "BreadcrumbList",
      "FAQPage"
    ],
    "sourceStatus": "official",
    "lastReviewed": "2026-09-29"
  },
  {
    "id": "system-requirements",
    "translationKey": "system-requirements",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "system-requirements",
    "url": "/system-requirements",
    "pageType": "wiki",
    "presentation": {
      "shell": "content",
      "variant": "reading-right-rail"
    },
    "h1": "Needle In A Haystack System Requirements (Windows PC)",
    "seoTitle": "Needle In A Haystack System Requirements for Windows PC",
    "metaDescription": "Check Needle In A Haystack system requirements before downloading. See the Windows minimum and recommended specs, storage, and broadband Internet need.",
    "summary": "Check Windows minimum and recommended specs before downloading Needle In A Haystack on Steam.",
    "hero": {
      "eyebrow": "Needle In A Haystack",
      "subtitle": "Check Windows minimum and recommended specs before downloading Needle In A Haystack on Steam.",
      "ctas": [
        {
          "label": "Release window and price",
          "href": "/release-date-and-price/"
        },
        {
          "label": "Co-op and multiplayer",
          "href": "/co-op-and-multiplayer/"
        }
      ]
    },
    "quickAnswer": "Needle In A Haystack system requirements are light for a 2026 PC build. The Steam store lists Windows 10 or Windows 11 as the supported operating system, an Intel Core i5-3570 as the minimum processor, 4 GB of RAM, an NVIDIA GTX 1050 graphics card, and 4 GB of available storage as the minimum spec. The recommended spec is an Intel Core i7-3770, 8 GB of RAM, and an NVIDIA GTX 1650. Broadband Internet is required because the game supports online co-op for up to six players.",
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
        "id": "system-requirements-full-minimum-and-recommended-specs-for-needle-in-a-haystack",
        "type": "prose",
        "heading": "Full Minimum and Recommended Specs for Needle In A Haystack",
        "body": "The system requirements for Needle In A Haystack are documented on the Steam store page under the app's system requirements section. As of the 2026-09-29 snapshot, the visible Windows specifications are:\n\n| Component | Minimum | Recommended |\n| --- | --- | --- |\n| Operating system | Windows 10, Windows 11 | Windows 10, Windows 11 |\n| Processor | Intel Core i5-3570 | Intel Core i7-3770 |\n| Memory | 4 GB RAM | 8 GB RAM |\n| Graphics | NVIDIA GTX 1050 | NVIDIA GTX 1650 |\n| Storage | 4 GB available space | 4 GB available space |\n| Network | Broadband Internet connection | Broadband Internet connection |\n\nThe minimum spec is what you need to launch the game and join a co-op session. The recommended spec is what you need for a smoother experience with up to six players in the same hay pile. The Steam store does not list a separate ultra or 4K spec."
      },
      {
        "id": "system-requirements-why-the-specs-are-lighter-than-most-2026-pc-releases",
        "type": "prose",
        "heading": "Why the Specs Are Lighter Than Most 2026 PC Releases",
        "body": "The Steam store lists the game's genres as Casual and Simulation with Online Co-Op tags. The low-spec end reflects that genre profile: the visible objects in the hay pile and the metal detector and sorter interactions do not require a high-end GPU, and the storage footprint is small because the build does not include high-resolution art packs. A modern budget laptop with integrated graphics will not be on the official list, but a desktop that meets the minimum GTX 1050 line will handle the launch build comfortably.\n\nThe recommended GTX 1650 line is more about stable frame pacing with six players in the same session than about higher resolution. If you plan to host co-op sessions on your own machine, the recommended spec is the more useful number to compare against.\n\nNetwork, Online Co-op, and Storage Notes\n\nThree secondary requirements deserve their own treatment because they affect whether the game actually runs in your household, not whether the installer completes.\n\n1. Broadband Internet. The Steam store lists Broadband Internet as a requirement, not an option. Online co-op for up to six players is one of the headline features, and the metal detector and sorter loops are designed to be played with other people. A session that drops connection repeatedly will surface as the metal detector not detecting anything, the sorter rejecting input, or save file restore errors on relaunch.\n2. 4 GB storage. The 4 GB figure is the floor for the install footprint. The Steam store description and player reports do not mention additional high-resolution packs, so the install size should not grow meaningfully above 4 GB at launch. If you are tight on drive space, the game is friendly to a small secondary SSD.\n3. Windows 10 or Windows 11 only. The Steam store does not list macOS, Linux, or SteamOS Proton support. If you want to play on a Mac or a Steam Deck, treat the platform status as unconfirmed rather than as a confirmed no.\n\nSteam Achievements, Cloud, and Leaderboards\n\nSteam Achievements, Steam Cloud, Steam Leaderboards, and Family Sharing are listed on the Steam store page. Steam Cloud requires a Steam account login and enough free quota on the Steam Cloud servers for the save file size, which is small for this title. Family Sharing is a Steam account-level feature and does not add any system requirements. None of these features change the minimum or recommended PC spec.\n\nWhat to Do if Your PC Is Below the Minimum Spec\n\nIf your machine is below the recommended spec but meets the minimum, the game will launch and you can play. The practical risks of running just at the minimum line are lower frame pacing during six-player co-op and longer loading into the hay pile. If your machine is below the minimum line, the launch-day launchers will fail to start the game cleanly. The first fix is to confirm your machine meets the GTX 1050 and i5-3570 floor; the second fix is to free up disk space to clear the 4 GB storage requirement.\n\nConsole Availability, Steam Deck Status, and What Was Not Announced\n\nThe Steam store system requirements page lists Windows 10 and Windows 11 only. Console versions for PlayStation 5, Xbox Series X|S, or older consoles were not announced. Steam Deck Verified or Playable status was not announced. If you intend to play on a console or a Steam Deck, treat the platform support as unconfirmed rather than as a confirmed yes or no.\n\nmacOS, Steam Deck, and Proton\n\nNoGlyph has not published macOS native support, Linux native support, or a Steam Deck Verified status. Proton compatibility is a community-tested path on Steam and is not endorsed by the developer on the Steam store page. If you want to run the game on a non-Windows machine, the safest answer is to wait for an official platform announcement rather than to assume Proton will work."
      },
      {
        "id": "system-requirements-what-would-change-this-page",
        "type": "prose",
        "heading": "What Would Change This Page",
        "body": "This page would change in two concrete ways once NoGlyph publishes more:\n\n1. A console announcement would add a console-specific spec table for PS5 or Xbox.\n2. A Steam Deck Verified or Playable badge would add a Steam Deck-specific guidance section.\n\nUntil any of those surfaces, this page deliberately stays at the level the Steam store system requirements section supports."
      }
    ],
    "faqIds": [
      "faq-61",
      "faq-62",
      "faq-63",
      "faq-64",
      "faq-65",
      "faq-66"
    ],
    "relatedPageIds": [
      "release-window-and-price",
      "co-op-and-multiplayer"
    ],
    "schemaTypes": [
      "Article",
      "BreadcrumbList",
      "FAQPage"
    ],
    "sourceStatus": "official",
    "lastReviewed": "2026-09-29"
  },
  {
    "id": "wiki",
    "translationKey": "wiki",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "wiki",
    "url": "/wiki",
    "pageType": "wiki",
    "presentation": {
      "shell": "content",
      "variant": "reading-right-rail"
    },
    "h1": "Needle In A Haystack Wiki",
    "seoTitle": "Needle In A Haystack Wiki | Reference Notes",
    "metaDescription": "Reference wiki page for Needle In A Haystack (placeholder).",
    "summary": "Reference wiki for Needle In A Haystack.",
    "hero": {
      "eyebrow": "Wiki",
      "subtitle": "Needle In A Haystack reference notes.",
      "ctas": []
    },
    "quickAnswer": "This wiki page is a placeholder for Needle In A Haystack reference content.",
    "keyFacts": [
      {
        "label": "Status",
        "value": "Reference page"
      }
    ],
    "modules": [
      {
        "id": "wiki-placeholder",
        "type": "prose",
        "heading": "Wiki placeholder",
        "body": "Reference wiki for Needle In A Haystack."
      }
    ],
    "faqIds": [],
    "relatedPageIds": [],
    "schemaTypes": [
      "Article"
    ],
    "sourceStatus": "internal",
    "lastReviewed": "2026-09-29"
  },
  {
    "id": "about",
    "translationKey": "about",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "about",
    "url": "/about",
    "pageType": "site",
    "presentation": {
      "shell": "content",
      "variant": "reading-full"
    },
    "h1": "About Needle In A Haystack Hub",
    "seoTitle": "About | Needle In A Haystack Hub",
    "metaDescription": "About this Needle In A Haystack fan guide hub.",
    "summary": "About page for Needle In A Haystack fan guide.",
    "hero": {
      "eyebrow": "About",
      "subtitle": "Needle In A Haystack fan guide.",
      "ctas": []
    },
    "quickAnswer": "This hub collects launch reference pages for Needle In A Haystack.",
    "keyFacts": [
      {
        "label": "Editorial",
        "value": "Needle In A Haystack Hub"
      }
    ],
    "modules": [
      {
        "id": "about-body",
        "type": "prose",
        "heading": "About this hub",
        "body": "This hub collects launch reference pages for Needle In A Haystack."
      }
    ],
    "faqIds": [],
    "relatedPageIds": [],
    "schemaTypes": [
      "Article"
    ],
    "sourceStatus": "internal",
    "lastReviewed": "2026-09-29"
  },
  {
    "id": "faq",
    "translationKey": "faq",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "faq",
    "url": "/faq",
    "pageType": "faq",
    "presentation": {
      "shell": "content",
      "variant": "reading-right-rail"
    },
    "h1": "Needle In A Haystack FAQ",
    "seoTitle": "Needle In A Haystack FAQ | Launch Questions",
    "metaDescription": "FAQ for Needle In A Haystack launch questions.",
    "summary": "FAQ for Needle In A Haystack.",
    "hero": {
      "eyebrow": "FAQ",
      "subtitle": "Needle In A Haystack launch questions.",
      "ctas": []
    },
    "quickAnswer": "Top launch questions for Needle In A Haystack.",
    "keyFacts": [
      {
        "label": "Status",
        "value": "Launch FAQ"
      }
    ],
    "modules": [
      {
        "id": "faq-body",
        "type": "prose",
        "heading": "Top questions",
        "body": "Top launch questions for Needle In A Haystack."
      }
    ],
    "faqIds": [],
    "relatedPageIds": [],
    "schemaTypes": [
      "FAQPage"
    ],
    "sourceStatus": "internal",
    "lastReviewed": "2026-09-29"
  }
];
