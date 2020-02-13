export default [
    [
        'umi-plugin-react',
        {
            antd: true,
            dva: {
                dynamicImport: undefined,
                hmr: true,
            },
            title: "Electron-Kit",
            dll: true,
            hardSource: false,
            routes: {
                exclude: [/components\//],
            },
            locale: {
                default: "zh-CN",
                baseNavigator: false,
                antd: true,
            }
        }
    ],
]
