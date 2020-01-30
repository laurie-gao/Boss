import React, { useState } from 'react';
import { useSelectedProjectContext, useProjectsContext, useInboxContext } from '../context';
import { Project } from './Project';

export const Projects = ({ currentValue = null, activeProject, setActiveProject }) => {
    const [current, setCurrent] = useState(currentValue);
    const { setSelectedProject } = useSelectedProjectContext();
    const { projects } = useProjectsContext();
    const { showInbox, setShowInbox } = useInboxContext();

    return (
        projects &&
        projects.map(project => (
            <li 
                key={project.projectId}
                data-doc-id={project.docId}
                data-testid="project-action"
                className={
                    (current === project.projectId  && !showInbox && !activeProject)? 'active sidebar__project' : 'sidebar__project'
                }
            >
                <div
                    role="button"
                    onClick={() => {
                        setCurrent(project.projectId);
                        setSelectedProject(project.projectId);
                        setShowInbox(false);
                        setActiveProject(false);
                    }}
                >
                    <Project project={project}/>
                </div>
            </li>
        ))
    );
};