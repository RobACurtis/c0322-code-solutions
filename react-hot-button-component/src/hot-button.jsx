import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { clickCount: 0 };
  }

  handleClick() {
    let i = this.state.clickCount;
    i++;
    this.setState({ clickCount: i });
  }

  render() {
    if (this.state.clickCount < 3) {
      return (<button className="cool" onClick={this.handleClick}>Hot Button</button>);
    } else if (this.state.clickCount >= 3 && this.state.clickCount < 6) {
      return (<button className="less-cool" onClick={this.handleClick}>Hot Button</button>);
    } else if (this.state.clickCount >= 6 && this.state.clickCount < 9) {
      return (<button className="warm" onClick={this.handleClick}>Hot Button</button>);
    } else if (this.state.clickCount >= 9 && this.state.clickCount < 12) {
      return (<button className="warmer" onClick={this.handleClick}>Hot Button</button>);
    } else if (this.state.clickCount >= 12 && this.state.clickCount < 15) {
      return (<button className="hot" onClick={this.handleClick}>Hot Button</button>);
    } else {
      return (<button className="white-hot" onClick={this.handleClick}>Hot Button</button>);
    }
  }
}
