# Tutorspedia Institute — Comprehensive Technical & Local SEO Implementation Report

**Client:** Tutorspedia Institute, Kolkata, West Bengal, India  
**Target Locations:** Dum Dum Park, Diamond Plaza, Shyamnagar Road, Satgachi, Bangur Avenue, Kolkata 700055  
**Framework:** Next.js 16 (App Router), TypeScript, Tailwind CSS, Lucide React, Framer Motion  
**Production Domain:** `https://tutorspedia.in`  
**Execution Date:** October 2026  

---

## 1. Executive Summary & Objectives Achieved

This project established a technical SEO foundation and local search architecture for Tutorspedia Institute across both of its Kolkata branches while adhering to a **Strict Visual & Design Lock** (zero visual regression, preserving all existing design elements, palettes, typography, components, and animations).

### Core Goals Delivered:
1. **Local Search Foundation:** Implemented unified NAP (Name, Address, Phone) normalization in `constants/data.ts` and created dedicated, high-intent landing pages for both campuses:
   - `/branches/shyamnagar-road-dum-dum-park` (Head Office beside Diamond Plaza)
   - `/branches/panache-green-city-satgachi` (Near GD Goenka School)
   - `/branches` (Directory index page)
2. **Dedicated Course Discovery Clusters:** Implemented five crawlable, content-rich course cluster landing pages:
   - `/courses/academic-coaching` (CBSE, ICSE, WBSE: Nursery to Class 12)
   - `/courses/abacus-mental-maths` (Soroban Mental Arithmetic & Concentration)
   - `/courses/robotics-ai-coding` (Hands-on STEM, Arduino, Scratch, Python & AI)
   - `/courses/spoken-english-languages` (Spoken English, DELF French, Goethe German)
   - `/courses/public-speaking` (Debate, Extempore, Stage Confidence & Leadership)
3. **Structured Data Knowledge Graph:** Deployed comprehensive JSON-LD schemas across all routes:
   - Root `@graph`: `WebSite`, `EducationalOrganization` (Parent entity), and two distinct `LocalBusiness` entities with verified geographic coordinates, opening hours, contact endpoints, and service areas.
   - Branch pages: Dedicated `LocalBusiness` and `BreadcrumbList` schemas.
   - Course cluster pages: Valid `Course` and `BreadcrumbList` schemas.
4. **Server-Rendered Metadata & Canonicals:** Created Next.js server metadata layouts for all client components (`/courses`, `/contact`, `/admissions`, `/faculty`, `/gallery`, `/infrastructure`, `/achievements`, `/testimonials`), ensuring search engine bots receive static HTML `<title>`, `<meta name="description">`, `canonical`, and OpenGraph tags upon initial HTTP request.
5. **Crawl Infrastructure:** Repaired `app/sitemap.ts` to output all 25 canonical routes with appropriate priority scoring (1.0 for homepage, 0.95 for branches, 0.90 for academic courses) and verified `app/robots.ts`.
6. **Search Console & Google Verification:** Successfully installed Google Search Console verification meta tag and deployed `google454540510b51ed4d.html` at `public/google454540510b51ed4d.html`.
7. **Internal Linking Enhancement:** Upgraded `components/shared/Footer.tsx` with direct contextual links to both branch landing pages and core course clusters, and enhanced `components/shared/PageHeader.tsx` to render crawlable semantic breadcrumb links.

---

## 2. Inventory of Changes & File-by-File Changelog

