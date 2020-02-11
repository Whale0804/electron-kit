export default [
    [
        'umi-plugin-react',
        {
            antd: true,
            dva: {
                hmr: true,
            },
            dynamicImport: {
                loadingComponent: './components/PageLoading/index',
                webpackChunkName: true,
                level: 3,
            },
            title: 'Hello World',
            dll: true,
            hardSource: false,
            routes: {
                exclude: [/components/],
            },
            locale: {
                // default false
                enable: true,
                // default zh-CN
                default: 'zh-CN',
                // default true, when it is true, will use `navigator.language` overwrite default
                baseNavigator: true,
            },
        },
    ],
]
