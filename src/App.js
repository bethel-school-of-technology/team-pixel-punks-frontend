import logo from './logo.svg';
import './App.css';

//import API services
import API from './Services/API';

function App() {

  //this function first gets the latitude and longitude via API for a passed in zipcode, then sends the location
  //to another function that gets the weather data via API for the location passed in.
  
  const zipToLocation = (zip) => {
    API.getLatLong(zip).then(res => {

      let latitude = res.data.data[0].latitude.toString();
      let longitude = res.data.data[0].longitude.toString();
      console.log(latitude + " " + longitude);

      const getLocationWeather = API.getWeatherData(latitude, longitude).then(res => {
        console.log(res.data.daily[0].temp.max + " degrees F high temp");
        console.log(res.data.daily[0].temp.min + " degrees F low temp");
      });
    })
  };

  //test code for weather API calls  unsure why the console logs are executing twice each time.
  zipToLocation(90210);



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
