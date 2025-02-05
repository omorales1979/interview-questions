import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const santasReminder = ["Blitzeb","Comet","Cupid","Dancer","Dasher","Donner","Prancer","Rudolph","Vixen"]

  //new local state for the data filtered 
  const [dataFilter, setDataFilter] = useState([]);

  // function to filter and set to the data filter state
  const search = (event) => {
    let txtsearch = event.target.value;
    return setDataFilter(santasReminder.filter(x => x==txtsearch))
  }

  return (
    <div aling="center">
        <input type="text" placeholder="search" onChange={search} />
        <ul>
        {
          dataFilter.map((item, index) => (
           <li key={index}>{item}</li>
          ))
        }
        </ul>
    </div>
  );
}

export default App;
