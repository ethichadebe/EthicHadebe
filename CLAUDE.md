# CLAUDE.md

## Mobile Delivery

This repository ships through Mobile Delivery: someone describes a change from their phone, you open a pull request, they merge, and it deploys itself. Follow this for **every** change, whether or not the request mentions it.

**Always:**

- Work on a branch and **open a pull request**. Never push to `main`, and never merge your own work — merging is the human's decision.
- **Run the checks before opening the PR**, so CI is not the first to find a problem.
  - Site (repo root): `npm ci`, then `npm run lint` and `npm run build`. There is no test script.
- **Add a change note** to `docs/journal/` in the same pull request: a dated file saying what changed, whether it worked first time, whether a laptop was needed, and anything that got in the way. See `docs/journal/README.md`.
- Keep the pull request description short and plain: what changed, and why.

**Never:**

- Put server addresses, IP addresses, keys or secrets in this repo.
- Edit anything in `.github/workflows/` unless the request is explicitly about the pipeline.
- Add a dependency without saying in the PR description why it is needed.

## How this repo deploys

A static single-page app. Merging to `main` runs `.github/workflows/deploy.yml`, which calls the shared `static-deploy.yml` with app `portfolio`: CI builds `dist/`, uploads it as a Candidate, and the server only cuts over if the page and its first script answer.

- Client-side routes (`createBrowserRouter` in `src/main.jsx`) rely on the server's live vhost falling back to `index.html`. That is configured server-side, not here.
- Asset imports are case-sensitive on CI and the server (Linux), even if they work on Windows or macOS.
