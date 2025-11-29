#!/usr/bin/env node
const { execSync } = require('child_process');
const projectName = process.argv[2] || 'my-mern-app';

console.log(`🚀 Creating MERN app: ${projectName}`);
execSync(`git clone https://github.com/lokendra0001/my-mern-app ${projectName}`, { stdio: 'inherit' });

console.log(`✅ Done! Now run:
  cd ${projectName}
  npm install
  npm run dev`);