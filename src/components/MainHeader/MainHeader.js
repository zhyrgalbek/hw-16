import React, { useContext } from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import ToggleSwitch from '../switch-button/switchButton';
import AuthContext from '../../store/auth-context';

const MainHeader = () => {
  const contextData = useContext(AuthContext);
 
  return (
    <header className={classes['main-header']} style={contextData.styled}>
      <h1>A Typical Page</h1>
      <Navigation />
      <ToggleSwitch label="btn" />
    </header>
  );
};

export default MainHeader;