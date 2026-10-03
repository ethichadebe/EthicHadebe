# 2026-10-03 — Onboard to Mobile Delivery, with a static deploy

- **Asked for:** onboard this repo (CLAUDE.md, journal, plugin settings, CI) and add the static deploy as app `portfolio`, plus hygiene: stop tracking `node_modules`, fix the package name. No redesign.
- **Worked first time:** no — the build did not work as found. See below. Lint still fails; that is known and deliberately left for its own change.
- **Laptop needed:** no.

## Friction

- **`node_modules` was committed — 12,781 files — and `.gitignore` never mentioned it.** It went in with a commit literally titled "Node modules". Now ignored and untracked (`git rm -r --cached`); the blobs stay in history, because purging them would need a force-push to a published branch.
- **The build failed on Linux.** `Navbar.jsx` imported `assets/menu.png`; the file is `Menu.png`. That works on a case-insensitive Windows or macOS disk and fails on CI with `Could not resolve "../../assets/menu.png"`. Nothing had ever built this repo on Linux, so nobody knew. Fixed by correcting the case — the only source change here. Without it the first deploy would have failed at the build step.
- **`npm run lint` fails: 36 errors in 15 files.** 32 `no-unused-vars` (mostly unused `import React`), 2 `react/jsx-key`, 2 `react/prop-types`. Not fixed and the config not loosened — that is its own change. Until it lands, the CI lint step is red on every pull request.
- **No test script**, so CI runs lint and build only.
- **The built site is ~52 MB**, almost all two `.mp4` files under `src/assets/shows/`. It deploys, but every deploy re-uploads them.
- **The package was named `penuel`**, and much of the content (books, shop, shows) is still another person's site. The name is fixed; the content is for the redesign.
- The deploy needs four repository secrets that this session cannot see or set: `VPS_DEPLOY_KEY`, `VPS_HOST`, `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`. Until they exist, a merge to `main` produces a failed deploy, not a live one.
