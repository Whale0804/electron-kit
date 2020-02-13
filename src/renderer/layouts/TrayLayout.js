import React from 'react';
import is from 'electron-is';
import style from './TrayLayout.less'
import constants from '@/constants';
import PopOver from '@/components/PopOver';
import {displayStyle} from '@/utils/utils';

const Layout = ({ children }) => {
    const contentStyle = {
        borderTopLeftRadius: !is.macOS() ? constants.macWinBorderRadius : 0,
        borderTopRightRadius: !is.macOS() ? constants.macWinBorderRadius : 0,
        borderBottomLeftRadius: !is.macOS() ? 0 : constants.nonMacWinBorderRadius,
        borderBottomRightRadius: !is.macOS() ? 0 : constants.nonMacWinBorderRadius,
    };
    return (
        <div className={style.tray}>
            <div className={style.topPopover} style={displayStyle(!is.macOS())}>
                <PopOver position="top" height={12} />
            </div>
            <div className={style.content} style={contentStyle}>
                {children}
            </div>
        </div>
    )
}


export default Layout;
