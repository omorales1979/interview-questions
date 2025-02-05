import './App.css';
import React, {useEffect, useState}  from 'react'

function App() {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(-1);

  useEffect(()=> {setCount(count+1)}, [value]); // add the variable value to verify if change

  const onChange = ({target})=> setValue(target.value);

  return (
    <div>
        <input type="text" value={value} onChange={onChange} />
        <div>Number of changes : {count}</div>
    </div>
  );
}

export default App;
