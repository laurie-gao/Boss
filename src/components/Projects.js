import React, { useState } from 'react';
import { useSelectedProjectContext, useProjectsContext } from '../context';
import { Project } from './Project';

export const Projects = ({ currentValue = null }) => {
    const [current, setCurrent] = useState(currentValue);
    const { setSelectedProject } = useSelectedProjectContext();
    const { projects } = useProjectsContext();

    return (
        projects &&
        projects.map(project => (
            <li 
                key={project.projectId}
                data-doc-id={project.docId}
                data-testid="project-action"
                className={
                    current === project.projectId ? 'active sidebar__project' : 'sidebar__project'
                }
            >
                <div
                onClick={() => {
                    setCurrent(project.projectId);
                    setSelectedProject(project.projectId);
                }}
            >
                <Project project={project}/>
                </div>
            </li>
        ))
    );
};