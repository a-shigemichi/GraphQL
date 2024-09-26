## How to develop

Run 
```
$ mkdir ./twitter/node_modules
$ mkdir ./twitter/api/node_modules
$ docker compose up -d
```
 and see `localhost:3000` in your browser.
Your code change will be automatically detected and reflected to the opened app.
If you want to run some commands like `yarn add XXX`, then you can run `docker compose exec app bash` first.