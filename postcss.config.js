const poscssEasyImport = require('postcss-easy-import');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    poscssEasyImport({ prefix: '_' }),
    autoprefixer({
      browsers: [
        'IE >= 11',
        'last 5 Chrome versions',
        'last 5 Firefox versions',
        'Firefox ESR',
        'Safari >= 8',
        'iOS >= 8',
      ],
    }),
  ],
};