---
name: TIC — Tera International Commercial Co., Ltd.
description: Your Trusted Travel Partner — a bilingual (TH/EN) one-stop travel management landing page
colors:
  ink: "#0C2A4D"
  ink-light: "#1E4370"
  ink-deep: "#081B33"
  paper: "#F5F7F6"
  paper-ply: "#EAF0F5"
  paper-white: "#FFFFFF"
  gold: "#D4AA47"
  gold-dark: "#B08829"
  gold-text: "#7D6318"
  slatecopy: "#5B6B7C"
typography:
  display:
    fontFamily: "\"Big Shoulders Display\", \"Prompt\", sans-serif"
    fontSize: "clamp(3.75rem, 7vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "\"Big Shoulders Display\", \"Prompt\", sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  title:
    fontFamily: "\"Big Shoulders Display\", \"Prompt\", sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, \"Prompt\", sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "\"JetBrains Mono\", monospace"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.1em"
rounded: {}
spacing:
  sm: "12px"
  md: "24px"
  lg: "32px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.gold}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: "14px 32px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper-white}"
  icon-chip-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper-white}"
    height: "56px"
    width: "56px"
  icon-chip-outline:
    backgroundColor: "transparent"
    textColor: "{colors.paper-white}"
    height: "56px"
    width: "56px"
---

# Design System: TIC — Tera International Commercial Co., Ltd.

<!-- Redesign, not a refinement: this replaces the prior "Chartered Seal" navy/gold badge system in full. Recorded from the shipped build (seed key 4c951674), not from the pre-build brief. Follow-up refinement passes since — (1) red → gold, hero converted to a full-bleed background placeholder, (2) real logo v2 and real hero photo dropped in, Services' code column removed, TH/EN display-weight matched, Contact labels fixed to English, Client Logos re-headed and given a marquee, (3) hero photo confined to the right side, Services column gap widened and mono removed, Contact mono removed, footer titles fixed to English, marquee hardened, (4) Beacon Gold re-picked to `#D4AA47` (no longer the logo-sampled value) with contrast-derived shades recalculated, Services description freed from its width/height caps, (5) Why Choose Us trimmed to 4 items, Client Logos swapped to a new 13-mark set (always full color, bigger, faster marquee), new Partner Airlines section added under Services, (6) Partner Airlines retitled "Carrier Partners" (EN) with its group labels forced English in both locales and its logo rows center-justified, Client Logos moved above Contact and given a second marquee row scrolling in reverse at a re-tuned `20s` pace, (7) Partner Airlines given more breathing room throughout (wider group padding, centered labels, wider logo-tile gaps) and both marquee rows slowed to `40s` with more vertical space between them, (8) three Partner Airlines logos (JAL, Austrian, Air France–KLM) replaced with more complete re-uploads, Client Logos marquee rows split into two disjoint client subsets so the same logo can never show in both rows at once, more space added above the Client Logos marquees, (9) three accessibility fixes from a `/impeccable critique` pass — primary button's focus ring corrected from `ring-gold` to `ring-gold-dark` (was failing 3:1), Beacon Gold Text darkened from `#8A6B20` to `#7D6318` (was narrowly failing 4.5:1 on the Services table's striped rows), hero's mobile scrim end stop deepened from `to-ink/35` to `to-ink/60` (headline was reading nearly bare against the photo), (10) a re-run critique caught a genuine content bug the first pass missed — English service rows showed their title and subtitle as the same string, stacked twice — fixed by only rendering the subtitle when it differs from the title, rather than inventing new subtitle copy, (11) `/impeccable animate` added a system-wide hover/focus motion language — the Punch-Through Sweep (a directional fill wipe, not a flat crossfade) on every solid/bordered clickable element, and the Ruled Underline (an animated hairline draw) on plain text links, both triggering on `:hover` and `:focus-visible` alike, (12) a second `/impeccable animate` pass added a restrained Locomotive-Scroll-style wheel-smoothing effect (desktop-only, real `window.scrollY`, not a scroll-hijack library) — all still within the same "Timetable & Route" world, not further redesigns. -->

## Overview

**Creative North Star: "Timetable & Route"**

The system is a working airline timetable and route map rendered as a website, not a trust badge dressed up as one. Everything reads like it was pulled from a departures board or a printed ticket: hairline-ruled rows instead of cards, a Bangkok-centered dashed route network behind the hero, service codes (AIR / VISA / CAR / HTL) standing in for gate numbers, and a bold gold band standing in for the one moment on a real departures board that actually matters — where to go next. TIC's real claim (30+ years, IATA/BSP accredited, one of Thailand's first ten BSP agencies) is proven by the precision of the system, not stated by it.

The palette runs cooler and paler than a typical "vintage travel" cream-and-serif treatment on purpose: the ground is a cool ticket-stock white-blue, never warm cream, and the display face is a bold condensed grotesk (the way real airline signage and timetables were set), never a serif. The one saturated accent, **Beacon Gold**, reads as runway-light amber against the ink ground, a real aviation reference, not a decorative choice — it was originally sampled from the TIC logo mark and later re-picked to a warmer, more muted brass tone (`#D4AA47`) by direct instruction; it is a chosen brand color now, not a derived one, and its accessible shades are recalculated from whatever the current value is.

