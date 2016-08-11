/**
 * @file FIS 配置
 * @author
 */

// fis3-enable

fis.config.set('namespace', 'home');

// 按照 react-redux 的目录规范设置源代码目录
fis.match('/client/{actions,components,constants,routes,containers,page,reducers,store}/**.{js,es,jsx,ts,tsx}', {
    parser: fis.plugin('typescript', {
        module: 1,
        target: 0
    }),
    isJsXLike: true,
    isMod: true
});

// 启用npm管理前端组件
fis.enableNPM({
    autoPack: true
});

// fis.match('/client/**.js', {
//     packTo: '/client/pkg/aio.js'
// });

// chrome下可以安装插件实现livereload功能
// https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
fis.set('livereload.port', 35729);

fis.media('debug').match('*', {
    optimizer: null,
    useHash: false,
    deploy: fis.plugin('http-push', {
        receiver: 'http://127.0.0.1:8085/yog/upload',
        to: '/'
    })
});
fis.media('debug-prod').match('*', {
    deploy: fis.plugin('http-push', {
        receiver: 'http://127.0.0.1:8085/yog/upload',
        to: '/'
    })
});
