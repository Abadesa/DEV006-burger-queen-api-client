import { Link } from 'react-router-dom';

function RegistrationFailed() {
  return (
    <>
      <div>
        {/* Logo del restaurante aquí */}
      </div>
      <h2>Registro fallido</h2>
      <div>
        <Link to="/registration">Atrás</Link>
      </div>
    </>
  );
}

export default RegistrationFailed;
