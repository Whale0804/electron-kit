import React, { PureComponent } from 'react';
import {Button, Icon} from "antd";
import { connect } from 'dva';

@connect(({ global }) => ({ global }))
class Index extends PureComponent{
  state = {
    size: 'large'
  }
  render() {
      const {size} = this.state;
    return (
      <div>
        <p>{this.props.global.msg}</p>
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
    );
  }
}

export default Index;
