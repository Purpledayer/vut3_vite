# 项目文档

## 前言

vue3+vite+ts多页面（MPA）模板，支持单独模块打包，支持本地开发只编译单独模块，同时，也支持多模块一起打包和本地编译。

## 技术栈

- [vite](https://cn.vitejs.dev/) 新一代构建工具，急速启动，快速热载
- [axios](https://www.kancloud.cn/yunye/axios/234845) ajax 封装插件
- [antdv](https://www.antdv.com/components/overview) Ant Design of Vue，主题可调。
- [vueuse](https://vueuse.org/) 尤雨溪推荐，可以理解为 vue3 的 hooks 库，专为 vues 设计
- [pinia](https://pinia.vuejs.org/) 替代 vuex4，作者原话 pinia 就是 vuex5 了

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

├── public (存放公共文件)
│ └── favicon.ico
├── src
│ ├── assets (公共资源)
│ │ ├── logo.png
│ │ └── ...
│ ├── components (业务组件)
│ │ └── ...
│ ├── modules (业务模块)
│ │ ├── main (业务模块 1)
│ │ │ ├── router
│ │ │ ├── store
│ │ │ ├── view
│ │ │ ├── App.vue
│ │ │ ├── index.html
│ │ │ └── main.ts
│ │ ├── minor (业务模块 2)
│ │ │ ├── App.vue
│ │ │ ├── index.html
│ │ │ └── main.ts
│ ├── service (公共服务)
│ │ ├── api
│ └─└── http.ts
├── index.html
├── package.json
├── README.md
├── tsconfig.ts
└── vite.config.ts
```  

**[⬆ 返回顶部](#前言)**  
