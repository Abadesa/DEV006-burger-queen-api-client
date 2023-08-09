import { useState } from 'react';
import { Link } from 'react-router-dom';

function Registration() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Mesero'); // Valor predeterminado es "Mesero"

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleRegistration = async () => {
    try {
      // Realizar la petición POST a la API para registrar el usuario
      const response = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: fullName,
          email: email,
          password: password,
          role: role,
        }),
      });

      if (!response.ok) {
        // Si la respuesta no es exitosa, lanzar un error
        throw new Error('Error al registrar usuario');
      }

      // Si el registro es exitoso, redirigir a la vista de registro exitoso
      window.location.href = '/registration-success'; // Redirigir utilizando window.location.href
    } catch (error) {
      // Manejar errores de la petición
      window.location.href = '/registration-failed'; // Redirigir utilizando window.location.href
    }
  };

  return (
    <>
      <div>
        {/* Logo aquí */}
      </div>
      <p>Regístrate:</p>
      <div>
        <label htmlFor="fullName">Nombre completo:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={handleFullNameChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <label htmlFor="role">Rol:</label>
        <select id="role" value={role} onChange={handleRoleChange}>
          <option value="Mesero">Mesero</option>
          <option value="Chef">Chef</option>
          <option value="Administrador">Administrador</option>
        </select>
      </div>
      <div>
        <button onClick={handleRegistration}>Registrarse</button>
        {/* Utilizar el componente Link para redirigir a la página de inicio de sesión */}
        <Link to="/">Atrás</Link>
      </div>
    </>
  );
}

export default Registration;
