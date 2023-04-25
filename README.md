# 项目文档

## 前言

vue3+vite+ts多页面（MPA）模板，支持单独模块打包，支持本地开发只编译单独模块，同时，也支持多模块一起打包和本地编译。

## 技术栈

- [vite](https://cn.vitejs.dev/) 新一代构建工具，急速启动，快速热载
- [axios](https://www.kancloud.cn/yunye/axios/234845) ajax 封装插件
- [antdv](https://www.antdv.com/components/overview) Ant Design of Vue，主题可调。
<!-- - [vueuse](https://vueuse.org/) 尤雨溪推荐，可以理解为 vue3 的 hooks 库，专为 vues 设计 -->
- [pinia](https://pinia.vuejs.org/) 替代 vuex4

## 开发运行

```bash
    # 安装依赖
    npm install

    # 本地开发 开启所有模块服务
    npm dev  

    # 生成新的项目
    npm run copy 回车输入项目名称

    # 本地开发 开启单个模块
    npm run main

    # 所有模块一起打包
    npm build

    # 单独模块打包
    npm build:main

```  

## 目录结构  

```结构描述

├── config (新建项目文件配置)
│ └── copy.js
├── src
│ ├──api(系统通用接口统一请求)
│ │ └── ...
│ ├── assets (公共资源)
│ │ └── ...
│ ├── components (系统公共业务组件)
│ │ └── ...
│ ├── layout (系统基础脚手架)
│ │ ├──default.vue(默认引入脚手架)--可新建不同引入在vite.config.ts中的layout配置 
│ │ ├──header.vue
│ └─└─leftNav.vue
│ ├── mock (mock数据)
│ │ └── ...
│ ├── modules (业务模块)
│ │ ├── main (业务模块 1)
│ │ │ ├── router
│ │ │ ├── store
│ │ │ ├── view
│ │ │ ├── App.vue
│ │ │ ├── index.html
│ └─└─└── main.ts
│ ├── plugins (公共插件)
│ │ └── cache.js
│ ├── theme (主题配置)
│ │ └── ...
│ ├── types (处理ts引入报错)
│ │ └── index.d.ts
│ ├── utils (公共服务)
│ │ ├── api
│ └─└── request
├── template(项目模板)
├── package.json
├── README.md
├── tsconfig.ts
└── vite.config.ts
```  

**[⬆ 返回顶部](#前言)**  