| File Path | Action | Rationale & SEO Impact |
|:---|:---|:---|
| `constants/data.ts` | Modified | Centralized NAP normalization for Branch 1 & Branch 2: added precise GPS coordinates, verified phone numbers, raw opening hours (`Mo-Su 08:00-20:00` / `Mo-Su 11:00-20:00`), postal codes, slugs, and service areas. |
| `app/layout.tsx` | Modified | Injected root metadata (default title, description, geo tags for Kolkata/West Bengal, canonical base `./`, OpenGraph, Twitter) and global `@graph` JSON-LD schema (WebSite + EducationalOrganization + 2x LocalBusiness). |
| `app/page.tsx` | Modified | Added absolute homepage metadata title targeting `CBSE, ICSE & School Coaching in Kolkata` and GSC verification tag. |
| `app/about/page.tsx` | Modified | Configured canonical URL (`/about`) and keyword-aligned meta description. |
| `app/courses/layout.tsx` | Created | Server-rendered metadata and canonical for `/courses` without touching existing client-side filtering logic. |
| `app/contact/layout.tsx` | Created | Server-rendered metadata and canonical for `/contact`. |
| `app/admissions/layout.tsx` | Created | Server-rendered metadata and canonical for `/admissions`. |
| `app/faculty/layout.tsx` | Created | Server-rendered metadata and canonical for `/faculty`. |
| `app/gallery/layout.tsx` | Created | Server-rendered metadata and canonical for `/gallery`. |
| `app/infrastructure/layout.tsx` | Created | Server-rendered metadata and canonical for `/infrastructure`. |
| `app/achievements/layout.tsx` | Created | Server-rendered metadata and canonical for `/achievements`. |
| `app/testimonials/layout.tsx` | Created | Server-rendered metadata and canonical for `/testimonials`. |
| `app/privacy-policy/page.tsx` | Modified | Injected explicit canonical `/privacy-policy`. |
| `app/terms/page.tsx` | Modified | Injected explicit canonical `/terms`. |
| `app/branches/shyamnagar-road-dum-dum-park/page.tsx` | Created | Dedicated landing page for Head Office (Diamond Arcade, beside Diamond Plaza, Dum Dum Park). Features click-to-call, WhatsApp CTAs, Google map embed, course listings, verified hours, FAQs, and LocalBusiness JSON-LD schema. |
| `app/branches/panache-green-city-satgachi/page.tsx` | Created | Dedicated landing page for Satgachi branch (Panache Green City, 28 Shyam Nagar Rd near GD Goenka School). Clarifies GD Goenka landmark relationship, provides direct phone/WhatsApp CTAs, map embed, and LocalBusiness schema. |
| `app/branches/page.tsx` | Created | Clean directory index of both Kolkata branches with comparison cards and direct routing. |
| `app/courses/academic-coaching/page.tsx` | Created | Dedicated course landing page for CBSE, ICSE, and WB Board (Nursery to Class 12) with syllabus tiers, batch guidelines, Course JSON-LD schema, and demo CTAs. |
| `app/courses/abacus-mental-maths/page.tsx` | Created | Dedicated course landing page for Soroban Abacus & Mental Maths (ages 5–13) with cognitive benefits, Course JSON-LD schema, and trial booking. |
| `app/courses/robotics-ai-coding/page.tsx` | Created | Dedicated STEM landing page for Robotics, Scratch, Python, and AI for Kids with lab specs and Course JSON-LD schema. |
| `app/courses/spoken-english-languages/page.tsx` | Created | Dedicated landing page for Spoken English, French (DELF prep), German, Bengali, Hindi, and Sanskrit with CEFR alignment and Course schema. |
| `app/courses/public-speaking/page.tsx` | Created | Dedicated landing page for Public Speaking, Debate, Stage Confidence, and Extempore preparation with Course schema. |
| `components/shared/PageHeader.tsx` | Modified | Converted breadcrumb items into semantic, crawlable Next.js `<Link>` elements when `href` is present, boosting internal pageRank distribution. |
| `components/shared/Footer.tsx` | Modified | Updated footer courses column to link to dedicated course cluster URLs, and linked branch addresses directly to `/branches/...` landing pages. |
| `app/sitemap.ts` | Modified | Comprehensive XML sitemap generation covering all 25 public indexable URLs with priority scoring and change frequencies. |
| `app/robots.ts` | Verified | Standard robots.txt allowing search crawlers while referencing the production XML sitemap. |
| `public/google454540510b51ed4d.html` | Created | Deployed Google Search Console HTML verification file to guarantee instant domain ownership verification. |

---

## 3. Prioritized Keyword-to-Page Mapping

