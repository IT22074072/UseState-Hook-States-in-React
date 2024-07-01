import "./App.css";
import { useState } from "react"; //to create a state(for the state management)

function App() {
  const [inputValue, setInputValue] = useState("");


  //event - to grab the information about the input
  const handleInputChange =(event)=>{
    setInputValue(event.target.value);

  }
  return (
    <div className="app">
      <input type="text" onChange={handleInputChange}/>
      {inputValue}
    </div>
  );
}

/*
function App() {
  const [age, setAge] = useState(0)
  
  const increaseAge = () =>{
  setAge(age + 1);

  };

  return (
    <div className="app">
      {age}
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
}

*/
export default App;
