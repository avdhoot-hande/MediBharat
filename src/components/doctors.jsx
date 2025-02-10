import React, { useState } from 'react';
import Select from 'react-select';
import doctorData from './doctorData';
import './doctors.css';

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  // Extract unique locations, specializations, and price ranges from doctorData
  const locations = [...new Set(doctorData.map(doctor => doctor.location))];
  const specializations = [...new Set(doctorData.map(doctor => doctor.specialization))];
  const priceRanges = [...new Set(doctorData.map(doctor => doctor.priceRange))];

  // Filtering Logic
  const filteredDoctors = doctorData.filter(doctor => 
    (searchTerm === '' || doctor.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedLocation === '' || doctor.location === selectedLocation) &&
    (selectedSpecialization === '' || doctor.specialization === selectedSpecialization) &&
    (selectedPriceRange === '' || doctor.priceRange === selectedPriceRange)
  );

  return (
    <div className="doctor-container">
      <h2 className="doctor-title">Find the Best Doctors for Your Treatment</h2>

      {/* Search and Filter Section */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search by doctor name..."
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
          options={[{ value: '', label: 'All Specializations' }, ...specializations.map(spec => ({ value: spec, label: spec }))]}
          onChange={(selected) => setSelectedSpecialization(selected?.value || '')}
          placeholder="Filter by Specialization"
          className="filter-dropdown"
        />

        <Select
          options={[{ value: '', label: 'All Price Ranges' }, ...priceRanges.map(price => ({ value: price, label: price }))]}
          onChange={(selected) => setSelectedPriceRange(selected?.value || '')}
          placeholder="Filter by Price"
          className="filter-dropdown"
        />
      </div>

      {/* Doctor Cards */}
      <div className="doctor-list">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor, index) => (
            <div key={index} className="doctor-card">
              <img src={doctor.image} alt={doctor.name} className="doctor-image" />
              <h3>{doctor.name}</h3>
              <p><strong>Location:</strong> {doctor.location}</p>
              <p><strong>Specialization:</strong> {doctor.specialization}</p>
              <p><strong>Price Range:</strong> {doctor.priceRange}</p>
              <button className="book-appointment">Book Appointment</button>
            </div>
          ))
        ) : (
          <p className="no-results">No doctors found for your selection.</p>
        )}
      </div>
    </div>
  );
};

export default Doctors;
