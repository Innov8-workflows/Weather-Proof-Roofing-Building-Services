/* ============================================================
   About, contact, reviews, our work, FAQs, legal and 404.
   ============================================================ */
const D = require('./data.js');
const L = require('./lib.js');
const P = require('./pages.js');
const { biz, services, locations, gallery, generalFaqs } = D;
const {
  esc, href, asset, abs, ic, ph, waLink, tel, crumbs, phead, ticks,
  faqBlock, band, quotePanel, servicePanel, areaPanel, graph
} = L;
const { page, quoteForm, galleryBlock, lightbox, reviewsCarousel } = P;

const d = 1;

/* ---------------- ABOUT ---------------- */
function about() {
  const p = {
    depth: d, slug: 'about', nav: 'about',
    trail: [['about', 'About us']],
    title: 'About Us | Weather Proof Roofing',
    description: 'Weather Proof Roofing and Building Services is a roofing contractor covering Cheshire, North Wales, Merseyside and Greater Manchester.',
    faqs: [
      ['Who are Weather Proof Roofing and Building Services?', 'Weather Proof Roofing and Building Services is a roofing and building contractor working across Cheshire, North Wales, Merseyside and Greater Manchester, covering everything from single roof repairs to full re-roofs, chimney work and general building work.'],
      ['Do you use subcontractors?', '[PLACEHOLDER] Confirm whether the work is carried out by your own team throughout, and this answer gets written properly.'],
      ['Are you insured?', '[PLACEHOLDER] Public liability cover and any workmanship guarantee to be confirmed by the client. Nothing is claimed here until it is.']
    ]
  };
  p.schema = graph(p);

  const body = phead(d, {
    h1: 'About Weather Proof Roofing',
    sub: 'A roofing and building contractor working across Cheshire, North Wales, Merseyside and Greater Manchester.',
    bg: 'g1.jpg'
  }) + `
<section class="sec"><div class="wrap layout">
  <div>
    <div class="keyfact">
      <h2>In short</h2>
      <p>${esc(biz.name)} is a roofing and building contractor covering ${locations.map(l => l.name).join(', ')} and the surrounding areas. The work ranges from single slipped slates through to full strip and re-cover, chimney rebuilds and the brickwork that goes alongside a roof. Quotes are free, and you reach us on ${biz.phone} by phone or WhatsApp.</p>
    </div>
    <div class="ab__img" style="margin-bottom:24px;aspect-ratio:16/10">
      <img src="${asset(d, 'about.jpg')}" alt="Slate roof and lead work completed on a dormer" loading="lazy" width="700" height="1244">
    </div>
    <div class="prose">
      <h2>Who we are</h2>
      <p>[PLACEHOLDER] A short introduction to who runs ${esc(biz.name)}: how long you have been on the tools, how the business started, and what sort of work you take on most. Two or three paragraphs is plenty, and it is one of the first things a customer reads, so it is worth writing properly.</p>
      <p>[PLACEHOLDER] A second paragraph on the way you work: who actually turns up on the day, how you quote, how you keep a site tidy, and what happens if something is not right after you have left.</p>

      <h2>How we work</h2>
      <p>The process is the same whether it is one slipped slate or a full re-roof.</p>
      ${ticks([
        'Someone comes and looks at the roof properly, inside the loft as well as outside',
        'You get told what is actually wrong, and whether it needs repairing or replacing',
        'A free quote, with no obligation and no pressure to decide on the spot',
        'Work is photographed as it goes, so you can see the parts you cannot get to',
        'Site is left clear at the end of the job'
      ])}

      <h2>Why the photos matter</h2>
      <p>Every photograph and video on this website is from a job carried out by ${esc(biz.name)}. There is no stock photography anywhere on the site. Roofing is one of the few trades where the customer cannot see most of the work, so being able to show the job as it went is worth more than any amount of marketing copy.</p>

      <h2>Insurance, guarantees and accreditations</h2>
      <p>${ph()} This section is deliberately blank. Public liability cover, any workmanship guarantee and its length, and any trade body memberships all need confirming by the client before they appear on the website. Nothing is claimed here until it is confirmed.</p>
    </div>
    ${band(d, 'Want to talk it through?', 'Call ' + biz.phone + ' and speak to the person who will be doing the work.')}
    <div class="prose"><h2>Frequently asked questions</h2></div>
    ${faqBlock(p.faqs)}
  </div>
  <aside class="aside">
    ${quotePanel(d)}
    ${servicePanel(d)}
    ${areaPanel(d)}
  </aside>
</div></section>`;

  return { ...p, html: page(p, body) };
}

