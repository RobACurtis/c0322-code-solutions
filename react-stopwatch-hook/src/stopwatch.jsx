import React, { useState } from 'react';

export default function StopWatch() {

  const [isOn, toggle] = useState(false);
  const [time, tick] = useState(0);
  const [interval, setCounter] = useState();

  const click = () => {
    if (!isOn) {
      toggle(true);
      setCounter(setInterval(() => counter(), 1000));
    } else {
      toggle(false);
      setCounter(clearInterval(interval));
    }
  };

  const counter = () => {
    tick(prevTime => prevTime + 1);
  };

  const reset = () => {
    if (!isOn) { tick(0); }
  };

  const icon = `fa-solid fa-${isOn ? 'pause' : 'play'}`;
  return (
      <div>
        <div className="circle" onClick={reset}><span className="number">{time}</span></div>
        <div className="icon">
          <i className={icon} onClick={click}></i>
        </div>
      </div>
  );

}
