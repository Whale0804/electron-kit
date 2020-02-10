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
                name: 'home',
                icon: 'smile',
                component: './index',
            },
        ]
    }

]
