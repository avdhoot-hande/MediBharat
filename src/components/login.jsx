// src/components/login.jsx
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './login.css'; // Ensure you have this CSS file for styling

const Login = ({ onClose, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('users')) || {};

    if (storedUsers[username] && storedUsers[username].password === password) {
      onLoginSuccess(username);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('users')) || {};

    if (storedUsers[username]) {
      alert('User already exists. Please login.');
    } else {
      storedUsers[username] = { password };
      localStorage.setItem('users', JSON.stringify(storedUsers));
      alert('Sign up successful! Please login.');
      setIsSignUp(false);
    }
  };

  const handleForgotPassword = () => {
    alert('Password reset link sent to: ' + email);
    setForgotPassword(false); // Hide the email field after reset
    setEmail('');
  };

  return (
    <Modal show onHide={onClose} centered className="login-modal">
      <Modal.Header closeButton>
        <Modal.Title>{isSignUp ? 'Sign Up' : 'Login'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={isSignUp ? handleSignUp : handleLogin}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>{isSignUp ? 'Username' : 'Enter Username'}</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          {!isSignUp && (
            <>
              {!forgotPassword && (
                <div className="text-end mt-2">
                  <Button variant="link" onClick={() => setForgotPassword(true)} className="p-0">
                    Forgot Password?
                  </Button>
                </div>
              )}
              {forgotPassword && (
                <Form.Group controlId="formForgotPassword" className="mt-3">
                  <Form.Label>Enter your email to reset password</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button variant="link" onClick={handleForgotPassword} className="p-0">
                    Send Reset Link
                  </Button>
                </Form.Group>
              )}
            </>
          )}

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
      </Modal.Body>
    </Modal>
  );
};

export default Login;
