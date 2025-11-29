#!/usr/bin/env node
const { execSync } = require('child_process');
const projectName = 'create-mern-boiler';

console.log(`🚀 Creating MERN app: ${projectName}`);
execSync(`git clone https://github.com/Lokendra0001/mern-boiler-template ${projectName}`, { stdio: 'inherit' });

console.log(`✅ Done! Now run:
  cd ${projectName}
  npm install
  npm run dev`);