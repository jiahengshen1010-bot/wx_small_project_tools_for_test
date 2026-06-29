# wx_small_project_tools_for_test

微信小程序原生基础框架。

## 项目简介

这是一个不依赖额外构建工具的原生微信小程序起始项目，适合用于快速验证小程序页面、工具方法和基础交互。

当前示例包含：

- 首页：展示基础布局和计数器交互。
- 启动日志页：演示本地缓存读取。
- 请求工具：提供 Promise 风格的 `wx.request` 封装。
- 全局配置：包含页面路由、导航栏、基础样式和站点地图配置。

## 目录结构

```text
.
├── assets/
│   └── images/
├── app.js
├── app.json
├── app.wxss
├── pages/
│   ├── index/
│   └── logs/
├── project.config.json
├── sitemap.json
└── utils/
    └── request.js
```

## 本地运行

1. 打开微信开发者工具。
2. 选择“导入项目”。
3. 项目目录选择当前仓库目录。
4. AppID 可先使用测试号或游客模式，后续替换 `project.config.json` 中的 `appid`。

## 页面说明

### 首页

路径：`pages/index/index`

首页提供一个基础小程序页面结构，包含：

- 应用名称展示。
- 计数器加一和重置操作。
- 跳转启动日志页。

### 启动日志

路径：`pages/logs/logs`

小程序启动时会在本地缓存中记录时间，日志页会读取并格式化展示这些记录。

## 工具方法

`utils/request.js` 封装了 Promise 风格的 `wx.request`：

```js
const { request } = require('../../utils/request');

request({
  url: 'https://example.com/api',
  method: 'GET',
}).then((res) => {
  console.log(res.data);
});
```

## Git 忽略说明

`.gitignore` 已覆盖以下常见本地文件：

- 微信开发者工具本地配置：`project.private.config.json`、`project.local.config.json`。
- 小程序 npm 构建目录：`miniprogram_npm/`。
- 构建与覆盖率产物：`dist/`、`build/`、`coverage/`。
- 依赖目录与锁文件：`node_modules/`、`package-lock.json`、`yarn.lock`、`pnpm-lock.yaml`。
- 编辑器、系统和 sourcemap 临时文件。

## 后续开发建议

- 将真实 AppID 写入本地的 `project.private.config.json`，避免把个人开发配置提交到仓库。
- 新增页面后同步维护 `app.json` 中的 `pages` 路由。
- 如果接入 npm 包，使用微信开发者工具的“工具 -> 构建 npm”生成本地产物。