**Key Characteristics:**
- No cards. Content lives in hairline-ruled rows and columns — a timetable, a manifest, a ledger — never a bordered box with a shadow. The one deliberate exception is Partner Airlines' logo tiles, justified by a real cross-background legibility problem (see that component's doc), not decoration.
- No circles, no pills. Every shape is sharp-cornered; the one recurring motif is a small clipped notch (a ticket-stub corner) on icon chips.
- One committed saturated color (Beacon Gold) owns a full section at page scale (Contact), not just small accents elsewhere.
- The hero is a full-bleed background section — a real photo (a banking commercial airliner) with a legibility scrim built in, not a small framed photo beside the text. The ink gradient remains only as a load-time fallback.
- A dashed route-line motif (SVG, Bangkok-centered, non-specific — no invented cities or flight numbers) is the page's one ambient decorative device.
- Flat everywhere. No drop shadows anywhere in the system; depth comes from rules, borders, and color blocking, never elevation.
- Bilingual by construction: Big Shoulders Display leads Latin headlines, Prompt carries Thai at matching weight, JetBrains Mono carries every measured/tabular value (times, codes, data) in both scripts.

## Colors

Three roles only — a working-paper neutral pair (ink + paper) and one committed accent (gold) — no secondary or tertiary hue.

### Primary
- **Ink** (`#0C2A4D`): structural color — all body/heading text on light surfaces, rules, borders, the header, the hero's fallback gradient, the trust-bar and why-choose-us band fills.
- **Ink, Light** (`#1E4370`): divider color between trust-bar items, and part of the hero's fallback gradient. Never a flat surface fill on its own.
- **Ink, Deep** (`#081B33`): the darkest fill — the footer, and one end of the hero's fallback gradient.

### Secondary
- **Beacon Gold** (`#D4AA47`): a warmer, muted brass-gold (revised from the original logo-sampled vivid yellow per direct user request). The system's one committed color — owns the entire Contact section as a full-bleed field, the primary button, the route-map hub/lines (on the dark hero ground), the hero headline's accent line, and hairline accent rules on dark surfaces. **This value fails contrast for text or fine marks on light (paper/white) grounds — never use it for text there; use Gold, Dark or Gold, Text instead.**
- **Beacon Gold, Dark** (`#B08829`): the accessible large/bold-text and graphical-mark shade for **light** grounds (clears 3:1) — heading accent rules on paper, client-logo dividers.
- **Beacon Gold, Text** (`#7D6318`, darkened from an earlier `#8A6B20`): the accessible small/body-text shade for **light** grounds. The earlier value cleared 4.5:1 against plain Paper but narrowly failed (≈4.46:1) against the Services table's striped-row tint (Paper Ply blended over Paper) — a `/impeccable critique` pass caught it since the CLI detector can't evaluate computed contrast. The current value clears **5.1:1+ against both** plain and striped backgrounds, with real margin instead of a knife-edge pass. Used for the Services subtitle labels and any small gold text on paper.

### Neutral
- **Paper** (`#F5F7F6`): the default page ground — cool, pale, ticket-stock, never warm cream.
- **Paper, Ply** (`#EAF0F5`): alternating-row tint in the services timetable, evoking a carbon-copy form's second ply.
- **Paper, White** (`#FFFFFF`): card-free content surfaces (header, client-logo section).
- **Slate Copy** (`#5B6B7C`): body/description text on paper surfaces.

### Named Rules
**The No-Card Rule.** Content that would default to a bordered, shadowed card is a ruled row instead — a table, a manifest, a ledger line. Services, in particular, is a timetable with columns (service, details, code), not a grid of icon-heading-text cards.

**The One Gold Rule.** Gold is the only saturated color in the system and it is spent in large, confident blocks (a full section fill, a primary button) or as a precise small mark (a route-line, a code label) — never as a medium-sized decorative accent in between. If gold is not doing one of those two jobs, it should not be gold.

**The Three-Gold Rule.** Vivid Beacon Gold is for large fills and for marks/text sitting on a **dark** ground (it has excellent contrast there). On a **light** ground, text and fine marks must drop to Gold, Dark (large/bold, 3:1) or Gold, Text (small/body, 4.5:1) — the vivid value is invisible-adjacent on paper. Getting this backwards is the single easiest way to break the system's accessibility.

## Typography

**Display Font:** Big Shoulders Display (with "Prompt", sans-serif fallback for Thai glyphs)
**Body Font:** Inter (with "Prompt", sans-serif fallback for Thai glyphs)
**Label/Mono Font:** JetBrains Mono

**Character:** Big Shoulders Display is a bold, condensed grotesk modeled on transit and departure-board signage — it carries the hero headline and every section heading in uppercase, doing the "timetable" work visually before any content loads. Prompt stands in for Thai at matching weight so bilingual headlines never feel like one script got the display treatment and the other got a fallback. JetBrains Mono marks anything that is a measured value — the header's phone number, the language-toggle labels, the footer copyright — never used as a "technical" costume on prose.

**Two-font sections.** Services and Contact deliberately use only Display + Body (no mono) — Services' subtitle and column headers, and Contact's Phone/Email/Address labels, were originally set in JetBrains Mono and read as thin/hard to read next to the bold display titles. Both were moved to Body (Inter/Prompt) at `font-semibold` by direct instruction. Don't reintroduce mono there; it's a deliberate two-typeface zone, not an oversight.

