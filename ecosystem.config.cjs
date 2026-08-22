const path = require('path');

module.exports = {
  apps: [
    {
      name: 'portfolio',
      cwd: path.resolve(__dirname),
      script: 'node_modules/react-scripts/scripts/start.js',
      env: {
        PORT: 3005,
        NODE_ENV: 'development',
        USE_GITHUB_DATA: 'false',
        BROWSER: 'none',
      },
    },
  ],
};
