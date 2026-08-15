/*  Weather Proof Roofing and Building Services
 *  Single-file build: inlines every asset in template.html as a base64 data URI.
 *
 *  Usage:  node build.js
 *  Output: ../index.html   (one self-contained file, no external assets)
 *
 *  To add a later batch:
 *    1. drop the new file into ./assets  (mp4 for videos, jpg for stills)
 *    2. reference it in template.html as  __B64:filename.ext__
 *    3. re-run  node build.js
 */
const fs = require('fs');
const path = require('path');

const ASSETS = path.join(__dirname, 'assets');
const TEMPLATE = path.join(__dirname, 'template.html');
const OUTPUT = path.join(__dirname, '..', 'index.html');

const MIME = {
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png',
  '.webp': 'image/webp', '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4', '.webm': 'video/webm', '.ico': 'image/x-icon'
};

let html = fs.readFileSync(TEMPLATE, 'utf8');
const missing = [];
let bytes = 0;

html = html.replace(/__B64:([A-Za-z0-9._-]+)__/g, (m, file) => {
  const p = path.join(ASSETS, file);
  // Missing file: leave the token in place. Tokens inside HTML comments are
  // the documented swap points for assets that have not been supplied yet.
  if (!fs.existsSync(p)) { missing.push(file); return m; }
  const buf = fs.readFileSync(p);
  bytes += buf.length;
  const mime = MIME[path.extname(file).toLowerCase()] || 'application/octet-stream';
  return `data:${mime};base64,${buf.toString('base64')}`;
});

if (missing.length) {
  const live = html.replace(/<!--[\s\S]*?-->/g, '');   // ignore commented-out slots
  const broken = [...new Set(missing)].filter(f => live.includes(`__B64:${f}__`));
  if (broken.length) {
    console.error('MISSING ASSETS (referenced in live markup):\n  ' + broken.join('\n  '));
    process.exit(1);
  }
  console.log('Pending assets (commented swap points, not yet supplied):');
  console.log('  ' + [...new Set(missing)].join('\n  '));
}

fs.writeFileSync(OUTPUT, html);
const kb = n => (n / 1024).toFixed(0) + ' KB';
console.log('Built ' + OUTPUT);
console.log('  embedded assets : ' + kb(bytes));
console.log('  final index.html: ' + kb(fs.statSync(OUTPUT).size));
