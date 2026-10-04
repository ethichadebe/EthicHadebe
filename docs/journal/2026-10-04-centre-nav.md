# 2026-10-04 — Centre the burger menu

- **Asked for:** the burger menu did not look centred on a phone.
- **Worked first time:** yes.
- **Laptop needed:** no.

## What was wrong

The navbar spread its three items with `justify-content: space-between`, which centres the middle item between its neighbours, not on the page. The mail icon (95px with margins) is wider than the logo (69px), so the burger sat 13px left of centre on a 390px phone (182 instead of 195). The desktop links had the same offset.

## Fix

The navbar is now a three-column grid (`1fr auto 1fr`): the outer columns share the leftover width equally, so the middle one sits on the page's centre whatever the logo and mail icon measure. Measured centred at 360, 390, 768 and 1366px; logo, mail icon and navbar height unchanged; the earlier behaviour checks (menu links, mail popup, no sideways scroll) all still pass.
