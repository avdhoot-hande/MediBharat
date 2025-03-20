import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaPlane, FaHospital, FaUserMd } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-[550px] flex  pt-5 md:pt-10"
      style={{
        backgroundImage: "url('slider-bg-1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '550px',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-2  text-md-start">
            <div className="mb-3" style={{ width: '40px', height: '4px', backgroundColor: '#e12454' }}></div>
            <span className="text-uppercase text-muted small d-block mb-2">Total Health care solution</span>
            <h1 className="display-5 fw-bold mb-3" style={{ color: '#004085' }}>Healthcare Beyond Borders</h1>
            <p className="text-muted mb-4">
              Receive top-quality medical care while exploring new destinations. Affordable treatments, expert specialists, and personalized support—because your well-being knows no boundaries.
            </p>
            
            <Link
              to="/doctor"
              className="btn text-white btn-lg"
              style={{ backgroundColor: '#e12454' }}
            >
              Make appointment <i className="icofont-simple-right ms-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureBox = ({ icon, title, subtitle, description, children }) => (
  <div className="bg-white rounded shadow p-4 text-center text-md-start h-100">
    <div className="mb-3" style={{ color: '#004085', fontSize: '2rem' }}>
      <i className="d-flex ">{icon}</i>
    </div>
    <div className="text-muted small fw-semibold mb-1">{subtitle}</div>
    <h5 className="fw-bold mb-3" style={{ color: '#004085' }}>{title}</h5>
    {description && <p className="text-muted small mb-3">{description}</p>}
    {children}
  </div>
);

const FeaturesSection = () => {
  return (
    <section className="position-relative" style={{ marginTop: '-100px', zIndex: '10' }}>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <FeatureBox
              icon = { <FaHeart /> }
              title="Personalized Care"
              subtitle="24 Hours Service"
              description="Get the best personalized medical care from top specialists."
            >
              {/* <Link
                to="/appoinment"
                className="btn btn-sm text-white"
                style={{ backgroundColor: '#004085' }}
              >
                Make an appointment
              </Link> */}
            </FeatureBox>
          </div>

          <div className="col-md-4">
            <FeatureBox
              icon={<FaHospital />}
              title="Top Hospitals"
              subtitle="World class cerfied hospital"
              description="Receive treatment from internationally recognized hospitals."
            >
            </FeatureBox>
          </div>

          <div className="col-md-4">
            <FeatureBox
              icon={<FaUserMd/>}
              title="Expert Doctors"
              subtitle="Specialist "
              description="Consult with experienced and trusted medical professionals."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
    </div>
  );
};

export default HomePage;
