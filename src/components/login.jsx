import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './login.css';


const Login = ({ onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [user_name, setUserName] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  // Restore user session on page refresh
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      onLoginSuccess(JSON.parse(storedUser));
    }
  }, [onLoginSuccess]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (email === 'admin@admin' && password === 'admin') {
      if (onClose) onClose(); 
      navigate('/admin');
      return;
    }
    
    

    try {
      const response = await fetch(`${BACKEND_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Login failed');
      }

      const data = await response.json();
      localStorage.setItem('user', JSON.stringify(data.user));  // Store user in localStorage
      onLoginSuccess(data.user);
      if (onClose) onClose();
      navigate('/');

    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');  // Clear user data from localStorage
    onLoginSuccess(null); // Reset user state in the parent component
    setTimeout(() => window.location.href = "/", 0);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await fetch(`${BACKEND_URL}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_name, email, password, phone_number, country })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Signup failed');
      }

      alert('Sign up successful! Please login.');
      setIsSignUp(false);

    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <Modal show onHide={onClose} centered className="login-modal">
      <Modal.Header closeButton>
        <Modal.Title>{isSignUp ? 'Sign Up' : 'Login'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        <Form onSubmit={isSignUp ? handleSignUp : handleLogin}>
          {isSignUp && (
            <>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter full name" value={user_name} onChange={(e) => setUserName(e.target.value)} required />
              </Form.Group>
              <Form.Group controlId="formPhoneNumber" className="mt-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter phone number" value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} required />
              </Form.Group>
              <Form.Group controlId="formCountry" className="mt-3">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Enter country" value={country} onChange={(e) => setCountry(e.target.value)} required />
              </Form.Group>
            </>
          )}

          <Form.Group controlId="formBasicEmail" className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-4 w-100">
            {isSignUp ? 'Sign Up' : 'Login'}
          </Button>
        </Form>

        <div className="mt-3 text-center">
          {isSignUp ? (
            <span>Already have an account? </span>
          ) : (
            <span>Don't have an account? </span>
          )}
          <Button variant="link" onClick={() => setIsSignUp(!isSignUp)} className="p-0">
            {isSignUp ? 'Login' : 'Sign Up'}
          </Button>
        </div>

        {/* Logout Button (Visible only when logged in) */}
        {localStorage.getItem('user') && (
          <Button variant="danger" className="mt-3 w-100" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default Login;