### Hierarchy
- **Display** (900, `clamp(3.75rem, 7vw, 6rem)`, line-height 0.95, tracking -0.04em, uppercase): the hero headline only, always set in Latin (the brand line "YOUR TRUSTED / TRAVEL PARTNER" is identical across both locales by product decision, so Display never actually renders Thai glyphs today — if that changes, drop tracking to -0.025em for Thai to protect stacked diacritics).
- **Headline** (800, `clamp(2.25rem, 4vw, 3rem)`, line-height 1.1, tracking -0.04em, uppercase): every section H2 (Services, Why Choose Us, Contact, Client Logos' smaller mono variant). Renders in Prompt Bold/ExtraBold for Thai — verified clean at this tracking, no diacritic crowding.
- **Title** (700, 24px, tracking -0.01em, uppercase): service-row titles and Contact's phone/email/address values.
- **Body** (400–500, 16px, line-height 1.625): descriptions, footer text, nav links.
- **Label** (600, 14px, tracking 0.1em, uppercase, mono): column headers, service codes, contact labels, language-toggle text. (Raised from 12px in this pass — the smallest text in the system read as too tight; 14px is now the label-text floor everywhere, no exceptions.)

### Named Rules
**The Uppercase Display Rule.** Every Display and Headline instance is uppercase — this is signage, not prose. Body and Label text is not forced uppercase (Label uses tracking instead of case to read as a system label).

**The Mono-Means-Measured Rule.** JetBrains Mono only appears on a value someone could look up or compare: a time, a phone number, a code, a language toggle. It is never a "technical-flavored" decoration on ordinary prose.

**The 14px Floor Rule.** No text in the system renders smaller than 14px (`text-sm`). A first legibility pass found 12px labels reading as too tight; nothing should regress below this floor.

**The Language-Matched Weight Rule.** Big Shoulders Display and Prompt render at visibly different perceived weight for the same numeric `font-weight` — Prompt reads heavier than Big Shoulders Display at an equal value. Rather than one flat override (which would destroy the intentional 700/800/900 hierarchy), Thai steps down one Tailwind weight at each level via `html[lang='th'] .font-display.font-bold/.font-extrabold/.font-black` in `src/index.css`. Any new `font-display` + weight combination must get a matching Thai-side rule, or the two languages will visibly mismatch again.

## Layout

Single centered container, `max-w-6xl` (1152px), `px-4` mobile / `sm:px-6` padding — unchanged across every section.

**Section rhythm:** Hero is a tall full-bleed section (`min-h-[560px]` mobile up to `70vh` desktop) rather than content-height; Services/Partner Airlines/Why Choose Us/Contact `py-20 sm:py-24`; Client Logos `py-16 sm:py-20`; Trust Bar is a tight utility bar, not a full section. Order is not alternating purely by background color — it's ordered by narrative role (see Page order below); Contact deliberately comes last before the footer regardless of adjacent section tone, since it's the page's call-to-action.

**Page order:** Hero → Trust Bar → Services → Partner Airlines → Why Choose Us → Client Logos → Contact → Footer. Partner Airlines sits directly under Services by direct instruction — it reads as a continuation of "what we book," not a standalone trust signal. Client Logos sits directly above Contact by direct instruction — the proof-of-clients moment leads into the call-to-action, rather than trailing after it.

**Grid behavior**, mobile-first:
- Hero: single content column (`max-w-2xl`) over a full-bleed background, left-aligned, vertically centered within the section's min-height. No second column — the background carries the full width, not a side-by-side photo.
- Services: a single-column ruled table at every width, two columns throughout (icon+title block, details) — no third column. The description paragraph runs the full width of the details column (no `max-w` cap, no line-count reserve) by direct instruction, so the row makes full use of the available space rather than wrapping early inside an artificially narrow measure.
- Partner Airlines: a vertical stack of two labeled groups (Full-Service, Low-Cost), each a `flex-wrap justify-center` grid of logo tiles that fills the full container width — **not** a side-by-side two-column split. A two-column layout was tried first and rejected: 13 full-service logos vs. 4 low-cost logos left a tall dead gap under the short column once divided by a vertical rule. The stacked, full-width wrap avoids that mismatch entirely regardless of how unevenly the two groups are sized. Rows are center-justified (not left-aligned) by direct instruction, so a partial final row reads as intentionally centered rather than orphaned on the left. Group label is also `text-center` (was left-aligned) by direct instruction, matching the centered tiles below it.
- Trust Bar: 2 → 4 (`md`) columns with dividers between all items.
- Why Choose Us: 1 → 2 (`sm`) columns, each item a ruled row with a perforated-dot divider beneath. Four items (not five) — the "24/7 customer support" item was removed by direct instruction, which also happens to make the 2-column grid land even instead of leaving a dangling fifth item.
- Contact: 1 → 3 (`sm`) columns, divided by hairline rules (horizontal on mobile, vertical on desktop) rather than gaps.
- Client Logos: two stacked horizontal marquees (`.marquee-track` in `src/index.css`) scrolling in opposite directions — see the Client Logos Marquee component doc.
- Footer: 1 → 2 (`sm`) → 4 (`lg`) columns; logo/tagline spans 2 columns at `lg`.

### Named Rules
**The Ruled-Row Rule.** Any list of parallel items (services, credentials, contact methods) is separated by a rule — solid hairline, or the perforated-dot divider on Why Choose Us — never by card gaps or shadows. The perforated-dot divider (`.perf-divider` in `src/index.css`) is reserved for Why Choose Us and the footer's pre-copyright break; every other ruled list uses a plain solid hairline.

## Elevation & Depth

Flat. No `box-shadow` appears anywhere in the built system — depth and separation come entirely from rules, borders, and color blocking (paper vs. ink vs. gold section fills), consistent with a printed-matter world where nothing floats.

### Named Rules
**The No-Shadow Rule.** If a component seems to need a shadow to separate from its background, give it a border or a background color change instead. A shadow appearing anywhere in this system going forward is a regression, not a style choice — verify against this rule before adding one.

## Shapes

No border radius anywhere (`rounded: {}` — the system uses square corners exclusively, including buttons and icon chips). The one recurring geometric signature is a small clipped notch on the top-right corner of every icon chip (`clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)` in `IconBadge.tsx`) — a ticket-stub corner cut, applied consistently, never as a one-off flourish.

### Named Rules
**The Sharp Corner Rule.** No `border-radius` on any component. The notch is the system's only permitted corner treatment, and it belongs to icon chips alone — it does not migrate to buttons or cards.

## Components

### Buttons
- **Shape:** rectangular, sharp corners, no radius.
- **Primary:** Beacon Gold fill, **ink text** (white fails on this gold), `14px 32px` padding, uppercase Big Shoulders Display 18px bold. Hover: inverts to ink fill with gold text — a clean punch-through rather than a darkened fill (darkening the gold and keeping ink text narrowly fails 4.5:1; inversion sidesteps the problem and reads more intentional).
- **Outline:** transparent fill, 2px ink border, ink text. Hover: fills solid ink with white text.
- **Outline-light** (for use on the hero/ink backgrounds): transparent fill, translucent white border, white text; hover fills gold with **ink text**.
- All buttons carry a visible `focus-visible` ring (`ring-gold-dark`, chosen because it clears 3:1 against both light and dark grounds — the vivid gold does not); never remove it.

### Icon Chips
*(square with a clipped corner notch; `src/components/ui/IconBadge.tsx`)*
- **Shape:** square, sharp corners except one clipped top-right notch. Sizes in active use: 56px (services, why-choose-us, contact), 40px (trust bar/header).
- **Ink tone:** ink fill, white icon — the four service icons on paper backgrounds.
- **Outline-light tone:** transparent fill, translucent white border, white icon — for ink backgrounds (Trust Bar, Why Choose Us).
- **Outline-dark tone:** transparent fill, translucent ink border, ink icon — for **light/gold** backgrounds (Contact, at rest). Added in this pass specifically because white-on-gold fails contrast; outline-light must never appear on the gold Contact band.
- Icons remain the hand-drawn inline SVG set (1.75 stroke-width, round caps/joins, 24×24 viewBox).

### Services Table
*(the system's signature component — a real ruled table, not a card grid; `src/components/sections/Services.tsx`)*
- A `border-t-2 border-ink` opens the table; each row gets a `border-b border-ink/20`; even rows tint `bg-paper-ply/60`.
- A column-header row (SERVICE / DETAILS, Body font, not mono) on desktop; mobile drops it.
- Each row: icon chip, title (Big Shoulders Display) + subtitle (Body, `font-semibold`, **Gold, Text** — on paper, never vivid gold) + description (body, slate). No code/tag column — removed by direct instruction; don't reintroduce a third column here.
- **The subtitle only renders when it differs from the title** (`item.subtitle.trim().toLowerCase() !== item.title.trim().toLowerCase()` in `Services.tsx`). This exists because `en.ts`'s service items set `title` and `subtitle` to the identical English string (a content bug a `/impeccable critique` pass caught — Thai's subtitle is a genuinely distinct English tag alongside a Thai title, but English's subtitle was just repeating its own title), which rendered every English row's label twice, stacked. The guard is a rendering-level fix on purpose rather than inventing new English subtitle copy — PRODUCT.md's "every claim must trace to the company profile or approved mockup" rule means fabricating a new descriptive tag isn't a safe default fix here.
- The two remaining columns (icon+title block, details) sit at `gap-x-12` — widened by direct instruction from the original `gap-x-6`, which read too tight.
- The description has no `max-w` cap and no line-count reserve — it fills the details column's full width by direct instruction, so the table makes better use of the row instead of wrapping into unused whitespace. A side effect: TH/EN row height can now differ slightly on toggle (traded off deliberately in favor of using the space).

### Contact Band
*(the system's boldest moment — full-bleed Beacon Gold; `src/components/sections/Contact.tsx`)*
- Full-width gold fill, no card boundaries — three entries (phone/email/address) divided by hairline ink/20%-opacity rules (horizontal on mobile, vertical on desktop).
- **Text is ink, not white** — this gold fails white-text contrast outright. Label sits at ink/80%, sub at ink/85% (both re-tuned for the current Beacon Gold value to clear 4.5:1 — re-check these opacities if the gold hex ever changes again, since a lighter/darker gold shifts the opacity needed); the display value stays solid ink.
- Hover state: the entry's cell inverts to an ink fill with gold label/value text and white/90% sub text — mirrors the button's punch-through hover for consistency.
- **The three labels (Phone/Email/Address) are English in both locales** — `th.ts`'s `contact.phone/email/address.label` fields are set to the English words on purpose, by direct instruction. Don't "fix" these back to Thai translations; the value/sub fields underneath stay fully bilingual as normal.
- The label is Body font (`font-semibold`), not mono — same two-font-zone fix as Services (see Typography).

### Client Logos Marquee
*(`src/components/sections/ClientLogos.tsx`, animation in `src/index.css`)*
- Heading uses the same `SectionHeading` component as Services/Contact (rule + left-aligned uppercase title) — no longer the old centered mono-caption-with-flanking-dashes treatment.
- Logo set is 13 real client marks in `src/assets/clients/` (sourced from raw photos/scans in a since-deleted `customer-logo/` upload folder — each was chroma-keyed from its original black canvas to transparent, trimmed, and palette-compressed with `pngquant`; two, Chabaa and Land & Houses, kept their original solid brand-color tile instead of being keyed, since that color rectangle **is** the logo, not a background artifact). GISTDA, Avient, and KSL Group were later replaced with higher-resolution versions the user re-uploaded (already alpha-transparent, no chroma-keying needed — just trimmed and `pngquant`-compressed) after the first batch looked soft at the larger logo size; if a client logo ever looks soft again, re-check its source resolution before just re-compressing.
- **Two stacked marquee rows, scrolling in opposite directions, drawing from two disjoint client sets** (`clientsRow1`, a fixed 7-item slice; `clientsRow2`, the remaining 6). This is a hard requirement by direct instruction ("I don't want 2 clients' logo to display in the same frame") — an earlier version had both rows cycle the *same* 13 logos (row 2 just reverse-ordered), which turns out to lock the two tracks into a **constant** relative offset under `animation-direction: reverse` with matching duration and track width: whatever pairing appeared at a given screen column at load time holds at that column forever, not just momentarily. Splitting the client list so the two rows never share a logo makes the overlap structurally impossible rather than merely unlikely — don't revert to a shared/reversed list to "simplify" this, and if the client roster changes, keep the two `clientsRowN` arrays disjoint (any split is fine; roughly even keeps the two rows' pacing similar, since track width — and therefore this shared-duration animation's speed — scales with item count per row).
- Each row is rendered twice back-to-back in a `flex w-max` track for its own seamless loop (`marquee-rtl` keyframe, reversed via `.marquee-track--reverse` for row 2) — only the *within-row* duplicate copy is `aria-hidden`; since the two rows no longer repeat each other, every real client name is now announced to screen readers exactly once across the section (previously row 2's entire wrapper was `aria-hidden` because it duplicated row 1 — that's no longer true and the hiding was removed accordingly).
- The two tracks sit in a `space-y-16 sm:space-y-20` stack (widened twice by direct instruction — first `space-y-6` → `space-y-10/12`, then → `space-y-16/20`, "I still want more space between marquee"), each in its own masked/`overflow-hidden` wrapper. The gap from the section heading down to the first row is `mt-16 sm:mt-20` (widened from `mt-10` by direct instruction, "extra space between Our Client header and marquees").
- Each row is rendered twice back-to-back in a `flex w-max` track (`.marquee-track { animation: marquee-rtl 40s linear infinite }`), sliding by exactly `-50%` so the second copy lines up seamlessly with the first for a loop with no visible seam or reset jump. Duration has moved several times by direct instruction: `28s` (original) → `22s` → `16s` ("a little bit faster") → `20s` ("slower, but still faster than first version") → **`40s`** ("still very fast, slow them down") — `40s` is the current, deliberately-tuned value. Don't reset it to any earlier value without a fresh instruction; if pacing is revisited again, verify with `getComputedStyle(track).animationDuration` rather than measuring pixel movement between two tool calls — round-trip latency between browser-automation calls in this environment inflates the apparent px/s by 4–8×, which produced misleadingly "still fast" readings during this pass despite the CSS being correct. Re-check pacing if the logo count changes materially, since duration is a fixed time over a track whose width scales with logo count.
- Logos render at `h-16 sm:h-20` (raised again from `h-14 sm:h-16` by direct instruction, "make customer logo bigger") and **always in full color** — the earlier `grayscale` default with a `hover:grayscale-0` swap was removed by direct instruction ("color all the time, remove hover then color effect"). Don't reintroduce grayscale here.
- Each row's wrapper has `overflow-hidden` plus a `mask-image` **and** `-webkit-mask-image` linear-gradient (both required — Safari ignores the unprefixed property) to fade logos in/out at the left and right edges rather than cutting them off hard.
- Pauses on hover (`.marquee-track:hover { animation-play-state: paused }`); goes fully static under `prefers-reduced-motion: reduce`. Row 1's duplicate copy carries `aria-hidden`, and row 2's entire wrapper is `aria-hidden` (it repeats the same client list for visual rhythm, so it shouldn't be announced a second time) — screen readers hear the client list exactly once. **If the marquee ever looks frozen in testing, check `prefers-reduced-motion` first** — this has flipped between sessions on this dev machine depending on whether macOS's Reduce Motion accessibility setting is on; it correctly (not a bug) disables the animation when true.

### Partner Airlines
*(`src/components/sections/PartnerAirlines.tsx` — sits directly under Services)*
- Section heading is "Carrier Partners" in English (re-picked from "Partner Airlines" by direct instruction — "Partner Airlines" as a noun phrase reads fine, but the user specifically wanted the word order flipped; "Carrier Partners," not "Carriers Partners," since a plural noun doesn't work as a noun-adjective in English — "airline partners"/"carrier partners" is the grammatical form, not "airlines partners"/"carriers partners"). Thai keeps its own natural phrasing, `สายการบินพันธมิตร`.
- Two labeled groups in a vertical stack: Full-Service Airlines (13 marks) and Low-Cost Carriers (4 marks), separated by a hairline (`divide-y divide-ink/20`) under a `border-t-2 border-ink` opening rule — the same timetable-manifest opening move as the Services table. Each group's own vertical rhythm is generous — `py-10 sm:py-14` per group (widened from an initial `py-8` by direct instruction, "more spacing would be nice"), `mt-8` from label to tile grid.
- **Group labels are English in both locales, and centered** — `th.ts`'s `airlines.fullService`/`airlines.lowCost` are set to the English words "Full-Service Airlines"/"Low-Cost Carriers" on purpose, by direct instruction, same pattern as Contact's Phone/Email/Address labels and the footer's column headings (don't translate these into Thai); the label itself is `text-center` by direct instruction, matching the centered tile grid beneath it.
- Each group is a `flex flex-wrap justify-center gap-6 sm:gap-7` grid of logo tiles, not a fixed-column grid — this lets the row count fall out naturally from content width rather than forcing both groups into matching column counts (see the Layout section's Grid Behavior note on why the side-by-side two-column version was rejected). `justify-center` was added by direct instruction ("distribute the airline logos evenly center") so a partial final row centers instead of hugging the left edge; the gap was widened from an initial `gap-3`/`gap-4` progression to `gap-6`/`gap-7` by direct instruction ("add more space between logos, it feel too dense") — tiles now read as 3–4 per row on desktop instead of 5, with real air between them.
- **Tile treatment, not bare logos.** Every logo sits inside a fixed-height `border border-ink/15 bg-paper-white` tile (`h-20 sm:h-24`, sharp corners, no shadow). This is deliberate, not decorative: all 17 source airline logos were supplied on a black canvas designed for dark application, and several (Brussels Airlines, Finnair, Lufthansa, Singapore Airlines) render at low, unreliable contrast when placed directly on a colored or dark section background. A white tile guarantees every logo sits on the neutral ground it was actually designed for, regardless of the section's own background — this is the one place in the system where a bordered rectangle stands in for a "card," justified by a real legibility problem rather than decoration.
- Logo source files (`src/assets/airlines/full-service/`, `src/assets/airlines/low-cost/`) were processed the same way as the client logos: chroma-keyed from black to transparent, trimmed, `pngquant`-compressed. Raw uploads (`full-service/`, `low-cost-carriers/` source folders) were deleted after processing, matching this project's established convention of not keeping superseded raw uploads once their processed asset is wired in. Nok Air and Thai Lion Air were later replaced with higher-resolution, already-transparent sources the user re-uploaded — the originals had cropped Nok Air down to just its icon (no wordmark) and rendered both softly at tile size; the new sources show the full wordmark for both and are noticeably sharper. Japan Airlines, Austrian, and Air France–KLM were replaced the same way in a follow-up upload (still black-canvas sources, chroma-keyed as usual) — the originals had JAL cropped to just its red roundel with no "JAL" wordmark and rendered Austrian's arrow mark partially cut off; both are now complete.

### Language Toggle
- **Style:** rectangular two-tab switch, hairline border, mono uppercase labels, a vertical rule between TH/EN.
- **Active:** solid Beacon Gold fill, **ink text**.
- **Inactive:** dimmed ink or white (context-dependent) with a hover state.
- Keyboard-operable (`aria-pressed`), visible focus ring.

### Hero
*(`src/components/sections/Hero.tsx` — full-bleed background section, not a two-column text+photo layout)*
- Structure, back to front: an ink-gradient fallback layer (visible only until the photo loads), the real photo (`src/assets/hero/airplane.jpg`, `alt=""` since it's decorative — the headline carries the meaning), a legibility scrim gradient on top, the RouteMap motif at low opacity, then the content column.
- **Responsive containment, not just responsive crop.** Mobile: the photo is full-bleed (`inset-0`) — there's no room for a "side" at that width. `sm:` and up: the photo is confined to the right `~58%` (`sm:left-auto sm:right-0 sm:w-[58%]`) and mask-faded into the ink ground on its own left edge (`sm:[mask-image:linear-gradient(to_right,transparent,black_22%)]`, plus the `-webkit-` twin for Safari) — this is by direct instruction ("the plane on the right hand side, not full width"). The text column always sits on solid/near-solid ink, never directly over the photo, at every breakpoint.
- The photo's `object-position` is responsive too: `object-[30%_45%]` on mobile (a narrow/tall crop needs a horizontal bias to keep the cockpit/nose in frame), `sm:object-[center_38%]` on wider screens. Re-check both breakpoints (position, containment width, and mask stop) if the photo is ever swapped.
- The scrim gradient is also responsive: heavier left-to-right darkening on mobile (`from-ink/95 via-ink/75 to-ink/60`, since the photo still spans the text area there) versus `sm:from-ink sm:via-ink/85 sm:to-ink/10` on wider screens, where the text zone is already solid ink and the scrim's job is just to unify the transition into the now-confined photo panel. The mobile end stop was deepened from an earlier `to-ink/35` — a `/impeccable critique` pass flagged that stop as too light: the headline's right edge (where "TRAVEL PARTNER" extends widest) sat nearly bare against the photo's bright fuselage at that value. Don't lighten this stop back toward `/35` without re-checking the headline against the actual photo at mobile width.
- Content is a single left-aligned column (`max-w-2xl`), vertically centered in a tall section (`min-h-[560px]` up to `70vh`).
- No departure-row service strip beneath the hero — added in an earlier pass, removed by direct instruction; the four services live only in the Services table below.

### Route Map
*(hero's ambient decorative device; `src/components/ui/RouteMap.tsx`)*
- An abstract SVG hub-and-spoke network: a gold-marked hub with dashed lines to six open-circle waypoints, plus two faint latitude-style ellipses. Rendered at `text-paper-white/10` for the line work (against the dark hero ground) with the hub itself in solid gold.
- Deliberately unlabeled — no city names, no flight numbers, no claimed routes. Any future addition of real route/destination content must not be layered onto this exact asset without separately verifying the claim.

### Motion
- **Scroll reveal:** Hero content and Services rows fade/rise into view on first scroll into viewport (`IntersectionObserver`-driven), `translate-y-6 opacity-0` → `translate-y-0 opacity-100`, `duration-700 ease-out` for Hero, `duration-500` with an `80ms`-per-row stagger for Services.
- **The Punch-Through Sweep** (`.sweep` in `src/index.css`) — hover/focus feedback on every solid or bordered clickable element (Buttons, Contact's three cells, Header's mobile icon-square phone link, Language Toggle's inactive tab). Added by direct instruction to animate hover/click feedback across the system. Rather than a flat color crossfade, the fill wipes in from the leading edge via a `::before` pseudo-element (`transform: scaleX(0)→1`, `200ms cubic-bezier(0.16, 1, 0.3, 1)`, origin left) — a departures-board flap flipping to its next state, not a generic hover fade. `--sweep-bg` is set per usage via a Tailwind arbitrary property (e.g. `[--sweep-bg:theme(colors.ink.DEFAULT)]`); Language Toggle's inactive tab uses a low-opacity gold (`rgba(212,170,71,.15)`) as a "this could become active" preview rather than the full punch-through, since it isn't yet selected. The pseudo-element sits at `z-index: -1` inside a `.sweep`-isolated stacking context, which paints it above the element's own background but below normal in-flow content — no extra wrapper needed for labels/icons to stay legible. Triggers on both `:hover` and `:focus-visible`, so keyboard users get identical feedback to pointer users.
- **The Ruled Underline** (`.rule-underline` in `src/index.css`) — hover/focus feedback on plain inline text links (Header's desktop phone number, Footer's phone/email links) where a filled sweep would look like an unexplained box appearing in otherwise-transparent chrome. An animated hairline (`scaleX(0)→1`, same timing/easing as the sweep) draws in beneath the text via `::after`, using `currentColor` so it always matches the link's active color — this reuses the system's own ruled-row motif for feedback instead of a generic browser-default underline.
- **Reduced motion:** `prefers-reduced-motion: reduce` collapses all animation/transition durations globally (the global `*, *::before, *::after` rule covers the sweep/underline pseudo-elements too, with no extra work needed); the scroll-reveal hook shows content immediately with no transition. Hard floor, not an enhancement to skip. The sweep and underline still land on their end state under reduced motion — only the wipe/draw motion is removed, not the feedback itself.
- **The Smoothed Wheel** (`useSmoothScroll` in `src/lib/useSmoothScroll.ts`, mounted once in `App.tsx`) — a restrained, Locomotive-Scroll-style ease on desktop wheel input, added by direct instruction ("slightly locomotive scroll effect"). Each wheel tick's delta accumulates into a target scroll position; a `requestAnimationFrame` loop lerps real `window.scrollY` toward that target (`current += (target - current) * 0.12`, calling `scrollTo({ behavior: 'instant' })` every frame to bypass the page's own `scroll-behavior: smooth` and avoid double-easing). Deliberately narrow in scope, not a full scroll-hijack library: only wheel input on `(pointer: fine)` is touched — touch scrolling, keyboard scroll (Page Down/arrows/Home/End), and scrollbar-thumb drag never fire `wheel`, so they stay fully native everywhere, on every device. Because it moves the *real* `window.scrollY` (not a transformed wrapper), `IntersectionObserver`-driven scroll-reveal, anchor-link jumps (`href="#services"` etc.), and browser scroll restoration all keep working exactly as before — this hook has zero interaction surface with the rest of the page's scroll-dependent code. Gated off entirely under `prefers-reduced-motion: reduce`; if the hook fails to mount or JS is disabled, the page falls back to fully native scrolling, not a broken one.

## Do's and Don'ts

### Do:
- **Do** keep every parallel list (services, credentials, contact methods) as ruled rows, never cards.
- **Do** keep border-radius at zero everywhere except the icon-chip notch.
- **Do** spend Beacon Gold only as a full-section fill or a precise small mark — never a medium decorative accent.
- **Do** use Gold, Dark or Gold, Text (never vivid Gold) for any text or fine mark on a light/paper ground.
- **Do** use ink text (never white) on the gold Contact band and gold buttons — the vivid gold fails white-text contrast outright.
- **Do** keep JetBrains Mono reserved for measured/tabular values, not decorative "technical" flavor.
- **Do** keep the smallest text in the system at 14px or larger.
- **Do** respect `prefers-reduced-motion` on any new animation — including the client-logo marquees, which correctly go static under this preference. This dev machine's `prefers-reduced-motion` state has been observed both `true` and `false` across sessions (it tracks macOS System Settings → Accessibility → Display → Reduce Motion, which has apparently been toggled between passes) — if a marquee looks frozen, check that setting and `window.matchMedia('(prefers-reduced-motion: reduce)').matches` before assuming a code bug.
- **Do** give any new `font-display` weight class a matching `html[lang='th']` override in `src/index.css` (see The Language-Matched Weight Rule) — otherwise Thai and English headings will visibly mismatch again.
- **Do** keep the Services table to two columns (icon+title block, details) with no tag/code column, and keep its description full-width (no `max-w` cap, no line-count reserve) so the row uses the available space.
- **Do** keep client and airline logos always in full color (no grayscale-until-hover treatment) — removed by direct instruction.
- **Do** keep every airline logo inside its white `border-ink/15` tile in Partner Airlines, even if a future logo would read fine on the section's own background — the tile is what guarantees legibility across the whole set, not a per-logo judgment call.
- **Do** keep Partner Airlines' logo rows center-justified (`justify-center`), and keep both its group labels and Client Logos' logos matching the rest of the system's English-in-both-locales pattern for proper-noun-adjacent labels.
- **Do** keep Client Logos above Contact in the page order — the proof-of-clients moment leads into the call-to-action.
- **Do** keep the two Client Logos marquee rows drawing from disjoint client subsets (`clientsRow1`/`clientsRow2`) — required so the same logo can never appear in both rows at once (see the Client Logos Marquee component doc for why a shared/reversed list doesn't achieve this).
- **Do** use `ring-gold-dark` (never vivid `ring-gold`) on any focus ring, on any ground — a `/impeccable critique` pass found the primary button had regressed to `ring-gold` (≈2.18:1, fails the 3:1 non-text minimum) despite every other focus ring in the system already using the correct token; this is the kind of drift that's easy to reintroduce by copy-pasting `bg-gold`/`text-gold` styling onto a new focus-visible rule without noticing gold and gold-dark aren't interchangeable there.
- **Do** use `.sweep` (filled elements) or `.rule-underline` (plain text links) for any new clickable element's hover/focus feedback, not a flat `hover:bg-*`/`hover:text-*` crossfade — the sweep/underline is now the system's one hover language, and trigger both on `:hover` and `:focus-visible` so keyboard users get the same feedback as pointer users.

### Don't:
- **Don't** add a shadow anywhere — depth comes from rules and color blocking only.
- **Don't** add a kicker/eyebrow label above a heading — a craft-floor violation caught and removed in the redesign pass, not to be reintroduced.
- **Don't** reintroduce circular badges or pill-shaped buttons — those belonged to the retired "Chartered Seal" system.
- **Don't** reintroduce the hero's departure-row service strip — removed by direct instruction.
- **Don't** reintroduce a code/tag column on the Services table — removed by direct instruction.
- **Don't** translate Contact's Phone/Email/Address labels into Thai — they're English by direct instruction in both locales.
- **Don't** translate the footer's "Our services" / "Contact us" column headings into Thai — same rule, `th.ts`'s `footer.servicesTitle`/`contactTitle` are set to English on purpose.
- **Don't** reintroduce JetBrains Mono on Services' subtitle/column-headers or Contact's labels — moved to Body font by direct instruction (see Typography's Two-font sections note).
- **Don't** add specific city names, flight numbers, or route claims to the RouteMap asset without separately verifying them against real evidence.
- **Don't** fabricate proof — client logos, testimonials, or claims must be real (see PRODUCT.md's Evidence on Hand).
- **Don't** lay out Partner Airlines' two groups side-by-side in two equal-width columns — tried and rejected; the 13-vs-4 logo count mismatch leaves a tall dead gap under the shorter column. Keep the vertical stack.
- **Don't** reintroduce the "24/7 customer support" item in Why Choose Us — removed by direct instruction; the section is 4 items, not 5.
- **Don't** translate Partner Airlines' "Full-Service Airlines" / "Low-Cost Carriers" group labels into Thai — English in both locales by direct instruction, same pattern as Contact's field labels.
- **Don't** move Client Logos back below Contact, or drop the second (reverse-direction) marquee row, or reset the marquee duration away from `40s` — all set by direct instruction across this and prior passes.
- **Don't** make the two Client Logos marquee rows share the same client list again (even reverse-ordered) — a same-duration, same-width, opposite-direction pair locks into a fixed relative offset, so any overlap that exists at load time never resolves itself. Disjoint subsets per row is the fix, not a phase/timing tweak.
- **Don't** tighten Partner Airlines back to its original `gap-3`/`py-8` spacing, or left-align its group labels again — widened and centered by direct instruction ("more spacing," "too dense," "move subtitle... center").
- **Don't** add a hover-lift/shadow/scale treatment to any clickable element — that's a generic pattern this world explicitly doesn't use (see the No-Shadow Rule); the sweep and ruled-underline are the system's actual hover language.
- **Don't** widen the smoothed-wheel effect's scope — it must stay wheel-only, desktop-only (`pointer: fine`), and reduced-motion-gated. Don't touch touch/keyboard/scrollbar scrolling, and don't switch the implementation to a transformed-wrapper/virtual-scroll approach (like the full Locomotive Scroll library) — the current approach moves real `window.scrollY`, which is what keeps it from breaking `IntersectionObserver` reveals and anchor links; a transform-based version would need to solve that from scratch.
