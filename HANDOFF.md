# First-version handoff

## Status

Built as a portable Next.js 16.3.5 project with React and TypeScript. Open this folder in Cursor. Deployment to GitHub/Vercel has not been performed.

## Validation

- Production build: passed, including generation of all page routes.
- TypeScript check: passed.
- RSS parsing: checked valid post extraction, HTML removal, invalid-date handling, and unsafe-link rejection.
- Live Substack feed: could not be verified; the request timed out in the build environment. The public site shows a Substack invitation when no posts are available.
- Browser rendering and mobile menu interaction: not visually verified. The browser runtime could not be downloaded because of a network timeout. Inspect desktop and mobile in Cursor before publication.

## First review in Cursor

Run npm ci, npm run dev, then open localhost:3000. Review the homepage at 1440px, 768px, and 390px widths. Check the portrait and cover crops, menu toggle, keyboard focus, section anchors, and all navigation links. Fonts fall back gracefully if Google Fonts is unavailable.

## Content decisions

Use the founder roles and board roles supplied by Paolo. Foundation for Social Connection is distinct from the previously linked Action Network. Do not invent outcomes, credentials, video IDs, article titles, email addresses, or book descriptions. Books currently link to the Amazon author store; individual video URLs are not supplied. See README.md for remaining content tasks.

No API keys or credentials are included. Source screenshots of book listings and the author biography are bundled for reference imagery; replace them with original standalone assets and remove those screenshots before final publication. The private browser/account UI screenshot is excluded.
