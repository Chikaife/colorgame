import Space from './Space';
import Game from './Game'


import { useState } from "react";

function App() {
const [colorValue, setColorValue] =useState("")


  return (
    <div className="App">
      <Space 
      
      colorValue={colorValue}/>
      <Game
      colorValue={colorValue}
      setColorValue={setColorValue}
      />
      
    </div>
  );
  
}


export default App;
