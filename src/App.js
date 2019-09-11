import React from 'react';
import './css/App.css';

//Context
import Storage from './Context';
import Ruter from './Router';


function App() {
  return (
      <>
      <Storage>
        <Ruter/>
      </Storage>
      </>
  );
}

export default App;


  