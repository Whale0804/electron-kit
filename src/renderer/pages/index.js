import React, { PureComponent } from 'react';
import {Button, Icon} from "antd";

class Index extends PureComponent{
  state = {
    size: 'large'
  }
  render() {
      const {size} = this.state;
    return (
      <div style={{height: '1000px'}}>
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
