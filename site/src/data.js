/* ============================================================
   Weather Proof Roofing and Building Services - site data
   Single source of truth for the generator.

   ANYTHING THE CLIENT HAS NOT CONFIRMED LIVES IN `pending` BELOW
   AND RENDERS AS A VISIBLE PLACEHOLDER. Never move a value out of
   `pending` until the client has actually confirmed it: insurance,
   guarantees, accreditations, reviews, prices and years trading are
   all business claims and must not be invented.
   ============================================================ */

/* Change SITE_URL the moment a custom domain goes live, then rebuild.
   Canonicals, OG tags, sitemap and schema all derive from it. */
const SITE_URL = 'https://weatherproofroofingbuildingservices.co.uk';

const biz = {
  name: 'Weather Proof Roofing and Building Services',
  shortName: 'Weather Proof Roofing',
  phone: '07718 155997',
  phoneRaw: '07718155997',
  phoneIntl: '+447718155997',
  whatsapp: '447718155997',
  email: null,          // pending: client still creating the address
  facebook: null,       // pending
  instagram: null,      // pending
  founded: null,        // pending
  openingHours: null,   // pending
  baseArea: 'Cheshire, North Wales, Merseyside and Greater Manchester',

  /* Confirmed by the client 2026-08-16. Everything in this block is a
     business claim and appears publicly, so it may only be changed on the
     client's say-so. */
  owner: 'Isaac Mcdonagh',
  teamSize: 17,
  insured: true,
  publicLiability: 200000,
  publicLiabilityText: '£200,000',
  guaranteed: true,        // work guaranteed by the company
  guaranteeLength: null    // pending: how long the guarantee runs for
};

/* Everything here renders with a visible [PLACEHOLDER] chip so it cannot be
   mistaken for confirmed fact, and is listed in the build report. */
const pending = {
  phone: 'CLIENT PHONE NUMBER. The site currently shows 07718 155997, which is ' +
         "Jay's own number standing in until the client's line is live. It is NOT " +
         'flagged on the page, so it looks like a real business number to visitors. ' +
         'Swap it before any advertising spend or Google Business Profile listing.',
  email: 'email address (client still creating it)',
  facebook: 'Facebook page URL',
  instagram: 'Instagram profile URL',
  ownerBio: 'a short bio for Isaac Mcdonagh (name and team size now confirmed)',
  nameSpelling: 'confirm whether the owner spells it Mcdonagh or McDonagh',
  publicLiability: 'CONFIRM £200,000 is right. Most roofing firms carry £1m to £5m, ' +
                   'and £200k reads low next to competitors. Possible typo for £2,000,000.',
  guaranteeLength: 'how long the workmanship guarantee runs for',
  accreditations: 'trade body memberships, if any',
  reviews: 'real customer reviews, plus the Google review link',
  prices: 'typical price ranges per service',
  hours: 'working hours',
  founded: 'year the business started',
  projects: 'titles, locations and descriptions for the transformation videos'
};

/* ---------- SERVICES ----------
   answer  : the answer-first opening paragraph (AEO/GEO). Must be
             self-contained, because it has to still make sense when an
             answer engine lifts it out of the page on its own.
   signs   : symptom list, phrased the way a homeowner actually searches
   process : what the job involves, step by step
   faqs    : question-shaped, feeds FAQPage schema

   All technical content is general roofing practice, NOT a claim about
   this business. Nothing here asserts price, guarantee or insurance. */
