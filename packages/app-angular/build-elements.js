const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/app-angular/runtime.js',
    './dist/app-angular/polyfills.js',
    './dist/app-angular/main.js',
    './dist/app-angular/styles.js',
    './dist/app-angular/vendor.js',
    
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/app-angular-element.js');
})();