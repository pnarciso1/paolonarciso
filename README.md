# Paolo Narciso personal website

A Next.js App Router + TypeScript website for paolonarciso.com. No CMS, database, API keys, or Sites account is required.

## Open in Cursor

1. Unzip this archive.
2. In Cursor, choose File > Open Folder and select `paolo-site` (the folder containing package.json).
3. Use Node.js 22 or newer.
4. Run `npm ci` and then `npm run dev`.
5. Open http://localhost:3000.

## Check and deploy

Run `npm run typecheck` and `npm run build`. Commit the project to your own GitHub repository. Import that repository in Vercel, choose the Next.js preset, and deploy a preview. No custom build settings are required. After reviewing the preview, add paolonarciso.com in Vercel Project Settings > Domains and follow the DNS instructions shown there. Keep any unrelated email DNS records intact.

`NEXT_PUBLIC_SITE_URL` defaults to https://paolonarciso.com. Set it only if the production domain changes. A deployment has NOT been made by this handoff.

## Content and structure

- `lib/content.ts`: books, project descriptions, and external destinations.
- `app/page.tsx`: homepage.
- `app/globals.css`: design tokens, responsive styling, typography.
- `components/ui.tsx`: book covers, portrait, shared layouts.
- `app/books/[slug]/page.tsx`: individual book pages.
- `app/social-impact/page.tsx`: Core Immersive, GoAxi, and board service.
- `app/explorations/page.tsx`: Atlas and Philippine history videos.
- `app/about/page.tsx`: biography.
- `lib/substack.ts`: server-side RSS parsing and hourly cache refresh.
- `components/writing.tsx`: feed display and a working Substack fallback.

## Substack behavior

The site requests https://paolonarciso.substack.com/feed on the server, parses titles, dates, and excerpts, and links to the original articles. It renders text only, never feed HTML. Only HTTPS links on the publication hostname are accepted. No authenticated publishing dashboard is accessed. Both `/` and `/writing` revalidate hourly, on traffic; this is not instant push synchronization. Successful results are cached. Refresh failures throw within the cache loader so Next can retain a previous successful result. With no successful cached result, the site shows a direct Substack invitation rather than fabricated articles. Feed delivery depends on Substack allowing requests from the deployed environment. Verify this in Vercel before launch. This is a recent-post feed, not a full archive.

## Asset provenance

Book covers and portrait are displayed using non-destructive CSS windows into Paolo's supplied screenshots. The original images are under public/images; no generated portrait or book art is used. These are first-version reference assets. Obtain separate, high-resolution images before final publication, replace the screenshot windows with normal images, and remove the source screenshots. The YouTube screenshot containing browser/account UI is intentionally not bundled. Fonts use Google Fonts with local system fallbacks; for privacy or fully offline use, self-host the licensed fonts or keep system fonts.

## Content remaining before launch

- Supply individual Amazon product URLs. Current buttons truthfully point to the author bookstore.
- Confirm whether The Founder’s Journey and From Founder to CEO are distinct titles or editions. Both supplied listings are shown independently without asserting a relationship.
- Supply original cover images and portrait.
- Supply individual YouTube video URLs if direct embeds are desired. Current links explicitly lead to the channel.
- Confirm the Foundation for Social Connection's official URL. It has not been confused with the Action Network, and no unverified link is supplied.
- Optional: add real project photography/screenshots to the typography-led venture panels.
- Optional: provide a public contact destination. No email address has been invented.

## Scope

Homepage plus Books, six book detail pages, Writing, Explorations, Social Impact, About, a custom 404, sitemap, robots, metadata, favicon, keyboard focus, skip link, responsive navigation, and reduced-motion support. Atlas remains at its existing address. Videos currently use channel links rather than invented video IDs. No claims about unverified project outcomes or performance metrics are added.

## Suggested Cursor prompt

Read README.md and HANDOFF.md first. Preserve the approved blue/white editorial design and content positioning. Run npm ci and npm run dev, then help me review the site. Complete the listed content gaps using only the assets and URLs I provide. Keep Substack as the article publishing home and the Atlas at its existing URL. Prepare this repository for a Vercel preview through my GitHub account.
