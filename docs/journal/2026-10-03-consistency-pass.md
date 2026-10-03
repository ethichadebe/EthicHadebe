# 2026-10-03 — Consistency pass (cleanup, part 2)

- **Asked for:** make the hand-built styles consistent — colours, spacing, breakpoints — and remove what is unused. Keep the full-screen title and the plain black hero.
- **Worked first time:** yes. Before/after screenshots at 360, 390, 768, 850 and 1366px, and every check from part 1 re-run.
- **Laptop needed:** no.

## What changed

- **One set of design tokens** in `src/index.css`: colours, fonts, corner radius, transition timing, navbar height. The green `#61BC21` was typed out 13 times; now it is `--color-accent` everywhere.
- **Three breakpoints** — 600, 900 and 1200px — instead of seven (480, 600/899, 650, 768/769, 1000, 1200).
- **One rule for the big title** instead of two. Before, it was 100px on a 768px tablet but dropped to 68px at 769px; now it scales smoothly and never overflows a phone.
- **Duplicate rules removed:** the navbar link style was declared three times; the project buttons repeated the About chip style almost verbatim.
- **Hover colours agree:** everything hovers to the accent green; the send button now darkens instead of turning grey. A leftover `.btn` style (hovering to dark red) was unused and is gone.
- **Hero:** plain black, as intended; the reference to a non-existent `hero_background.gif` is removed (it failed on every visit).
- **Fonts:** only the weights in use are downloaded; the unused Moul font and all italics dropped.
- **Unused files removed** (all still in git history): the old Penuel shop/book-store images, `Penuel_BW.png`, `YouTube.png`, `Menu.png`, `figma.png`, `hero_background.png`, and a stray screen recording. Kept: the Penuel project's image and video (the card may come back) and `ethic.gif`.
- **Markup:** external links are plain `<a>` with `rel="noreferrer"` instead of router links; the contact component is named `Contact` (was `Episodes`) and its icons have proper labels.

## Visible differences

- 769–900px wide: the burger menu now shows instead of the desktop links, and the title is 100px instead of shrinking.
- The gap above the copyright line is 20px instead of 70px.
- Project buttons and form fields have the same 10px corners as the skill chips (were 5px and 4px).
