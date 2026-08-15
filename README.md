# Weather Proof Roofing and Building Services

Single-page site for Weather Proof Roofing and Building Services, covering Chester,
Wrexham, Queensferry, Flint, Warrington, Ellesmere Port, the Wirral, Manchester,
Stockport, St Helens and all surrounding areas.

`index.html` at the root is the whole site: every image and the favicon are
base64 embedded, so there are no external asset requests. Only Google Fonts
(Barlow and Inter) load from outside.

## Rebuilding

Source lives in `site/`.

```
cd site
node build.js
```

That inlines everything in `site/assets` into `site/template.html` and writes
`../index.html`. To add or swap an asset:

1. drop the file into `site/assets` (jpg for stills, mp4 for video)
2. reference it in `site/template.html` as `__B64:filename.ext__`
3. re-run `node build.js`

Tokens that sit inside HTML comments are documented swap points for assets that
have not been supplied yet; the build reports them and carries on.

## Pending

- Hero video (swap point marked in the hero markup, replaces the photo slider)
- Three before and after transformation videos (`transform-1.mp4` and friends)
- Email address, Facebook and Instagram URLs
- Owner name and About copy
- Real customer reviews
- Insurance, guarantee and accreditation details

Placeholders are marked in the page with `[PLACEHOLDER]` and a yellow `.ph` chip.
No insurance, guarantee, accreditation or review is claimed anywhere until
confirmed by the client.

Built by Innov8 Workflows.
