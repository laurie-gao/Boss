import React, { useState } from 'react';
import { firebase } from '../firebase';
import { generatePushId } from '../helpers';
import { useProjectsContext } from '../context';

export const AddProject = ({ showValue = false }) => {
    const [show, setShow] = useState(showValue);
    const [listName, setListName] = useState('');

    const projectId = generatePushId();
    const { projects, setProjects } = useProjectsContext();

    const addProject = () => 
        listName && firebase
            .firestore()
            .collection('projects')
            .add({ projectId, name: listName, userId: '1a2s3d4f5g'})
            .then(() => {
                setProjects([...projects]);
                setListName('');
                setShow(false);
            });

    return (
        <div className="add-project" data-testid="add-project">
            {show && (
            <div className="add-project__input">
                <input 
                    value={listName} 
                    onChange={e => setListName(e.target.value)}
                    className="add-project__name"
                    data-testid="project-name"
                    type="text"
                    placeholder="Name your list"
                />
                <button 
                    className="add-project__submit"
                    type="button"
                    onClick={() => addProject()}
                    data-testid="add-project-submit"
                >Add List</button>
                <span
                    data-testid="hide-project-overlay"
                    className="add-project__cancel"
                    onClick={() => setShow(false)}
                >Cancel</span>
            </div>
            )}
            <span className="add-project__plus">+</span>
            <span
                data-testid="add-project-action"
                className="add-project__text"
                onClick={() => setShow(!show)}
                >Add List</span>
        </div>
    );
};