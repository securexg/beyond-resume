const https = require('https');
const fs = require('fs');
const path = require('path');

// Using different Unsplash photo IDs to ensure unique images
const images = [
  // Unique images for home page sections
  { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&h=400&q=80&fm=webp', filename: 'meeting-professional.webp' },
  { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400&q=80&fm=webp', filename: 'analytics-dashboard.webp' },
  { url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&h=400&q=80&fm=webp', filename: 'career-success.webp' },
  { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&h=400&q=80&fm=webp', filename: 'team-collaboration.webp' },
  { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&h=400&q=80&fm=webp', filename: 'startup-workspace.webp' },
  
  // Unique for analyze page
  { url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=500&h=400&q=80&fm=webp', filename: 'document-analysis.webp' },
  
  // Unique for trends page
  { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=400&q=80&fm=webp', filename: 'market-graph.webp' },
  
  // Unique for jobs page
  { url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&h=400&q=80&fm=webp', filename: 'hiring-process.webp' },
  
  // Unique for interview prep page
  { url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&h=400&q=80&fm=webp', filename: 'interview-conversation.webp' },
  
  // Unique for insights articles
  { url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&h=200&q=80&fm=webp', filename: 'campus-students.webp' },
  { url: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=400&h=200&q=80&fm=webp', filename: 'resume-writing.webp' },
  { url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&h=200&q=80&fm=webp', filename: 'coding-dsa.webp' },
  { url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&h=200&q=80&fm=webp', filename: 'government-study.webp' },
  { url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=400&h=200&q=80&fm=webp', filename: 'linkedin-networking.webp' },
  { url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&h=200&q=80&fm=webp', filename: 'salary-meeting.webp' },
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
      const filepath = path.join(outputDir, img.filename);
      
      await downloadImage(img.url, filepath);
      console.log(`✓ Downloaded: ${img.filename}`);
    } catch (error) {
      console.error(`✗ Failed to download ${img.filename}:`, error.message);
    }
  }
  
  console.log('Done!');
}

fetchImages();
