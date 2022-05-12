import React, {useContext} from 'react';

import classes from './Card.module.css';
import AuthContext from '../../../store/auth-context';



const Card = (props) => {
  const contextData = useContext(AuthContext);
  const styled = {
    backgroundColor: contextData.isButton ? 'rgb(71, 70, 70)': '',
  }
  return (
    <div className={`${classes.card} ${props.className}`} style={styled}>{props.children}</div>
  );
};

export default Card;