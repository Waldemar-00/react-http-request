import React, { useState, useEffect } from "react" 
import JokeList from "./components/JokeList" 
import AddJoke from './components/AddJoke'
import style from './components/AddJoke.module.css'
import "./App.css" 

function App() {
  const [dummyJokes, setDummyJokes] = useState(['0'])
  const [isDummy, setIsDummy] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
    fetchJokesHandler()
  }, [])
  async function fetchJokesHandler() {
    setIsDummy(true)
    setError(null)
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_ten')
      if (!response.ok) {
        throw new Error(`Response status - ${response.status} / Somthing wrong!`)
      }
      const data = await response.json()
      setDummyJokes(data)
    } catch(throwError) {
      setError(throwError)
      console.log(throwError)
    }
    setIsDummy(false)
  }
  return (
    <React.Fragment>
      <section>
        <button className="button"
          onClick={fetchJokesHandler}
        >Fetch Jokes</button>
      </section>
      <section>
        {
          !isDummy && error ?
            < JokeList jokes={[{ setup: error.message }]} /> :
          dummyJokes[0] === '0' && !isDummy && !error ?
            < JokeList jokes={[{ setup: 'Jokes were not finded' }]} /> :
            isDummy ?
              < JokeList jokes={[{ setup: 'Geting Jokes from GitHub...' }]} /> : < JokeList jokes={dummyJokes} />
        }
      </section>
      <section>
        <h2 className='h2'>Write your Joke</h2>
        <AddJoke className={style.form} />
      </section>
    </React.Fragment>
  ) 
}

export default App 
