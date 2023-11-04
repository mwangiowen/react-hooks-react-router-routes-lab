import React from 'react';
import { directors } from '../data'; // Import the director data

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <div key={index}>
          <h2>Name: {director.name}</h2>
          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors;
