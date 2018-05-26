# 启动步骤：


## 1、启动server项目：进入server/ => 运行node bin/wwwStore
此时可访问localhost:3000获取后台接口数据：
店铺信息接口：localhost:3000/storeAds?storeId=10012278
商品类别信息接口：http://localhost:3000/storeInfo?detailUrl=/ebuyV2/qryStoreInfo.json&supplyMerchantId=10012278&storeId=10012278


## 2、启动nginx：进入F:\花样年文件夹\projects2018\nginx-1.13.8-for-store => 运行start nginx
此时可通过nginx代理接口访问server端，如：
商品类别信息接口：http://localhost:8080/baseApi/storeInfo?detailUrl=/ebuyV2/qryStoreInfo.json&supplyMerchantId=10012278&storeId=10012278


## 3、启动前端项目：进入store/ => 运行npm run dev
此时可访问http://localhost:8080/#/?storeId=10012278&jfqsource=app 进入店铺首页，需带店铺id


## 启动mongoVUE可进行数据查看修改

-------------------------------------------------------------------------------------------

## kengs

### 一步启动项目-执行多任务：
安装concurrently： npm install -g concurrently
package.json中定义命令："go": "concurrently \"npm run startServer\" \"npm run start\" \"npm run startNginx\""
npm run go
即可访问http://localhost:8080/#/?storeId=10012278&jfqsource=app 进入店铺首页，需带店铺id，否则后端接口会报错，导致后端项目自动停止，需重新启动

### itemDetails.vue中启用Mock数据的话，进入详情页后点后退返回到首页时，首页发的请求返回数据会被替换为mock数据，导致报错
可以将mock接收的接口后缀修改区分一下即可：Mock.mock(/(\.jsontest)|(\.dotest)/, {}