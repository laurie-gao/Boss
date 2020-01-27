import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useProjectsContext, useSelectedProjectContext } from '../context';
import { firebase } from '../firebase';

export const Project = ({ project }) => {
    const [showConfirm, setShowConfirm] = useState(false);
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
            <span className="sidebar__projectName">{project.name}</span>
            <span className="sidebar__projectDelete"
                data-testid="delete-project"
                onClick={() => setShowCinfirm(true)}
            >
                <FaTrashAlt />
                
                delete
            </span>
        </>
    )
}