/* ---------------- CONTACT ---------------- */
function contact() {
  const p = {
    depth: d, slug: 'contact', nav: 'contact',
    trail: [['contact', 'Contact']],
    title: 'Contact Us | Weather Proof Roofing',
    description: `Get a free roofing quote. Call or WhatsApp ${biz.phone}. Covering Chester, Wrexham, Warrington, the Wirral and Greater Manchester.`,
    faqs: [
      ['How do I get a quote?', 'Call or WhatsApp ' + biz.phone + ', or fill in the form on this page, which opens WhatsApp with your details already written out. Sending a photo of the problem is the fastest way to get a useful answer.'],
      ['Do you charge for quotes?', 'No. Quotes are free and there is no obligation to go ahead.'],
      ['What information should I send?', 'A photo of the problem area, a photo of the whole elevation so the roof can be seen in context, your rough location, and a sentence on what has been happening. That is usually enough for an initial view.']
    ],
    extraNodes: [{
      '@type': 'ContactPage',
      '@id': abs('contact') + '#contactpage',
      url: abs('contact'),
      name: 'Contact Weather Proof Roofing and Building Services',
      mainEntity: { '@id': L.BIZ_ID }
    }]
  };
  p.schema = graph(p);

  const body = phead(d, {
    h1: 'Contact us',
    sub: 'Call, WhatsApp or send the form. Quotes are free and there is no obligation.',
    bg: 'g8.jpg'
  }) + `
<section class="sec"><div class="wrap">
  <div class="keyfact">
    <h2>In short</h2>
    <p>The quickest way to reach ${esc(biz.name)} is to call or WhatsApp ${biz.phone}. Sending a photo of the problem on WhatsApp usually gets you a useful answer fastest, because a lot can be told from a clear picture of a roof. Quotes are free and carry no obligation.</p>
  </div>
  <div class="ct">
    <div class="ct__side">
      <a class="ct__row" href="${tel}" data-track="call">${ic('phone')}<div><small>Call us</small><b>${biz.phone}</b></div></a>
      <a class="ct__row" href="${waLink('Hello Weather Proof Roofing, I would like a quote.')}" target="_blank" rel="noopener" data-track="whatsapp">${ic('chat')}<div><small>WhatsApp</small><b>Message us</b></div></a>
      <div class="ct__row">${ic('mail')}<div><small>Email</small><b>[PLACEHOLDER] email address</b></div></div>
      <div class="ct__row">${ic('clock')}<div><small>Hours</small><b>[PLACEHOLDER] working hours</b></div></div>
      <div class="ct__row">${ic('pin')}<div><small>Covering</small><b>${esc(biz.baseArea)}</b></div></div>
    </div>
    ${quoteForm(d)}
  </div>
  <div class="prose" style="margin-top:34px">
    <h2>Areas we cover</h2>
    <p>If your town is not on this list it is still worth calling, because it is the main areas rather than a hard boundary.</p>
  </div>
  <div class="chips">
    ${locations.map(l => `<a class="chip" href="${href(d, 'roofers-in-' + l.slug)}">${ic('pin')}${esc(l.name)}</a>`).join('\n    ')}
  </div>
  <div class="prose"><h2>Frequently asked questions</h2></div>
  <div style="max-width:820px">${faqBlock(p.faqs)}</div>
</div></section>`;

  return { ...p, html: page(p, body) };
}

