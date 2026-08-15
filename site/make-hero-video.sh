#!/usr/bin/env bash
# Rebuild assets/hero-loop.mp4 from the raw client clips.
#
# Takes hero-video-01/02/03.mp4 and renders one seamless looping clip:
#   - every clip normalised to a common 820x1025 canvas (cover crop, 24fps)
#   - 0.8s crossfade between each clip
#   - a final 0.8s dissolve back into clip one's opening frame, so the
#     loop point is a dissolve rather than a cut
#
# The xfade offsets below are derived from the source durations. If you
# swap a clip for one of a different length, recompute them:
#   offset(n) = (running output duration so far) - TRANS
#   running   = d1 + d2 + ... - (TRANS * number of transitions so far)
#
# Current sources: 5.0417s, 8.0417s, 6.0417s  ->  17.50s output
set -euo pipefail
cd "$(dirname "$0")"

A=assets
TRANS=0.8
CANVAS="scale=820:1025:force_original_aspect_ratio=increase,crop=820:1025,setsar=1,fps=24,format=yuv420p"

# clip one's first frame, normalised, is the loop-close target
ffmpeg -y -v error -i "$A/hero-video-01.mp4" -frames:v 1 \
  -vf "scale=820:1025:force_original_aspect_ratio=increase,crop=820:1025,setsar=1" \
  /tmp/wp-loopframe.png

ffmpeg -y -stats \
  -i "$A/hero-video-01.mp4" \
  -i "$A/hero-video-02.mp4" \
  -i "$A/hero-video-03.mp4" \
  -loop 1 -t $TRANS -i /tmp/wp-loopframe.png \
  -filter_complex "\
[0:v]$CANVAS[a];[1:v]$CANVAS[b];[2:v]$CANVAS[c];[3:v]$CANVAS[d];\
[a][b]xfade=transition=fade:duration=$TRANS:offset=4.2417[ab];\
[ab][c]xfade=transition=fade:duration=$TRANS:offset=11.4833[abc];\
[abc][d]xfade=transition=fade:duration=$TRANS:offset=16.7250,format=yuv420p[v]" \
  -map "[v]" -an \
  -c:v libx264 -preset veryslow -crf 30 -profile:v main -level 4.0 \
  -pix_fmt yuv420p -movflags +faststart -g 48 \
  "$A/hero-loop.mp4"

# poster = the same first frame, so there is no jump when playback starts
ffmpeg -y -v error -i /tmp/wp-loopframe.png -vf "scale=560:-2:flags=lanczos" -q:v 6 "$A/hero-poster.jpg"

echo
echo "Wrote $A/hero-loop.mp4 and $A/hero-poster.jpg"
echo "Now run: node build.js"
