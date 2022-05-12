import React from 'react';

const AuthContext = React.createContext({
    isLoggedin: true, 
    onLogout: ()=>{},
    isButton: false,
    toggleButton: ()=>{},
    styled: {
        background: '#000',
        color: '#fff'
    }
});

export default AuthContext;