/* ---------------- OUR WORK ---------------- */
function ourWork() {
  const p = {
    depth: d, slug: 'our-work', nav: 'our-work',
    trail: [['our-work', 'Our work']],
    title: 'Our Work | Weather Proof Roofing',
    description: 'Photographs of recent roofing jobs: slate and tile re-roofs, ridge work, chimney repairs and repointing across the North West.',
    extraNodes: [{
      '@type': 'ImageGallery',
      '@id': abs('our-work') + '#gallery',
      url: abs('our-work'),
      name: 'Weather Proof Roofing project gallery',
      associatedMedia: gallery.map(([f, alt]) => ({
        '@type': 'ImageObject',
        contentUrl: D.SITE_URL + '/assets/' + f,
        caption: alt
      }))
    }]
  };
  p.schema = graph(p);

  const body = phead(d, {
    h1: 'Our work',
    sub: 'Every photograph here is a job carried out by us. There is no stock photography anywhere on this site.',
    bg: 'g6.jpg'
  }) + `
<section class="sec"><div class="wrap">
  <div class="keyfact">
    <h2>In short</h2>
    <p>These are real jobs carried out by ${esc(biz.name)} across the North West: slate and tile re-roofs, ridge tiles re-bedded and dry fixed, chimney stacks repointed and re-flaunched, and lead work dressed around dormers and abutments. Tap any photo to see it full size.</p>
  </div>
  ${galleryBlock(d, gallery)}
  <div class="prose" style="margin-top:32px">
    <h2>Before and after videos</h2>
    <p>${ph()} Three before and after clips are being added here, each with the project details. Send the videos and the job information and they will go straight in.</p>
  </div>
  <div class="tf" style="margin-top:18px">
    ${[1, 2, 3].map(n => `
    <article class="tf__row">
      <div class="tf__media">
        <img src="${asset(d, 'tf' + n + '.jpg')}" alt="Roofing work in progress" loading="lazy" width="960" height="540">
        <span class="tf__badge">${ic('play', 'ic ic--fill')}Before and after</span>
        <div class="tf__veil">${ic('play')}<b>Video slot ${n}</b><small>BEFORE AND AFTER CLIP TO BE ADDED</small></div>
      </div>
      <div class="tf__body">
        <div class="tf__num">Project 0${n}</div>
        <h3>[PLACEHOLDER] Project title</h3>
        <p>[PLACEHOLDER] What the job was, what was wrong with the roof and what was carried out.</p>
        <div class="tf__meta"><span class="tf__pill">${ic('pin')}[Location]</span><span class="tf__pill">${ic('clock')}[Duration]</span></div>
      </div>
    </article>`).join('')}
  </div>
  ${band(d, 'Want your roof to look like this?', 'Call ' + biz.phone + ' or send a photo on WhatsApp for a free quote.')}
  <div class="related">
    <h2>What we do</h2>
    <div class="chips">
      ${services.map(s => `<a class="chip" href="${href(d, s.slug)}">${ic(s.icon)}${esc(s.nav)}</a>`).join('\n      ')}
    </div>
  </div>
</div></section>
${lightbox()}`;

  return { ...p, html: page(p, body) };
}

/* ---------------- REVIEWS ---------------- */
function reviews() {
  const p = {
    depth: d, slug: 'reviews', nav: 'reviews',
    trail: [['reviews', 'Reviews']],
    title: 'Customer Reviews | Weather Proof Roofing',
    description: 'What customers say about Weather Proof Roofing and Building Services, covering Cheshire, North Wales, Merseyside and Greater Manchester.'
    /* NOTE: no Review or AggregateRating schema until real reviews exist.
       Marking up placeholder reviews would be fabricating them. */
  };
  p.schema = graph(p);

  const body = phead(d, {
    h1: 'Customer reviews',
    sub: 'Reviews from customers across Cheshire, North Wales, Merseyside and Greater Manchester.',
    bg: 'g7.jpg'
  }) + `
<section class="sec"><div class="wrap">
  <div class="keyfact">
    <h2>${ph()} Awaiting real reviews</h2>
    <p>The cards below are sample placeholders. Real customer reviews will replace them word for word once supplied. Nothing on this page is presented as a genuine review until it is one, and no star rating is published in the page markup until there are real ratings behind it.</p>
  </div>
  ${reviewsCarousel()}
  <div class="prose" style="margin-top:36px">
    <h2>Leave us a review</h2>
    <p>${ph()} Add the Google review link here once the Google Business Profile is set up, so happy customers can leave a review in one tap.</p>
    <h2>Why reviews matter for a roofer</h2>
    <p>Roofing is a trade where the customer cannot see most of the work. The roof is out of reach, the job happens while you are at work, and the difference between a proper job and a bodge is often invisible from the ground for a year or two. Reviews and photographs are how that gap gets closed, which is why every job is photographed as it goes.</p>
  </div>
  ${band(d, 'Ready to get a quote?', 'Call ' + biz.phone + ' or send a photo of the problem on WhatsApp.')}
</div></section>`;

  return { ...p, html: page(p, body) };
}

