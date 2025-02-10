import React, { useState } from 'react';
import Select from 'react-select';
import hospitalData from './hospitalData';
import './hospital.css';

const Hospital = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedTreatment, setSelectedTreatment] = useState('');

  // Extract unique locations, price ranges, and treatments from hospitalData
  const locations = [...new Set(hospitalData.map(hospital => hospital.location))];
  const priceRanges = [...new Set(hospitalData.map(hospital => hospital.priceRange))];
  const treatments = [...new Set(hospitalData.flatMap(hospital => hospital.services))];

  // Filtering Logic
  const filteredHospitals = hospitalData.filter(hospital => 
    (searchTerm === '' || hospital.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedLocation === '' || hospital.location === selectedLocation) &&
    (selectedPriceRange === '' || hospital.priceRange === selectedPriceRange) &&
    (selectedTreatment === '' || hospital.services.includes(selectedTreatment))
  );

  return (
    <div className="hospital-container">
      <h2 className="hospital-title">Find the Best Hospitals for Your Treatment</h2>

      {/* Search and Filter Section */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search by hospital name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />

        <Select
          options={[{ value: '', label: 'All Locations' }, ...locations.map(loc => ({ value: loc, label: loc }))]}
          onChange={(selected) => setSelectedLocation(selected?.value || '')}
          placeholder="Filter by Location"
          className="filter-dropdown"
        />

        <Select
          options={[{ value: '', label: 'All Price Ranges' }, ...priceRanges.map(price => ({ value: price, label: price }))]}
          onChange={(selected) => setSelectedPriceRange(selected?.value || '')}
          placeholder="Filter by Price"
          className="filter-dropdown"
        />

        <Select
          options={[{ value: '', label: 'All Treatments' }, ...treatments.map(treatment => ({ value: treatment, label: treatment }))]}
          onChange={(selected) => setSelectedTreatment(selected?.value || '')}
          placeholder="Filter by Treatment"
          className="filter-dropdown"
        />
      </div>

      {/* Hospital Cards */}
      <div className="hospital-list">
        {filteredHospitals.length > 0 ? (
          filteredHospitals.map((hospital, index) => (
            <div key={index} className="hospital-card">
              <img src={hospital.image} alt={hospital.name} className="hospital-image" />
              <h3>{hospital.name}</h3>
              <p><strong>Location:</strong> {hospital.location}</p>
              <p><strong>Price Range:</strong> {hospital.priceRange}</p>
              <p><strong>Treatments:</strong> {hospital.services.join(', ')}</p>
              <button className="view-details-btn">View Details</button>
            </div>
          ))
        ) : (
          <p className="no-results">No hospitals found for your selection.</p>
        )}
      </div>
    </div>
  );
};

export default Hospital;
