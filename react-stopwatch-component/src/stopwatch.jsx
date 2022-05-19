import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOn: false,
      time: 0
    };
  }

  toggle() {
    this.setState({
      isOn: !this.state.isOn
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    let time = this.state.time;
    this.setState({ time: time++ });
  }

  render() {
    const icon = `fa-solid fa-${this.state.isOn ? 'pause' : 'play'}`;
    return (
      <div>
        <div className="circle"><span className="number">{this.state.time}</span></div>
        <div className="icon">
          <i className={icon} onClick={this.toggle}></i>
        </div>

      </div>
    );

  }
}
