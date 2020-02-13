import React from 'react';
import style from './TrayLayout.less'
import constants from '@/constants';
import PopOver from '@/components/PopOver';
import {displayStyle,isOsx} from '@/utils/utils';

const Layout = ({ children }) => {
    const contentStyle = {
        borderTopLeftRadius: isOsx() ? constants.macWinBorderRadius : 0,
        borderTopRightRadius: isOsx() ? constants.macWinBorderRadius : 0,
        borderBottomLeftRadius: isOsx() ? 0 : constants.nonMacWinBorderRadius,
        borderBottomRightRadius: isOsx() ? 0 : constants.nonMacWinBorderRadius,
    };
    return (
        <div className={style.tray}>
            <div className={style.topPopover} style={displayStyle(isOsx())}>
                <PopOver position="top" height={12} />
            </div>
            <div className={style.content} style={contentStyle}>
                {children}
            </div>
        </div>
    )
}


export default Layout;
