import React from 'react';
import { useProjects } from '../hooks';

export const ProjectsContext =  React.createContext();
export const ProjectsStore = ({ children }) => {
    const { projects, setProjects } = useProjects();

    return (
        <ProjectsContext.Provider value={{ projects, setProjects }}>
            {children}
        </ProjectsContext.Provider>
    );
};

export const useProjectsContext = () => React.useContext(ProjectsContext);