import React, { useEffect } from 'react';
import GoogleLoginDiv from '../components/GoogleLoginDiv';
import { useNavigate } from "react-router-dom";
import { useUser } from '../contexts/UserContext.jsx'

import { jwtDecode } from 'jwt-decode'
import GoogleCreds from '../../creds.json'

const Login = () => {
  const { user, userCtxLogin } = useUser();

  const navigate = useNavigate();

  function handleLogin(response){
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
      callback: handleLogin
    });

    google.accounts.id.renderButton(
      document.getElementById("googleLoginDiv"),
      { theme: "outline", size: "large" }
    );

  }, [])

  return (
    <div>
      <h2>Login</h2>
      <GoogleLoginDiv />
    </div>
  );
}

export default Login;
