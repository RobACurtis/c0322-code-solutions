import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';

const list = [
  {
    id: 1,
    topic: 'HTML',
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  Voluptates vitae provident placeat laboriosam distinctio,
  unde optio nisi adipisci at doloribus. Quas voluptatem exercitationem
  ratione temporibus? Dolorem quam velit reprehenderit asperiores?`
  },
  {
    id: 2,
    topic: 'Cascading Style Sheets',
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  Voluptates vitae provident placeat laboriosam distinctio,
  unde optio nisi adipisci at doloribus. Quas voluptatem exercitationem
  ratione temporibus? Dolorem quam velit reprehenderit asperiores?`
  },
  {
    id: 3,
    topic: 'JavaScript',
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  Voluptates vitae provident placeat laboriosam distinctio,
  unde optio nisi adipisci at doloribus. Quas voluptatem exercitationem
  ratione temporibus? Dolorem quam velit reprehenderit asperiores?`
  }
];

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(< Accordion list = {list}/>);
