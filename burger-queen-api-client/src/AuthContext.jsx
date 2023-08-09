import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

// Crea el contexto de autenticación
const AuthContext = createContext();

// Hook personalizado para acceder al contexto
const useAuth = () => {
  return useContext(AuthContext);
};

// Proveedor del contexto que contendrá el estado de autenticación y funciones relacionadas
const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);
  
    return (
      <AuthContext.Provider value={{ accessToken, setAccessToken }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  AuthProvider.propTypes = {
    children: PropTypes.node.isRequired, // Validación para la propiedad 'children'
  };
  
  // eslint-disable-next-line react-refresh/only-export-components
  export { AuthProvider, useAuth };