const https = require('https');
const fs = require('fs');
const path = require('path');

const PEXELS_API_KEY = 'PSwUzOzz4re42lSzO3lHejfyJdOqOKx0oW9ldHm0MKTpRDTfqMUuZGGI';

const images = [
  // 6 unique feature card images for home page
  { query: 'resume document laptop', filename: 'feat-resume-ats.jpeg', w: 400, h: 200 },
  { query: 'hiring probability interview score', filename: 'feat-hiring-score.jpeg', w: 400, h: 200 },
  { query: 'market trends analytics graph', filename: 'feat-market.jpeg', w: 400, h: 200 },
  { query: 'career role recommendation', filename: 'feat-role-match.jpeg', w: 400, h: 200 },
  { query: 'learning skills development', filename: 'feat-skillgap.jpeg', w: 400, h: 200 },
  { query: 'interview preparation practice', filename: 'feat-interview-prep.jpeg', w: 400, h: 200 },
];

const outputDir = path.join(__dirname, '../public/images/pexels');

function searchPexels(query) {
  return new Promise((resolve, reject) => {
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`;
    https.get(url, { headers: { 'Authorization': PEXELS_API_KEY } }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => { try { resolve(JSON.parse(data)); } catch (e) { reject(e); } });
    }).on('error', reject);
  });
}

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        return downloadFile(response.headers.location, filepath).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) return reject(new Error(`HTTP ${response.statusCode}`));
      const s = fs.createWriteStream(filepath);
      response.pipe(s);
      s.on('finish', () => { s.close(); resolve(); });
      s.on('error', (e) => { fs.unlink(filepath, () => {}); reject(e); });
    }).on('error', reject);
  });
}

async function main() {
  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    try {
      const result = await searchPexels(img.query);
      if (!result.photos?.length) { console.log(`✗ No results: "${img.query}"`); continue; }
      const photo = result.photos[0];
      const url = `${photo.src.original}?auto=compress&cs=tinysrgb&w=${img.w}&h=${img.h}&fit=crop`;
      await downloadFile(url, path.join(outputDir, img.filename));
      console.log(`✓ [${i+1}/${images.length}] ${img.filename}`);
      await new Promise(r => setTimeout(r, 200));
    } catch (e) { console.log(`✗ ${img.filename}: ${e.message}`); }
  }
  console.log('Done!');
}
main();
