import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Reemplaza useHistory por useNavigate
  const { setAccessToken } = useAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        setAccessToken(responseData.accessToken);
        alert('Inicio de sesión exitoso');
        navigate('/BreakfastMenu'); // Utiliza el hook useNavigate para la navegación
      } else {
        throw new Error('Credenciales inválidas');
      }
    } catch (error) {
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
        <button onClick={handleLogin}>Iniciar sesión</button>
        <Link to="/registration">¿No estás registrado?</Link>
      </div>
    </>
  );
}

export default Login;