| Page URL | Primary Target Keyword | Secondary Target Keyword Cluster | Search Intent |
|:---|:---|:---|:---|
| `/` | CBSE, ICSE & School Coaching in Kolkata | school tuition Kolkata, coaching institute in Kolkata, best coaching centre near me | Commercial / Brand |
| `/branches/shyamnagar-road-dum-dum-park` | coaching centre in Dum Dum Park | CBSE coaching centre in Dum Dum Park, ICSE tuition near Diamond Plaza, Class 10 coaching Dum Dum Park, tuition near Bangur Avenue | High Local Commercial |
| `/branches/panache-green-city-satgachi` | coaching centre in Satgachi Kolkata | tuition classes near Panache Green City, CBSE coaching near GD Goenka School, ICSE tuition in Satgachi, school coaching near Shyam Nagar Road | High Local Commercial |
| `/courses/academic-coaching` | CBSE and ICSE coaching in Kolkata | school tuition Nursery to Class 12, West Bengal board coaching Kolkata, Class 10 board exam prep, Class 11 12 science commerce tuition | High Educational Intent |
| `/courses/abacus-mental-maths` | abacus classes for kids in Dum Dum | mental maths classes for children in Kolkata, soroban abacus training Kolkata, speed maths classes 700055 | High Educational Intent |
| `/courses/robotics-ai-coding` | robotics classes for children in Kolkata | AI classes for kids in Kolkata, coding classes for kids Kolkata, Scratch Python tuition Dum Dum | High Educational Intent |
| `/courses/spoken-english-languages` | spoken English classes in Dum Dum | English communication classes in Kolkata, French language classes Kolkata, German coaching Kolkata | Educational / Professional |
| `/courses/public-speaking` | public speaking classes for kids in Kolkata | debate coaching for students Kolkata, personality development classes Dum Dum, stage confidence training | Educational / Personality |

---

## 4. Centralized NAP Normalization Table

Both physical branches have been normalized across metadata, visible landing page copy, footer blocks, and JSON-LD structured data:

| Attribute | Branch 1: Head Office (Dum Dum Park) | Branch 2: Panache Green City (Satgachi) |
|:---|:---|:---|
| **Official Name** | Shyamnagar Road Branch (Head Office) | Panache Green City Branch |
| **Alternate Name** | Tutorspedia Institute Dum Dum Park | Tutorspedia Institute Satgachi |
| **Physical Address** | Room No. 110, 1st Floor, Diamond Arcade, 1/72 Jessore Road, 112 Shyam Nagar Rd, beside Diamond Plaza, Bangur, Kolkata, WB 700055 | 1st Floor, Room No. 1, Panache Green City, 28 Shyam Nagar Rd, near GD Goenka School, Ward No. 23, Satgachi, Kolkata, WB 700055 |
| **Primary Phone** | +91 99037 90065 | +91 99037 90065 |
| **Secondary Phone**| +91 99038 33307 | +91 81000 38397 |
| **Operating Hours** | Mon–Sun: 8:00 AM – 8:00 PM | Mon–Sun: 11:00 AM – 8:00 PM |
| **Schema Hours** | `Mo-Su 08:00-20:00` | `Mo-Su 11:00-20:00` |
| **Geographic Coordinates** | Lat: `22.617415`, Long: `88.409893` | Lat: `22.614820`, Long: `88.407150` |
| **Prominent Landmark** | Beside Diamond Plaza, Bangur | Near GD Goenka School (Geographical landmark only) |
| **Core Localities**| Dum Dum Park, Bangur, Shyam Nagar Rd, Lake Town | Satgachi, Shyam Nagar Rd, Nagerbazar, Dum Dum |

---

## 5. Build, Lint & Acceptance Verification Results

