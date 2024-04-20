import React, { useEffect, useState } from 'react';
import GoogleLoginDiv from '../components/GoogleLoginDiv';
import { useNavigate } from "react-router-dom";
import { useUser } from '../contexts/UserContext.jsx'

import { jwtDecode } from 'jwt-decode'
import GoogleCreds from '../../creds.json'
import CenterDiv from '../components/CenterDiv'
import PageHeader from '../components/PageHeader.jsx';
import FormContainer from '../components/FormContainer.jsx';
import InputWithError from '../components/InputWithError.jsx';
import CoolButton from '../components/CoolButton.jsx';
import FormError from '../components/FormError.jsx';

const Login = () => {
  const { user, userCtxLogin } = useUser();
  const [username, setUserame] = useState('');
  const [password, setPassword] = useState('');

  // Errores
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const errorList = {
    usernameError: 'Por favor, ingresa tu usuario',
    passwordError: 'Por favor, ingresa tu contraseña'
  }

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    const newUsername = event.target.value;
    setUserame(newUsername);
  
    const isValidUsername = validateField(newUsername);
    if (!isValidUsername) {
      setUsernameError(errorList.usernameError);
    } else {
      setUsernameError('');
    }
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  
    const isValidPassword = validateField(newPassword);
    if (!isValidPassword) {
      setPasswordError(errorList.passwordError);
    } else {
      setPasswordError('');
    }
  };

  const validateField = (value) => {
    // No vacío
    return value.trim() !== '';
  };

  const handleLogin = () => {
    const isValidPassword = validateField(password);
    if (!isValidPassword) {
      setPasswordError(errorList.passwordError);
    } else {
      setPasswordError('');
    }

    const isValidUsername = validateField(username);
    if (!isValidUsername) {
      setUsernameError(errorList.usernameError);
    } else {
      setUsernameError('');
    }

    if(isValidPassword && isValidUsername){
      setShowErrorMessage(false);
      
      // TODO: Agregar lógica para login con BBDD
      console.log('>>> PLACEHOLDER ', username, password);
      navigate('/login-placeholder');
    } else {
      setShowErrorMessage(true);
    }
  }

  function handleGoogleLogin(response){
    const userObject = jwtDecode(response.credential);

    if(!user.isLoggedIn){
      userCtxLogin(userObject);
      navigate('/user-landing')
    }

    document.getElementById("googleLoginDiv").hidden = true;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: GoogleCreds.web.client_id,
      callback: handleGoogleLogin
    });

    google.accounts.id.renderButton(
      document.getElementById("googleLoginDiv"),
      { theme: "outline", size: "large" }
    );

  }, [])

  return (
    <CenterDiv>
      <PageHeader h1='Login' h4='Ingresa con tu cuenta o con Google!'/>
      <FormContainer>
        <InputWithError
          type='text'
          label='Usuario'
          id='username'
          value={username}
          onChange={handleUsernameChange}
          error={usernameError}
        />
        <InputWithError
          type='password'
          label='Contraseña'
          id='password'
          value={password}
          onChange={handlePasswordChange}
          error={passwordError}
        />
        {showErrorMessage && <FormError errorMessage={'Por favor revisa la información que ingresaste'} />}
        <CoolButton text={'Ingresar'} onClickFunction={handleLogin} />
      </FormContainer>
      <GoogleLoginDiv />
    </CenterDiv>
  );
}

export default Login;
