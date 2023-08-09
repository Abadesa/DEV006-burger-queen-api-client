import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './views/Login';
import Registration from './views/Registration';
import RegistrationSuccess from './views/RegistrationSuccess';
import RegistrationFailed from './views/RegistrationFailed';
import BreakfastMenu from './views/BreakfastMenu';
import LunchAndDinnerMenu from './views/LunchAndDinnerMenu';
import NewProduct from './views/NewProduct';
import ConfirmationWindow from './views/ConfirmationWindow';
import OrderSummary from './views/OrderSummary';
import Orders from './views/Orders';
import ChefOrders from './views/ChefOrders';
import AdminView from './views/AdminView';

function App() {
  // Estado global para el usuario que ha iniciado sesión
  const [user, setUser] = useState(null);

  return (
    <Router>
      {/* Barra de navegación común para todas las vistas */}
      <Navbar user={user} />

      <Switch>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/registration" component={Registration} />
        <Route path="/registration-success" component={RegistrationSuccess} />
        <Route path="/registration-failed" component={RegistrationFailed} />
        <Route path="/breakfast-menu" component={BreakfastMenu} />
        <Route path="/lunch-and-dinner-menu" component={LunchAndDinnerMenu} />
        <Route path="/new-product" component={NewProduct} />
        <Route path="/confirmation-window">
          <ConfirmationWindow setUser={setUser} />
        </Route>
        <Route path="/order-summary" component={OrderSummary} />
        <Route path="/orders">
          <Orders user={user} />
        </Route>
        <Route path="/chef-orders" component={ChefOrders} />
        <Route path="/admin-view" component={AdminView} />
      </Switch>
    </Router>
  );
}

export default App;

