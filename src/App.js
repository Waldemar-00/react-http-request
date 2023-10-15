import React, { useState } from "react" 

import JokeList from "./components/JokeList" 
import "./App.css" 

function App() {
  const [dummyJokes, setDummyJokes] = useState([])
  function fetchJokesHandler() {
    fetch('https://official-joke-api.appspot.com/random_ten')
      .then(response => response.json()).then(data => setDummyJokes(data))
  }
  return (
    <React.Fragment>
      <section>
        <button
          onClick={fetchJokesHandler}
        >Fetch Jokes</button>
      </section>
      <section>
        <JokeList jokes={dummyJokes} />
      </section>
    </React.Fragment>
  ) 
}

export default App 
