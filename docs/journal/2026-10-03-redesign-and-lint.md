# 2026-10-03 — Ship the redesign, clear lint

- **Asked for:** push the latest site (built locally, on the `redesign` branch), clean up lint, and deploy it.
- **Worked first time:** the merge needed two conflicts resolved by hand; lint and build passed after that.
- **Laptop needed:** yes — the redesign lived only on the laptop until it was pushed.

## What happened

- `redesign` branched off before the onboarding merge, so `main` was merged into it. `CLAUDE.md` conflicted (the branch had its own agent-skills section; both kept, Mobile Delivery first). `Navbar.jsx` conflicted; the redesign version was kept.
- **The `menu.png` / `Menu.png` case bug came back** with the redesign's Navbar. It is gone for good now: the import was unused, so it was removed.
- **`node_modules` was tracked again** on `redesign` (12,817 files) — the local copy predated the `.gitignore` fix. Untracked again in the merge.
- **Lint: 15 errors, now 0.** Unused imports, plus missing prop declarations on `ContactFormPopup`, fixed with `prop-types` as an explicit dependency. No config changes.

## Since the first change note

- The first deploy failed: the `VPS_DEPLOY_KEY` secret would not load (`error in libcrypto`), most likely a paste problem. Setting it from the file with `gh secret set ... < md_deploy` (through `cmd /c` on PowerShell, which has no `<`) fixed it.
- The site moved to `ethichadebe.me` (the `.com` is being retired). The registry's `SITE_HOST` and the nginx `server_name` were changed to match, and certbot issued a real certificate — after one failed attempt made before DNS had switched over.

## Worth knowing

- The Penuel project's image and video are in `src/assets/projects/` but no card uses them, so they were not shipped.
- `dist/` is about 58 MB, almost all `.mp4` files. Every deploy uploads all of it.
- The EmailJS IDs in `ContactFormPopup.jsx` are public client-side IDs, visible in the browser anyway. Limit the allowed origins to `ethichadebe.me` in the EmailJS dashboard.
- `emailjs-com` is deprecated in favour of `@emailjs/browser`.