const services = [
  {
    slug: 'new-roofs-and-re-roofing',
    nav: 'New roofs and re-roofing',
    h1: 'New roofs and re-roofing',
    title: 'New Roofs and Re-Roofing',
    icon: 'home',
    blurb: 'Full strip and re-cover in slate or tile, with new felt and battens.',
    answer: 'A re-roof means stripping the old covering back to the rafters and rebuilding the roof from the timbers up: new breathable membrane, new treated battens, new or reclaimed slates and tiles, and fresh lead work to the valleys and abutments. It is the right call once a roof is failing in several places at once rather than in one spot, and on a typical semi-detached house the work usually runs to a few days on site once the scaffold is up.',
    intro: 'Most roofs give plenty of warning before they need replacing. Slipped slates start appearing after every gale, the felt underneath breaks down and drops grit into the loft, and patch repairs stop holding for as long as they used to. At that point another repair is money spent twice.',
    signsTitle: 'Signs your roof needs replacing rather than repairing',
    signs: [
      'Slates or tiles slipping repeatedly, in a different place each time',
      'Daylight visible through the roof boards when you are up in the loft',
      'Torn or crumbling felt, and grit collecting on the loft floor',
      'Sagging along the ridge line or between the rafters',
      'Damp patches on upstairs ceilings that come back after each repair',
      'Widespread cracked, flaking or delaminating tiles'
    ],
    process: [
      ['Roof inspection and quote', 'We look at the roof properly, inside the loft as well as outside, and tell you whether it genuinely needs replacing or whether a repair will see you right for a few more years.'],
      ['Scaffold and protection', 'Scaffolding goes up so the work can be done safely, and the ground and garden are protected before anything comes off the roof.'],
      ['Strip and inspect the timbers', 'The old covering comes off and the rafters and wall plates get checked. Any rotten timber is replaced before the new roof goes on, not covered over.'],
      ['Membrane and battens', 'New breathable membrane and treated battens go on, gauged to the slate or tile so the courses sit right.'],
      ['Covering, leadwork and ridge', 'Slates or tiles are laid with the correct fixings, lead is dressed into the valleys and abutments, and the ridge and hips are bedded or dry fixed.'],
      ['Clear up and hand over', 'Everything is cleared off site and the roof is walked over and checked before the scaffold comes down.']
    ],
    faqs: [
      ['How long does a new roof take?', 'On a standard semi-detached house a full re-roof is usually a few days on site once scaffolding is up, and longer on larger or more complicated roofs. Weather is the main thing that moves the date, because a stripped roof cannot be left open in heavy rain.'],
      ['Do I need scaffolding for a re-roof?', 'Yes. A full strip and re-cover cannot be done safely off ladders, and scaffolding is needed both for the people working and to stop material falling. The cost of it should be in your quote rather than added on later.'],
      ['Slate or tile, which should I choose?', 'It usually comes down to what is already on the house and what the rest of the street has, because a roof that matches looks right and keeps the property saleable. Natural slate lasts longest and suits period property; concrete and clay tiles cost less and suit most modern housing.'],
      ['Can you re-roof in winter?', 'Yes, roofs are replaced all year round. Work is planned around the forecast and the roof is never left open overnight, so a wet spell can push the finish date back a little.'],
      ['Do I need planning permission to replace a roof?', 'Replacing a roof with a similar covering is normally treated as maintenance and does not need planning permission. It is different if the property is listed or in a conservation area, or if you are changing the roof shape or the material significantly, so check with the council first.']
    ]
  },
  {
    slug: 'roof-repairs',
    nav: 'Roof repairs',
    h1: 'Roof repairs',
    title: 'Roof Repairs and Leak Fixing',
    icon: 'wrench',
    blurb: 'Slipped tiles, leaks, valleys and flashings put right before they get worse.',
    answer: 'Most roof leaks come from a small number of predictable places: slipped or cracked slates, failed lead flashing where the roof meets a wall or chimney, blocked or split valleys, and worn mortar on the ridge. A roof repair means finding which of those is actually letting water in and putting it right, rather than sealing over the wet patch and hoping. Most single repairs are a same-day job.',
    intro: 'A leak rarely shows up directly below the hole. Water runs down the inside of the roof and along the timbers before it drips, so the stain on your ceiling can be a fair distance from the actual fault. That is why finding the cause matters more than patching the symptom.',
    signsTitle: 'Common causes of a leaking roof',
    signs: [
      'Slipped, cracked or missing slates and tiles',
      'Failed lead flashing where the roof meets a chimney or wall',
      'Blocked, split or badly formed valleys between two roof slopes',
      'Cracked mortar on the ridge or at the verge',
      'Overflowing gutters pushing water back under the bottom course',
      'Perished felt at the eaves letting water past the gutter line'
    ],
    process: [
      ['Find the actual source', 'We trace the leak back from where it shows inside to where the water is really getting in, checking the loft as well as the roof itself.'],
      ['Tell you what we find', 'You get a straight answer on whether it is a repair or whether the roof is coming to the end of its life, with photos of what we have found.'],
      ['Carry out the repair', 'Slates refixed, flashings redressed or replaced, valleys cleared or reformed, mortar cut out and made good as needed.'],
      ['Check it holds', 'The surrounding area is checked at the same time so you are not calling us back out for the next fault along.']
    ],
    faqs: [
      ['How quickly can you look at a leak?', 'Call or send a photo on WhatsApp to 07718 155997 and we will tell you how soon we can get to you. Active leaks in wet weather are treated as urgent, because water sitting in a ceiling causes far more damage than the original fault.'],
      ['Can you repair a roof in the rain?', 'A temporary cover can usually go on straight away to stop water getting in, but permanent work such as bedding mortar or dressing lead needs dry conditions to be done properly.'],
      ['Is it worth repairing an old roof?', 'If the covering is sound and the problem is in one area, a repair is usually much better value. Once slates are slipping in several different places and the felt underneath has broken down, repeated repairs cost more over a few years than replacing the roof once.'],
      ['Do you find the leak before quoting?', 'Yes. Quoting for a roof leak without establishing where the water is actually getting in is guesswork, and it is how people end up paying for work that does not fix the problem.'],
      ['Why does my roof only leak in heavy or driven rain?', 'That usually points to a fault that only lets water past at a certain angle or volume, such as a gap under a flashing, a hairline crack in a tile, or a valley that overtops when it fills. It is a real fault and it will get worse, even though the roof seems fine most of the time.']
    ]
  },
  {
    slug: 'chimney-repairs',
    nav: 'Chimney repairs',
    h1: 'Chimney repairs and repointing',
    title: 'Chimney Repairs and Repointing',
    icon: 'brick',
    blurb: 'Repointing, re-flaunching, new pots and cowls, or a full rebuild.',
    answer: 'Chimneys fail before the rest of the roof because they are exposed on every side and take the worst of the weather. The usual work is repointing brickwork where the mortar has washed out, renewing the flaunching (the mortar bed the pots sit in), replacing cracked pots, fitting cowls to keep rain and birds out, and redressing the lead flashing where the stack passes through the roof. Badly decayed stacks are taken down and rebuilt.',
    intro: 'A chimney is the most weather-beaten part of any house. It stands proud of the roof with no shelter, so driven rain hits it from every side and frost gets into any mortar that has started to go. Left long enough, water tracks down inside the stack and shows up as damp on the chimney breast in the bedroom.',
    signsTitle: 'Signs your chimney needs attention',
    signs: [
      'Mortar joints washed out or crumbling between the bricks',
      'Cracked or missing flaunching around the base of the pots',
      'Damp patches on the chimney breast inside the house',
      'Lead flashing lifting, split or pulling away from the brickwork',
      'Cracked, loose or leaning pots',
      'Vegetation growing out of the stack, or nests in the pots'
    ],
    process: [
      ['Inspect the stack', 'Brickwork, flaunching, pots and flashing all get checked, since it is often more than one of them that has gone.'],
      ['Rake out and repoint', 'Old mortar is cut out properly and the joints repointed with a suitable mix, rather than smeared over the top of what is already failing.'],
      ['Renew the flaunching', 'The mortar bed the pots sit in is cut off and rebuilt so it sheds water away from the pots instead of holding it.'],
      ['Pots, cowls and flashing', 'Cracked pots replaced, cowls fitted where they are wanted, and the lead flashing and soakers redressed or renewed.'],
      ['Rebuild where needed', 'Where a stack is too far gone to repoint, it is taken down to a sound course and rebuilt, reusing the original brick where it is suitable.']
    ],
    faqs: [
      ['Do I need to repair a chimney I no longer use?', 'Yes. A disused stack still has to keep water out of the house, and it is still masonry sitting high above a garden or footpath. Capping it and keeping the pointing sound is far cheaper than dealing with damp or a collapse.'],
      ['What is chimney flaunching?', 'Flaunching is the sloped bed of mortar on top of the stack that holds the pots in place and sheds rainwater off the top. When it cracks, water runs straight down into the brickwork, which is why it is one of the first things to check on a damp chimney.'],
      ['Should I remove the chimney instead of repairing it?', 'Taking a stack down below roof level and covering over is sometimes sensible on a chimney that is no longer used and badly decayed. It changes how the house looks and can affect ventilation to old flues, so it is worth talking through both options first.'],
      ['Why is damp showing on my chimney breast?', 'Almost always water getting into the stack from above, through washed-out pointing, cracked flaunching or failed flashing, then tracking down inside the brickwork. Treating the wall inside does nothing while water is still getting in at the top.'],
      ['Do you need scaffolding for chimney work?', 'Usually yes. Anything beyond a quick look needs a safe platform at the stack, and repointing or rebuilding certainly does. Occasionally a chimney can be reached from a tower or a roof ladder on a shallow pitch.']
    ]
  },
  {
    slug: 'ridge-and-verge-work',
    nav: 'Ridge and verge work',
    h1: 'Ridge and verge work',
    title: 'Ridge Tiles and Verge Repairs',
    icon: 'triangle',
    blurb: 'Ridge tiles re-bedded or dry fixed, and verges made secure against the wind.',
    answer: 'The ridge is the line of tiles capping the top of a roof, and the verge is the edge where the roof meets the gable wall. Both were traditionally held with mortar, and mortar cracks and lets go over time. The fix is either re-bedding them in fresh mortar or converting to a dry ridge system, which fixes each tile mechanically with clips and screws and needs no mortar at all.',
    intro: 'Ridge and verge mortar is the part of a roof that fails quietly. Nothing leaks at first, the mortar just cracks and starts dropping out in pieces. Then one windy night a ridge tile lifts, and because it sits at the very top of the roof it does a lot of damage on the way down.',
    signsTitle: 'Signs your ridge or verge needs work',
    signs: [
      'Lumps of mortar appearing in the gutter or on the ground',
      'Visible gaps or cracks along the ridge line from the ground',
      'A ridge tile sitting crooked or noticeably out of line',
      'Mortar missing along the gable edge of the roof',
      'Tiles at the verge lifting or rattling in high wind',
      'Birds getting in under the ridge or at the edge of the roof'
    ],
    process: [
      ['Check the full run', 'The whole ridge and both verges get looked at, because where one section has failed the rest is usually the same age and going the same way.'],
      ['Lift and clean off', 'Ridge tiles are lifted and the old mortar cleaned off so they can be reused where they are sound.'],
      ['Re-bed or dry fix', 'Tiles are either bedded back in fresh mortar or refitted with a dry ridge system, depending on what suits the roof and what you would rather have.'],
      ['Make the verge secure', 'Verges are repointed or fitted with dry verge units so the edge of the roof cannot be lifted by the wind.']
    ],
    faqs: [
      ['What is a dry ridge system?', 'A dry ridge system fixes each ridge tile down mechanically with clips, screws and a ventilated roll, instead of bedding it in mortar. It cannot crack and wash out the way mortar does, it lets the roof breathe, and it is what most new roofs are built with now.'],
      ['Is dry ridge better than mortar?', 'For durability, yes, which is why it is standard on new build. Mortar still has its place on period property and in conservation areas where the look matters, and a well-bedded ridge in good mortar will last a long time.'],
      ['How often does ridge mortar need replacing?', 'Bedded ridge mortar typically needs attention somewhere between ten and twenty years, depending on how exposed the roof is and how well it was mixed and pointed in the first place. Coastal and hilltop properties get through it faster.'],
      ['Can you just re-bed the loose ridge tiles?', 'It can be done, but on a run where the mortar is all the same age you tend to be back doing the next section before long. Doing the full run at once usually works out better value once access is paid for.'],
      ['What is a dry verge?', 'Dry verge units are interlocking caps that fit over the tile ends along the gable edge and screw down, replacing the mortar that used to seal that edge. They stop wind getting under the tiles and keep birds and rodents out.']
    ]
  },
  {
    slug: 'guttering-fascias-and-soffits',
    nav: 'Guttering and fascias',
    h1: 'Guttering, fascias and soffits',
    title: 'Guttering, Fascias and Soffits',
    icon: 'rain',
    blurb: 'Gutters, downpipes, fascias and soffits replaced or cleared out.',
    answer: 'Guttering, fascias and soffits are what stop roof water running down the face of your house. The fascia is the board the gutter is fixed to, the soffit is the panel underneath closing off the eaves, and both rot or sag once water starts getting behind them. Work ranges from clearing and realigning existing gutters to replacing a whole run in UPVC.',
    intro: 'Blocked and leaking gutters cause more damage to a house than most people expect. Water that should be leaving through the downpipe runs down the brickwork instead, and over a wet winter that soaks the wall, rots the fascia behind the gutter, and shows up as damp on the inside.',
    signsTitle: 'Signs your guttering needs attention',
    signs: [
      'Water spilling over the front edge of the gutter in heavy rain',
      'Staining or green growth running down the wall below the gutter',
      'Gutters sagging out of line or pulling away from the fascia',
      'Plants and grass growing out of the gutter',
      'Fascia boards soft, flaking or visibly rotten',
      'Birds nesting where the soffit has failed'
    ],
    process: [
      ['Clear and check the falls', 'Gutters are cleared and checked for the right fall to the downpipe, because a gutter that holds water is usually a gutter that is out of level.'],
      ['Repair or replace', 'Joints, brackets and short sections can often be repaired. Where a run is brittle or sagging along its length, replacing it costs less than repeated call-outs.'],
      ['Fascias and soffits', 'Rotten boards are removed and replaced, and the eaves closed up properly so birds and water cannot get behind them.'],
      ['Check the roof edge', 'The bottom course of tiles and the felt at the eaves get checked at the same time, since that is where gutter problems start doing real damage.']
    ],
    faqs: [
      ['How often should gutters be cleared?', 'Once a year is enough for most houses, and twice a year is worth it if you have trees overhanging the roof. The clear-out is best done in late autumn once the leaves are down.'],
      ['Can you replace guttering without scaffolding?', 'Often yes. On a standard two-storey house guttering can usually be replaced from a tower or ladders where access allows. Higher or awkward elevations need a proper platform.'],
      ['Should I replace fascias at the same time as the gutter?', 'If the boards behind the gutter are rotten, yes. Fixing a new gutter to a soft fascia means the brackets have nothing solid to hold, and you end up paying twice when the run starts sagging again.'],
      ['What causes gutters to overflow even when they are clear?', 'Usually the fall is wrong, so water sits in the run instead of moving to the downpipe, or the gutter is too small for the roof area feeding it. Both show up in heavy rain and neither is fixed by clearing.'],
      ['Do you clear gutters as a standalone job?', 'Yes. It is worth doing on its own, and it costs a lot less than dealing with a damp wall after a winter of overflowing gutters.']
    ]
  },
  {
    slug: 'building-work',
    nav: 'Building work',
    h1: 'Building work and brickwork',
    title: 'Building Work and Brickwork',
    icon: 'hammer',
    blurb: 'Brickwork, pointing and general building work by the same team.',
    answer: 'Roof problems and brickwork problems usually arrive together, because the driven rain that gets past a slipped tile also gets into washed-out pointing and failed render. Weather Proof Roofing and Building Services covers the building work alongside the roof: repointing, brickwork repairs, rebuilding gable ends and parapets, and making good after roof work, so one team handles the whole job.',
    intro: 'Plenty of roofing jobs turn out to be part building job once you get up there. A gable end that needs repointing before the verge can be made good, a parapet that has to be rebuilt before the flashing goes back, brickwork around a chimney that needs attention while the scaffold is already up.',
    signsTitle: 'Building work that goes with a roof',
    signs: [
      'Mortar joints washed out or crumbling on gable ends and parapets',
      'Cracked or blown render on exposed elevations',
      'Damaged brickwork around chimney stacks',
      'Damp coming through a wall rather than the roof itself',
      'Making good after a re-roof or a chimney rebuild',
      'Parapet walls and copings letting water into the building'
    ],
    process: [
      ['Look at the whole picture', 'Where damp is involved we work out whether it is coming in through the roof, the brickwork, or both, so you are not paying to fix half a problem.'],
      ['Repointing and brickwork', 'Old mortar is raked out to a proper depth and repointed to match, rather than skimmed over the surface.'],
      ['Structural repairs', 'Gable ends, parapets and copings rebuilt where they are beyond repointing.'],
      ['Make good and finish', 'Everything left tidy, and surrounding brickwork matched as closely as the material allows.']
    ],
    faqs: [
      ['Do you take on building work without roofing?', 'Yes. Repointing, brickwork repairs and general building work can be booked on their own, they do not have to be part of a roofing job.'],
      ['Why is my wall damp when the roof is fine?', 'Driven rain gets through washed-out pointing and cracked render just as easily as it gets past a slipped tile, particularly on the side of the house facing the prevailing weather. It shows up as a damp patch that comes and goes with the wind direction.'],
      ['What is repointing?', 'Repointing means raking out the old failed mortar between the bricks to a decent depth and filling the joints with fresh mortar. Skimming a thin layer over failed pointing looks fine for a year and then falls off.'],
      ['Can brickwork be done at the same time as the roof?', 'It is the sensible way to do it. Scaffolding is often the single biggest line on a quote, so getting the brickwork done while the access is already there saves paying for it twice.'],
      ['Do you match existing brick and mortar?', 'We match as closely as the available material allows. Exact matches on old brick are not always possible, so colour and joint style are chosen to make repairs as unobtrusive as they can be.']
    ]
  }
];

