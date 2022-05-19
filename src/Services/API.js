import axios from "axios";

const baseURL = "http://localhost:3001/users"

const API = {

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
  getLocationsById: (id) => {
    return axios.get(`${baseURL}/${id}`);
  },
  createUser: (newUser) => {
    return axios.post(baseURL + '/sign-up', newUser);
  },
  login: (user) => {
    return axios.post(`${baseURL}/login`, user)
  }
};

export default API;