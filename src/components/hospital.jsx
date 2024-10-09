import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select'; // Import react-select
import hospitalData from '../data/hospitalData';
import './hospital.css';

const Hospital = () => {
  const [locationFilter, setLocationFilter] = useState(null); // State for location filter
  const [priceFilter, setPriceFilter] = useState(null); // State for price range filter

  // Get unique locations and price ranges dynamically from data
  const uniqueLocations = [...new Set(hospitalData.map(hospital => hospital.location))];
  const uniquePriceRanges = [...new Set(hospitalData.map(hospital => hospital.priceRange))];

  // Convert unique locations and price ranges into format that react-select accepts
  const locationOptions = uniqueLocations.map(location => ({ value: location, label: location }));
  const priceOptions = uniquePriceRanges.map(price => ({ value: price, label: price }));

  // Filter hospitals based on selected filters
  const filteredHospitals = hospitalData.filter((hospital) => {
    return (
      (!locationFilter || hospital.location === locationFilter.value) && // Apply location filter
      (!priceFilter || hospital.priceRange === priceFilter.value) // Apply price range filter
    );
  });

  return (
    <div className="hospital-page">
      {/* Sidebar for filtering */}
      <div className="sidebar">
        <h3>Filter Hospitals</h3>

        {/* Location Filter */}
        <h4>Location</h4>
        <Select
          options={locationOptions} // Dynamic location options
          onChange={(selectedOption) => setLocationFilter(selectedOption)} // Handle location selection
          isClearable // Allow clearing the selection
          placeholder="Select a location"
        />

        {/* Price Range Filter */}
        <h4>Price Range</h4>
        <Select
          options={priceOptions} // Dynamic price options
          onChange={(selectedOption) => setPriceFilter(selectedOption)} // Handle price selection
          isClearable // Allow clearing the selection
          placeholder="Select a price range"
        />
      </div>

      {/* Hospital Cards */}
      <div className="hospital-cards">
        {filteredHospitals.length > 0 ? (
          filteredHospitals.map((hospital, index) => (
            <div key={index} className="hospital-card">
              <img
                src={hospital.image}
                alt={hospital.name}
                style={{ width: '100%', borderRadius: '10px' }}
              />
              <h3>{hospital.name}</h3>
              <p><strong>Location:</strong> {hospital.location}</p>
              <p><strong>Services:</strong> {hospital.description}</p>
              <p><strong>Price Range:</strong> {hospital.priceRange}</p>
              <Link to={`/hospital/${hospital.name}`}>View Details</Link> {/* Dynamic link */}
            </div>
          ))
        ) : (
          <p>No hospitals match your filters.</p>
        )}
      </div>
    </div>
  );
};

export default Hospital;
