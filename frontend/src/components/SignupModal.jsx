import React, { useState } from 'react';
import './SignupModal.css';

function SignupModal({ open, onClose }) {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    city: '',
    country: '',
    street: '',
    terms: false,
  });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    switch (name) {
      case 'name':
        if (!value) return 'Name is required.';
        if (value.length < 2) return 'Name must be at least 2 characters.';
        return '';
      case 'email':
        if (!value) return 'Email is required.';
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) return 'Invalid email address.';
        return '';
      case 'password':
        if (!value) return 'Password is required.';
        if (value.length < 6) return 'Password must be at least 6 characters.';
        return '';
      case 'confirmPassword':
        if (!value) return 'Please confirm your password.';
        if (value !== fields.password) return 'Passwords do not match.';
        return '';
      case 'city':
        if (!value) return 'City is required.';
        return '';
      case 'country':
        if (!value) return 'Country is required.';
        return '';
      case 'street':
        if (!value) return 'Street is required.';
        return '';
      case 'terms':
        if (!value) return 'You must agree to the terms.';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFields((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validate(name, type === 'checkbox' ? checked : value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validate(name, type === 'checkbox' ? checked : value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate all fields on submit
    const newErrors = {};
    Object.keys(fields).forEach((key) => {
      newErrors[key] = validate(key, fields[key]);
    });
    setErrors(newErrors);
    setTouched(Object.keys(fields).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
    if (Object.values(newErrors).every((err) => !err)) {
      // Submit logic here
      alert('Sign up successful!');
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div className="signup-modal-overlay">
      <div className="signup-modal">
        <button className="signup-modal-close" onClick={onClose}>&times;</button>
        <h2>Sign Up</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={fields.name}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
          {touched.name && errors.name && <div className="signup-error">{errors.name}</div>}

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={fields.email}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
          {touched.email && errors.email && <div className="signup-error">{errors.email}</div>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={fields.password}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
          {touched.password && errors.password && <div className="signup-error">{errors.password}</div>}

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={fields.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
          {touched.confirmPassword && errors.confirmPassword && <div className="signup-error">{errors.confirmPassword}</div>}

          <input
            type="text"
            name="city"
            placeholder="City"
            value={fields.city}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
          {touched.city && errors.city && <div className="signup-error">{errors.city}</div>}

          <input
            type="text"
            name="country"
            placeholder="Country"
            value={fields.country}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
          {touched.country && errors.country && <div className="signup-error">{errors.country}</div>}

          <input
            type="text"
            name="street"
            placeholder="Street"
            value={fields.street}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
          {touched.street && errors.street && <div className="signup-error">{errors.street}</div>}

          <button type="submit" className="signup-btn">Create account</button>
          <div className="signup-checkbox-row">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={fields.terms}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <label htmlFor="terms">
              By continuing, I agree to the terms of use & privacy policy.
            </label>
          </div>
          {touched.terms && errors.terms && <div className="signup-error">{errors.terms}</div>}
        </form>
        <div className="signup-login-link">
          Already have an account? <a href="#">Login here</a>
        </div>
      </div>
    </div>
  );
}

export default SignupModal; 