/* ---------------- FAQs ---------------- */
function faqs() {
  const all = generalFaqs.concat(services.flatMap(s => s.faqs));
  const p = {
    depth: d, slug: 'faqs', nav: 'faqs',
    trail: [['faqs', 'FAQs']],
    title: 'Roofing FAQs | Weather Proof Roofing',
    description: 'Answers to common roofing questions: how long a new roof takes, what causes leaks, dry ridge systems, scaffolding, and how quotes work.',
    faqs: all
  };
  p.schema = graph(p);

  const body = phead(d, {
    h1: 'Frequently asked questions',
    sub: 'The questions we get asked most, answered straight.',
    bg: 'g9.jpg'
  }) + `
<section class="sec"><div class="wrap layout">
  <div>
    <div class="keyfact">
      <h2>In short</h2>
      <p>This page answers ${all.length} of the questions we are asked most about roofing: how long jobs take, when a repair is enough and when a roof needs replacing, what scaffolding is needed, and how quotes work. If your question is not here, call or WhatsApp ${biz.phone}.</p>
    </div>
    <div class="prose"><h2>General questions</h2></div>
    ${faqBlock(generalFaqs)}
    ${services.map(s => `
    <div class="prose"><h2>${esc(s.h1)}</h2>
      <p>${esc(s.blurb)} <a href="${href(d, s.slug)}">Read more about ${esc(s.h1.toLowerCase())}</a>.</p>
    </div>
    ${faqBlock(s.faqs)}`).join('\n')}
    ${band(d, 'Still not sure?', 'Call ' + biz.phone + ' or send a photo on WhatsApp and you will get a straight answer.')}
  </div>
  <aside class="aside">
    ${quotePanel(d)}
    ${servicePanel(d)}
    ${areaPanel(d)}
  </aside>
</div></section>`;

  return { ...p, html: page(p, body) };
}

/* ---------------- LEGAL ---------------- */
function privacy() {
  const p = {
    depth: d, slug: 'privacy-policy', nav: '',
    trail: [['privacy-policy', 'Privacy policy']],
    title: 'Privacy Policy | Weather Proof Roofing',
    description: 'How Weather Proof Roofing and Building Services handles the information you send through this website.'
  };
  p.schema = graph(p);
  const body = phead(d, { h1: 'Privacy policy', sub: 'How we handle the information you send us.', bg: 'g3.jpg' }) + `
<section class="sec"><div class="wrap legal">
  <p><strong>Last updated:</strong> <span id="pp-date">on publication</span></p>
  <p>This policy explains what ${esc(biz.name)} does with the information you provide through this website.</p>

  <h2>What we collect</h2>
  <p>This website does not use analytics, advertising or tracking cookies, and it does not set any cookies of its own.</p>
  <p>The quote form on this site does not send anything to a server. It formats what you type into a WhatsApp message and opens WhatsApp on your device. Nothing is transmitted until you press send in WhatsApp, and at that point the message goes to us through WhatsApp in the ordinary way.</p>
  <p>If you call, message or email us, we hold the details you give us, such as your name, phone number, address and what you have told us about the job, so that we can quote for and carry out the work.</p>

  <h2>What we use it for</h2>
  <ul>
    <li>Responding to your enquiry and providing a quote</li>
    <li>Carrying out work you have asked us to do</li>
    <li>Keeping records of work carried out</li>
  </ul>
  <p>We do not sell your information, and we do not pass it to third parties for marketing.</p>

  <h2>Third party services</h2>
  <p>This site loads fonts from Google Fonts, which means your browser makes a request to Google's servers when the page loads. That request includes your IP address. No other third party service is loaded by this website.</p>
  <p>Messages sent through WhatsApp are handled under WhatsApp's own privacy terms.</p>

  <h2>How long we keep it</h2>
  <p>Enquiry details are kept only as long as needed to deal with the enquiry and any work that follows from it, plus the period required for tax and insurance records.</p>

  <h2>Your rights</h2>
  <p>You can ask us what information we hold about you, ask for it to be corrected, or ask for it to be deleted. Contact us on ${biz.phone} to do so.</p>

  <h2>Contact</h2>
  <p>${esc(biz.name)}<br>Phone: <a href="${tel}">${biz.phone}</a><br>Email: [PLACEHOLDER] email address</p>
  <p>${ph()} If a registered company name and address exist, they should be added here.</p>
</div></section>`;
  return { ...p, html: page(p, body) };
}

