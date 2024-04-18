import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [emailRepeat, setEmailRepeat] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  // Errores
  const [emailError, setEmailError] = useState('');
  const [emailRepeatError, setEmailRepeatError] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordRepeatError, setPasswordRepeatError] = useState('');  
  const [selectedRoleError, setSelectedRoleError] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const errorList = {
    emailError: 'Por favor ingresa un correo válido',
    emailRepeatError: 'Los correos no coinciden',
    nameError: 'Por favor ingresa tu nombre',
    passwordError: 'Por favor ingresa tu contraseña',
    passwordRepeatError: 'Las contraseñas no coinciden',
    selectedRoleError: 'Por favor selecciona un rol'
  }

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    
    const isValidEmail = validateEmail(newEmail);
    if (!isValidEmail) {
      setEmailError(errorList.emailError);
    } else {
      setEmailError('');
    }
  };

  const handleEmailRepeatChange = (event) => {
    const newEmailRepeat = event.target.value;
    setEmailRepeat(newEmailRepeat);
    
    const isValidEmailRepeat = validateEmailRepeat(newEmailRepeat);
    if (!isValidEmailRepeat) {
      setEmailRepeatError(errorList.emailRepeatError);
    } else {
      setEmailRepeatError('');
    }
  };

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);

    const isValidName = validateName(newName);
    if (!isValidName) {
      setNameError(errorList.nameError);
    } else {
      setNameError('');
    }
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value
    setPassword(newPassword);

    const isValidPassword = validatePassword(newPassword);
    if (!isValidPassword) {
      setPasswordError(errorList.passwordError)
    } else {
      setPasswordError('')
    }
  };

  const handlePasswordRepeatChange = (event) => {
    const newPasswordRepeat = event.target.value;
    setPasswordRepeat(newPasswordRepeat);

    const isValidPasswordRepeat = validatePasswordRepeat(newPasswordRepeat)
    if(!isValidPasswordRepeat) {
      setPasswordRepeatError(errorList.passwordRepeatError)
    } else {
      setPasswordRepeatError('')
    }
  };
  
  const handleRoleChange = (event) => {
    const newRole = event.target.value;
    setSelectedRole(newRole);

    const isValidRole = validateRole(newRole);
    if (!isValidRole) {
      setSelectedRoleError(errorList.selectedRoleError);
    } else {
      setSelectedRoleError('');
    }
  };

  const handleSignup = () => {
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      setEmailError(errorList.emailError);
    } else {
      setEmailError('');
    }

    const isValidEmailRepeat = validateEmailRepeat(emailRepeat);
    if (!isValidEmailRepeat) {
      setEmailRepeatError(errorList.emailRepeatError);
    } else {
      setEmailRepeatError('');
    }

    const isValidName = validateName(name);
    if (!isValidName) {
      setNameError(errorList.nameError);
    } else {
      setNameError('');
    }

    const isValidPassword = validatePassword(password);
    if (!isValidPassword) {
      setPasswordError(errorList.passwordError)
    } else {
      setPasswordError('')
    }

    const isValidPasswordRepeat = validatePasswordRepeat(passwordRepeat);
    if (!isValidPasswordRepeat) {
      setPasswordRepeatError(errorList.passwordRepeatError)
    } else {
      setPasswordRepeatError('')
    }

    const isValidRole = validateRole(selectedRole);
    if (!isValidRole) {
      setSelectedRoleError(errorList.selectedRoleError);
    } else {
      setSelectedRoleError('');
    }

    if (isValidEmail && isValidEmailRepeat && isValidName && isValidPassword && isValidPasswordRepeat && isValidRole) {
      setShowErrorMessage(false);

      // TODO: Implementar lógica signup
      console.log('>>> PLACEHOLDER ', email, password);
      navigate('/');
    } else {
      setShowErrorMessage(true);
    }
  };

  // Validaciones
  const validateEmail = (email) => {
    // Seguir formato de correo
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateEmailRepeat = (emailRepeat) => {
    // Revisar coincidencia
    return emailRepeat === email;
  };
  
  const validateName = (name) => {
    // No vacío
    return name.trim() !== '';
  };

  const validatePassword = (password) => {
    // No vacía
    return password.trim() !== '';
  }

  const validatePasswordRepeat = (passwordRepeat) => {
    // Revisar coincidencia
    return passwordRepeat === password;
  }

  const validateRole = (role) => {
    // No vacío
    return role.trim() !== '';
  }

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
            id='emailRepeat'
            value={emailRepeat}
            onChange={handleEmailRepeatChange}
          />
          {emailRepeatError && <p className='formErrorMessage'>{emailRepeatError}</p>}
        </div>
        <div>
          <label>Nombre </label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={handleNameChange}
          />
          { nameError && <p className='formErrorMessage'>{nameError}</p> }
        </div>
        <div>
          <label>Contraseña </label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <p className='formErrorMessage'>{passwordError}</p>}
        </div>
        <div>
          <label>Repetir Contraseña </label>
          <input
            type='password'
            id='password-repeat'
            value={passwordRepeat}
            onChange={handlePasswordRepeatChange}
          />
          {passwordRepeatError && <p className='formErrorMessage'>{passwordRepeatError}</p>}
        </div>
        <div>
          <label htmlFor='dropdown'>Selecciona un rol </label>
          <select id='dropdown' value={selectedRole} onChange={handleRoleChange}>
            <option value=''>Selecciona un rol</option>
            <option value='invitado'>Invitado</option>
            <option value='organizador'>Organizador</option>
          </select>
          {selectedRoleError && <p className='formErrorMessage'>{selectedRoleError}</p>}
        </div>
        {showErrorMessage && <p className='formErrorMessage'>Por favor revisa la información que ingresaste</p>}
        <button type='button' onClick={handleSignup}>Registrarse</button>
      </form>
    </div>
  );
}

export default Signup;
