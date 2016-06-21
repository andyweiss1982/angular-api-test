# README

### TO REPEAT:

* rails new api_angular --api --database=postgresql
* ng new client --skip-git
* edit client gitignore to delete /dist
* ng build -prod
* rm -rf public (delete public folder)
* ln -s client/dist public (symlink client/dist to new public folder)
* edit package.json in client folder to move typings from dev dependency to dependency
* create package.json at root with the following (enables the node buildpack to sit at root):

```
{
"scripts": {
  "postinstall": "cd client && npm install"
}
```
* heroku create
* add heroku node buildpack and then ruby buildpack
* edit angular.cli.build.js to include map files
* push to heroku
* after ng build -prod, you may need to delete sourcemap refs at the bottom of vendor js files

```
var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/*.{js,js.map}',
      'es6-shim/es6-shim.js',
      'reflect-metadata/*.{js,js.map}',
      'rxjs/**/*.{js,js.map}',
      '@angular/**/*.{js,js.map}'
    ]
  });
};
```

