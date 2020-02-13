import React, { PureComponent } from 'react';
import style from './index.less';
import {Button, Icon} from "antd";

let contentWrap = {
    height: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    padding: '50px',
    textAlign: 'center'
}

class Index extends PureComponent{
    state = {
        size: 'large'
    }
    render() {
        const {size} = this.state;
        return (
            <div style={contentWrap}>
                <h1>我是托盘页面</h1>
            </div>
        );
    }
}

export default Index;
