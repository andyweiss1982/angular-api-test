# README

### TO REPEAT:

* rails new api_angular --api --database=postgresql
* ng new client --skip-git
* edit client gitignore to delete /dist
* ng build -prod
* rm -rf public (delete public folder)
* ln -s client/dist public (symlink client/dist to new public folder)
* edit package.json to move typings from dev dependency to dependency
* heroku create
* heroku buildpacks:add https://github.com/jasonswett/heroku-buildpack-nodejs (depends on angular folder being called client/)
* heroku buildpacks:add heroku/ruby
* edit angular.cli.build.js to include map files
* push to heroku

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

