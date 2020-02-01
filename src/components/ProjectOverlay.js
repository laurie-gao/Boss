import React from 'react';
import { useProjectsContext } from '../context';
import { GoPrimitiveDot } from 'react-icons/go';

export const ProjectOverlay = ({ setProject, showProjectOverlay, setShowProjectOverlay}) => {
  const { projects } = useProjectsContext();

  return (
    projects &&
    showProjectOverlay && (
      <div className="project-overlay" data-testid="project-overlay">
        <ul className="project-overlay__list">
          {projects.map(project => (
            <li key={project.projectId}>
              <div
                data-testid="project-overlay-action"
                onClick={() => {
                  setProject(project.projectId);
                  setShowProjectOverlay(false);
                }}
              >
                <span><GoPrimitiveDot /></span>
                {project.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};