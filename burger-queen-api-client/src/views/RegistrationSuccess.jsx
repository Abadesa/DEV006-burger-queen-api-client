import { Link } from 'react-router-dom';

function RegistrationSuccess() {
  return (
    <>
      <div>
        {/* Logo del restaurante aquí */}
      </div>
      <h2>Registro exitoso</h2>
      <div>
        <Link to="/">Log in</Link>
      </div>
    </>
  );
}

export default RegistrationSuccess;
