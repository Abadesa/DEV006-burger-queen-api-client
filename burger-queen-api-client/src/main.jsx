
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import Registration from './views/Registration';
import RegistrationFailed from './views/RegistrationFailed';
import RegistrationSuccess from './views/RegistrationFailed';
import BreakfastMenu from './views/BreakfastMenu';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/registration-failed" element={<RegistrationFailed />} />
        <Route path="/registration-success" element={<RegistrationSuccess />} />
        <Route path="/breakfastMenu" element={<BreakfastMenu />} />
        {/* Agrega aquí más rutas si lo deseas */}
      </Routes>
    </Router>
  </React.StrictMode>,
);
