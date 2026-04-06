/**
 * Fix UTF-8 mojibake across src + index.html.
 * Run: node scripts/fix-mojibake.cjs
 */
const fs = require('fs');
const path = require('path');

function walk(dir, out = []) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    if (f.name === 'node_modules' || f.name === 'dist') continue;
    const p = path.join(dir, f.name);
    if (f.isDirectory()) walk(p, out);
    else if (/\.(jsx?|tsx?|json|css|html|cjs|md)$/.test(f.name)) out.push(p);
  }
  return out;
}

function fixFile(filePath, pairs) {
  let b = fs.readFileSync(filePath);
  let changed = false;
  for (const [fromHex, toHex] of pairs) {
    const from = Buffer.from(fromHex.replace(/\s/g, ''), 'hex');
    const to = Buffer.from(toHex.replace(/\s/g, ''), 'hex');
    let idx = 0;
    while ((idx = b.indexOf(from, idx)) !== -1) {
      changed = true;
      b = Buffer.concat([b.subarray(0, idx), to, b.subarray(idx + from.length)]);
      idx += to.length;
    }
  }
  if (changed) fs.writeFileSync(filePath, b);
  return changed;
}

/** Order: emoji / specific sequences before any shared prefix issues; typographic fixes last is fine */
const PAIRS = [
  ['c3a6cb9cc2a5c3a8c5a0e2809a', 'e698a5e88a82'], // 春节
  ['c3b0c5b8c2a6e280b9', 'f09f8cb8'], // 🌸
  ['c3b0c5b8c290c5bd', 'f09f908e'], // 🐎
  ['c3b0c5b8e28099c592', 'f09f928c'], // 💌
  ['c3b0c5b8e28098e282ac', 'f09f9180'], // 👀
  ['c3b0c5b8c592c5b8', 'f09f8c9f'], // 🌟
  ['c3b0c5b8e28098e280b9', 'f09f918b'], // 👋
  ['c3b0c5b8e284a2c28f', 'f09f998f'], // 🙏
  ['c3b0c5b8e2809cc5bd', 'f09f938e'], // 📎
  ['c3b0c5b8cb9cc5a0', 'f09f988a'], // 😊
  ['c3b0c5b8c5bdc2a4', 'f09f8ea4'], // 🎤
  ['c3b0c5b8c290c2b0', 'f09f90b0'], // 🐰
  ['c3b0c5b8c2a7c5a1', 'f09fa79a'], // 🧚
  ['c3b0c5b8e28099c5bd', 'f09f928e'], // 💎
  ['c3a2e282ace2809d', 'e28094'], // — em dash
  ['c3a2e282ace2809c', 'e28093'], // – en dash
  ['c3a2e282acc593', 'e2809c'], // "
  ['c3a2e282acc29d', 'e2809d'], // "
  ['c3a2e282acc2a6', 'e280a6'], // …
  ['c3a2e282acc2a2', 'e280a2'], // •
  ['c3a2e280a0e28099', 'e28692'], // →
  ['c383e28094', 'c397'], // ×
  ['c3a2c593c2a8', 'e29ca8'], // ✨
];

const root = path.join(__dirname, '..');
const files = [...walk(path.join(root, 'src')), path.join(root, 'index.html')].filter(
  (f, i, a) => fs.existsSync(f) && a.indexOf(f) === i,
);

let n = 0;
for (const f of files) {
  if (fixFile(f, PAIRS)) {
    console.log(path.relative(root, f));
    n++;
  }
}
console.log('Files updated:', n);
