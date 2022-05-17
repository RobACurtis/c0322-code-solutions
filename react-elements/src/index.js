import React from 'react';
import * as ReactDOM from 'react-dom/client';

const h1 = React.createElement('h1', null, 'Hello React!');
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(h1);
console.log('Hello React', h1);
