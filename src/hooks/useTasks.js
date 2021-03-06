import { useState, useEffect } from 'react';
import moment from 'moment';
import { firebase } from '../firebase';
import { findTasks } from '../helpers';
import { useAuthContext } from '../context';

export const useTasks = selectedProject => {
    const [tasks, setTasks] = useState([]);
    const [archivedTasks, setArchivedTasks] = useState([]);
    const { userId } = useAuthContext();
  
    useEffect(() => {
      let taskList = firebase
        .firestore()
        .collection('tasks')
        .where('userId', '==', userId);
  
      taskList =
        selectedProject && !findTasks(selectedProject)
          ? (taskList = taskList.where('projectId', '==', selectedProject))
          : selectedProject === 'TODAY'
          ? (taskList = taskList.where(
              'date',
              '==',
              moment().format('DD/MM/YYYY')
            ))
          : taskList;
  
      taskList = taskList.onSnapshot(snapshot => {
        const newTasks = snapshot.docs.map(task => ({
          id: task.id,
          ...task.data(),
        }));
  
        setTasks(
          selectedProject === 'NEXT_7'
            ? newTasks.filter(
              task =>
                moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') < 6 && 
                moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') >= 0 &&
                task.archived !== true
              )
            : selectedProject === 'OVERDUE'
            ? newTasks.filter(
              task => 
              moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') < 0 &&
              task.archived !== true
            )
            : newTasks.filter(
              task => 
              (moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') >= 0 || 
              task.date === '') &&
              task.archived !== true
            )
        );
        setArchivedTasks(newTasks.filter(task => task.archived !== false));
      });
  
      return () => taskList();
    }, [selectedProject]);
  
    return { tasks, archivedTasks, setArchivedTasks };
  };
  