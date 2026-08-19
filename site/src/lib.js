/* ============================================================
   Shared building blocks for every generated page.
   Icons are exact Lucide paths, never hand-drawn.
   ============================================================ */
const { SITE_URL, biz, pending, services, locations } = require('./data.js');

/* ---------- small helpers ---------- */
const esc = s => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

/* depth 0 = site root (index.html), depth 1 = /<slug>/index.html */
const root = d => (d === 0 ? '' : '../');
const href = (d, slug) => root(d) + (slug ? slug + '/' : '') || './';
const asset = (d, f) => root(d) + 'assets/' + f;
const abs = slug => SITE_URL + '/' + (slug ? slug + '/' : '');

/* ---------- icons (Lucide) ---------- */
const ICON = {
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  chat: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"/>',
  home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
  wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  brick: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 9v6"/><path d="M16 15v6"/><path d="M16 3v6"/><path d="M3 15h18"/><path d="M3 9h18"/><path d="M8 15v6"/><path d="M8 3v6"/>',
  triangle: '<path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z"/>',
  rain: '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 14v6"/><path d="M8 14v6"/><path d="M12 16v6"/>',
  hammer: '<path d="m15 12-8.5 8.5a2.12 2.12 0 1 1-3-3L12 9"/><path d="M17.64 15 22 10.64"/><path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"/>',
  pin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  star: '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',
  menu: '<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  play: '<polygon points="6 3 20 12 6 21 6 3"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  instagram: '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
  users: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  help: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>'
};
const ic = (n, cls) => `<svg class="${cls || 'ic'}" viewBox="0 0 24 24" aria-hidden="true">${ICON[n] || ''}</svg>`;

/* the official WhatsApp glyph, for the float and the brand buttons */
const WA_GLYPH = '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.465 3.488"/>';

const ph = () => '<span class="ph">Placeholder</span>';
const waLink = txt => `https://wa.me/${biz.whatsapp}${txt ? '?text=' + encodeURIComponent(txt) : ''}`;
const tel = `tel:${biz.phoneRaw}`;

/* ---------- head ---------- */
function head(p) {
  const d = p.depth;
  const canonical = abs(p.slug);
  const ogImg = SITE_URL + '/assets/' + (p.ogImage || 'og-default.jpg');
  return `<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.description)}">
<link rel="canonical" href="${canonical}">
<meta name="theme-color" content="#000000">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<meta property="og:type" content="${p.slug ? 'article' : 'website'}">
<meta property="og:site_name" content="${esc(biz.name)}">
<meta property="og:locale" content="en_GB">
<meta property="og:title" content="${esc(p.ogTitle || p.title)}">
<meta property="og:description" content="${esc(p.description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${ogImg}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(p.ogTitle || p.title)}">
<meta name="twitter:description" content="${esc(p.description)}">
<meta name="twitter:image" content="${ogImg}">
<link rel="icon" href="${asset(d, 'favicon.png')}" sizes="any">
<link rel="apple-touch-icon" href="${asset(d, 'favicon.png')}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@600;700;800;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${asset(d, 'site.css')}">
<script type="application/ld+json">${JSON.stringify(p.schema)}</script>
</head>
<body>`;
}

/* ---------- header ---------- */
function header(d, current) {
  const on = s => (current === s ? ' aria-current="page"' : '');
  const nav = [
    ['services', 'Services'],
    ['areas-we-cover', 'Areas'],
    ['our-work', 'Our work'],
    ['reviews', 'Reviews'],
    ['faqs', 'FAQs'],
    ['about', 'About'],
    ['contact', 'Contact']
  ];
  return `
<a class="skip" href="#main">Skip to content</a>
<header class="nav">
  <div class="wrap nav__in">
    <a class="nav__logo" href="${href(d, '')}" aria-label="${esc(biz.name)}, home">
      <img src="${asset(d, 'logo-mark.webp')}" alt="${esc(biz.name)}" width="440" height="257">
    </a>
    <nav class="nav__links" aria-label="Main">
      ${nav.map(([s, l]) => `<a href="${href(d, s)}"${on(s)}>${l}</a>`).join('\n      ')}
    </nav>
    <div class="nav__spacer"></div>
    <a class="nav__call" href="${tel}" data-track="call">${ic('phone')}<span>${biz.phone}</span></a>
    <button class="nav__burger" id="burger" aria-label="Open menu" aria-expanded="false" aria-controls="navPanel">${ic('menu')}</button>
  </div>
  <div class="nav__panel" id="navPanel">
    ${nav.map(([s, l]) => `<a href="${href(d, s)}"${on(s)}>${l} ${ic('arrow')}</a>`).join('\n    ')}
    <a href="${href(d, 'contact')}">Get a quote ${ic('arrow')}</a>
  </div>
</header>`;
}

