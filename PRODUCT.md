# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Vite + React + TypeScript + Tailwind CSS. Bilingual via a custom React Context (`src/i18n/`), not a routing/locale-URL library. Deploy target: Vercel.

## Users

Two audiences of equal priority, both explicitly served by the same site:

- **Individual travelers** in Thailand booking flights, visas, hotels, or ground transport for personal trips.
- **Organizations/corporates** booking travel for staff or business needs (real corporate clients include PTT, ThaiBev, GIZ, BEM, AOT).

Neither audience is primary — copy, layout, and future features should not skew toward one at the other's expense.

## Product Purpose

Tera International Commercial Co., Ltd. (TIC) is a full-service travel management company (est. 1987) offering one-stop travel services: air tickets, visa assistance, hotel booking, and car rental/airport transfer. Success is a trusted agency relationship clients and organizations return to and refer, not a one-off transaction.

## Positioning

30+ years of experience in Thailand's tourism industry, IATA-accredited (license 35301593), and one of the first ten BSP (Billing and Settlement Plan) travel agencies in Thailand. The differentiator is established longevity and accreditation — a certified, trustworthy, human-run travel partner — not price comparison or self-serve booking convenience.

## Operating Context

- Bangkok office: 123 Soi Sirindhorn 7, Bang Bamru, Bang Phlat, Bangkok 10700.
- Primary contact channels: phone (02-433-0191) and email (info@ticpumra.com) — booking and consultation are relationship/conversation-driven, not self-serve checkout.
- Site states hours as 09.00–17.00; the 2021 company profile lists Mon–Fri 08.30–17.30 and Sat 08.30–12.30. The site follows the client-approved 2024 design mockup, which is the more current source — flag this discrepancy if asked to touch hours copy, don't silently pick one.

## Capabilities and Constraints

Services shown on the current site (by design decision, scoped to the approved mockup only): Air Ticket, Visa Service, Car Rental & Transfer, Hotel Booking.

The company profile documents additional real service lines **not yet on the site**: Insurance, Tour (domestic/international, custom FIT and incentive trips), and Train ticket reservation. These are real, existing capabilities — available to add later, not to be treated as absent from the business, only from this build.

No online booking or payment flow exists or is implied; conversion path is phone/email contact.

## Brand Commitments

- Name: Tera International Commercial Co., Ltd., known as **TIC**.
- Tagline: "Your Trusted Travel Partner" / ทุกการเดินทาง เราดูแลให้เป็นเรื่องง่าย.
- Logo: TIC wordmark + bird mark, navy (`#03214F`) and gold (`#D6A642`) — cropped from the approved mockup, not redrawn.
- Bilingual: Thai is the default language; English is a first-class equal alternative via a persistent toggle, not a lesser/secondary translation.
- Real client logos only: GIZ, BEM (Bangkok Expressway and Metro), AOT (Airports of Thailand), PTT, ThaiBev.

## Evidence on Hand

- `TIC Company Profile.pdf` (repo root) — company history, full service list, honors/awards (Air France-KLM Top Agent 2005–2008, Lufthansa/Austrian/Swiss Experts Champion 2013), team bios/photos, full airline partner list, full client list.
- `messageImage_1787667226919.jpg` (repo root) — client-approved design mockup; source of the current site's visual content, copy, and cropped logo assets.
- Real contact info: phone 02-433-0191, email info@ticpumra.com, address as above.
- IATA license number 35301593; Amadeus Thailand partner.
- **Explicit absence — do not fabricate:** no pricing is published, no testimonials/reviews exist on site, and the honors/awards, company history (est. 1987 detail), and team bios from the company profile are not currently used on the live site (deliberate scope decision for the first build, not a missing-content gap to silently fill).

## Product Principles

1. Every claim must trace to the company profile or the approved mockup — no fabricated proof, testimonials, benchmarks, or pricing.
2. Individual and corporate/organizational clients are equal audiences; don't let design or copy decisions skew B2C or B2B.
3. Trust is earned through longevity and accreditation, not price or self-serve convenience — lead with that in positioning.
4. Thai and English are both first-class; the site is not "Thai with an English fallback."
5. TIC is a human, relationship-driven agency, not a booking engine — phone/email contact is the primary conversion path, not a cart or checkout flow.

## Accessibility & Inclusion

No product-specific standard or user need has been established beyond general good practice. The current build follows WCAG AA color contrast, visible keyboard focus states, `prefers-reduced-motion` support, and bilingual image alt text.
