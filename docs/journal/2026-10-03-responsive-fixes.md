# 2026-10-03 — Responsive and behaviour fixes (cleanup, part 1)

- **Asked for:** clean up the hand-built site, starting with the email form that peeked in from the right on phones.
- **Worked first time:** yes, after measuring the site in a headless browser at 360, 390, 768 and 1366px wide.
- **Laptop needed:** no.

## What was wrong, and the fix

- **Email form peeking in:** closed, it sat at `right: -100%` — one *screen* width off — while being a fixed 400px wide. On screens narrower than about 400px part of it stayed in view. It now moves its own width off-screen, is never wider than the screen, and is hidden from keyboard and screen readers while closed. It also gained a dimmed backdrop, Escape and tap-outside to close, and labels tied to their inputs.
- **Sideways scroll on 360px phones:** the hero title switched to "HADEBE" at a fixed 90px, wider than the screen, which widened the whole page (and clipped the mail icon). Now capped at 20vw on small screens.
- **Project details invisible on touch screens:** they only appeared on hover. They now show permanently on devices without hover.
- **Empty cell in the projects grid on tablets:** a lone last card now spans the row.
- **Menu links:** all of them pointed at `about` plus hand-tuned pixel offsets (different on desktop and mobile), and there were no section anchors at all. Sections now have ids (`home`, `about`, `projects`) and stop just below the navbar via `scroll-margin-top`. `react-scroll` is no longer needed and was removed.
- **Analytics counted every visit twice:** `ReactGA.initialize` already sends a page view; a leftover example line sent a second, fake one as `/my-path`. Removed.

## Friction

- Headless Chromium here cannot load Google Fonts, so the screenshots use fallback fonts; layout measurements are unaffected.
- My first browser check "failed" because on a phone the form now covers the whole screen, so there is no backdrop to tap — the test was wrong, not the site.

## Not fixed here

- `Hero.css` points its background at `assets/hero_background.gif`, which does not exist (there is a `.png`). The hero has been plain black because of it. Left alone: choosing the background is a design decision.
