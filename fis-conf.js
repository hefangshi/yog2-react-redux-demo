/**
 * @file FIS 配置
 * @author
 */

fis.config.set('namespace', 'home');

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
    autoPack: true
});

// chrome下可以安装插件实现livereload功能
// https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
fis.config.set('livereload.port', 35729);

if (fis.IS_FIS3) {
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
} else {
    fis.config.set('deploy', {
        debug: {
            to: '/',
            // yog2 默认的部署入口，使用调试模式启动 yog2 项目后，这个入口就会生效。IP与端口请根据实际情况调整。
            receiver: 'http://127.0.0.1:8085/yog/upload'
        }
    });
}
