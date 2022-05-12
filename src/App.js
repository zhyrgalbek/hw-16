import React, { useEffect, useState } from 'react';
import './App.css';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [buttonBool, setButtonBool] = useState(false);

  const toggleButton = () => {
    setButtonBool(!buttonBool);
  }

  useEffect(() => {
    const storeUserLoggin = localStorage.getItem('isLoggedIn');
    if (storeUserLoggin === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const styled = {
    background: buttonBool ? 'rgb(71, 70, 70)':'',
    height: '1000px',
    border: buttonBool ? '1px solid #000': ''
  }

  return (
    <div className='App' >
      <React.Fragment>
        <AuthContext.Provider value={{
          isLoggedin: isLoggedIn,
          onLogout: logoutHandler,
          isButton: buttonBool,
          toggleButton: toggleButton
        }}>
          <MainHeader />
          <main style={styled}>
            {!isLoggedIn && <Login onLogin={loginHandler} />}
            {isLoggedIn && <Home onLogout={logoutHandler} />}
          </main>
        </AuthContext.Provider>
      </React.Fragment>
    </div>
  );
}

export default App;