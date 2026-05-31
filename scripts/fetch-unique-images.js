const https = require('https');
const fs = require('fs');
const path = require('path');

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY || 'KY-BqffhIkQp2hCffeUaifhPO-IBcHqSH2uD9nzjDtM';

const images = [
  // Unique images for home page sections
  { query: 'business meeting professional', filename: 'meeting-professional.webp', width: 600, height: 400 },
  { query: 'data analytics dashboard', filename: 'analytics-dashboard.webp', width: 600, height: 400 },
  { query: 'career growth success', filename: 'career-success.webp', width: 600, height: 400 },
  { query: 'team collaboration office', filename: 'team-collaboration.webp', width: 600, height: 400 },
  { query: 'startup workspace modern', filename: 'startup-workspace.webp', width: 600, height: 400 },
  
  // Unique for analyze page
  { query: 'document analysis ai', filename: 'document-analysis.webp', width: 500, height: 400 },
  
  // Unique for trends page
  { query: 'market graph chart', filename: 'market-graph.webp', width: 800, height: 400 },
  
  // Unique for jobs page
  { query: 'job application hiring', filename: 'hiring-process.webp', width: 800, height: 400 },
  
  // Unique for interview prep page
  { query: 'job interview conversation', filename: 'interview-conversation.webp', width: 600, height: 400 },
  
  // Unique for insights articles
  { query: 'college campus students', filename: 'campus-students.webp', width: 400, height: 200 },
  { query: 'resume writing document', filename: 'resume-writing.webp', width: 400, height: 200 },
  { query: 'coding programming dsa', filename: 'coding-dsa.webp', width: 400, height: 200 },
  { query: 'government exam study', filename: 'government-study.webp', width: 400, height: 200 },
  { query: 'linkedin networking', filename: 'linkedin-networking.webp', width: 400, height: 200 },
  { query: 'salary negotiation meeting', filename: 'salary-meeting.webp', width: 400, height: 200 },
];

const outputDir = path.join(__dirname, '../public/images');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }
      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
}

async function fetchImages() {
  console.log('Fetching unique images from Unsplash...');
  
  for (const img of images) {
    try {
      const url = `https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=${img.width}&h=${img.height}&q=80&fm=webp`;
      const filepath = path.join(outputDir, img.filename);
      
      await downloadImage(url, filepath);
      console.log(`✓ Downloaded: ${img.filename}`);
    } catch (error) {
      console.error(`✗ Failed to download ${img.filename}:`, error.message);
    }
  }
  
  console.log('Done!');
}

fetchImages();
