import logo from './logo.svg';
import './App.css';

//import API services
import API from './Services/API';

function App() {


  //await promise, then console log the next day's high and low temperature to the console.
  //more data is available in the raw data, we can include more if necessary/wanted.
  const testWeatherAPI = API.getWeatherData('38','-104').then(res => {
    console.log(res.data.daily[0].temp.max + " degrees F high temp");
    console.log(res.data.daily[0].temp.min + " degrees F low temp");
  });
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