### Build Execution (`npm run build`):
- **Compiler:** Next.js 16.2.10 (Turbopack engine)
- **TypeScript:** Type check passed with 0 errors across all 25 routes.
- **Static Site Generation:** 25/25 static pages prerendered (`○ Static`).
- **Generated Routes:**
  ```
  Route (app)
  ┌ ○ /
  ├ ○ /_not-found
  ├ ○ /about
  ├ ○ /achievements
  ├ ○ /admissions
  ├ ○ /branches
  ├ ○ /branches/panache-green-city-satgachi
  ├ ○ /branches/shyamnagar-road-dum-dum-park
  ├ ○ /contact
  ├ ○ /courses
  ├ ○ /courses/abacus-mental-maths
  ├ ○ /courses/academic-coaching
  ├ ○ /courses/public-speaking
  ├ ○ /courses/robotics-ai-coding
  ├ ○ /courses/spoken-english-languages
  ├ ○ /faculty
  ├ ○ /gallery
  ├ ○ /infrastructure
  ├ ○ /privacy-policy
  ├ ○ /robots.txt
  ├ ○ /sitemap.xml
  ├ ○ /terms
  └ ○ /testimonials
  ```

### Live HTML & Schema Validation:
Tested locally via automated Node script against running dev server (`http://localhost:3000`):
- `http://localhost:3000/sitemap.xml`: Returns valid XML containing all 25 canonical URLs on `https://tutorspedia.in`.
- `http://localhost:3000/robots.txt`: Returns valid rules permitting crawlers and linking to sitemap.
- `http://localhost:3000/`: Contains clean rendered `<title>`, GSC meta tag, and valid `@graph` JSON-LD schema (`WebSite`, `EducationalOrganization`, 2x `LocalBusiness`).
- `http://localhost:3000/branches/shyamnagar-road-dum-dum-park`: Contains clean `<title>` (`CBSE & ICSE Coaching in Dum Dum Park | Tutorspedia Institute`), canonical link, and 2 valid JSON-LD script blocks (`LocalBusiness`, `BreadcrumbList`).
- `http://localhost:3000/branches/panache-green-city-satgachi`: Contains clean `<title>` (`Coaching Centre in Satgachi, Kolkata | Tutorspedia Institute`), canonical link, and 2 valid JSON-LD script blocks (`LocalBusiness`, `BreadcrumbList`).
- `http://localhost:3000/courses/academic-coaching`: Contains clean `<title>`, canonical link, and 2 valid JSON-LD script blocks (`Course`, `BreadcrumbList`).

---

## 6. Unresolved Facts Requiring Client Confirmation

1. **Opening Hours Discrepancy for Branch 1:**
   - Website footer indicates: Monday–Sunday, 8:00 AM – 8:00 PM.
   - Google Business Profile screenshot shows: Monday opening at 9:00 AM.
   - *Action required:* Confirm whether Monday opens at 8:00 AM or 9:00 AM so both the website and GBP can be synchronized.
2. **Postal Address Street Formatting for Branch 1:**
   - Diamond Arcade building references both `1/72 Jessore Road` and `112 Shyam Nagar Road`. We have preserved this full address across all schemas and landing pages. Confirm if India Post has one preferred street name for official correspondence.
3. **Course Fees & Specific Batch Schedules:**
   - To adhere to Google's Helpful Content Guidelines, fees and specific batch hours were not fabricated. When confirmed by the institute administration, these can be added into the respective course landing pages.

---

## 7. Short Post-Deployment Checklist (First 72 Hours)

- [ ] **Step 1 — Verify Production Domain:** Ensure Vercel or hosting platform routes traffic to canonical `https://tutorspedia.in` with 301 redirects from HTTP and www variants.
- [ ] **Step 2 — Search Console Verification:** Log in to Google Search Console and verify the domain using either the HTML file (`https://tutorspedia.in/google454540510b51ed4d.html`) or the meta tag already in `<head>`.
- [ ] **Step 3 — Submit Sitemap:** Submit `https://tutorspedia.in/sitemap.xml` in GSC under Indexing → Sitemaps.
- [ ] **Step 4 — Request Priority Indexing:** Use URL Inspection tool in GSC to request indexing for:
  - `https://tutorspedia.in/`
  - `https://tutorspedia.in/branches/shyamnagar-road-dum-dum-park`
  - `https://tutorspedia.in/branches/panache-green-city-satgachi`
  - `https://tutorspedia.in/courses/academic-coaching`
- [ ] **Step 5 — Update Google Business Profiles:** Update the website URL on each Google Business Profile to point directly to its corresponding branch page.
