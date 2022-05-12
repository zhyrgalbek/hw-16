import React, { useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import AuthContext from '../../store/auth-context';

const Home = (props) => {
  const contextData = useContext(AuthContext);
 
  const label = {
    color: contextData.isButton ? '#fff': ''
  }

  return (
    <Card className={classes.home}>
      <h1 style={label}>Welcome back!</h1>
    </Card>
  );
};

export default Home;