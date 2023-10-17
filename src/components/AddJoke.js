import { useRef } from 'react'
import '../App.css'
function AddJoke({ className }) {
  const typeRef = useRef()
  const setupRef = useRef()
  const punchlineRef = useRef()
  function submitHandler(e) {
    e.preventDefault()
    const joke = {
      type: typeRef.current.value,
      setup: setupRef.current.value,
      punchlineRef: punchlineRef.current.value,
    } 
    postJoke(joke)
  }
  async function postJoke(object) {
    const response = await fetch('https://post-joke-default-rtdb.firebaseio.com/jokes.json', {
      method: 'POST',
      body: JSON.stringify(object),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data)
  }
  return (
    <form action=""
      className={className}
      onSubmit={submitHandler}
    >
      <label htmlFor="type">type</label>
      <input type="text" id='type' ref={typeRef}/>
      <label htmlFor="setup" >setup</label>
      <textarea type="text" id='setup' row={4} ref={setupRef}/>
      <label htmlFor="punchline" >punchline</label>
      <textarea type="text" id='punchline' row={4} ref={punchlineRef} />
      <button className='button' style={{ width: '35%', margin: '0 auto'}}>Add Joke</button>
    </form>
  )
}
export default AddJoke