import React from 'react';
import { firebase, uiConfig } from '../firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

export const Login = () => {
    return (
        <div className="login">
            <h2 className="title" >Welcome</h2> 
            <img src="/icons/logogray.png" alt="logo" />
            <h4 className="subtitle">create your own boss</h4>
            <StyledFirebaseAuth 
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
            />
        </div>
    );
};