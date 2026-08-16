#!/usr/bin/env bash
# Rebuild the transparent logo assets from the client's logo-dark.png.
#
# The supplied logo is artwork rendered on a solid black plate, with no alpha.
# logo-light.png is NOT the same artwork on white (the wordmark is a different
# colourway in each), so a difference matte cannot be used to recover alpha.
#
# Instead we treat the black plate as a premultiplied composite, which is what
# it effectively is: pixel = colour * coverage, over black. So
#
#   alpha  = max(R, G, B)          the brightest channel is the coverage
#   colour = pixel / alpha         unpremultiply to recover true colour
#
# Two adjustments on top of the plain version of that:
#
#   * alpha gain of 1.7, clipped at 255. Straight max(R,G,B) leaves the storm
#     cloud and the dark roof panels very faint, because they are genuinely
#     dark artwork. The gain keeps them reading as solid over busy footage.
#   * alpha floor: anything under 16 is snapped to 0. The rain streaks leave a
#     haze of near-zero alpha across a large area, which is invisible but very
#     expensive to encode. Clearing it took the hero asset from 303 KB to 111 KB.
#
# This replaced a CSS mix-blend-mode:screen approach, which produced the same
# look on desktop but failed inside in-app webviews (Facebook Messenger), where
# the video's compositing layer stops the blend resolving and the logo falls
# back to a hard black rectangle.
set -euo pipefail
cd "$(dirname "$0")"

SRC=../logo-dark.png
A=assets
CROP="crop=1420:830:60:70"                       # trim the plate's dead margin
ALPHA="min(255,1.7*max(max(r(X,Y),g(X,Y)),b(X,Y)))"
MATTE="format=rgba,geq=r='r(X,Y)':g='g(X,Y)':b='b(X,Y)':a='if(lt($ALPHA,16),0,$ALPHA)',unpremultiply=inplace=1"

# hero lockup
ffmpeg -y -v error -i "$SRC" -vf "$CROP,$MATTE,scale=820:-2:flags=lanczos" \
  -c:v libwebp -q:v 82 -preset drawing -compression_level 6 "$A/logo-hero.webp"

# navbar and footer lockup
ffmpeg -y -v error -i "$SRC" -vf "$CROP,$MATTE,scale=440:-2:flags=lanczos" \
  -c:v libwebp -q:v 82 -preset drawing -compression_level 6 "$A/logo-mark.webp"

ls -l "$A/logo-hero.webp" "$A/logo-mark.webp"
echo
echo "Now run: node build.js"
