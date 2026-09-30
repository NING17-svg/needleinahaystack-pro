import type { PageContent } from "@/types/content";

export const coOpAndMultiplayerPage: PageContent = {
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
};
