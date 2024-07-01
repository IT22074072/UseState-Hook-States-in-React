import "./App.css";
import {useState} from "react";  //to create a state

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

export default App;
