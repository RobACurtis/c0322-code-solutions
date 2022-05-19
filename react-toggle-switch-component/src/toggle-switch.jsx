import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { toggleOn: true };
  }

  toggle() {
    this.setState(prevState => ({
      toggleOn: !prevState.toggleOn
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.toggle} className={this.state.toggleOn ? 'button-on' : 'button-off'}><div></div></button>
        <p> {this.state.toggleOn ? 'On' : 'Off'} </p>
      </div>
    );
  }
}