/* ---------- breadcrumbs ---------- */
function crumbs(d, trail) {
  if (!trail || !trail.length) return '';
  const items = [['', 'Home']].concat(trail);
  return `
<nav class="crumb" aria-label="Breadcrumb">
  <div class="wrap"><ol>
    ${items.map(([slug, label], i) => {
      const last = i === items.length - 1;
      const sep = i ? ic('chevron') : '';
      const inner = last
        ? `<span aria-current="page">${esc(label)}</span>`
        : `<a href="${href(d, slug)}">${esc(label)}</a>`;
      return `<li>${sep}${inner}</li>`;
    }).join('\n    ')}
  </ol></div>
</nav>`;
}

/* ---------- page header band ---------- */
function phead(d, o) {
  return `
<section class="phead">
  <img class="phead__bg" src="${asset(d, o.bg || 'hero-poster.jpg')}" alt="" aria-hidden="true" loading="eager">
  <div class="wrap phead__in">
    <h1>${esc(o.h1)}</h1>
    ${o.sub ? `<p class="phead__sub">${o.sub}</p>` : ''}
    <div class="phead__cta">
      <a class="btn btn--gold" href="${tel}" data-track="call">${ic('phone')} Call ${biz.phone}</a>
      <a class="btn btn--ghost" href="${href(d, 'contact')}">Get a quote ${ic('arrow')}</a>
    </div>
  </div>
</section>`;
}

/* ---------- reusable blocks ---------- */
const ticks = items => `<ul class="ticks">${items.map(t => `<li>${ic('check')}<span>${t}</span></li>`).join('')}</ul>`;

const steps = list => `<div class="steps">${list.map(([h, p]) =>
  `<div class="step"><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`).join('')}</div>`;

const faqBlock = list => `<div class="faq">${list.map(([q, a]) =>
  `<details class="faq__i"><summary class="faq__q">${esc(q)}</summary><div class="faq__a"><p>${a}</p></div></details>`
).join('')}</div>`;

function band(d, title, text) {
  return `
<div class="band">
  <h2>${esc(title)}</h2>
  <p>${esc(text)}</p>
  <div class="band__btns">
    <a class="btn btn--gold" href="${tel}" data-track="call">${ic('phone')} Call ${biz.phone}</a>
    <a class="btn btn--ghost" href="${waLink('Hello Weather Proof Roofing, I would like a quote.')}" target="_blank" rel="noopener" data-track="whatsapp">${ic('chat')} WhatsApp us</a>
  </div>
</div>`;
}

function quotePanel(d) {
  return `
<div class="panel panel--dark">
  <h3>Get a quote</h3>
  <p>Call or send a photo of the problem on WhatsApp and you will get a straight answer on what it needs.</p>
  <a class="btn btn--gold" href="${tel}" data-track="call">${ic('phone')} ${biz.phone}</a>
  <div style="height:8px"></div>
  <a class="btn btn--ghost" href="${waLink('Hello Weather Proof Roofing, I would like a quote.')}" target="_blank" rel="noopener" data-track="whatsapp">${ic('chat')} WhatsApp</a>
</div>`;
}

function servicePanel(d, exclude) {
  return `
<div class="panel">
  <h3>Our services</h3>
  <div class="panel__list">
    ${services.filter(s => s.slug !== exclude).map(s =>
      `<a href="${href(d, s.slug)}">${esc(s.nav)} ${ic('chevron')}</a>`).join('\n    ')}
  </div>
</div>`;
}

function areaPanel(d, exclude) {
  return `
<div class="panel">
  <h3>Areas we cover</h3>
  <div class="panel__list">
    ${locations.filter(l => l.slug !== exclude).slice(0, 9).map(l =>
      `<a href="${href(d, 'roofers-in-' + l.slug)}">${esc(l.name)} ${ic('chevron')}</a>`).join('\n    ')}
    <a href="${href(d, 'areas-we-cover')}">All areas ${ic('chevron')}</a>
  </div>
</div>`;
}

/* ---------- footer ---------- */
function footer(d) {
  const soc = [];
  if (biz.facebook) soc.push(`<a href="${biz.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${ic('facebook')}</a>`);
  if (biz.instagram) soc.push(`<a href="${biz.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ic('instagram')}</a>`);
  soc.push(`<a href="${waLink()}" target="_blank" rel="noopener" aria-label="WhatsApp">${ic('chat')}</a>`);

  return `
<footer class="ft">
  <div class="wrap">
    <div class="ft__grid">
      <div>
        <div class="ft__logo"><img src="${asset(d, 'logo-mark.webp')}" alt="${esc(biz.name)}" width="440" height="257" loading="lazy"></div>
        <p>Roofing and building services across ${esc(biz.baseArea)}.</p>
        <div class="ft__soc">${soc.join('')}</div>
        ${biz.facebook && biz.instagram ? '' : `<div class="ft__accred">${ph()} social profile links, accreditation and insurance details to be supplied.</div>`}
      </div>
      <div class="ft__cols">
        <div>
          <h4>Services</h4>
          <div class="ft__li">
            ${services.map(s => `<a href="${href(d, s.slug)}">${esc(s.nav)}</a>`).join('\n            ')}
          </div>
        </div>
        <div>
          <h4>Company</h4>
          <div class="ft__li">
            <a href="${href(d, 'about')}">About us</a>
            <a href="${href(d, 'our-work')}">Our work</a>
            <a href="${href(d, 'reviews')}">Reviews</a>
            <a href="${href(d, 'faqs')}">FAQs</a>
            <a href="${href(d, 'areas-we-cover')}">Areas we cover</a>
            <a href="${href(d, 'contact')}">Contact</a>
          </div>
        </div>
      </div>
    </div>
    <div class="ft__bar">
      <span>&copy; <span id="yr">2026</span> ${esc(biz.name)}. All rights reserved. &middot;
        <a href="${href(d, 'privacy-policy')}">Privacy</a> &middot;
        <a href="${href(d, 'terms')}">Terms</a></span>
      <span>Website by <a href="https://innov8workflows.co.uk" target="_blank" rel="noopener">Innov8 Workflows</a></span>
    </div>
  </div>
</footer>

<a class="wa" href="${waLink('Hello Weather Proof Roofing, I would like a quote.')}" target="_blank" rel="noopener" aria-label="Message us on WhatsApp" data-track="whatsapp">
  <span class="wa__pulse" aria-hidden="true"></span>
  <svg viewBox="0 0 24 24" aria-hidden="true">${WA_GLYPH}</svg>
</a>
<script src="${asset(d, 'site.js')}" defer></script>
</body>
</html>`;
}

