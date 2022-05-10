import logo from './logo.svg';
import './App.css';

//import API services
import API from './Services/API';

function App() {

  const testWeatherAPI = API.getWeatherData('38','-104').then(res => {
    console.log(res.data.daily[0].temp.max);
    console.log(res.data.daily[0].temp.min);
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
