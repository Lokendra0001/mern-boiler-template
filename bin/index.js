#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

// Get project name from command line argument or default
const projectName = process.argv[2] || 'create-mern-boilerkit';

// Check if folder already exists
if (fs.existsSync(projectName)) {
  console.error(`❌ Folder "${projectName}" already exists. Please choose a different name.`);
  process.exit(1);
}

console.log(`🚀 Creating MERN app: ${projectName}...`);

// Clone the boilerplate repo into the given folder
try {
  execSync(`git clone https://github.com/Lokendra0001/mern-boiler-template ${projectName}`, { stdio: 'inherit' });
} catch (err) {
  console.error('❌ Failed to clone repository. Please check your internet connection or repository URL.');
  process.exit(1);
}

console.log(`✅ MERN app "${projectName}" created successfully!`);

console.log(`
Next steps:

1️⃣ Go to server folder and install dependencies:
   cd ${projectName}/server
   npm install
   npm run dev

2️⃣ Go to client folder and install dependencies:
   cd ${projectName}/client
   npm install
   npm start

💡 Tip: Make sure MongoDB is running before starting the server.
`);
