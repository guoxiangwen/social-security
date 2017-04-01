
[![Build Status](https://travis-ci.org/guoxiangwen/react-starter.svg?branch=webpack2)](https://travis-ci.org/guoxiangwen/react-starter)


# react-starter

> 基于react+webpack2+es6+less+babel构建

## 准备工作

* 1.安装nodejs[传送门](https://nodejs.org/en/)
* 2.设置淘宝镜像(`npm config set registry https://registry.npm.taobao.org`翻墙的话，可以忽略)


## Build Setup
``` bash

# 安装依赖
npm install --安装(注意:chromedriver如果没有翻墙的话，是安装不成功的,需要单独安装
npm install chromedriver--chromedriver_cdnurl=https://npm.taobao.org/mirrors/chromedriver))


# 启动
npm start

# 发布
npm run build

# 单元测试
npm run unit

# e2e测试
npm run e2e

# 所有测试
npm test
```
## 相关阅读

* 1.[NightWatch](http://nightwatchjs.org/)
* 2.[selenium](www.seleniumhq.org/)


## 接口
>   查询职位

http://118.123.227.15:8082/renshemobile/tourist/native

```参数
{
    "handler": "touristSearchJobHander", 
    "sub": {
        "keyWord": "软件开发", 
        "start": 0, 
        "offset": 50
    }
}
```
```返回
{
  "code": "1000",
  "data": [
    {
      "area": "北京",
      "crtime": "2016-10-19 13:04:38.0",
      "enterpriseName": "阿里巴巴",
      "highSalary": 8000,
      "id": "6112",
      "jobName": "商务经理3",
      "lowSalary": 5000
    },
    {
      "area": "成都",
      "crtime": "2016-10-19 11:54:09.0",
      "enterpriseName": "阿里巴巴",
      "highSalary": 8000,
      "id": "6111",
      "jobName": "商务经理2",
      "lowSalary": 5000
    },
    {
      "area": "绵阳",
      "crtime": "2016-10-19 11:53:17.0",
      "enterpriseName": "腾讯",
      "highSalary": 7000,
      "id": "6110",
      "jobName": "商务经理1",
      "lowSalary": 4000
    },
    {
      "area": "绵阳",
      "crtime": "2016-10-19 11:50:36.0",
      "enterpriseName": "华西医院",
      "highSalary": 6000,
      "id": "5114",
      "jobName": "医院主任",
      "lowSalary": 5000
    },
    {
      "area": "绵阳",
      "crtime": "2016-10-19 11:49:23.0",
      "enterpriseName": "华西医院",
      "highSalary": 5000,
      "id": "5113",
      "jobName": "护士长",
      "lowSalary": 4000
    },
    {
      "area": "成都",
      "crtime": "2016-10-19 11:47:36.0",
      "enterpriseName": "华西医院",
      "highSalary": 5000,
      "id": "5112",
      "jobName": "外科医生",
      "lowSalary": 4000
    },
    {
      "area": "北京",
      "crtime": "2016-10-19 10:01:21.0",
      "enterpriseName": "华西医院",
      "highSalary": 5000,
      "id": "5111",
      "jobName": "妇产科医生",
      "lowSalary": 4000
    },
    {
      "area": "上海",
      "crtime": "2016-10-19 09:54:46.0",
      "enterpriseName": "阿里巴巴",
      "highSalary": 5000,
      "id": "4113",
      "jobName": "市场销售4",
      "lowSalary": 4000
    },
    {
      "area": "北京",
      "crtime": "2016-10-19 09:53:03.0",
      "enterpriseName": "腾讯",
      "highSalary": 5000,
      "id": "4112",
      "jobName": "市场销售3",
      "lowSalary": 4000
    },
    {
      "area": "广州",
      "crtime": "2016-10-19 09:51:57.0",
      "enterpriseName": "阿里巴巴",
      "highSalary": 8000,
      "id": "1116",
      "jobName": "软件开发工程师6",
      "lowSalary": 5000
    },
    {
      "area": "深圳",
      "crtime": "2016-10-19 09:51:51.0",
      "enterpriseName": "阿里巴巴",
      "highSalary": 8000,
      "id": "1115",
      "jobName": "软件开发工程师5",
      "lowSalary": 5000
    },
    {
      "area": "北京",
      "crtime": "2016-10-19 09:51:46.0",
      "enterpriseName": "阿里巴巴",
      "highSalary": 8000,
      "id": "1114",
      "jobName": "软件开发工程师4",
      "lowSalary": 5000
    },
    {
      "area": "上海",
      "crtime": "2016-10-19 09:51:42.0",
      "enterpriseName": "阿里巴巴",
      "highSalary": 8000,
      "id": "1113",
      "jobName": "软件开发工程师3",
      "lowSalary": 5000
    },
    {
      "area": "绵阳",
      "crtime": "2016-10-19 09:51:19.0",
      "enterpriseName": "阿里巴巴",
      "highSalary": 5000,
      "id": "4111",
      "jobName": "市场销售2",
      "lowSalary": 4000
    },
    {
      "area": "成都",
      "crtime": "2016-10-19 09:49:13.0",
      "enterpriseName": "百度",
      "highSalary": 5000,
      "id": "4110",
      "jobName": "市场销售1",
      "lowSalary": 4000
    },
    {
      "area": "成都",
      "crtime": "2016-10-19 09:42:59.0",
      "enterpriseName": "阿里巴巴",
      "highSalary": 8000,
      "id": "1112",
      "jobName": "软件开发工程师2",
      "lowSalary": 5000
    },
    {
      "area": "成都",
      "crtime": "2016-10-19 09:42:52.0",
      "enterpriseName": "阿里巴巴",
      "highSalary": 8000,
      "id": "1111",
      "jobName": "软件开发工程师1",
      "lowSalary": 5000
    },
    {
      "area": "绵阳",
      "crtime": "2016-10-19 09:40:15.0",
      "enterpriseName": "四川农业公司",
      "highSalary": 6000,
      "id": "3110",
      "jobName": "小麦护理员",
      "lowSalary": 5000
    },
    {
      "area": "绵阳",
      "crtime": "2016-10-19 09:36:42.0",
      "enterpriseName": "四川农业公司",
      "highSalary": 6000,
      "id": "",
      "jobName": "稻田播种员",
      "lowSalary": 5000
    },
    {
      "area": "上海",
      "crtime": "2016-10-19 09:23:33.0",
      "enterpriseName": "腾讯",
      "highSalary": 5000,
      "id": "2111",
      "jobName": "会计2",
      "lowSalary": 3000
    },
    {
      "area": "北京",
      "crtime": "2016-10-19 09:22:05.0",
      "enterpriseName": "阿里巴巴",
      "highSalary": 5000,
      "id": "2110",
      "jobName": "会计1",
      "lowSalary": 3000
    },
    {
      "area": "绵阳",
      "crtime": "2016-09-21 14:50:50.0",
      "enterpriseName": "阿里巴巴",
      "highSalary": 8000,
      "id": "1119",
      "jobName": "软件开发工程师9",
      "lowSalary": 5000
    },
    {
      "area": "绵阳",
      "crtime": "2016-09-21 14:50:50.0",
      "enterpriseName": "阿里巴巴",
      "highSalary": 8000,
      "id": "1117",
      "jobName": "软件开发工程师7",
      "lowSalary": 5000
    },
    {
      "area": "绵阳",
      "crtime": "2016-09-21 14:50:50.0",
      "enterpriseName": "阿里巴巴",
      "highSalary": 8000,
      "id": "1120",
      "jobName": "软件开发工程师10",
      "lowSalary": 5000
    },
    {
      "area": "绵阳",
      "crtime": "2016-09-21 14:50:50.0",
      "enterpriseName": "阿里巴巴",
      "highSalary": 8000,
      "id": "1118",
      "jobName": "软件开发工程师8",
      "lowSalary": 5000
    },
    {
      "area": "绵阳",
      "crtime": "2016-09-21 14:50:50.0",
      "enterpriseName": "阿里巴巴",
      "highSalary": 8000,
      "id": "1121",
      "jobName": "软件开发工程师11",
      "lowSalary": 5000
    },
    {
      "area": "四川",
      "crtime": "2016-09-20 16:43:50.0",
      "enterpriseName": "人民医院",
      "highSalary": 2000,
      "id": "6",
      "jobName": "财务",
      "lowSalary": 123
    },
    {
      "area": "上海",
      "crtime": "2016-09-20 16:43:46.0",
      "enterpriseName": "阿里巴巴",
      "highSalary": 2000,
      "id": "2c91face56f8c7f30156f8cd233d0000",
      "jobName": "助理",
      "lowSalary": 1000
    },
    {
      "area": "绵阳",
      "crtime": "2016-09-20 16:43:44.0",
      "enterpriseName": "阿里巴巴",
      "highSalary": 2000,
      "id": "2c91face56ea47be0156ea492d120000",
      "jobName": "C语音工程师",
      "lowSalary": 1000
    },
    {
      "area": "成都",
      "crtime": "2016-09-20 16:43:41.0",
      "enterpriseName": "阿里巴巴",
      "highSalary": 2000,
      "id": "2c91face56ea2aa80156ea3ccfe20002",
      "jobName": "项目经理",
      "lowSalary": 1000
    },
    {
      "area": "上海",
      "crtime": "2016-09-20 16:43:39.0",
      "enterpriseName": "阿里巴巴",
      "highSalary": 2000,
      "id": "2c91face56e9cd8f0156ea28cc350001",
      "jobName": "java程序员",
      "lowSalary": 1000
    },
    {
      "area": "天府四街",
      "crtime": "2016-09-09 16:36:53.0",
      "enterpriseName": "阿里巴巴",
      "highSalary": 20000,
      "id": "1",
      "jobName": "软件开发工程师",
      "lowSalary": 10000
    },
    {
      "area": "北京",
      "crtime": "2016-09-09 11:00:21.0",
      "enterpriseName": "腾讯",
      "highSalary": 10000,
      "id": "2c91face56ea2aa80156ea2ea2520000",
      "jobName": "银行行长",
      "lowSalary": 5000
    },
    {
      "area": "四川",
      "crtime": "2016-09-09 10:20:23.0",
      "enterpriseName": "阿里巴巴",
      "highSalary": 12220.2,
      "id": "5",
      "jobName": "互联网电子商务",
      "lowSalary": 6000
    },
    {
      "area": "四川",
      "crtime": "2016-09-09 10:20:12.0",
      "enterpriseName": "阿里巴巴",
      "highSalary": 8000,
      "id": "2c91face56ea2aa80156ea378e0b0001",
      "jobName": "工程师",
      "lowSalary": 5000
    },
    {
      "area": "成都",
      "crtime": "2016-09-07 10:35:09.0",
      "enterpriseName": "腾讯",
      "highSalary": 10000,
      "id": "402881e4570ca9c801570ccca3bb0000",
      "jobName": "出纳",
      "lowSalary": 8000
    },
    {
      "area": "四川绵阳",
      "crtime": "2016-08-30 14:28:20.0",
      "enterpriseName": "阿里巴巴",
      "highSalary": 456,
      "id": "4",
      "jobName": "电子信息工程硬件开发工程师",
      "lowSalary": 123
    },
    {
      "area": "四川绵阳",
      "crtime": "2016-08-30 14:27:49.0",
      "enterpriseName": "腾讯",
      "highSalary": 256354,
      "id": "3",
      "jobName": "电子信息工程安全分析师",
      "lowSalary": 10000
    },
    {
      "area": "天府四街",
      "crtime": "2016-08-30 14:27:30.0",
      "enterpriseName": "阿里巴巴",
      "highSalary": 40000,
      "id": "2",
      "jobName": "C++开发工程师",
      "lowSalary": 30000
    }
  ],
  "msg": "success"
}
```