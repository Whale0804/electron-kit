export default [
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
                path: '/index2',
                name: 'admin',
                icon: 'smile',
                component: './index2',
            },
        ]
    }

]
