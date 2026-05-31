const https = require('https');
const fs = require('fs');
const path = require('path');

const PEXELS_API_KEY = 'PSwUzOzz4re42lSzO3lHejfyJdOqOKx0oW9ldHm0MKTpRDTfqMUuZGGI';

const images = [
  // Entrepreneurship page
  { query: 'entrepreneur startup founder', filename: 'hero-entrepreneur.jpeg', w: 800, h: 400 },
  { query: 'indian business woman entrepreneur', filename: 'entrepreneur-india.jpeg', w: 400, h: 250 },
  { query: 'startup office whiteboard', filename: 'entrepreneur-startup.jpeg', w: 400, h: 250 },
  // New article images
  { query: 'freelancer working home laptop', filename: 'art-freelance.jpeg', w: 400, h: 200 },
  { query: 'creative design artist studio', filename: 'art-creative.jpeg', w: 400, h: 200 },
  { query: 'mba business school education', filename: 'art-mba.jpeg', w: 400, h: 200 },
  { query: 'remote work digital nomad', filename: 'art-remote.jpeg', w: 400, h: 200 },
  { query: 'entrepreneur startup business plan', filename: 'art-entrepreneur.jpeg', w: 400, h: 200 },
  // About page
  { query: 'team diverse office collaboration', filename: 'hero-about.jpeg', w: 800, h: 400 },
];

const outputDir = path.join(__dirname, '../public/images/pexels');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

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
      if (response.statusCode === 302 || response.statusCode === 301)
        return downloadFile(response.headers.location, filepath).then(resolve).catch(reject);
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
      const url = `${result.photos[0].src.original}?auto=compress&cs=tinysrgb&w=${img.w}&h=${img.h}&fit=crop`;
      await downloadFile(url, path.join(outputDir, img.filename));
      console.log(`✓ [${i+1}/${images.length}] ${img.filename}`);
      await new Promise(r => setTimeout(r, 200));
    } catch (e) { console.log(`✗ ${img.filename}: ${e.message}`); }
  }
  console.log('Done!');
}
main();
