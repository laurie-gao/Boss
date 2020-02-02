import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useProjectsContext, useSelectedProjectContext, useShowMainContext } from '../context';
import { firebase } from '../firebase';

export const Project = ({ project }) => {
    const [showModal, setShowModal] = useState(false);
    const { projects, setProjects } = useProjectsContext();
    const { setSelectedProject } = useSelectedProjectContext();

    const deleteProject = docId => {
        firebase
            .firestore()
            .collection('projects')
            .doc(docId)
            .delete()
            .then(() => {
                setProjects([...projects]);
                setSelectedProject('INBOX');
        });
    };

    return (
        <>
            <span className="sidebar__dot">•</span>
            <span className="sidebar__project-name">{project.name}</span>
            <span className="sidebar__project-delete"
                data-testid="delete-project"
                onClick={() => setShowModal(!showModal)}
                role="button"
            >
                <FaTrashAlt />
            </span>
            {showModal && (
                <div className="project-delete-modal">
                    <li className="project-delete-modal__inner">
                        <p>Are you sure you want to delete this project?</p>
                        <button type="button" 
                            onClick={() => deleteProject(project.docId)}
                        >
                            Delete
                        </button>
                        <span onClick={() => setShowModal(!showModal)}>
                            Cancel
                        </span>
                    </li>
                </div>
            )}
        </>
    );
};