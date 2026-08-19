# Weather Proof Roofing and Building Services

A 26 page static site for Weather Proof Roofing and Building Services, a roofing
and building contractor covering Chester, Wrexham, Queensferry, Flint,
Warrington, Ellesmere Port, the Wirral, Manchester, Stockport, St Helens and the
surrounding areas.

Live at <https://innov8-workflows.github.io/Weather-Proof-Roofing-Building-Services/>

## Do not hand-edit the HTML

Every `.html` file in this repo is generated output and will be overwritten. All
changes go into `site/` and then you rebuild.

```bash
cd site
node generate.js     # writes ../_site
node check.js        # validates the output, exits non-zero on problems
```

Then copy the contents of `_site/` to the repo root and commit.

## Layout

| Path | What it is |
|---|---|
| `site/src/data.js` | every fact the site states: services, locations, FAQs, business details |
| `site/src/lib.js` | head, header, footer, breadcrumbs, icons, JSON-LD builders |
| `site/src/pages.js` | homepage, services hub, service pages, areas hub, location pages |
| `site/src/pages-info.js` | about, contact, our work, reviews, FAQs, legal, 404 |
| `site/src/site.css` + `pages.css` | concatenated into `assets/site.css` at build time |
| `site/src/site.js` | copied to `assets/site.js`; every block guards its own hooks |
| `site/assets/` | source media, copied into `assets/` at build time |
| `site/check.js` | post-build validation |

`site/make-hero-video.sh` and `site/make-logo-alpha.sh` regenerate the hero video
and the transparent logo. Both document why they work the way they do.

## Architecture note

The site was originally a single self-contained `index.html` with every asset
base64 embedded. That does not scale to 26 pages: it would have meant tens of
megabytes and no caching between pages. Assets are now real files under
`/assets`, shared and cached across the whole site. Average page weight is about
31 KB of HTML.

## Hero video

The hero plays `assets/hero-loop.mp4`: three client clips rendered into one
seamless 17.5 second loop, with a 0.8 second crossfade between each and a closing
dissolve back into clip one's opening frame, so the loop point is a dissolve
rather than a cut. Re-cut with `site/make-hero-video.sh`. The raw client clips are
gitignored (46 MB) and held outside the repo.

## Logo transparency

The client logo is artwork on a solid black plate with no alpha, and
`logo-light.png` is a different colourway rather than the same artwork on white,
so a difference matte cannot recover the alpha. `site/make-logo-alpha.sh` derives
it by treating the black plate as a premultiplied composite.

This replaced a CSS `mix-blend-mode: screen` approach, which looked correct on
desktop but rendered as a hard black rectangle inside in-app webviews such as
Facebook Messenger. **Do not reintroduce the blend.**

## SEO, GEO and AEO

- Unique title, meta description and canonical on all 26 pages, all within
  search-result truncation limits (checked by `check.js`)
- A JSON-LD `@graph` per page: `RoofingContractor` / `LocalBusiness`, `WebSite`,
  `WebPage`, `BreadcrumbList`, plus `Service` on service and location pages,
  `FAQPage` where there are FAQs, `ImageGallery` and `ContactPage` where relevant
- 38 FAQs, marked up as `FAQPage`. Answers stay in the DOM when the accordion is
  closed, so crawlers and answer engines can read them
- An answer-first "In short" block near the top of each page, written to still
  make sense when an answer engine lifts it out on its own
- Full service by location interlinking, breadcrumbs on every inner page
- `sitemap.xml`, `robots.txt` (explicitly allowing GPTBot, ClaudeBot,
  PerplexityBot, Google-Extended and friends) and `llms.txt`

### Deliberately absent from the markup

`check.js` fails the build if any of these appear, because none has been
confirmed by the client: `aggregateRating`, `review`, `priceRange`,
`openingHours`. No insurance cover, guarantee, accreditation, customer review or
price is claimed anywhere on the site.

## Still needed from the client

Everything below renders as a visible `[PLACEHOLDER]` chip until supplied, and is
listed in the `node generate.js` build report:

- Email address, Facebook and Instagram URLs
- Owner name and About copy
- Public liability cover, workmanship guarantee, trade body memberships
- Real customer reviews, and the Google review link
- Working hours, year the business started
- Three before and after videos plus project titles, locations and descriptions
- Typical price ranges per service

## When a custom domain goes live

Change `SITE_URL` at the top of `site/src/data.js`, rebuild, and add a `CNAME`
file. Every canonical, Open Graph tag, sitemap entry and schema URL derives from
that one constant.

Built by Innov8 Workflows.
