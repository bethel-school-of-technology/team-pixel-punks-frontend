import axios from "axios";

const baseURL = "http://localhost:3001/users"
let loggedIn = false;

const API = {

  //this function takes in a zipcode, calls an API that returns the latitude and longitude
  getLatLong: (zip) => {
     return axios.get
      ('http://api.positionstack.com/v1/forward?access_key=3f10f040b0272fd0c5f95ea64844da9e&query='
        + zip);
  },
  //this function takes in two strings, lattitude and longitude
  //and returns the JSON object from the weather API
  getWeatherData: (lat, long) => {
    return axios.get('https://api.openweathermap.org/data/2.5/onecall?lat='
      + lat
      + '&lon=' + long
      + '&exclude=hourly,minutely,alerts&units=imperial&appid=58d0361f438e67f6c23c40e7d62a5c84');
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
    axios.post(`${baseURL}/delete-location`, { id: id });
  },
  addLocation: (data) => {
    data.latitude = "";
    data.longitude = "";
    API.getLatLong(data.zipcode).then(res => {
      console.log(res.data.data[1].latitude.toString());
      data.latitude = res.data.data[1].latitude.toString();
      data.longitude = res.data.data[0].longitude.toString();
      return axios.post(`${baseURL}/add-location`, data);
    })
    
  }
};

export default API;