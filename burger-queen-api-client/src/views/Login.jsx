import { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link para redirecciones

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Mesero'); // Valor predeterminado es "Mesero"

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleLogin = async () => {
    try {
      // Realizar la petición POST a la API para iniciar sesión
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          role: role,
        }),
      });

      if (!response.ok) {
        // Si la respuesta no es exitosa, lanzar un error
        throw new Error('Credenciales inválidas');
      }

      // Si la respuesta es exitosa, mostrar un mensaje de éxito
      alert('Inicio de sesión exitoso');
      // Redirigir al usuario a la página deseada después del inicio de sesión exitoso
      // Reemplaza '/BreakfastMenu' por la ruta deseada
      window.location.href = '/BreakfastMenu';
    } catch (error) {
      // Manejar errores de la petición
      alert('Error al iniciar sesión: ' + error.message);
    }
  };

  return (
    <>
      <div>
        {/* Logo aquí */}
      </div>
      <p>Ingresa tus datos:</p>
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
        <button onClick={handleLogin}>Iniciar sesión</button>
        {/* Asegúrate de importar el componente 'Link' desde 'react-router-dom' */}
        <Link to="/registration">¿No estás registrado?</Link>
      </div>
    </>
  );
}

export default Login;