/* ---------- LOCATIONS ----------
   `context` is genuine local geography and housing stock. It is NOT a claim
   about work carried out there, and must never become one. */
const locations = [
  {
    slug: 'chester', name: 'Chester', county: 'Cheshire',
    context: 'Chester gives a roofer an unusual mix to work on: Georgian and Victorian terraces around the city centre, a large stock of interwar and post-war semis out towards Hoole, Handbridge and Upton, and a conservation area covering much of the historic core. Period property in and around the walls often carries natural slate with lead valleys, where matching the existing covering matters as much as the workmanship.',
    nearby: ['Hoole', 'Handbridge', 'Upton', 'Saltney', 'Christleton', 'Vicars Cross']
  },
  {
    slug: 'wrexham', name: 'Wrexham', county: 'Wrexham County Borough',
    context: 'Wrexham roofs take more weather than most, sitting between the Cheshire Plain and the Welsh hills with plenty of exposed ground in between. Welsh slate is common on the older terraces around the town and the former mining villages, while newer estates around Borras and Gwersyllt are mostly concrete tile. Exposure is the recurring theme: ridge mortar and verges go first on anything sitting high or open.',
    nearby: ['Rhosddu', 'Gwersyllt', 'Borras', 'Rhostyllen', 'Coedpoeth', 'Marchwiel']
  },
  {
    slug: 'queensferry', name: 'Queensferry', county: 'Flintshire',
    context: 'Queensferry sits low on the Dee estuary, and estuary weather is hard on a roof. Wind comes off open water with nothing to slow it, which is why lifted ridge tiles and stripped verges are such a common call-out along this stretch. The housing is mostly twentieth century, much of it interlocking concrete tile now reaching the age where fixings and ridge bedding need attention.',
    nearby: ['Sandycroft', 'Garden City', 'Shotton', 'Connahs Quay', 'Mancot', 'Hawarden']
  },
  {
    slug: 'flint', name: 'Flint', county: 'Flintshire',
    context: 'Flint has the same estuary exposure as the rest of the Deeside coast, with salt-laden wind coming straight off the Dee. Salt air is unkind to fixings and to mortar, so nail sickness on older slate roofs and washed-out ridge bedding both turn up earlier here than they would inland. The town mixes older terraced stock with large post-war estates.',
    nearby: ['Bagillt', 'Oakenholt', 'Northop', 'Holywell', 'Greenfield', 'Pentre Halkyn']
  },
  {
    slug: 'warrington', name: 'Warrington', county: 'Cheshire',
    context: 'Warrington is dominated by its new town expansion, so a very large share of the housing went up between the 1960s and the 1980s. That matters for roofing, because concrete interlocking tiles from that era are now at the point where the mortar bedding has failed even though the tiles themselves have plenty of life left. Dry ridge conversions are one of the most common jobs across the town.',
    nearby: ['Great Sankey', 'Culcheth', 'Stockton Heath', 'Penketh', 'Birchwood', 'Grappenhall']
  },
  {
    slug: 'ellesmere-port', name: 'Ellesmere Port', county: 'Cheshire',
    context: 'Ellesmere Port grew quickly around the docks and the refinery, giving it a concentrated stock of mid-century housing on large estates. Roofs across much of the town are broadly the same age and construction, which means they tend to reach the same problems at the same time: tired felt at the eaves, ridge mortar breaking up, and guttering gone brittle.',
    nearby: ['Great Sutton', 'Little Sutton', 'Whitby', 'Hooton', 'Overpool', 'Childer Thornton']
  },
  {
    slug: 'the-wirral', name: 'The Wirral', county: 'Merseyside',
    context: 'The Wirral is a peninsula, so almost everywhere on it is exposed from at least two directions, and the coastal edges from West Kirby round to New Brighton take salt wind year round. Building stock swings from large Victorian villas in Oxton and Birkenhead Park, often slate with substantial chimney stacks, to twentieth century semis inland. Chimney and ridge work dominate on the older properties.',
    nearby: ['Birkenhead', 'Wallasey', 'Heswall', 'West Kirby', 'Bebington', 'Hoylake']
  },
  {
    slug: 'manchester', name: 'Manchester', county: 'Greater Manchester',
    context: 'Manchester has one of the densest concentrations of Victorian terraced housing in the country, and terraces bring their own roofing problems: shared valleys and party walls, chimney stacks sitting on the boundary, and rear access that has to be worked out before anything else happens. Blue slate is the traditional covering across most of the inner suburbs.',
    nearby: ['Didsbury', 'Chorlton', 'Withington', 'Prestwich', 'Levenshulme', 'Sale']
  },
  {
    slug: 'stockport', name: 'Stockport', county: 'Greater Manchester',
    context: 'Stockport runs from dense Victorian terraces near the town centre up to the edge of the Peak District, and the higher ground around Marple and Romiley is noticeably more exposed than the valley floor. Stone slate and heavy natural slate appear on older property towards the hills, where roofs carry more weight and the timbers underneath need checking whenever a covering comes off.',
    nearby: ['Marple', 'Romiley', 'Cheadle', 'Bramhall', 'Hazel Grove', 'Reddish']
  },
  {
    slug: 'st-helens', name: 'St Helens', county: 'Merseyside',
    context: 'St Helens has a large stock of terraced housing built for the glass and coal industries, plus substantial post-war estates around the edges. Much of the older property is on natural slate now well past the point where the original nails were expected to last, so nail sickness, where slates slip because the fixings have corroded rather than because the slate has failed, is a frequent finding.',
    nearby: ['Rainhill', 'Newton-le-Willows', 'Haydock', 'Eccleston', 'Billinge', 'Rainford']
  }
];

