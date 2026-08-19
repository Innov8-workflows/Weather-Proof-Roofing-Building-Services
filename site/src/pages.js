/* ============================================================
   Page builders. Each returns { slug, title, description, html }.
   ============================================================ */
const D = require('./data.js');
const L = require('./lib.js');
const { biz, services, locations, gallery, generalFaqs, pending } = D;
const {
  esc, href, asset, abs, ic, ph, waLink, tel, head, header, crumbs, phead,
  ticks, steps, faqBlock, band, quotePanel, servicePanel, areaPanel, footer,
  graph, serviceNode, WA_GLYPH
} = L;

const page = (p, body) => head(p) + header(p.depth, p.nav || p.slug) +
  (p.trail ? crumbs(p.depth, p.trail) : '') + `<main id="main">` + body + `</main>` + footer(p.depth);

/* the shared quote form, used on contact and the homepage */
function quoteForm(d) {
  return `
<form class="form" id="quoteForm" data-wa="${biz.whatsapp}" novalidate>
  <h3>Request a quote</h3>
  <p>No obligation. We will come back to you with what needs doing and what it will cost.</p>
  <div class="form__2">
    <div class="field"><label for="f-name">Your name</label>
      <input id="f-name" name="name" type="text" autocomplete="name" placeholder="Full name" required></div>
    <div class="field"><label for="f-phone">Phone number</label>
      <input id="f-phone" name="phone" type="tel" autocomplete="tel" placeholder="Mobile or landline" required></div>
  </div>
  <div class="form__2">
    <div class="field"><label for="f-area">Your area</label>
      <input id="f-area" name="area" type="text" placeholder="Town or postcode"></div>
    <div class="field"><label for="f-job">What do you need?</label>
      <select id="f-job" name="job">
        <option value="">Please choose</option>
        ${services.map(s => `<option>${esc(s.nav)}</option>`).join('')}
        <option>Something else</option>
      </select></div>
  </div>
  <div class="field"><label for="f-msg">Tell us about the job</label>
    <textarea id="f-msg" name="message" placeholder="A few lines on what is wrong, or what you would like doing"></textarea></div>
  <button class="btn btn--gold btn--wide" type="submit">${ic('chat')} Send on WhatsApp</button>
  <p class="form__note">This opens WhatsApp with your message written out. Nothing is sent until you press send.</p>
</form>`;
}

const galleryBlock = (d, items) => `
<div class="gal" id="gal">
  ${items.map(([f, alt]) => `<figure class="gal__i"><img src="${asset(d, f)}" alt="${esc(alt)}" loading="lazy" width="700" height="933"></figure>`).join('\n  ')}
</div>
<div class="gal__hint">${ic('chevron')} Swipe to see more</div>`;

const lightbox = () => `
<div class="lb" id="lb" role="dialog" aria-modal="true" aria-label="Photo viewer">
  <button class="lb__x" id="lbX" aria-label="Close">${ic('x')}</button>
  <img id="lbImg" src="" alt="">
</div>`;

/* six placeholder review cards, clearly marked until real ones arrive */
function reviewsCarousel() {
  const stars = '<div class="rv__stars" aria-label="5 out of 5">' + ic('star', 'ic ic--fill').repeat(5) + '</div>';
  const cards = ['A', 'B', 'C', 'D', 'E', 'F'].map((letter, i) => `
    <div class="rv__card"><div class="rv__inner">
      ${stars}
      <p class="rv__txt">[PLACEHOLDER REVIEW ${i + 1}] Real customer review text goes here once supplied. Keep it word for word as the customer wrote it.</p>
      <div class="rv__who"><div class="rv__av">${letter}</div><div><b>[Customer name]</b><small>Posted on Google</small></div></div>
    </div></div>`).join('');
  return `
<div class="rv" id="rv">
  <div class="rv__view"><div class="rv__track" id="rvTrack">${cards}</div></div>
  <div class="rv__nav">
    <button class="rv__btn" id="rvPrev" aria-label="Previous reviews"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg></button>
    <div class="rv__dots" id="rvDots"></div>
    <button class="rv__btn" id="rvNext" aria-label="Next reviews">${ic('chevron')}</button>
  </div>
</div>`;
}

