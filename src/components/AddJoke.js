function AddJoke({className}) {
  return (
    <form action="" className={className}>
      <label htmlFor="type">type</label>
      <input type="text" id='type'/>
      <label htmlFor="setup" >setup</label>
      <input type="text" id='setup' />
      <label htmlFor="punchline" >punchline</label>
      <input type="text" id='punchline' />
    </form>
  )
}
export default AddJoke