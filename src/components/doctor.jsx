import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { FaHeart } from 'react-icons/fa';
import { IoCloseCircle } from 'react-icons/io5';
import './doctor.css';

const Doctor = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 9999999]);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/doctors')
      .then(response => {
        if (Array.isArray(response.data)) {
          setDoctors(response.data);
          setFilteredDoctors(response.data);
        } else {
          console.error("Unexpected data format:", response.data);
        }
      })
      .catch(error => console.error('Error fetching doctors:', error));
  }, []);

  useEffect(() => {
    setFilteredDoctors(doctors.filter(doctor =>
      (
        doctor.name?.toLowerCase().includes(search.toLowerCase()) ||
        doctor.hospital_name?.toLowerCase().includes(search.toLowerCase()) ||
        doctor.specialization?.toLowerCase().includes(search.toLowerCase()) ||
        doctor.treatment?.toLowerCase().includes(search.toLowerCase())
      ) &&
      (!location || doctor.city === location.value) &&  // FIXED LOCATION FILTER
      (!priceRange || (
        Number(doctor.price || 0) >= priceRange[0] &&
        Number(doctor.price || 0) <= priceRange[1]
      ))
    ));
  }, [search, location, priceRange, doctors]);

  const locationOptions = [...new Set(doctors.map(d => d.city))].map(city => ({ value: city, label: city }));

  const toggleFavorite = (doctor) => {
    setFavorites(prev => prev.includes(doctor.d_id) ? prev.filter(id => id !== doctor.d_id) : [...prev, doctor.d_id]);
  };

  return (
    <div className="doctor-container">
      <h2 className="doctor-title">Doctors</h2>
      <div className="filters">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search by name, hospital, specialization, or treatment" 
            value={search} 
            onChange={e => setSearch(e.target.value)} 
            className="search-bar"
          />
          {search && <IoCloseCircle className="clear-icon" onClick={() => setSearch('')} />}
        </div>
        <div className="location-container">
          <Select 
            options={locationOptions} 
            placeholder="Select City" 
            value={location}
            onChange={setLocation} 
            className="filter-dropdown"
          />
          {location && <IoCloseCircle className="clear-icon" onClick={() => setLocation(null)} />}
        </div>
        <div className="price-slider-container">
          <label>Price Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}</label>
          <Slider 
            range 
            min={0} 
            max={9999999} 
            step={1000} 
            value={priceRange} 
            onChange={setPriceRange} 
            className="price-slider"
          />
        </div>
      </div>

      <div className="doctor-list">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map(doctor => (
            <div 
              key={doctor.d_id} 
              className="doctor-card"
              onClick={() => navigate(`/doctor/${doctor.d_id}`)}
            >
              <div className="doctor-image-container">
                <img 
                  src={doctor.img} 
                  alt={doctor.name} 
                  className="doctor-image"
                  onError={(e) => { e.target.src = "/placeholder.png"; }}
                />
              </div>
              <h3>{doctor.name}</h3>
              <p><strong>Specialization:</strong> {doctor.specialization}</p>
              <p><strong>Hospital:</strong> {doctor.hospital_name}</p>
              <p><strong>City:</strong> {doctor.city}</p>
              <p><strong>Years of Experience:</strong> {doctor.years}</p>
              <p><strong>Price:</strong> ₹{doctor.price ? doctor.price.toLocaleString() : "Not available"}</p>
              
              
            </div>
          ))
        ) : (
          <p className="no-results">No doctors available</p>
        )}
      </div>
    </div>
  );
};

export default Doctor;
