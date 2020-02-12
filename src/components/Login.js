import React from 'react';
import { firebase, uiConfig } from '../firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

export const Login = () => {
    return (
    <StyledFirebaseAuth 
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
    />
    );
};