const Game = ({colorValue, setColorValue}) => {
    return (
  <form onSubmit={(e) => e.preventDefault}>
  <label>Add Color Name:</label>
      <input type="text" 
  placeholder="Add color name"
  required={(e) => setColorValue(e.target.value)}
  value={colorValue}
  onChange={(e) => setColorValue(e.target.value)}
  
  />
 
  
  </form>
     
    )
  }
  
  export default Game