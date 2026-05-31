const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY || 'KY-BqffhIkQp2hCffeUaifhPO-IBcHqSH2uD9nzjDtM';
const OUTPUT_DIR = path.join(__dirname, '../public/images');

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const imageQueries = [
  // Home Page
  { query: 'professional career success business', filename: 'hero-career.jpg', width: 1920, height: 1080 },
  { query: 'team collaboration office', filename: 'teamwork.jpg', width: 800, height: 600 },
  { query: 'technology innovation', filename: 'technology.jpg', width: 800, height: 600 },
  { query: 'student graduation success', filename: 'graduation.jpg', width: 800, height: 600 },
  { query: 'data analytics charts', filename: 'analytics.jpg', width: 800, height: 600 },
  
  // Analyze Page
  { query: 'resume document paper', filename: 'resume.jpg', width: 800, height: 600 },
  { query: 'ai artificial intelligence', filename: 'ai-analysis.jpg', width: 800, height: 600 },
  { query: 'job interview professional', filename: 'interview.jpg', width: 800, height: 600 },
  
  // Trends Page
  { query: 'business growth chart', filename: 'growth-chart.jpg', width: 800, height: 600 },
  { query: 'global world map business', filename: 'global-map.jpg', width: 800, height: 600 },
  { query: 'technology trends future', filename: 'tech-trends.jpg', width: 800, height: 600 },
  
  // Jobs Page
  { query: 'job search career', filename: 'job-search.jpg', width: 800, height: 600 },
  { query: 'office workspace modern', filename: 'workspace.jpg', width: 800, height: 600 },
  { query: 'professional meeting', filename: 'meeting.jpg', width: 800, height: 600 },
  
  // Interview Prep Page
  { query: 'interview preparation', filename: 'prep.jpg', width: 800, height: 600 },
  { query: 'learning education books', filename: 'learning.jpg', width: 800, height: 600 },
  { query: 'success achievement', filename: 'success.jpg', width: 800, height: 600 },
  
  // Insights Page
  { query: 'reading books knowledge', filename: 'reading.jpg', width: 800, height: 600 },
  { query: 'career development', filename: 'development.jpg', width: 800, height: 600 },
  { query: 'mentor coaching', filename: 'mentor.jpg', width: 800, height: 600 },
];

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Follow redirect
        downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
        return;
      }
      
      const file = fs.createWriteStream(filepath);
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve();
      });
      
      file.on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
}

async function searchAndDownloadImage(query, filename, width, height) {
  try {
    console.log(`Searching for: ${query}`);
    
    // Search for image
    const searchUrl = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`;
    
    const imageData = await new Promise((resolve, reject) => {
      https.get(searchUrl, {
        headers: {
          'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`
        }
      }, (response) => {
        let data = '';
        response.on('data', chunk => data += chunk);
        response.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(e);
          }
        });
      }).on('error', reject);
    });
    
    if (!imageData.results || imageData.results.length === 0) {
      console.log(`No results found for: ${query}`);
      return;
    }
    
    const imageUrl = imageData.results[0].urls.raw;
    const optimizedUrl = `${imageUrl}&w=${width}&h=${height}&fit=crop&q=80&fm=webp`;
    
    const filepath = path.join(OUTPUT_DIR, filename.replace('.jpg', '.webp'));
    
    console.log(`Downloading: ${filename}`);
    await downloadImage(optimizedUrl, filepath);
    console.log(`Saved: ${filename}`);
    
  } catch (error) {
    console.error(`Error processing ${query}:`, error.message);
  }
}

async function main() {
  console.log('Starting image download...\n');
  
  for (const image of imageQueries) {
    await searchAndDownloadImage(image.query, image.filename, image.width, image.height);
    // Add delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log('\nAll images downloaded successfully!');
}

main().catch(console.error);
