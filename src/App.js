import Pdp from './component/Profile/ProfilePhoto.js';
import Adress from './component/Profile/Adress.js'
import FullName from './component/Profile/FullName.js'
import './App.css';
import React from 'react'

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header"> 
        Welcome !
      <Pdp/>
      My name is :
      <FullName/>
      My adress :
      <Adress/>
      
      </header>
    </div>
    </>
  );
}

export default App;
