### 开发
```shell script
yarn 

yarn start
```
###打包
```shell script
yarn pack
```
###注意
如果需要content高度100%，请到node_modules/@ant-design/pro-layout/es/WrapContent.js中修改第83行改为：
```javascript
style: {
    height: '100%'
}
```
目前还没找到更好的解决办法。
