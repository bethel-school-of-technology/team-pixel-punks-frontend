import React, { useState } from 'react';
import API from '../Services/API';
import { useParams } from 'react-router-dom';

const UpdateCity = () => {
  let  id  = useParams();

  const [newCity, setNewCity] = useState({
    city: "",
    locationId: id
  });
  
  const handleSubmit = (event) => {
        
        event.preventDefault();
        API.updateCity(newCity);
    }

    const handleChange = (event) => {
      const { value } = event.target
      setNewCity({...newCity, city: value})
  }

  return (
    <div>
      <form className="input" onSubmit={handleSubmit}>
                    <input
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder="city name here"
                        name="city"
                        value={newCity.City}
                    />
                    <button >Update City Name</button>
                </form>
    </div>
  )
}

export default UpdateCity;