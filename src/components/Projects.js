import React, { useState } from 'react';
import { useSelectedProjectValue, useProjectsValue } from '../context';

export const Projects = ({ currentValue = null }) => {
    const [current, setCurrent] = useState(currentValue);
    const { setSelectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();

    return (
        projects &&
        projects.map(project => (
            <li 
                key={project.projectId}
                id={project.docId}
                data-testid="project-action"
                className={
                    current === project.projectId ? 'active sidebar__project' : 'sidebar__project'
                }
                onClick={() => {
                    setCurrent(project.projectId);
                    setSelectedProject(project.projectId);
                }}
            >
                I am a project
            </li>
        ))
    );
};