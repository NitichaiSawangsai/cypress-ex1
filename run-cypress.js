require('dotenv').config();
const { execSync } = require('child_process');

const cypressKey = process.env.CYPRESS_KEY;

if (!cypressKey) {
  console.error('Error: CYPRESS_KEY is not defined');
  process.exit(1);
}

const command = `npx cypress run --record --key ${cypressKey}`;
console.log(`Running command: ${command}`);

try {
  execSync(command, { stdio: 'inherit' });
} catch (error) {
  // console.error(`Error: ${error.message}`);
  process.exit(1);
}
