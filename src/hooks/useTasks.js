import { useState, useEffect } from 'react';
import moment from 'moment';
import { firebase } from '../firebase';
import { findTasks } from '../helpers';

export default selectedProject => {
    const [tasks, setTasks] = useState([]);
    const [archivedTasks, setArchivedTasks] = useState([]);

    useEffect(() => {
        let taskList = firebase
        .firestore()
        .collection('tasks')
        .where('userId', '==', '1a2s3d4f5g')

        taskList = selectedProject && !findTasks(selectedProject) ? 
        (taskList = taskList.where('projectId', '==', selectedProject))
        : selectedProject === 'TODAY'
        ? (taskList = taskList.where('date', '==', moment().format('DD/MM/YYYY')))
        : selectedProject === 'INBOX' || selectedProject === 0
        ? (taskList = taskList.where('date', '==', ''))
        : taskList;

        taskList = taskList.onSnapshot(snapshot => {
            const newTasks = snapshot.docs.map(task => ({
                Id: task.id,
                ...task.data(),
            }));

            setTasks(
                selectedProject === 'NEXT_7'
                ? newTasks.filter(
                    task => moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
                    task.archived !== true
                ) 
                : newTasks.filter(task => task.archived !== true)
            );

            setArchivedTasks(newTasks.filter(task => task.archived === true));
        })();

        //return () => taskList();
    }, [selectedProject]);

    return { tasks, archivedTasks };
};