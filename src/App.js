import React, { useState } from "react" 

import JokeList from "./components/JokeList" 
import "./App.css" 

function App() {
  const [dummyJokes, setDummyJokes] = useState(['0'])
  const [isDummy, setIsDummy] = useState(false)
  async function fetchJokesHandler() {
    setIsDummy(true)
    const response = await fetch('https://official-joke-api.appspot.com/random_ten')
    const data = await response.json()
    setDummyJokes(data)
    setIsDummy(false)
  }
  return (
    <React.Fragment>
      <section>
        <button
          onClick={fetchJokesHandler}
        >Fetch Jokes</button>
      </section>
      {
        dummyJokes[0] === '0' && !isDummy ? null :
          <section>
            {
              isDummy ? < JokeList jokes={[{ setup: 'Geting Jokes from GitHub...' }]} /> : < JokeList jokes={dummyJokes} />
            }
          </section>
      }
    </React.Fragment>
  ) 
}

export default App 
