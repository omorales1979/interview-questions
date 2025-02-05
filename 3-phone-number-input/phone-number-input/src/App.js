import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <PhoneNumberInput/>
  );
}



function PhoneNumberInput(){

  const [phoneNumber, setPhonumber] = useState("");

  const mask = (event) => {
    var value = event.target.value;
    var match = value.match(/^(\d{3})(\d{3})(\d{4})$/);
    if(match)
      setPhonumber('(' + match[1] + ') ' + match[2] + '-' + match[3]);
  };


  return(<div aling="center">
      <label htmlFor='phoneNumber'>Phone Number</label>
      <input id="phoneNumber" onChange={mask} value={phoneNumber}/>
  </div>)
}

export default App;
