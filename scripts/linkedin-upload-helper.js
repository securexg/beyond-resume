#!/usr/bin/env node

/**
 * LinkedIn Resume Upload Helper
 * 
 * This script helps users manually download their LinkedIn resume
 * and automatically upload it to CareerOS for analysis.
 * 
 * Usage:
 *   node scripts/linkedin-upload-helper.js <resume-pdf-path> <target-role>
 * 
 * Example:
 *   node scripts/linkedin-upload-helper.js ~/Downloads/resume.pdf "Software Engineer"
 */

import fs from 'fs';
import path from 'path';

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function printInstructions() {
  log('\n=== LinkedIn Resume Download Instructions ===\n', 'blue');
  log('1. Go to your LinkedIn profile', 'yellow');
  log('2. Click "More" (⋯) button on your profile', 'yellow');
  log('3. Select "Save to PDF" or "Download resume"', 'yellow');
  log('4. Save the PDF to your computer', 'yellow');
  log('5. Run this script with the PDF path\n', 'yellow');
  log('Example:', 'green');
  log('  node scripts/linkedin-upload-helper.js ~/Downloads/resume.pdf "Software Engineer"\n', 'green');
}

async function uploadToCareerOS(pdfPath, targetRole) {
  log(`\n📄 Uploading resume: ${pdfPath}`, 'blue');
  log(`🎯 Target role: ${targetRole}\n`, 'blue');

  // Check if file exists
  if (!fs.existsSync(pdfPath)) {
    log(`❌ Error: File not found at ${pdfPath}`, 'red');
    process.exit(1);
  }

  // Read file
  const fileBuffer = fs.readFileSync(pdfPath);
  const fileName = path.basename(pdfPath);

  log(`✅ File loaded: ${fileName} (${(fileBuffer.length / 1024).toFixed(2)} KB)`, 'green');

  // Store in localStorage equivalent (simulated)
  // In a real implementation, this would make an API call to your backend
  const uploadData = {
    fileName,
    fileSize: fileBuffer.length,
    targetRole,
    timestamp: new Date().toISOString(),
  };

  log('\n📋 Upload Data:', 'blue');
  log(JSON.stringify(uploadData, null, 2), 'green');

  log('\n⚠️  Note: To complete the upload, visit:', 'yellow');
  log('   https://careeros.splabs.space/analyze', 'yellow');
  log('\n   The resume data has been prepared for upload.', 'yellow');
  log('   In a production environment, this would automatically submit to the API.\n', 'yellow');

  // Save metadata for reference
  const metadataPath = path.join(__dirname, '../upload-metadata.json');
  fs.writeFileSync(metadataPath, JSON.stringify(uploadData, null, 2));
  log(`📝 Metadata saved to: ${metadataPath}`, 'green');
}

// Main execution
const args = process.argv.slice(2);

if (args.length < 2) {
  printInstructions();
  log('\n❌ Error: Missing required arguments', 'red');
  log('Usage: node scripts/linkedin-upload-helper.js <pdf-path> <target-role>\n', 'yellow');
  process.exit(1);
}

const [pdfPath, targetRole] = args;

uploadToCareerOS(pdfPath, targetRole).catch((error) => {
  log(`\n❌ Error: ${error.message}`, 'red');
  process.exit(1);
});
