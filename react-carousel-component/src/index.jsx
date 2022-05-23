import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const list = [
  '../images/surf.webp',
  '../images/surf1.jpg',
  '../images/surf2.jpg',
  '../images/surf3.jpg',
  '../images/surf4.jpg'
];

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Carousel list={list}/>);
