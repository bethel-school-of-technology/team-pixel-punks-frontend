import axios from "axios";

const baseURL = "http://localhost:3001/users"
let loggedIn = false;

const API = {

  //this function first gets the latitude and longitude via API for a passed in zipcode, then sends the location
  //to another function that gets the weather data via API for the location passed in.
  getWeather: (zip) => {
    API.getLatLong(zip).then(res => {

      let latitude = res.data.data[0].latitude.toString();
      let longitude = res.data.data[0].longitude.toString();
      console.log(latitude + " " + longitude);

      const getLocationWeather = API.getWeatherData(latitude, longitude).then(res => {
        console.log(res.data.daily[0].temp.max + " degrees F high temp");
        console.log(res.data.daily[0].temp.min + " degrees F low temp");
      });
    })
  },

  //this function takes in two strings, lattitude and longitude
  //and returns the JSON object from the weather API
  getWeatherData: (lat, long) => {
    return axios.get('https://api.openweathermap.org/data/2.5/onecall?lat='
      + lat
      + '&lon=' + long
      + '&exclude=hourly,minutely,alerts&units=imperial&appid=58d0361f438e67f6c23c40e7d62a5c84');
  },
  getLatLong: (zip) => {
    return axios.get
      ('http://api.positionstack.com/v1/forward?access_key=3f10f040b0272fd0c5f95ea64844da9e&query='
        + zip);
  },
  createUser: (newUser) => {
    return axios.post(baseURL + '/sign-up', newUser);
  },
  login: (user) => {
    loggedIn = true;
    return axios.post(`${baseURL}/login`, user);
  },
  getUserLocations: () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
     return axios.get(`${baseURL}/locations`, config);
  },
  logout: () => {
    loggedIn = false;
    localStorage.setItem("token", "");
    alert('logout successful');
    return axios.get(`${baseURL}/logout`);
  },
  deleteLocation: (id) => {
    return axios.post(`${baseURL}/delete-location`, {id: id});
  },
  addLocation: (data) => {
    return axios.post(`${baseURL}/add-location`, data);
  }
};

export default API;