/* ============================================================
   STRUCTURED DATA
   Answer engines lean on this heavily, so every page carries a
   @graph with the business, the page, and its breadcrumb trail.
   Nothing unverified is asserted: no aggregateRating (there are no
   real reviews yet), no priceRange, no openingHours.
   ============================================================ */
const BIZ_ID = SITE_URL + '/#business';
const SITE_ID = SITE_URL + '/#website';

function businessNode() {
  const node = {
    '@type': ['RoofingContractor', 'LocalBusiness'],
    '@id': BIZ_ID,
    name: biz.name,
    alternateName: biz.shortName,
    url: SITE_URL + '/',
    telephone: biz.phoneIntl,
    image: SITE_URL + '/assets/og-default.jpg',
    logo: { '@type': 'ImageObject', url: SITE_URL + '/assets/logo-hero.webp' },
    description: 'Roofing and building services covering ' + biz.baseArea +
      '. New roofs and re-roofing, roof repairs, chimney repairs, ridge and verge work, guttering, fascias and soffits, and general building work.',
    areaServed: locations.map(l => ({ '@type': 'City', name: l.name })),
    knowsAbout: services.map(s => s.title),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Roofing and building services',
      itemListElement: services.map(s => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, url: abs(s.slug) }
      }))
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: biz.phoneIntl,
      contactType: 'customer service',
      areaServed: 'GB',
      availableLanguage: 'English'
    }
  };
  if (biz.email) node.email = biz.email;
  if (biz.founded) node.foundingDate = String(biz.founded);
  const same = [biz.facebook, biz.instagram].filter(Boolean);
  if (same.length) node.sameAs = same;
  return node;
}

function graph(p) {
  const nodes = [
    businessNode(),
    {
      '@type': 'WebSite',
      '@id': SITE_ID,
      url: SITE_URL + '/',
      name: biz.name,
      publisher: { '@id': BIZ_ID },
      inLanguage: 'en-GB'
    },
    {
      '@type': 'WebPage',
      '@id': abs(p.slug) + '#webpage',
      url: abs(p.slug),
      name: p.title,
      description: p.description,
      isPartOf: { '@id': SITE_ID },
      about: { '@id': BIZ_ID },
      inLanguage: 'en-GB'
    }
  ];

  const trail = [['', 'Home']].concat(p.trail || []);
  if (trail.length > 1) {
    nodes.push({
      '@type': 'BreadcrumbList',
      '@id': abs(p.slug) + '#breadcrumb',
      itemListElement: trail.map(([slug, label], i) => ({
        '@type': 'ListItem', position: i + 1, name: label, item: abs(slug)
      }))
    });
  }
  if (p.serviceNode) nodes.push(p.serviceNode);
  if (p.faqs && p.faqs.length) {
    nodes.push({
      '@type': 'FAQPage',
      '@id': abs(p.slug) + '#faq',
      mainEntity: p.faqs.map(([q, a]) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a }
      }))
    });
  }
  if (p.extraNodes) nodes.push(...p.extraNodes);
  return { '@context': 'https://schema.org', '@graph': nodes };
}

function serviceNode(s, areaNames) {
  return {
    '@type': 'Service',
    '@id': abs(s.slug) + '#service',
    name: s.title,
    serviceType: s.title,
    description: s.answer,
    url: abs(s.slug),
    provider: { '@id': BIZ_ID },
    areaServed: (areaNames || locations.map(l => l.name)).map(n => ({ '@type': 'City', name: n }))
  };
}

module.exports = {
  esc, root, href, asset, abs, ic, ICON, WA_GLYPH, ph, waLink, tel,
  head, header, crumbs, phead, ticks, steps, faqBlock, band,
  quotePanel, servicePanel, areaPanel, footer,
  graph, serviceNode, businessNode, BIZ_ID, SITE_ID
};