/* Gallery, reused across pages. Alt text is descriptive because it does real
   work for both accessibility and image search. */
const gallery = [
  ['g2.jpg', 'New slate roof covering laid across a full elevation in the North West'],
  ['g4.jpg', 'Completed slate roof finished with a dry ridge system'],
  ['g1.jpg', 'Slate roof with new lead work dressed around a dormer'],
  ['g3.jpg', 'Slate roof and ridge line viewed from the scaffold'],
  ['g7.jpg', 'Ridge tiles re-bedded along the top of a slate roof'],
  ['g6.jpg', 'Chimney stack re-flaunched with new cowls fitted to the pots'],
  ['g9.jpg', 'Chimney stack repointed and finished with fresh flaunching'],
  ['g10.jpg', 'Rebuilt chimney with new pots and bird protection fitted'],
  ['g5.jpg', 'Ridge repair being finished by hand on a tiled roof'],
  ['g8.jpg', 'Tiled roof with ridge tiles refitted along the full run']
];

/* General FAQs for the dedicated FAQ page. Kept free of price, guarantee
   and insurance claims until the client confirms them. */
const generalFaqs = [
  ['Which areas do you cover?', 'Weather Proof Roofing and Building Services covers Chester, Wrexham, Queensferry, Flint, Warrington, Ellesmere Port, the Wirral, Manchester, Stockport, St Helens and the surrounding areas, across Cheshire, North Wales, Merseyside and Greater Manchester. If you are not sure whether you are in range, call 07718 155997 and ask.'],
  ['How do I get a quote?', 'Call or WhatsApp 07718 155997, or use the quote form on the contact page, which opens WhatsApp with your details already written out. Sending a photo of the problem is the fastest way to get a useful answer, because a lot can be told from a clear picture of a roof.'],
  ['Are you insured?', 'Yes. Weather Proof Roofing and Building Services carries a full insurance pack, including £200,000 of public liability cover. Every job is also guaranteed by the company, so if something is not right after we have left, we come back and put it right.'],
  ['How big is your team?', 'There are 17 of us. That is enough to strip and re-cover a roof properly and keep the job moving, rather than it being fitted in around other work over several weeks, while still being a company you can reach on one number.'],
  ['Do you charge for a quote?', 'Quotes are free and there is no obligation to go ahead. You get told what needs doing and what it will cost before any work starts.'],
  ['Can you tell what is wrong from a photo?', 'Often yes, at least well enough to say whether it is a small repair or something bigger. A photo of the affected area plus one of the whole elevation is usually enough for an initial view, though anything serious still needs looking at properly.'],
  ['Do you do emergency call-outs?', 'Active leaks are treated as urgent, because water sitting in a ceiling does far more damage than the fault that let it in. Call 07718 155997 and you will be told honestly how soon someone can get to you.'],
  ['Will you tell me if I do not need the work?', 'Yes. If a roof has years left in it and only needs a repair, that is what you will be told. Selling someone a new roof they do not need is a short-term way to run a business.'],
  ['Do you work on commercial buildings as well as houses?', 'Most of the work is domestic roofing and building, and commercial and landlord work is taken on too. Call with the details and you will get a straight answer on whether it is a job for us.'],
  ['How do I know the work has been done properly?', 'Jobs get photographed as they go, so you can see the parts of the work you cannot get to yourself. Every photograph on this website is from a job carried out by Weather Proof Roofing and Building Services.']
];

module.exports = { SITE_URL, biz, pending, services, locations, gallery, generalFaqs };
