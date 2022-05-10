import axios from "axios";

const API = {

  //this function takes in two strings, lattitude and longitude
  //and returns the JSON object from the weather API
  getWeatherData: (lat, long) => {
    return axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=' 
    + lat 
    + '&lon=' + long 
    + '&exclude=hourly,minutely,alerts&units=imperial&appid=58d0361f438e67f6c23c40e7d62a5c84');
  }

}

export default API;