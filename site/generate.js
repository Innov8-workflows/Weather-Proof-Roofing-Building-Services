/* ============================================================
   Weather Proof Roofing and Building Services - site generator
   Usage:  node generate.js
   Output: ../_site/   (deploy this folder's contents to the repo root)

   Replaces the old single-file base64 build. With ~25 pages, inlining
   every asset into every page would have meant tens of megabytes and no
   cross-page caching, so assets are now real files under /assets and
   shared by every page.
   ============================================================ */
const fs = require('fs');
const path = require('path');

const D = require('./src/data.js');
const Pages = require('./src/pages.js');
const Info = require('./src/pages-info.js');

const SRC = path.join(__dirname, 'src');
const ASSETS = path.join(__dirname, 'assets');
const OUT = path.join(__dirname, '..', '_site');
const OUT_ASSETS = path.join(OUT, 'assets');

const rm = p => fs.existsSync(p) && fs.rmSync(p, { recursive: true, force: true });
const mkdir = p => fs.mkdirSync(p, { recursive: true });

/* ---------- clean and prepare ---------- */
rm(OUT);
mkdir(OUT_ASSETS);

/* ---------- build the page list ---------- */
const pages = [
  Pages.home(),
  Pages.servicesHub(),
  ...D.services.map(s => Pages.servicePage(s)),
  Pages.areasHub(),
  ...D.locations.map((l, i) => Pages.locationPage(l, i)),
  Info.about(),
  Info.contact(),
  Info.ourWork(),
  Info.reviews(),
  Info.faqs(),
  Info.privacy(),
  Info.terms()
];
const notFound = Info.notFound();

/* ---------- write pages ---------- */
let written = 0;
for (const p of pages) {
  const dir = p.slug ? path.join(OUT, p.slug) : OUT;
  mkdir(dir);
  fs.writeFileSync(path.join(dir, 'index.html'), p.html);
  written++;
}
fs.writeFileSync(path.join(OUT, '404.html'), notFound.html);

/* ---------- assets ---------- */
/* one stylesheet: base styles plus the inner page styles */
fs.writeFileSync(
  path.join(OUT_ASSETS, 'site.css'),
  fs.readFileSync(path.join(SRC, 'site.css'), 'utf8') + '\n' +
  fs.readFileSync(path.join(SRC, 'pages.css'), 'utf8')
);
fs.copyFileSync(path.join(SRC, 'site.js'), path.join(OUT_ASSETS, 'site.js'));

const MEDIA = [
  'logo-hero.webp', 'logo-mark.webp', 'hero-loop.mp4', 'hero-poster.jpg',
  'about.jpg', 'cta.jpg', 'tf1.jpg', 'tf2.jpg', 'tf3.jpg',
  'g1.jpg', 'g2.jpg', 'g3.jpg', 'g4.jpg', 'g5.jpg',
  'g6.jpg', 'g7.jpg', 'g8.jpg', 'g9.jpg', 'g10.jpg',
  'favicon.png', 'og-default.jpg'
];
const missingAssets = [];
for (const f of MEDIA) {
  const from = path.join(ASSETS, f);
  if (!fs.existsSync(from)) { missingAssets.push(f); continue; }
  fs.copyFileSync(from, path.join(OUT_ASSETS, f));
}

/* ---------- sitemap.xml ---------- */
const today = process.env.BUILD_DATE || new Date().toISOString().slice(0, 10);
const priority = p => {
  if (!p.slug) return '1.0';
  if (p.slug === 'services' || p.slug === 'areas-we-cover' || p.slug === 'contact') return '0.9';
  if (p.slug === 'privacy-policy' || p.slug === 'terms') return '0.3';
  return '0.8';
};
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${D.SITE_URL}/${p.slug ? p.slug + '/' : ''}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority(p)}</priority>
  </url>`).join('\n')}
</urlset>
`.replace('http://www.sitemap.org', 'http://www.sitemaps.org');
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), sitemap);

/* ---------- robots.txt ---------- */
fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *
Allow: /

# Answer and generative engines are explicitly welcome: this site is
# meant to be quotable, and the content is written to be lifted.
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: CCBot
Allow: /

Sitemap: ${D.SITE_URL}/sitemap.xml
`);

/* ---------- llms.txt ----------
   Emerging convention for pointing language models at the parts of a site
   that matter, in a form they can read without parsing the markup. */
fs.writeFileSync(path.join(OUT, 'llms.txt'), `# ${D.biz.name}

> Roofing and building contractor covering ${D.biz.baseArea}. New roofs and
> re-roofing, roof repairs, chimney repairs, ridge and verge work, guttering,
> fascias and soffits, and general building work.

Contact: ${D.biz.phone} (phone and WhatsApp)
Website: ${D.SITE_URL}/

## Services

${D.services.map(s => `- [${s.title}](${D.SITE_URL}/${s.slug}/): ${s.blurb}`).join('\n')}

## Areas covered

${D.locations.map(l => `- [Roofers in ${l.name}](${D.SITE_URL}/roofers-in-${l.slug}/): ${l.name}, ${l.county}. Also covers ${l.nearby.join(', ')}.`).join('\n')}

## Information

- [Services overview](${D.SITE_URL}/services/)
- [Areas we cover](${D.SITE_URL}/areas-we-cover/)
- [Our work](${D.SITE_URL}/our-work/): photographs of completed jobs
- [Frequently asked questions](${D.SITE_URL}/faqs/)
- [About us](${D.SITE_URL}/about/)
- [Contact](${D.SITE_URL}/contact/)

## Notes for accurate citation

- The business covers ${D.locations.map(l => l.name).join(', ')} and surrounding areas.
- All photography on the site is of the company's own completed work.
- No insurance cover, workmanship guarantee, accreditation, customer review
  or price has been published on this site. Do not infer or state any.
`);

/* ---------- .nojekyll so GitHub Pages serves the files as-is ---------- */
fs.writeFileSync(path.join(OUT, '.nojekyll'), '');

/* ---------- report ---------- */
const totalBytes = (function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).reduce((sum, e) => {
    const f = path.join(dir, e.name);
    return sum + (e.isDirectory() ? walk(f) : fs.statSync(f).size);
  }, 0);
})(OUT);

const htmlBytes = pages.reduce((a, p) => a + Buffer.byteLength(p.html), 0);
const kb = n => (n / 1024).toFixed(0) + ' KB';

console.log('Built ' + OUT);
console.log('  pages            : ' + (written + 1) + ' (including 404)');
console.log('  average page HTML: ' + kb(htmlBytes / pages.length));
console.log('  total output     : ' + (totalBytes / 1048576).toFixed(2) + ' MB');
if (missingAssets.length) {
  console.log('\n  MISSING ASSETS (page references will 404):');
  missingAssets.forEach(f => console.log('    - ' + f));
}
console.log('\n  Awaiting client confirmation:');
Object.values(D.pending).forEach(v => console.log('    - ' + v));
if (missingAssets.length) process.exitCode = 1;