/* ============================================================
   HOMEPAGE
   ============================================================ */
function home() {
  const d = 0;
  const p = {
    depth: d, slug: '', nav: '',
    title: 'Roofers in Chester and Wrexham | Weather Proof Roofing',
    ogTitle: 'Weather Proof Roofing and Building Services',
    description: 'Roofing and building across Chester, Wrexham, Warrington, the Wirral and Manchester. New roofs, repairs, chimneys and guttering. Call 07718 155997.',
    faqs: generalFaqs.slice(0, 6)
  };
  p.schema = graph(p);

  const body = `
<section class="hero" id="top">
  <!-- HERO MEDIA
       hero-loop.mp4 is the three client clips rendered into one seamless
       loop: 0.8s crossfade between each, plus a closing dissolve back into
       clip one's opening frame so the loop point has no visible cut.
       Rebuild with site/make-hero-video.sh.

       Deliberately NOT gated on prefers-reduced-motion: hiding the hero
       media leaves a black box, which is worse than the motion. -->
  <div class="hero-media" id="heroMedia">
    <video class="hero-video" autoplay muted loop playsinline preload="auto"
           aria-hidden="true" poster="${asset(d, 'hero-poster.jpg')}">
      <source src="${asset(d, 'hero-loop.mp4')}" type="video/mp4">
    </video>
  </div>
  <div class="hero__scrim"></div>
  <div class="wrap hero__in">
    <img class="hero__logo" src="${asset(d, 'logo-hero.webp')}" alt="${esc(biz.name)}" width="820" height="480" fetchpriority="high">
    <h1 class="hero__tag">Roofs built to take <em>whatever the weather throws at them</em></h1>
    <p class="hero__sub">Roofing and building work across Cheshire, North Wales, Merseyside and Greater Manchester. Speak to us directly and get a straight answer on your roof.</p>
    <div class="hero__cta">
      <a class="btn btn--gold" href="${tel}" data-track="call">${ic('phone')} Call ${biz.phone}</a>
      <a class="btn btn--ghost" href="${href(d, 'contact')}">Get a quote ${ic('arrow')}</a>
    </div>
    <div class="hero__strip">
      ${['Chester', 'Wrexham', 'Warrington', 'The Wirral', 'Manchester'].map(t => `<span><i class="dot"></i>${t}</span>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="trust">
  <div class="wrap trust__grid">
    <div class="trust__i">${ic('pin')}<div><b>10 areas covered</b><small>Chester to Stockport, and all surrounding areas</small></div></div>
    <div class="trust__i">${ic('phone')}<div><b>Call or WhatsApp</b><small>Straight through on ${biz.phone}</small></div></div>
    <div class="trust__i">${ic('camera')}<div><b>Real photos of real jobs</b><small>Every picture here is our own work</small></div></div>
    <div class="trust__i">${ic('shield')}<div><b>Fully insured</b><small>${biz.publicLiabilityText} public liability, work guaranteed</small></div></div>
  </div>
</section>

<section class="sec" id="services">
  <div class="wrap">
    <div class="sec-head sec-head--mid">
      <div class="eyebrow">What we do</div>
      <h2>Roofing and building services</h2>
      <p>From a single slipped slate to a full re-roof, and the brickwork and building work that goes with it.</p>
    </div>
    <div class="svc">
      ${services.map(s => `<article class="svc__c">
        <div class="svc__ico">${ic(s.icon)}</div>
        <h3><a href="${href(d, s.slug)}" style="color:inherit">${esc(s.h1)}</a></h3>
        <p>${esc(s.blurb)}</p>
      </article>`).join('\n      ')}
    </div>
    <div style="text-align:center;margin-top:22px">
      <a class="btn btn--dark" href="${href(d, 'services')}">See all services ${ic('arrow')}</a>
    </div>
  </div>
</section>

<section class="sec sec--tint" id="transformations">
  <div class="wrap">
    <div class="sec-head sec-head--mid">
      <div class="eyebrow">Before and after</div>
      <h2>Transformations</h2>
      <p>Short clips taken on site, start to finish. ${ph()} videos and project details to be supplied.</p>
    </div>
    <div class="tf">
      ${[1, 2, 3].map(n => `
      <article class="tf__row">
        <div class="tf__media">
          <img src="${asset(d, 'tf' + n + '.jpg')}" alt="Roofing work in progress" loading="lazy" width="960" height="540">
          <span class="tf__badge">${ic('play', 'ic ic--fill')}Before and after</span>
          <!-- VIDEO SLOT ${n}: replace the img and this veil with
               <video muted loop playsinline autoplay preload="metadata"
                      poster="${asset(d, 'tf' + n + '.jpg')}">
                 <source src="${asset(d, 'transform-' + n + '.mp4')}" type="video/mp4"></video> -->
          <div class="tf__veil">${ic('play')}<b>Video slot ${n}</b><small>BEFORE AND AFTER CLIP TO BE ADDED</small></div>
        </div>
        <div class="tf__body">
          <div class="tf__num">Project 0${n}</div>
          <h3>[PLACEHOLDER] Project title</h3>
          <p>[PLACEHOLDER] Two or three lines on what the job was, what was wrong with the roof and what was carried out. Send the details with the video and this gets written properly.</p>
          <div class="tf__meta">
            <span class="tf__pill">${ic('pin')}[Location]</span>
            <span class="tf__pill">${ic('clock')}[Duration]</span>
          </div>
        </div>
      </article>`).join('')}
    </div>
  </div>
</section>

<section class="sec" id="gallery">
  <div class="wrap">
    <div class="sec-head sec-head--mid">
      <div class="eyebrow">Recent work</div>
      <h2>Project gallery</h2>
      <p>Slate and tile re-roofs, ridge work and chimney repairs, all photographed on site.</p>
    </div>
    ${galleryBlock(d, gallery)}
    <div style="text-align:center;margin-top:18px">
      <a class="btn btn--dark" href="${href(d, 'our-work')}">See more of our work ${ic('arrow')}</a>
    </div>
  </div>
</section>

<section class="sec sec--tint">
  <div class="wrap">
    <div class="sec-head sec-head--mid">
      <div class="eyebrow">Why choose us</div>
      <h2>A roofer you can actually get hold of</h2>
    </div>
    <div class="why">
      <article class="why__c">${ic('camera')}<div><h3>You see the work, not stock photos</h3>
        <p>Every image on this site is a job we have carried out. Jobs are photographed as they go so you can see exactly what you are paying for.</p></div></article>
      <article class="why__c">${ic('pin')}<div><h3>Properly local across the North West</h3>
        <p>${locations.map(l => l.name).join(', ')} and everywhere around them.</p></div></article>
      <article class="why__c">${ic('users')}<div><h3>A team of ${biz.teamSize}, one number</h3>
        <p>Big enough to get a full re-roof done properly, small enough that you deal with us direct on ${biz.phone}. Send a photo of the problem and we will tell you what we think.</p></div></article>
      <article class="why__c">${ic('shield')}<div><h3>Fully insured and guaranteed</h3>
        <p>${biz.publicLiabilityText} of public liability cover, and every job is guaranteed by the company. If something is not right after we have left, we come back and put it right.</p></div></article>
    </div>
  </div>
</section>

<section class="sec" id="reviews">
  <div class="wrap">
    <div class="sec-head sec-head--mid">
      <div class="eyebrow">Customer reviews</div>
      <h2>What our customers say</h2>
      <p>${ph()} six sample cards shown. Send your real reviews and these get swapped one for one.</p>
    </div>
    ${reviewsCarousel()}
  </div>
</section>

<section class="sec sec--tint" id="about">
  <div class="wrap ab">
    <div class="ab__img"><img src="${asset(d, 'about.jpg')}" alt="Slate roof and lead work completed on a dormer" loading="lazy" width="700" height="1244"></div>
    <div class="ab__body">
      <div class="eyebrow">About us</div>
      <h2>Meet the team behind the roof</h2>
      <p>${esc(biz.name)} is run by ${esc(biz.owner)}, with a team of ${biz.teamSize} covering roofing and building work right across the North West. That is enough people to take on a full re-roof and keep it moving, while still being a company you can get hold of directly.</p>
      <p>Every job is fully insured, with ${biz.publicLiabilityText} of public liability cover, and guaranteed by the company. [PLACEHOLDER] A short paragraph from Isaac on how the business started and what matters to him on a job would sit well here.</p>
      <div class="ab__sign"><div class="rv__av">IM</div><div><b>${esc(biz.owner)}</b>
        <small>Owner, ${esc(biz.name)}</small></div></div>
      <div style="margin-top:18px"><a class="btn btn--dark" href="${href(d, 'about')}">More about us ${ic('arrow')}</a></div>
    </div>
  </div>
</section>

<section class="sec" id="areas">
  <div class="wrap">
    <div class="sec-head sec-head--mid">
      <div class="eyebrow">Where we work</div>
      <h2>Areas we cover</h2>
      <p>Based in the North West and working right across Cheshire, North Wales, Merseyside and Greater Manchester.</p>
    </div>
    <ul class="areas">
      ${locations.map(l => `<li><a href="${href(d, 'roofers-in-' + l.slug)}" style="display:flex;align-items:center;gap:9px;color:inherit">${ic('pin')}${esc(l.name)}</a></li>`).join('\n      ')}
    </ul>
    <p class="areas__note">Plus all surrounding areas. Not sure if you are in range? <a href="${tel}" style="color:var(--gold-dp);font-weight:600">Give us a call and ask.</a></p>
  </div>
</section>

<section class="sec sec--tint" id="contact">
  <div class="wrap">
    <div class="sec-head sec-head--mid">
      <div class="eyebrow">Get in touch</div>
      <h2>Get a quote for your roof</h2>
      <p>Fill this in and it opens straight in WhatsApp with your details ready to send.</p>
    </div>
    <div class="ct">
      <div class="ct__side">
        <a class="ct__row" href="${tel}" data-track="call">${ic('phone')}<div><small>Call us</small><b>${biz.phone}</b></div></a>
        <a class="ct__row" href="${waLink()}" target="_blank" rel="noopener" data-track="whatsapp">${ic('chat')}<div><small>WhatsApp</small><b>Message us</b></div></a>
        <div class="ct__row">${ic('mail')}<div><small>Email</small><b>[PLACEHOLDER] email address</b></div></div>
        <div class="ct__row">${ic('pin')}<div><small>Covering</small><b>${esc(biz.baseArea)}</b></div></div>
      </div>
      ${quoteForm(d)}
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="sec-head sec-head--mid">
      <div class="eyebrow">Common questions</div>
      <h2>Roofing questions we get asked</h2>
    </div>
    <div style="max-width:820px;margin-inline:auto">${faqBlock(generalFaqs.slice(0, 6))}</div>
    <div style="text-align:center;margin-top:20px">
      <a class="btn btn--dark" href="${href(d, 'faqs')}">All frequently asked questions ${ic('arrow')}</a>
    </div>
  </div>
</section>

<section class="fcta">
  <img class="fcta__bg" src="${asset(d, 'cta.jpg')}" alt="" aria-hidden="true" loading="lazy">
  <div class="wrap fcta__in">
    <h2>Got a roof that needs looking at?</h2>
    <p>Send us a photo on WhatsApp or give us a ring. We will tell you straight whether it needs a repair or a re-roof.</p>
    <div class="fcta__btns">
      <a class="btn btn--gold" href="${tel}" data-track="call">${ic('phone')} Call ${biz.phone}</a>
      <a class="btn btn--ghost" href="${waLink()}" target="_blank" rel="noopener" data-track="whatsapp">${ic('chat')} Message on WhatsApp</a>
    </div>
  </div>
</section>
${lightbox()}`;

  return { ...p, html: page(p, body) };
}

/* ============================================================
   SERVICES HUB
   ============================================================ */
function servicesHub() {
  const d = 1;
  const p = {
    depth: d, slug: 'services', nav: 'services',
    trail: [['services', 'Services']],
    title: 'Roofing and Building Services | Weather Proof Roofing',
    description: 'New roofs, roof repairs, chimney repairs, ridge and verge work, guttering and building work across Cheshire and the North West. Call 07718 155997.',
    faqs: [
      ['What roofing services do you offer?', 'Weather Proof Roofing and Building Services covers new roofs and re-roofing, roof repairs and leak tracing, chimney repairs and repointing, ridge and verge work, guttering, fascias and soffits, and general building work such as repointing and brickwork repairs.'],
      ['Do you take on small jobs?', 'Yes. A single slipped slate, a blocked gutter or a loose ridge tile are all worth sorting before they turn into something bigger, and they are all jobs we take on.'],
      ['Do you handle both the roof and the brickwork?', 'Yes. Roof and brickwork problems usually arrive together, and having one team do both means you are not coordinating two trades or paying for scaffolding twice.']
    ]
  };
  p.schema = graph(p);

  const body = phead(d, {
    h1: 'Roofing and building services',
    sub: 'Everything from a single slipped slate to a full strip and re-cover, plus the brickwork and building work that goes with it. Covering ' + esc(biz.baseArea) + '.',
    bg: 'g2.jpg'
  }) + `
<section class="sec"><div class="wrap">
  <div class="keyfact">
    <h2>In short</h2>
    <p>${esc(biz.name)} provides six main services across the North West: new roofs and re-roofing, roof repairs, chimney repairs, ridge and verge work, guttering and fascias, and general building work. All work is carried out by the same team, quotes are free, and you can reach us on ${biz.phone} by phone or WhatsApp.</p>
  </div>
  <div class="cards cards--3">
    ${services.map(s => `<a class="card" href="${href(d, s.slug)}">
      <div class="card__ico">${ic(s.icon)}</div>
      <h3>${esc(s.h1)}</h3>
      <p>${esc(s.blurb)}</p>
      <span class="card__go">Read more ${ic('arrow')}</span>
    </a>`).join('\n    ')}
  </div>
  ${band(d, 'Not sure which one you need?', 'Send a photo of the problem on WhatsApp and you will get a straight answer on what it actually needs.')}
  <div class="prose">
    <h2>Which service do I need?</h2>
    <p>Most people are not sure whether they are looking at a repair or a replacement, and that is fine. The table below is a rough guide, and if you are still not certain, a photo sent to ${biz.phone} will usually settle it.</p>
  </div>
  <div class="tblwrap"><table class="tbl">
    <thead><tr><th>What you are seeing</th><th>Most likely service</th></tr></thead>
    <tbody>
      <tr><td>One or two slipped slates after a storm</td><td><a href="${href(d, 'roof-repairs')}">Roof repairs</a></td></tr>
      <tr><td>Slates slipping repeatedly, in different places</td><td><a href="${href(d, 'new-roofs-and-re-roofing')}">New roofs and re-roofing</a></td></tr>
      <tr><td>Damp on the chimney breast upstairs</td><td><a href="${href(d, 'chimney-repairs')}">Chimney repairs</a></td></tr>
      <tr><td>Lumps of mortar in the gutter or on the path</td><td><a href="${href(d, 'ridge-and-verge-work')}">Ridge and verge work</a></td></tr>
      <tr><td>Water running down the wall in heavy rain</td><td><a href="${href(d, 'guttering-fascias-and-soffits')}">Guttering and fascias</a></td></tr>
      <tr><td>Crumbling pointing on a gable or parapet</td><td><a href="${href(d, 'building-work')}">Building work</a></td></tr>
    </tbody>
  </table></div>
  <div class="prose">
    <h2>Frequently asked questions</h2>
  </div>
  ${faqBlock(p.faqs)}
  <div class="related">
    <h2>Areas we cover</h2>
    <div class="chips">
      ${locations.map(l => `<a class="chip" href="${href(d, 'roofers-in-' + l.slug)}">${ic('pin')}${esc(l.name)}</a>`).join('\n      ')}
    </div>
  </div>
</div></section>`;

  return { ...p, html: page(p, body) };
}

/* ============================================================
   SERVICE PAGE
   ============================================================ */
function servicePage(s) {
  const d = 1;
  const p = {
    depth: d, slug: s.slug, nav: 'services',
    trail: [['services', 'Services'], [s.slug, s.h1]],
    title: `${s.title} | Weather Proof Roofing`,
    ogTitle: s.title,
    description: `${s.blurb} Covering Chester, Wrexham, Warrington and the North West. Call ${biz.phone}.`,
    faqs: s.faqs,
    serviceNode: serviceNode(s)
  };
  p.schema = graph(p);

  const others = services.filter(x => x.slug !== s.slug).slice(0, 3);

  const body = phead(d, { h1: s.h1, sub: esc(s.blurb), bg: 'g3.jpg' }) + `
<section class="sec"><div class="wrap layout">
  <div>
    <div class="keyfact">
      <h2>In short</h2>
      <p>${esc(s.answer)}</p>
    </div>
    <div class="prose">
      <p>${esc(s.intro)}</p>
      <h2>${esc(s.signsTitle)}</h2>
      ${ticks(s.signs.map(esc))}
      <h2>What the job involves</h2>
      <p>Every roof is different, but the shape of the work is usually the same. Here is how a typical ${s.h1.toLowerCase()} job runs.</p>
    </div>
    ${steps(s.process)}
    ${band(d, 'Want someone to take a look?', 'Call ' + biz.phone + ' or send a photo on WhatsApp and you will get a straight answer on what it needs.')}
    <div class="prose">
      <h2>${esc(s.h1)} near you</h2>
      <p>${esc(biz.name)} covers ${esc(biz.baseArea)}. Pick your area for local detail, or call ${biz.phone} if you are not sure whether you are in range.</p>
    </div>
    <div class="chips">
      ${locations.map(l => `<a class="chip" href="${href(d, 'roofers-in-' + l.slug)}">${ic('pin')}${esc(l.name)}</a>`).join('\n      ')}
    </div>
    <div class="prose">
      <h2>Frequently asked questions</h2>
    </div>
    ${faqBlock(s.faqs)}
    <div class="related">
      <h2>Other services</h2>
      <div class="cards">
        ${others.map(o => `<a class="card" href="${href(d, o.slug)}">
          <div class="card__ico">${ic(o.icon)}</div>
          <h3>${esc(o.h1)}</h3>
          <p>${esc(o.blurb)}</p>
          <span class="card__go">Read more ${ic('arrow')}</span>
        </a>`).join('\n        ')}
      </div>
    </div>
  </div>
  <aside class="aside">
    ${quotePanel(d)}
    ${servicePanel(d, s.slug)}
    ${areaPanel(d)}
  </aside>
</div></section>`;

  return { ...p, html: page(p, body) };
}

/* ============================================================
   AREAS HUB
   ============================================================ */
function areasHub() {
  const d = 1;
  const p = {
    depth: d, slug: 'areas-we-cover', nav: 'areas-we-cover',
    trail: [['areas-we-cover', 'Areas we cover']],
    title: 'Areas We Cover | Weather Proof Roofing',
    description: 'Roofers covering Chester, Wrexham, Queensferry, Flint, Warrington, Ellesmere Port, the Wirral, Manchester, Stockport and St Helens. Call 07718 155997.',
    faqs: [
      ['Which areas do you cover?', 'Chester, Wrexham, Queensferry, Flint, Warrington, Ellesmere Port, the Wirral, Manchester, Stockport and St Helens, plus the surrounding towns and villages across Cheshire, North Wales, Merseyside and Greater Manchester.'],
      ['Do you charge to travel to my area?', 'Travel within the areas listed on this page is not charged separately. If you are outside them it is still worth calling, because it depends on the job and where else we are working that week.'],
      ['I am not on your list, can you still help?', 'Very possibly. The towns listed are the main ones, not a boundary. Call ' + biz.phone + ' with your postcode and you will get a straight yes or no.']
    ]
  };
  p.schema = graph(p);

  const body = phead(d, {
    h1: 'Areas we cover',
    sub: 'Roofing and building work right across Cheshire, North Wales, Merseyside and Greater Manchester.',
    bg: 'g4.jpg'
  }) + `
<section class="sec"><div class="wrap">
  <div class="keyfact">
    <h2>In short</h2>
    <p>${esc(biz.name)} works across ${locations.map(l => l.name).join(', ')} and all surrounding areas, covering ${esc(biz.baseArea)}. If your town is not listed, call ${biz.phone} and ask, because the list is the main areas rather than a hard boundary.</p>
  </div>
  <div class="cards cards--3">
    ${locations.map(l => `<a class="card" href="${href(d, 'roofers-in-' + l.slug)}">
      <div class="card__ico">${ic('pin')}</div>
      <h3>Roofers in ${esc(l.name)}</h3>
      <p>${esc(l.county)}. Covering ${esc(l.nearby.slice(0, 3).join(', '))} and the surrounding area.</p>
      <span class="card__go">Read more ${ic('arrow')}</span>
    </a>`).join('\n    ')}
  </div>
  ${band(d, 'Not sure if you are in range?', 'Call ' + biz.phone + ' with your postcode and you will get a straight answer.')}
  <div class="prose">
    <h2>Frequently asked questions</h2>
  </div>
  ${faqBlock(p.faqs)}
</div></section>`;

  return { ...p, html: page(p, body) };
}

/* ============================================================
   LOCATION PAGE
   Location FAQs are varied per town so the set is not boilerplate
   repeated ten times, which would read as duplicate content.
   ============================================================ */
function locationPage(l, i) {
  const d = 1;
  const slug = 'roofers-in-' + l.slug;
  const rotating = [
    ['How quickly can you get to ' + l.name + '?', 'It depends how busy the week is, but ' + l.name + ' is inside our normal working area so it is not a special trip. Active leaks are prioritised, because water sitting in a ceiling causes far more damage than the fault that let it in. Call ' + biz.phone + ' and you will be told honestly when someone can get there.'],
    ['Do you charge extra to come out to ' + l.name + '?', 'No. ' + l.name + ' is within the areas we cover, so there is no separate travel charge on top of the quote.'],
    ['Can you quote for a roof in ' + l.name + ' from photos?', 'Often yes, at least well enough to say whether it is a small repair or something bigger. Send a photo of the problem and one of the whole elevation to ' + biz.phone + ' on WhatsApp. Anything substantial still needs looking at in person before a firm price.'],
    ['Do you work on period property in ' + l.name + '?', 'Yes. Older roofs need matching materials and a bit more care than a modern tiled roof, particularly where natural slate and lead work are involved. If the property is listed or in a conservation area it is worth checking what consents are needed before work starts.']
  ];
  const faqs = [
    ['Do you cover ' + l.name + '?', 'Yes. ' + esc(biz.name) + ' covers ' + l.name + ' and the surrounding area, including ' + l.nearby.slice(0, 4).join(', ') + '. Call or WhatsApp ' + biz.phone + ' and we will tell you when we can get to you.'],
    rotating[i % rotating.length],
    rotating[(i + 1) % rotating.length],
    ['What roofing work do you do in ' + l.name + '?', 'All of it: new roofs and re-roofing, roof repairs and leak tracing, chimney repairs and repointing, ridge and verge work, guttering, fascias and soffits, and general building work such as repointing and brickwork repairs.']
  ];

  const p = {
    depth: d, slug, nav: 'areas-we-cover',
    trail: [['areas-we-cover', 'Areas we cover'], [slug, l.name]],
    title: `Roofers in ${l.name} | Weather Proof Roofing`,
    ogTitle: `Roofers in ${l.name}`,
    description: `Roofing and building services in ${l.name}, ${l.county}. New roofs, roof repairs, chimney work and guttering. Call ${biz.phone}.`,
    faqs,
    serviceNode: {
      '@type': 'Service',
      '@id': abs(slug) + '#service',
      name: 'Roofing services in ' + l.name,
      serviceType: 'Roofing contractor',
      url: abs(slug),
      provider: { '@id': L.BIZ_ID },
      areaServed: [{ '@type': 'City', name: l.name, containedInPlace: { '@type': 'AdministrativeArea', name: l.county } }]
        .concat(l.nearby.map(n => ({ '@type': 'Place', name: n })))
    }
  };
  p.schema = graph(p);

  const body = phead(d, {
    h1: 'Roofers in ' + l.name,
    sub: `Roofing and building work across ${esc(l.name)} and ${esc(l.county)}, covering ${esc(l.nearby.slice(0, 4).join(', '))} and the surrounding area.`,
    bg: 'g' + ((i % 6) + 2) + '.jpg'
  }) + `
<section class="sec"><div class="wrap layout">
  <div>
    <div class="keyfact">
      <h2>In short</h2>
      <p>${esc(biz.name)} is a roofing and building contractor working across ${esc(l.name)} and the wider ${esc(l.county)} area, including ${esc(l.nearby.join(', '))}. Work covers new roofs and re-roofing, roof repairs, chimney repairs, ridge and verge work, guttering and fascias, and general building work. Call or WhatsApp ${biz.phone} for a free quote.</p>
    </div>
    <div class="prose">
      <h2>Roofing in ${esc(l.name)}</h2>
      <p>${esc(l.context)}</p>
      <p>Whatever is on your roof, the job starts the same way: someone actually looks at it and tells you what is wrong. If a repair will see you right for a few more years, that is what you will be told.</p>

      <h2>What we do in ${esc(l.name)}</h2>
      <p>All six services are available across ${esc(l.name)} and the surrounding area.</p>
    </div>
    <div class="cards">
      ${services.map(s => `<a class="card" href="${href(d, s.slug)}">
        <div class="card__ico">${ic(s.icon)}</div>
        <h3>${esc(s.h1)}</h3>
        <p>${esc(s.blurb)}</p>
        <span class="card__go">Read more ${ic('arrow')}</span>
      </a>`).join('\n      ')}
    </div>
    ${band(d, 'Need a roofer in ' + l.name + '?', 'Call ' + biz.phone + ' or send a photo of the problem on WhatsApp for a free, no obligation quote.')}
    <div class="prose">
      <h2>Areas we cover around ${esc(l.name)}</h2>
      <p>As well as ${esc(l.name)} itself, we work throughout the surrounding towns and villages.</p>
    </div>
    <div class="chips">
      ${l.nearby.map(n => `<span class="chip">${ic('pin')}${esc(n)}</span>`).join('\n      ')}
    </div>
    <div class="prose">
      <h2>Frequently asked questions</h2>
    </div>
    ${faqBlock(faqs)}
    <div class="related">
      <h2>Other areas we cover</h2>
      <div class="chips">
        ${locations.filter(x => x.slug !== l.slug).map(x =>
          `<a class="chip" href="${href(d, 'roofers-in-' + x.slug)}">${ic('pin')}${esc(x.name)}</a>`).join('\n        ')}
      </div>
    </div>
  </div>
  <aside class="aside">
    ${quotePanel(d)}
    ${servicePanel(d)}
    ${areaPanel(d, l.slug)}
  </aside>
</div></section>`;

  return { ...p, html: page(p, body) };
}

module.exports = { home, servicesHub, servicePage, areasHub, locationPage, quoteForm, galleryBlock, lightbox, reviewsCarousel, page };
