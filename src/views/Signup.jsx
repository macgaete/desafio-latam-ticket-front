import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const handleEmailChange = (event) => {
    // TODO: Validar formato
    setEmail(event.target.value);
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
    // TODO: Implementar lógica registro
    console.log('Signed up! ', email, password);
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
        <button type='button' onClick={handleSignup}>Registrarse</button>
      </form>
    </div>
  );
}

export default Signup;
