import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      isOn: false,
      time: 0
    };
  }

  toggle() {
    this.setState({
      isOn: !this.state.isOn
    });
    this.tick();
  }

  reset() {
    if (!this.state.isOn) {
      this.setState({
        time: 0
      });
    }
  }

  tick() {
    if (!this.state.isOn) {
      this.timerID = setInterval(() => {
        const time = this.state.time;
        this.setState({ time: time + 1 });
      }, 1000);
    } else {
      clearInterval(this.timerID);
    }
  }

  render() {
    const icon = `fa-solid fa-${this.state.isOn ? 'pause' : 'play'}`;
    return (
      <div>
        <div className="circle" onClick={this.reset}><span className="number">{this.state.time}</span></div>
        <div className="icon">
          <i className={icon} onClick={this.toggle}></i>
        </div>

      </div>
    );

  }
}
