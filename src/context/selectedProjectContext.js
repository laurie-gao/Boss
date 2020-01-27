import React, { useState } from 'react';

export const SelectedProjectContext =  React.createContext();
export const SelectedProjectProvider = ({children}) => {
    const { selectedProject, setSelectedProject } = useState('INBOX');

    return (
        <SelectedProjectContext.Provider value={{ selectedProject, setSelectedProject }}>
            {children}
        </SelectedProjectContext.Provider>
    );
};

export const useSelectedProjectValue = () => React.useContext(SelectedProjectContext);