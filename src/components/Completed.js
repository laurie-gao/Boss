import React from 'react';
import moment from 'moment';
import { useTasks } from '../hooks';
import { FaTrashAlt } from 'react-icons/fa';
import { firebase } from '../firebase';
import { useSelectedProjectContext } from '../context';

export const Completed = () => {
    const { selectedProject } = useSelectedProjectContext();
    const { archivedTasks } = useTasks(selectedProject);
    const { tasks } = useTasks(selectedProject);
    let tasksList;
    if (selectedProject === 'COMPLETED') {
        tasksList = archivedTasks;
    } else {
        tasksList = tasks;
    }

    const deleteTask = id => {
        firebase
            .firestore()
            .collection('tasks')
            .doc(id)
            .delete()
    };

    return (
        tasksList &&
        tasksList.map(task => (
            <li key={`${task.id}`}>
                <span>{task.task}</span>
                <div className="tasks__list__date">{task.date === "" 
                            ? "no date"
                            : moment(task.date, 'DD/MM/YY').format('MMM DD')
                            }</div>
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