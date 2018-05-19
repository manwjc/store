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