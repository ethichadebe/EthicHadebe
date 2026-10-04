# 2026-10-04 — Add Ask Us to Projects

- **Asked for:** an Ask Us card with its own hover animation.
- **Worked first time:** yes, after one layout tweak (below).
- **Laptop needed:** no.

## How the animation was made

Same pipeline as Accucery's, and framed for the cards from the start (everything that matters inside the centre ~600px, since the portrait cards crop the video to its middle):

1. Ran the askus frontend (`ethichadebe/askus-platform`) locally and answered its `/api` calls with sample data — four studies with incentives, one respondent ("Thandi") with an approved, a completed and a pending application and a paid survey — so the real screens could be captured without the Spring Boot API.
2. Captured the full home page for the laptop, and five phone screens: active studies, the study cards, a study's detail page, the dashboard ("You're approved…") and My Surveys (Paid).
3. Scene in askus's colours (cream and peach, navy text) with its logo: the laptop scrolls the home page while the phone walks through a respondent's journey, under three taglines — "Market research that reaches every province", "Respondents find studies and earn incentives", "Apply, get approved, get paid". 14 s, 60 fps, H.264 High 4.2, 1.7 MB.
4. Portrait still, black and white, logo over the laptop and phone.

## Friction

- The live home page plays a YouTube video behind its headline; it can't load in the cloud session, so the capture shows a navy brand gradient there instead.
- The repo is private, so the card has no GitHub button (like EP Hotspot and BDM Energy).
- The live address is assumed to be `askusapp.ethichadebe.me` (the DNS record and the deploy registry use it); the session could not open it to confirm.

## Layout change

With five projects the old grid left a hole: four cards on a laptop row, then one card beside three empty cells (and at 1920px a lone card stretched to 1920×600, cropping its video). The grid is now a wrapping row of cards, three per row on laptops and wider, two on tablets, one on phones, with a shorter last row's cards growing to fill it. Measured: 3 + 2 at 1024, 1366 and 1920px; 2 + 2 + 1 at 768px; one per row on phones; no sideways scroll; every card's details fit when shown.
