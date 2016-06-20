# README

### TO REPEAT:

* rails new api_angular --api --database=postgresql
* ng new client --skip-git
* edit client gitignore to delete /dist
* ng build -prod
* rm -rf public (delete public folder)
* ln -s client/dist public (symlink client/dist to new public folder)
* edit package.json to make typings a dependency (not just deve dependency)
* heroku create
* heroku buildpacks:add https://github.com/jasonswett/heroku-buildpack-nodejs (depends on angular folder being called client/)
* heroku buildpacks:add heroku/ruby
* push to heroku

