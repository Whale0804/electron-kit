import React, { PureComponent } from 'react';
import {Button, Icon} from "antd";

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
      <div style={contentWrap}>
       hhhhhhhhhh
      </div>
    );
  }
}

export default Index;
