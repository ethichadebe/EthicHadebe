# 2026-10-03 — Add Accucery to Projects

- **Asked for:** an Accucery card with a hover animation like the other projects'.
- **Worked first time:** mostly. The live site was unreachable from the cloud session (network policy), so the screens came from the app's own code instead.
- **Laptop needed:** no.

## How the animation was made

The existing ones are Jitter exports: 1920×1080, 60 fps, 11–15 s, brand logo and colours, device mockups sliding in while the screens show the real site; the still shown before hover is a black-and-white 906×1080 frame.

Accucery's was generated rather than designed by hand:

1. Ran the Accucery frontend (`ethichadebe/Brittle-AI`) locally and answered its `/api` calls with a realistic sample list — Checkers prices, a Pick n Pay comparison with that store's own substitutes — so the real screens could be captured without its database or store scrapers.
2. Captured four phone screens: your lists, a list, "Compare prices at…", and the Pick n Pay result.
3. Built the scene as an animated web page in Accucery's teal and wordmark, with three taglines ("Live prices from your local store", "Compare your whole list in one tap", "Know your total before you shop"), and rendered it frame by frame to H.264 (High 4.2, 13 s, 60 fps).
4. Composed the portrait still separately (logo over two phones) and made it black and white, matching the other cards.

The video is 1.8 MB; the existing ones are 6–26 MB.

## Friction

- The cloud session could not open `accucery.ethichadebe.me`; the environment's network settings block it.
- The first repo link given was this one; the app lives in `ethichadebe/Brittle-AI`.
- Headless Chromium here cannot play H.264 at all, so playback was verified by decoding the whole file with ffmpeg rather than in the browser. The existing videos fail the same way there.
- Accucery is mobile-first (a 480px column on a laptop), so the video uses two phones, like EP Hotspot, rather than a laptop.
