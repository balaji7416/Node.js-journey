const fs = require('fs');
const os = require('os');
const path = require('path');

// Get system info
const systemInfo = `
System Info:
===============
Platform: ${os.platform()}
Architecture: ${os.arch()}
CPU Cores: ${os.cpus().length}
Total Memory in GB: ${(os.totalmem() / (1024 ** 3)).toFixed(2)};
Free Memory in GB: ${(os.freemem() / (1024 ** 3)).toFixed(2)};
Uptime: ${os.uptime()} seconds
`;

// Build file path
const logFilePath = path.join(__dirname, 'system-info.txt');

// Write to file
fs.writeFileSync(logFilePath, systemInfo);

console.log('System info written to system-info.txt');
