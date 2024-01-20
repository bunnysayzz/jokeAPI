import React, { useState } from 'react';
const JokeGenerator = () => {
  const [joke, setJoke] = useState({ setup: '', punchline: '' });
  const fetchJoke = () => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(data => setJoke(data));
  };
  fetchJoke(); 
  return (
    <h1>
      <div>
        <h2>Joke Generator</h2>
        <button onClick={fetchJoke}>Generate Joke</button>
        <div>
          <strong>Setup:</strong> {joke.setup}
        </div>
        <div>
          <strong>Punchline:</strong> {joke.punchline}
        </div>
      </div>
    </h1>
  );
};
export default JokeGenerator;