import React from 'react';
import { useTasks } from '../hooks';
import { FaTrashAlt } from 'react-icons/fa';
import { firebase } from '../firebase';
import { useSelectedProjectContext } from '../context';

export const Completed = () => {
    const { selectedProject } = useSelectedProjectContext();
    const { archivedTasks } = useTasks(selectedProject);

    const deleteTask = id => {
        firebase
            .firestore()
            .collection('tasks')
            .doc(id)
            .delete()
    };

    return (
        archivedTasks &&
        archivedTasks.map(task => (
            <li key={`${task.id}`}>
                <span>{task.task}</span>
                <span className="trash-bin"
                    onClick={() => deleteTask(task.id)}
                    role="button"
                >
                    <FaTrashAlt />
                </span>
            </li>
        ))
    );
};