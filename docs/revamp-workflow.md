# Revamp SDLC Workflow

Governs context/session management for the visual revamp (see ADR-0001, ADR-0002). The conversation is disposable — `CLAUDE.md`, ADRs, and tracker issues/tickets are the only things that persist across sessions. If a decision isn't written into one of those before a session ends, it didn't happen.

## Phases

| # | Phase | Skill | Context | Entry requires | Exit requires |
|---|-------|-------|---------|-----------------|----------------|
| 0 | Foundations | `/grill-with-docs` | — | — | **Done.** ADR-0001, ADR-0002, `redesign` branch, baseline commit `a06aebb`. |
| 1 | Spec | `/to-spec` | Can continue current session | ADRs + this workflow doc | Spec published as a GitHub issue, `ready-for-agent` label |
| 2 | Tickets | `/to-tickets` | Can continue from Phase 1 | Spec issue URL | Prototype ticket + 5 section tickets (Hero, Navbar, About, Projects, Contact/Footer), blocking edges wired, published in dependency order |
| 3 | Reference gathering | `/wizard`, then `claude-video`'s `/watch` | **Fresh session** | Nothing beyond repo access | `claude-video` installed and smoke-tested; motion notes from `/watch` written as a comment on the prototype ticket (not left only in chat) |
| 4 | Prototype | `/prototype` | **Fresh session**, opened via `/handoff` (human judgment needed — not `/claude-handoff`) | Prototype ticket + motion notes + screenshots + ADR-0001/0002 | Winning variant recorded (which, and why) as a comment on the prototype ticket; losing variants deleted; ticket closed |
| 5 | Section builds | `/implement` × 5 | **One fresh context per ticket** (`/to-tickets` already mandates this — "clearing context between tickets") | That section's ticket + prototype winner reference + relevant ADRs | `/code-review` clean, typecheck/tests green, verified in a real browser (`/verify` or `/run`), committed to `redesign`, ticket closed |
| 6 | Wrap-up | — | Fresh session | All 5 section tickets closed | Full-site `/verify` pass; confirm with user before opening/merging a PR into `main` |

Work the **frontier**: only start a ticket once everything that blocks it is closed. Section builds stay in the agreed order (Hero → Navbar → About → Projects → Contact/Footer) since later sections build on the visual system the earlier ones establish.

## Handover checklist

Run this before ending any session — whether switching to a new context or just stopping for the day:

1. `git status` clean (or WIP stashed with a note on what's unfinished and why).
2. The current ticket/issue says exactly what's done and what's left — not "in progress."
3. Any new hard-to-reverse or non-obvious decision made this session got its own ADR *now*, not deferred.
4. Run `/handoff` (manual pickup) or `/claude-handoff` (unattended, background) to produce the next session's opening prompt. Reference existing artifacts by path/URL — never restate their content, or they'll drift out of sync.
5. The next session's first action is unambiguous (e.g. "open ticket #14, run `/implement`").

## When to switch context

- **Always** at a phase boundary in the table above.
- **Mid-phase**, only at a git-committed checkpoint — never mid-edit, mid-decision, or with a design question still open in chat.
- If a single `/implement` ticket is dragging past its natural scope — stop at the next green commit, update the ticket with precisely what remains, hand off rather than pushing through in a degraded context.
- Never switch while a decision from the user is sitting unrecorded in the conversation — capture it (ADR or ticket update) first.

## Skills deliberately excluded from this pipeline

`wayfinder` (built for cross-session investigation maps — overkill at this scope), `ubiquitous-language` / `improve-codebase-architecture` (no rich domain or backend architecture at stake), `writing-*` (article-writing, not code), `teach`, `loop-me`, `triage`, `ask-matt`.