function terms() {
  const p = {
    depth: d, slug: 'terms', nav: '',
    trail: [['terms', 'Terms']],
    title: 'Terms of Use | Weather Proof Roofing',
    description: 'Terms of use for the Weather Proof Roofing and Building Services website.'
  };
  p.schema = graph(p);
  const body = phead(d, { h1: 'Terms of use', sub: 'The terms covering this website.', bg: 'g4.jpg' }) + `
<section class="sec"><div class="wrap legal">
  <h2>About this website</h2>
  <p>This website is operated by ${esc(biz.name)}. By using it you accept these terms.</p>

  <h2>Information on this site</h2>
  <p>The guidance on this website is general information about roofing and building work. It is not a survey, a specification or advice on your particular property. Every roof is different, and nothing here should be relied on in place of having someone look at your actual roof.</p>
  <p>Any indication of how long a job takes or what it involves is a general guide only. Firm timescales and prices are given in a written quote.</p>

  <h2>Quotes</h2>
  <p>Nothing on this website is an offer or a contract. Work is carried out on the basis of a specific quote given for your property, and a quote becomes binding only when it is accepted in the terms set out in it.</p>

  <h2>Photographs</h2>
  <p>All photographs and videos on this site show work carried out by ${esc(biz.name)}. They illustrate the type of work undertaken and are not a promise that your job will look the same, because the result depends on the property, the materials and the condition of what is already there.</p>

  <h2>Links</h2>
  <p>Where this site links to other websites, we are not responsible for their content.</p>

  <h2>Intellectual property</h2>
  <p>The content, photographs and design of this website belong to ${esc(biz.name)} and may not be reproduced without permission.</p>

  <h2>Contact</h2>
  <p>Phone: <a href="${tel}">${biz.phone}</a><br>Email: [PLACEHOLDER] email address</p>
  <p>${ph()} Registered company name, number and address to be added if applicable.</p>
</div></section>`;
  return { ...p, html: page(p, body) };
}

/* ---------------- 404 ---------------- */
function notFound() {
  /* served from the site root by GitHub Pages, so it must use depth 0 paths */
  const p = {
    depth: 0, slug: '404', nav: '',
    title: 'Page Not Found | Weather Proof Roofing',
    description: 'That page could not be found. Browse our roofing services and areas covered, or call 07718 155997 for a free quote.'
  };
  p.schema = graph({ ...p, slug: '' });
  const body = `
<section class="sec" style="text-align:center"><div class="wrap">
  <div class="eyebrow" style="justify-content:center">Error 404</div>
  <h1 style="font-size:clamp(1.8rem,6vw,3rem);margin-bottom:12px">That page has slipped off the roof</h1>
  <p style="color:var(--muted);max-width:52ch;margin:0 auto 26px">The page you were after does not exist any more, or the address has a typo in it. Here is where to go instead.</p>
  <div class="band__btns" style="margin-bottom:34px">
    <a class="btn btn--gold" href="${href(0, '')}">Back to the homepage ${ic('arrow')}</a>
    <a class="btn btn--dark" href="${tel}" data-track="call">${ic('phone')} Call ${biz.phone}</a>
  </div>
  <div class="chips" style="justify-content:center">
    ${services.map(s => `<a class="chip" href="${href(0, s.slug)}">${ic(s.icon)}${esc(s.nav)}</a>`).join('\n    ')}
    <a class="chip" href="${href(0, 'areas-we-cover')}">${ic('pin')}Areas we cover</a>
    <a class="chip" href="${href(0, 'contact')}">${ic('mail')}Contact</a>
  </div>
</div></section>`;
  return { ...p, html: page(p, body) };
}

module.exports = { about, contact, ourWork, reviews, faqs, privacy, terms, notFound };
