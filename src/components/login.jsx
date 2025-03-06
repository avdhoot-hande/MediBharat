import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = ({ onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (email === 'admin@admin' && password === 'admin') {
      onLoginSuccess({ name: "Admin", email: "admin@admin" });
      navigate('/admin');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Login failed');
      }

      const data = await response.json();
      localStorage.setItem('user', JSON.stringify(data.user));
      onLoginSuccess(data.user);
      if (onClose) onClose();
      navigate('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    onLoginSuccess(null);
    window.location.reload(); // ✅ Force UI refresh
  };

  return (
    <Modal show onHide={onClose} centered className="login-modal">
      <Modal.Header closeButton>
        <Modal.Title>{isSignUp ? 'Sign Up' : 'Login'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formBasicEmail" className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-4 w-100">
            Login
          </Button>
        </Form>

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
