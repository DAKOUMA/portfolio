import './App.css';
import {  AppBar, 
          Box, 
          Button, 
          IconButton, 
          SvgIcon, 
          Toolbar, 
          Typography, 
          useScrollTrigger } from '@mui/material';

import "./Style/Style.css"
import React, { Children, useState } from 'react';
import { Homepage } from './Components/Homepage';
import { Header } from './Components/Header';
import { Skills } from './Components/Skills';
import { PortFolio } from './Components/PortFolio';
import { RateMe } from './Components/RateMe';
import { act } from '@testing-library/react';
import { Menu } from './Components/Menu';




function App(props) {
  const [darkMode, setDarkMode] = useState(false)
  function activeDarkMode() {
    setDarkMode(!darkMode)
    console.log(darkMode);
  }
  const [toggleMenu, setToggleMenu] = useState(false)

    const openMenu = () => {
        setToggleMenu(!toggleMenu)
        console.log("toggle");
    }

  return (
   <div className={`All ${!darkMode? "" : "DarkMode"}`}>
    <Header toggle={openMenu} darkMode={{boolean: darkMode, active: activeDarkMode}} dark={activeDarkMode}/>
    <Menu toggle={toggleMenu}/>
    <Homepage darkMode={{boolean: darkMode, active: activeDarkMode}}/>
    <Skills darkMode={{boolean: darkMode, active: activeDarkMode}}/>
    <PortFolio darkMode={{boolean: darkMode, active: activeDarkMode}}/>
    <RateMe darkMode={{boolean: darkMode, active: activeDarkMode}}/>
   </div>
    
  );
}

export default App;
