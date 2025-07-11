import React from 'react';
import './SignupModal.css';

function SignupModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="signup-modal-overlay">
      <div className="signup-modal">
        <button className="signup-modal-close" onClick={onClose}>&times;</button>
        <h2>Sign Up</h2>
        <form className="signup-form">
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="signup-btn">Create account</button>
          <div className="signup-checkbox-row">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              By continuing, I agree to the terms of use & privacy policy.
            </label>
          </div>
        </form>
        <div className="signup-login-link">
          Already have an account? <a href="#">Login here</a>
        </div>
      </div>
    </div>
  );
}

export default SignupModal; 