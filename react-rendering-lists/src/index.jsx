import React from 'react';
import ReactDOM from 'react-dom/client';

function List() {
  const ListItems = pokedex.map(pokemon =>
   <li key={pokemon.number.toString()}>{pokemon.name}</li>
  );
  return (
    <ul>{ListItems}</ul>
  );
}

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<List />);
