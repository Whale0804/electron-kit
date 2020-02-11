import React, { PureComponent } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { formatMessage } from 'umi-plugin-locale';
import {Button, Icon} from "antd";
import styles from './index.less';

class Index extends PureComponent{
  render() {
    return (
        <PageHeaderWrapper>
            <div className={styles.normal}>
                <div className={styles.welcome} />
                <ul className={styles.list}>
                    <li>To get started, edit <code>src/pages/index/index.js</code> and save to reload.</li>
                    <li>
                        <a href="https://umijs.org/guide/getting-started.html">
                            {formatMessage({ id: 'menu.welcome' })}
                        </a>
                    </li>
                </ul>
            </div>
        </PageHeaderWrapper>
    );
  }
}

export default Index;
