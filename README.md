# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 安装antd
```
yarn add antd
```

## 配置按需打包
### 安装craco
```
yarn add @craco/craco -D
```
-D 或--dev 表示只把这个包安装在本项目的node_modules中。

### 安装babel-plugin-import
```
yarn add babel-plugin-import
```

### 创建craco配置文件
```javascript
// touch craco.config.js
module.exports = {
    babel:{
        plugins:[
            ["import",{libraryName:"antd", libraryDirectory:"es", style:"css"}],
        ]
    }
}

```

### 修改package.json中scripts段配置
```javascript
  "scripts": {
    "start": "craco start", // 之前是 react-scripts start
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
  },
```
这样就可以实现antd中样式的自动打包了

## 自定义主题
### 安装 craco-less
```
yarn add craco-less
```

### 修改craco的配置文件
// 在module.exports中添加如下两行：
```javascript
const CracoLessPlugin = require('craco-less');

plugins: [ 
        {
          plugin: CracoLessPlugin,
          options: {
            lessLoaderOptions: {
              lessOptions: {
                modifyVars: { '@primary-color': '#1DA57A' },
                javascriptEnabled: true,
              },
            },
          },
        },
      ],
```