# yog2-react-redux-demo

由 [react-redux examples](https://github.com/reactjs/redux/tree/master/examples/todomvc) 移植生成的适用于 YOG2的 react-redux demo

实现了 React 的前端编译与后端同构渲染

## Usage

> 前置步骤包含启动 YOG2 服务端，可参考 [YOG2文档](http://fex.baidu.com/yog2/docs/)

> 要求 YOG2 版本高于1.0.0，服务端 yog2-kernel 版本高于1.0.0

```bash
git clone https://github.com/hefangshi/yog2-react-redux-demo.git
cd yog2-react-redux-demo
cd client
npm i --production # 安装npm前端组件
cd ..
yog2 release debug --fis3 # 发布至 YOG2 服务端
```

访问浏览器 `http://127.0.0.1:8085` 即可浏览发布结果

## FAQ

Q: 新项目如何使用 NPM / React

A: 仅需在原有的`fis-conf.js`中添加两句配置即可

```javascript
// 按照 react-redux 的目录规范设置源代码目录
fis.match('/client/{actions,components,constants,containers,page,reducers,store}/**.{js,es,jsx,ts,tsx}', {
    parser: fis.plugin('typescript', {
        module: 1,
        target: 0
    }),
    isJsXLike: true,
    isMod: true
});

// 启用npm管理前端组件
fis.enableNPM({
    autoPack: true // 使用autoPack可以自动将依赖的npm组件打包合并
});
```


