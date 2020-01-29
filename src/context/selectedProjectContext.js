import React, { useState } from 'react';

export const SelectedProjectContext =  React.createContext();
export const SelectedProjectStore = ({ children }) => {
    const [selectedProject, setSelectedProject] = useState('INBOX');

    return (
        <SelectedProjectContext.Provider value={{ selectedProject, setSelectedProject }}>
            {children}
        </SelectedProjectContext.Provider>
    );
};

export const useSelectedProjectContext = () => React.useContext(SelectedProjectContext);