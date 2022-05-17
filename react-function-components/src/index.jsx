import React from 'react';
import ReactDOM from 'react-dom/client';

function CustomButton() {
  const myButton = <button> Click Me! </button>;
  return myButton;
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(CustomButton());
