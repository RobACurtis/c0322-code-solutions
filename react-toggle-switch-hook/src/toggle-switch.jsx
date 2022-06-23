import React, { useState } from 'react';

export default function ToggleSwitch() {
  const [toggleOn, toggle] = useState(false);

  return (
    <div>
        <button onClick={() => toggle(!toggleOn)} className={toggleOn ? 'button-on' : 'button-off'}><div></div></button>
        <p> {toggleOn ? 'On' : 'Off'} </p>
    </div>
  );
}
