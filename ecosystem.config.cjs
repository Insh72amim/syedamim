const path = require('path');

module.exports = {
  apps: [
    {
      name: 'portfolio',
      cwd: path.resolve(__dirname),
      script: 'node_modules/vite/bin/vite.js',
      args: '--port 3005 --host 0.0.0.0',
      env: {
        PORT: 3005,
        NODE_ENV: 'development',
      },
    },
  ],
};
