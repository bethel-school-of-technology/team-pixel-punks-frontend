import axios from "axios";

const baseURL = "http://localhost:3001/users"
let loggedIn = false;

const API = {
  updateAlert: (zip) => {
    // API.getLatLong(zip).then(res => {
    //   return API.getWeatherData(res.data.data[0].latitude.toString(), res.data.data[0].longitude.toString());
    // })
    //   .then(res => {
        const maxTemp = 93 //res.data.daily[0].temp.max;
        const hotMsg = "It's gonna get hot, put up your windshield's sun blocker!";
        const minTemp = 72 //res.data.daily[0].temp.min;
        console.log(minTemp + "low and the high is " + maxTemp);
        if (maxTemp > 75) {
          //console.log("it's hot!");
          return (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" className="bi bi-sun" viewBox="0 0 16 16">
            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
          </svg>);
        } else if (minTemp < 33) {
          return (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-snow2" viewBox="0 0 16 16">
            <path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793v-1.086l-.646.647a.5.5 0 0 1-.707-.708L7.5 10.293V8.866l-1.236.713-.495 1.85a.5.5 0 1 1-.966-.26l.237-.882-.94.542-.496 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.884-.237a.5.5 0 1 1 .26-.966l1.848.495.94-.542-.882-.237a.5.5 0 1 1 .258-.966l1.85.495L7 8l-1.236-.713-1.849.495a.5.5 0 1 1-.258-.966l.883-.237-.94-.542-1.85.495a.5.5 0 0 1-.258-.966l.883-.237-1.12-.646a.5.5 0 1 1 .5-.866l1.12.646-.237-.883a.5.5 0 0 1 .966-.258l.495 1.849.94.542-.236-.883a.5.5 0 0 1 .966-.258l.495 1.849 1.236.713V5.707L6.147 4.354a.5.5 0 1 1 .707-.708l.646.647V3.207L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 0 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v1.086l.647-.647a.5.5 0 1 1 .707.708L8.5 5.707v1.427l1.236-.713.495-1.85a.5.5 0 1 1 .966.26l-.236.882.94-.542.495-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495-.94.542.883.237a.5.5 0 1 1-.26.966l-1.848-.495L9 8l1.236.713 1.849-.495a.5.5 0 0 1 .259.966l-.883.237.94.542 1.849-.495a.5.5 0 0 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-.94-.542.236.883a.5.5 0 0 1-.966.258L9.736 9.58 8.5 8.866v1.427l1.354 1.353a.5.5 0 0 1-.707.708l-.647-.647v1.086l1.354 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5z" />
          </svg>);
        } else {
          return ("Relax pal, the weather's going to be just fine!");
        }
      // }

      // )
  },
  
  // //this function takes in two strings, lattitude and longitude
  // //and returns the JSON object from the weather API
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
    axios.post(`${baseURL}/delete-location`, { id: id });
  },
  addLocation: (data) => {
    axios.post(`${baseURL}/add-location`, data);
  }
};

export default API;