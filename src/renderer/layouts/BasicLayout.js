/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 * You can view component api by:
 * https://github.com/ant-design/ant-design-pro-layout
 */
import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';
import React, { useEffect } from 'react';
import { Link } from 'umi';
import router from 'umi/router';
import { connect } from 'dva';
import { Result, Button } from 'antd';
import { formatMessage } from 'umi-plugin-react/locale';
import Authorized from '@/utils/Authorized';
import RightContent from '@/components/GlobalHeader/RightContent';
import { getAuthorityFromRouter } from '@/utils/utils';
import logo from '../assets/logo/logo.svg';
const noMatch = (
    <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
            <Button type="primary">
                <Link to="/user/login">Go Login</Link>
            </Button>
        }
    />
);

/**
 * use Authorized check all menu item
 */
const menuDataRender = menuList =>
    menuList.map(item => {
        const localItem = { ...item, children: item.children ? menuDataRender(item.children) : [] };
        return Authorized.check(item.authority, localItem, null);
    });

const defaultFooterDom = (
    <DefaultFooter
        copyright="2019 蚂蚁金服体验技术部出品"
        links={[
            {
                key: 'Ant Design Pro',
                title: 'Ant Design Pro',
                href: 'https://pro.ant.design',
                blankTarget: true,
            },
            {
                key: 'github',
                title: 'github',
                href: 'https://github.com/ant-design/ant-design-pro',
                blankTarget: true,
            },
            {
                key: 'Ant Design',
                title: 'Ant Design',
                href: 'https://ant.design',
                blankTarget: true,
            },
        ]}
    />
);

const BasicLayout = props => {
    const {
        dispatch,
        children,
        settings,
        location = {
            pathname: '/',
        },
    } = props;
    /**
     * constructor
     */

    useEffect(() => {
        // if (dispatch) {
        //     dispatch({
        //         type: 'user/fetchCurrent',
        //     });
        // }
        if (props.location.query.isTray == '1'){
            router.replace('/tray/index')
        }
    }, []);
    /**
     * init variables
     */

    const handleMenuCollapse = payload => {
        if (dispatch) {
            dispatch({
                type: 'global/changeLayoutCollapsed',
                payload,
            });
        }
    }; // get children authority

    const authorized = getAuthorityFromRouter(props.route.routes, location.pathname || '/') || {
        authority: undefined,
    };
    return (
        <ProLayout
            logo={logo}
            menuHeaderRender={(logoDom, titleDom) => (
                <Link to="/">
                    {logoDom}
                    {titleDom}
                </Link>
            )}
            onCollapse={handleMenuCollapse}
            menuItemRender={(menuItemProps, defaultDom) => {
                if (menuItemProps.isUrl || menuItemProps.children || !menuItemProps.path) {
                    return defaultDom;
                }

                return <Link to={menuItemProps.path}>{defaultDom}</Link>;
            }}
            // breadcrumbRender={(routers = []) => [
            //     {
            //         path: '/',
            //         breadcrumbName: formatMessage({
            //             id: 'menu.home',
            //             defaultMessage: 'Home',
            //         }),
            //     },
            //     ...routers,
            // ]}
            // itemRender={(route, params, routes, paths) => {
            //     const first = routes.indexOf(route) === 0;
            //     return first ? (
            //         <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
            //     ) : (
            //         <span>{route.breadcrumbName}</span>
            //     );
            // }}
            //footerRender={footerRender}
            menuDataRender={menuDataRender}
            formatMessage={formatMessage}
            rightContentRender={() => <RightContent />}
            {...props}
            {...settings}
        >
            <Authorized authority={authorized.authority} noMatch={noMatch}>
                {children}
            </Authorized>
        </ProLayout>
    );
};

export default connect(({ global, settings }) => ({
    collapsed: global.collapsed,
    settings,
}))(BasicLayout);
