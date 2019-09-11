import React, { useContext } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Context Auth
import { AuthUserContext } from './Context'

//Components
import Home from './components/Home';
import Login from './components/Login';
import Admin from './components/Admin';
import Default from './components/Default';
import Details from './components/Details';

function Ruter () {
  const [ auth ] = useContext(AuthUserContext)

  const SecretRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      auth === true
        ? <Component {...props} />
        : <Login to='/login' />
    )} />
  );

  console.log('ruter', auth)


  return (
      <>
        <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/detalles" component={Details}/>
                <Route path="/login" component={Login} />
                <SecretRoute path="/admin" component={Admin}/>   
                <Route component={Default} /> 
              </Switch>
        </Router>
      </>
  );
}

export default Ruter;


  