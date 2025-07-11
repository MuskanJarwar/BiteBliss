import React, { useState, useEffect } from 'react';
import './SignupModal.css';

function SignupModal({ open, onClose }) {
  const [showLogin, setShowLogin] = useState(false);
  // Reset to signup form every time modal is opened
  useEffect(() => {
    if (open) setShowLogin(false);
  }, [open]);
  // Signup state
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

  // Login state
  const [loginFields, setLoginFields] = useState({ email: '', password: '' });
  const [loginTouched, setLoginTouched] = useState({});
  const [loginErrors, setLoginErrors] = useState({});

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

  const validateLogin = (name, value) => {
    switch (name) {
      case 'email':
        if (!value) return 'Email is required.';
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) return 'Invalid email address.';
        return '';
      case 'password':
        if (!value) return 'Password is required.';
        if (value.length < 6) return 'Password must be at least 6 characters.';
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
    const newErrors = {};
    Object.keys(fields).forEach((key) => {
      newErrors[key] = validate(key, fields[key]);
    });
    setErrors(newErrors);
    setTouched(Object.keys(fields).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
    if (Object.values(newErrors).every((err) => !err)) {
      alert('Sign up successful!');
      onClose();
    }
  };

  // Login handlers
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginFields((prev) => ({ ...prev, [name]: value }));
    if (loginTouched[name]) {
      setLoginErrors((prev) => ({ ...prev, [name]: validateLogin(name, value) }));
    }
  };

  const handleLoginBlur = (e) => {
    const { name, value } = e.target;
    setLoginTouched((prev) => ({ ...prev, [name]: true }));
    setLoginErrors((prev) => ({ ...prev, [name]: validateLogin(name, value) }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(loginFields).forEach((key) => {
      newErrors[key] = validateLogin(key, loginFields[key]);
    });
    setLoginErrors(newErrors);
    setLoginTouched(Object.keys(loginFields).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
    if (Object.values(newErrors).every((err) => !err)) {
      alert('Login successful!');
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div className="signup-modal-overlay">
      <div className="signup-modal">
        <button className="signup-modal-close" onClick={onClose}>&times;</button>
        {!showLogin ? (
          <>
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
              Already have an account?{' '}
              <a href="#" onClick={e => { e.preventDefault(); setShowLogin(true); }}>Login here</a>
            </div>
          </>
        ) : (
          <>
            <h2>Login</h2>
            <form className="signup-form" onSubmit={handleLoginSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={loginFields.email}
                onChange={handleLoginChange}
                onBlur={handleLoginBlur}
                autoComplete="off"
              />
              {loginTouched.email && loginErrors.email && <div className="signup-error">{loginErrors.email}</div>}

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginFields.password}
                onChange={handleLoginChange}
                onBlur={handleLoginBlur}
                autoComplete="off"
              />
              {loginTouched.password && loginErrors.password && <div className="signup-error">{loginErrors.password}</div>}

              <button type="submit" className="signup-btn">Login</button>
            </form>
            <div className="signup-login-link">
              Don't have an account?{' '}
              <a href="#" onClick={e => { e.preventDefault(); setShowLogin(false); }}>Signup here</a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SignupModal; 