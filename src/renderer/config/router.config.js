export default [
    {
        path: '/tray',
        component: '../layouts/TrayLayout',
        routes: [
            {
                name: 'login',
                path: '/tray/index',
                component: './tray/index',
            },
        ],
    },
    {
        path: "/",
        component: "../layouts/BasicLayout",
        routes: [
            {
                path: '/',
                redirect: '/index',
            },
            {
                path: '/index',
                name: 'welcome',
                icon: 'smile',
                component: './index/index',
            },{
                path: '/test',
                name: 'admin',
                icon: 'smile',
                component: './index2',
            },
        ]
    }
]
