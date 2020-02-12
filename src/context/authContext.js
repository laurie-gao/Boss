import React, { useState } from 'react';

export const AuthContext =  React.createContext();
export const AuthStore = ({ children }) => {
    const [userId, setUserId] = useState(null);

    return (
        <AuthContext.Provider value={{ userId, setUserId }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => React.useContext(AuthContext);