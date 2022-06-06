import React from 'react'
import Contacto from './components/Contacto';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom'
import User from './components/User';

function App() {
  return (
    <Router>
    <div className="container mt-5">
      <div className='btn-group'>
        <Link to="/" className='btn btn-dark m-1'>
          Inicio
        </Link>
        <Link to="/nosotros" className='btn btn-dark m-1'>
          Nosotros
        </Link>
        <NavLink to="/contacto" className='btn btn-dark m-1 active'>
          Contacto
        </NavLink>
      </div>
      <hr/>
      <Switch>
        <Route path="/nosotros/:id">
          <User/>
        </Route>
        <Route path="/contacto" >
          <Contacto/>
        </Route>
        <Route path="/nosotros">
          <Nosotros/>
        </Route>
        <Route path="/" exact>
          <Inicio/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
