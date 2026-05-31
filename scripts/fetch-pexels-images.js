const https = require('https');
const fs = require('fs');
const path = require('path');

const PEXELS_API_KEY = 'PSwUzOzz4re42lSzO3lHejfyJdOqOKx0oW9ldHm0MKTpRDTfqMUuZGGI';

const images = [
  // HOME PAGE
  { query: 'professional team meeting office', filename: 'hero-team.jpeg', w: 600, h: 500 },
  { query: 'data analytics computer dashboard', filename: 'feat-analyze.jpeg', w: 400, h: 200 },
  { query: 'stock market chart trading', filename: 'feat-trends.jpeg', w: 400, h: 200 },
  { query: 'job interview business', filename: 'feat-interview.jpeg', w: 400, h: 200 },
  { query: 'modern coworking space office', filename: 'feat-workspace.jpeg', w: 400, h: 200 },
  { query: 'university graduation students', filename: 'guide-firstjob.jpeg', w: 400, h: 150 },
  { query: 'business woman laptop career', filename: 'guide-midcareer.jpeg', w: 400, h: 150 },
  { query: 'leadership executive presentation', filename: 'guide-leadership.jpeg', w: 400, h: 150 },

  // ARTICLE CARDS (used on home + insights pages)
  { query: 'college campus students india', filename: 'art-campus.jpeg', w: 400, h: 200 },
  { query: 'resume writing document pen', filename: 'art-resume.jpeg', w: 400, h: 200 },
  { query: 'programmer coding laptop', filename: 'art-coding.jpeg', w: 400, h: 200 },
  { query: 'student studying books exam', filename: 'art-govtexam.jpeg', w: 400, h: 200 },
  { query: 'professional networking event', filename: 'art-linkedin.jpeg', w: 400, h: 200 },
  { query: 'salary negotiation handshake business', filename: 'art-salary.jpeg', w: 400, h: 200 },

  // ANALYZE PAGE
  { query: 'AI document scanning technology', filename: 'hero-analyze.jpeg', w: 500, h: 400 },

  // TRENDS PAGE
  { query: 'financial graph growth market', filename: 'hero-trends.jpeg', w: 800, h: 400 },

  // JOBS PAGE
  { query: 'job search laptop workspace', filename: 'hero-jobs.jpeg', w: 800, h: 400 },

  // INTERVIEW PREP PAGE
  { query: 'mock interview preparation', filename: 'hero-interview.jpeg', w: 600, h: 400 },
];

const outputDir = path.join(__dirname, '../public/images/pexels');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function searchPexels(query, perPage = 1) {
  return new Promise((resolve, reject) => {
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=landscape`;
    const options = {
      headers: { 'Authorization': PEXELS_API_KEY }
    };
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        downloadFile(response.headers.location, filepath).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }
      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);
      fileStream.on('finish', () => { fileStream.close(); resolve(); });
      fileStream.on('error', (err) => { fs.unlink(filepath, () => {}); reject(err); });
    }).on('error', reject);
  });
}

async function main() {
  console.log(`Fetching ${images.length} unique images from Pexels...\n`);

  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    try {
      const result = await searchPexels(img.query);
      if (!result.photos || result.photos.length === 0) {
        console.log(`✗ No results for: "${img.query}"`);
        continue;
      }
      const photo = result.photos[0];
      // Use Pexels image resizing: ?auto=compress&cs=tinysrgb&w=WIDTH&h=HEIGHT&fit=crop
      const imageUrl = `${photo.src.original}?auto=compress&cs=tinysrgb&w=${img.w}&h=${img.h}&fit=crop`;
      const filepath = path.join(outputDir, img.filename);
      
      await downloadFile(imageUrl, filepath);
      const size = fs.statSync(filepath).size;
      console.log(`✓ [${i+1}/${images.length}] ${img.filename} (${(size/1024).toFixed(0)}KB) - "${img.query}"`);
      
      // Small delay to respect rate limits
      await new Promise(r => setTimeout(r, 200));
    } catch (err) {
      console.log(`✗ [${i+1}/${images.length}] Failed ${img.filename}: ${err.message}`);
    }
  }
  
  console.log('\nDone!');
}

main();
