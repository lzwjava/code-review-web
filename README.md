# code-review-web


### Building

``` bash
npm install
# watch:
node server.js
# build:
npm run build
# deploy
npm run deploy
# submodule
git submodule init
git submodule update
```

### 本地调试

将 apitest.conf 复制到 /usr/local/nginx/conf/sites/ 下面。在 nginx.conf 中引入 sites/*.conf。重启 nginx。
