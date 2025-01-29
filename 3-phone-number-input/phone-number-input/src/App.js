import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <PhoneNumberInput/>
  );
}


function PhoneNumberInput(){
  return(<div aling="center">
      <label htmlFor='phoneNumber'>Phone Number</label>
      <input id="phoneNumber"/>
  </div>)
}

export default App;
