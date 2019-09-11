import React from 'react';
import './css/App.css';
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Admin from './components/Admin';
import Default from './components/Default';
import Storage from './Context';
import Details from './components/Details';


function App() {

  return (
      <>
      <Storage>
        <HashRouter>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Detalles" component={Details} />            
                <Route path="/Login" component={Login} />
                <Route path="/Admin" component={Admin} />
                <Route component={Default} /> 
              </Switch>
        </HashRouter>
      </Storage>
      </>
  );
}

export default App;


  