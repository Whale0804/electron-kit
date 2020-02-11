import React, { PureComponent } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';
import {Button, Icon} from "antd";
import styles from './index.less';

let contentWrap = {
    height: '100%',
    overflowY: 'auto',
    overflowX: 'hidden'
}

class Index extends PureComponent{
  state = {
    size: 'large'
  }
  render() {
      const {size} = this.state;
    return (
        <PageHeaderWrapper>
          <div style={contentWrap}>
            <Button type="primary">Primary</Button>
            <Button.Group size={size}>
              <Button type="primary">
                <Icon type="left" />
                Backward
              </Button>
              <Button type="primary">
                Forward
                <Icon type="right" />
              </Button>
            </Button.Group>
          </div>
        </PageHeaderWrapper>
    );
  }
}

export default Index;
