import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [repeatEmail, setRepeatEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [emailError, setEmailError] = useState('');
  const [repeatEmailError, setRepeatEmailError] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    
    const isValidEmail = validateEmail(newEmail);
    if (!isValidEmail) {
      setEmailError('Por favor ingresa un correo válido');
    } else {
      setEmailError('');
    }
  };

  const handleRepeatEmailChange = (event) => {
    const newRepeatEmail = event.target.value;
    setRepeatEmail(newRepeatEmail);
    
    const isValidRepeatEmail = validateRepeatEmail(newRepeatEmail);
    if (!isValidRepeatEmail) {
      setRepeatEmailError('Los correos no coinciden');
    } else {
      setRepeatEmailError('');
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordRepeatChange = (event) => {
    setPasswordRepeat(event.target.value);
  };
  
  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSignup = () => {
    // Email validation
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      setEmailError('Por favor ingresa un correo válido');
    } else {
      setEmailError('');
    }

    // Repeat email validation
    const isValidRepeatEmail = validateRepeatEmail(repeatEmail);
    if (!isValidRepeatEmail) {
      setRepeatEmailError('Los correos no coinciden');
    } else {
      setRepeatEmailError('');
    }

    // Check if any error exists
    if (isValidEmail && isValidRepeatEmail) {
      setShowErrorMessage(false);
      // TODO: Implement signup logic
      console.log('>>> PLACEHOLDER ', email, password);
      navigate('/');
    } else {
      setShowErrorMessage(true);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateRepeatEmail = (repeatEmail) => {
    return repeatEmail === email;
  };

  return (
    <div>
      <h2>Signup</h2>
      <form>
        <div>
          <label>Correo </label>
          <input
            type='text'
            id='email'
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p className='formErrorMessage'>{emailError}</p>}
        </div>
        <div>
          <label>Repetir Correo </label>
          <input
            type='text'
            id='repeatEmail'
            value={repeatEmail}
            onChange={handleRepeatEmailChange}
          />
          {repeatEmailError && <p className='formErrorMessage'>{repeatEmailError}</p>}
        </div>
        <div>
          <label>Nombre </label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label>Contraseña </label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <label>Repetir Contraseña </label>
          <input
            type='password'
            id='password-repeat'
            value={passwordRepeat}
            onChange={handlePasswordRepeatChange}
          />
        </div>
        <div>
          <label htmlFor='dropdown'>Selecciona un rol </label>
          <select id='dropdown' value={selectedRole} onChange={handleRoleChange}>
            <option value=''>Selecciona un rol</option>
            <option value='invitado'>Invitado</option>
            <option value='organizador'>Organizador</option>
          </select>
        </div>
        {showErrorMessage && <p className='formErrorMessage'>Por favor revisa la información que ingresaste</p>}
        <button type='button' onClick={handleSignup}>Registrarse</button>
      </form>
    </div>
  );
}

export default Signup;
