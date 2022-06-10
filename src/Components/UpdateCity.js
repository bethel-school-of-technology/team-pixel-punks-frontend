import React, { useState } from 'react';
import API from '../Services/API';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateCity = () => {
  let  id  = useParams();

  const [newCity, setNewCity] = useState({
    city: "",
    locationId: id
  });
  
  const navigate = useNavigate();

  const handleSubmit = (event) => {
        
        event.preventDefault();
        API.updateCity(newCity);
        navigate('/locations');
    }

    const handleChange = (event) => {
      const { value } = event.target
      setNewCity({...newCity, city: value})
  }
  
  return (
    <div>
      <h3>Type a City Name in the box below:</h3>
      <form className="input" onSubmit={handleSubmit}>
                    <input
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder="Input city name here"
                        name="city"
                        value={newCity.City}
                    />
                    <br></br>
                    <div className="text-center">
                    <button  type="button"
                          className="btn btn-primary btn-block custom">Update City Name</button>
                          </div>
                </form>
    </div>
  )
}

export default UpdateCity;