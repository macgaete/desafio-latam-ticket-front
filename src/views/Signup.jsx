import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import CoolButton from '../components/CoolButton';
import FormError from '../components/FormError';
import PageHeader from '../components/PageHeader';
import InputWithError from '../components/InputWithError';
import FormContainer from '../components/FormContainer';
import ApiConfig from '../constants/BackendApiConfig.json'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [emailRepeat, setEmailRepeat] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [signupResponse, setSignupResponse] = useState({message:'',user:{}})

  // Errores
  const [emailError, setEmailError] = useState('');
  const [emailRepeatError, setEmailRepeatError] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordRepeatError, setPasswordRepeatError] = useState('');  
  const [selectedRoleError, setSelectedRoleError] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showSignupErrorMessage, setShowSignupErrorMessage] = useState(false);
  

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
    setShowSignupErrorMessage(false)

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
    setShowSignupErrorMessage(false)

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

      try{
        postSignup()
        if(signupResponse.message != 'User created successfully'){
          setShowSignupErrorMessage(true)
        } else {
          navigate('/')
        }
      } catch(error) {
        console.log(error);
      }
    } else {
      setShowErrorMessage(true);
    }
  };

  // Signup con API
  const postSignup = () => {
    fetch(ApiConfig.api.url+'/usuarios', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        role: selectedRole,
        name: name,
        contact_info: email
      }),
      headers: {
        'Content-type': 'application/json',
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Respuesta de API no OK, el usuario probablemente ya existe');
      }
      return response.json();
    })
    .then(data => {
      setSignupResponse(data);
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
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
      <PageHeader h1='Signup' h4='Ingresa tus datos' />
      <FormContainer>
        <InputWithError 
          type='text'
          label='Correo'
          id='email'
          value={email}
          onChange={handleEmailChange}
          error={emailError}
        />
        <InputWithError 
          type='text'
          label='Repetir Correo'
          id='emailRepeat'
          value={emailRepeat}
          onChange={handleEmailRepeatChange}
          error={emailRepeatError}
        />
        <InputWithError 
          type='text'
          label='Nombre'
          id='name'
          value={name}
          onChange={handleNameChange}
          error={nameError}
        />
        <InputWithError 
          type='password'
          label='Contraseña'
          id='password'
          value={password}
          onChange={handlePasswordChange}
          error={passwordError}
        />
        <InputWithError 
          type='password'
          label='Repetir Contraseña'
          id='password-repeat'
          value={passwordRepeat}
          onChange={handlePasswordRepeatChange}
          error={passwordRepeatError}
        />
        <div className="formGroup">
          <label htmlFor='dropdown'>Selecciona un rol</label>
          <select id='dropdown' value={selectedRole} onChange={handleRoleChange}>
            <option value=''>Selecciona un rol</option>
            <option value='invitado'>Invitado</option>
            <option value='admin'>Organizador</option>
          </select>
          {selectedRoleError && <FormError errorMessage={selectedRoleError} />}
        </div>
        {showErrorMessage && <FormError errorMessage={'Por favor revisa la información que ingresaste'} />}
        {showSignupErrorMessage && <FormError errorMessage={'No pudimos registrarte, probablemente ese correo ya está usado!'} />}
        <CoolButton text={'Registrarse'} onClickFunction={handleSignup} />
      </FormContainer>
    </div>
  );
}

export default Signup;
