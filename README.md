# Weather Proof Roofing and Building Services

Single-page site for Weather Proof Roofing and Building Services, covering Chester,
Wrexham, Queensferry, Flint, Warrington, Ellesmere Port, the Wirral, Manchester,
Stockport, St Helens and all surrounding areas.

`index.html` at the root is the whole site: every image, the hero video and the
favicon are base64 embedded, so there are no external asset requests. Only Google
Fonts (Barlow and Inter) loads from outside.

## Rebuilding

Source lives in `site/`.

```
cd site
node build.js
```

That inlines everything referenced in `site/template.html` from `site/assets` and
writes `../index.html`. To add or swap an asset:

1. drop the file into `site/assets` (jpg for stills, mp4 for video)
2. reference it in `site/template.html` as `__B64:filename.ext__`
3. re-run `node build.js`

Tokens inside HTML comments are left alone, so the documented swap points can
quote real tokens without their assets being inlined into a comment. A missing
asset referenced from live markup fails the build; one referenced only from a
comment is reported as pending.

## Hero video

The hero plays `site/assets/hero-loop.mp4`: the three client clips
(`hero-video-01/02/03`) rendered into one seamless 17.5 second loop, with a 0.8
second crossfade between each clip and a closing 0.8 second dissolve back into
clip one's opening frame, so the loop point is a dissolve rather than a cut. The
poster is that same frame, so playback starts without a jump.

Re-cut it with `site/make-hero-video.sh`, then re-run `node build.js`. The raw
client clips are gitignored (46 MB) and held outside the repo; the script needs
them present in `site/assets` to run.

Reverting to the photo slider is a documented block swap in the hero markup, and
`hero1/2/3.jpg` are kept in `site/assets` for it. The slider JavaScript re-arms
itself whenever it finds `.hero-slide` elements.

## Pending

- Three before and after transformation videos (`transform-1.mp4` and friends)
- Email address, Facebook and Instagram URLs
- Owner name and About copy
- Real customer reviews
- Insurance, guarantee and accreditation details

Placeholders are marked in the page with `[PLACEHOLDER]` and a yellow `.ph` chip.
No insurance, guarantee, accreditation or review is claimed anywhere until
confirmed by the client.

Built by Innov8 Workflows.
