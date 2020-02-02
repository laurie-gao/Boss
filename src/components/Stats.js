import React from 'react';
import { useTasks } from '../hooks';
import moment from 'moment';
import { IoIosClose } from 'react-icons/io';
import { FaHandRock } from 'react-icons/fa';

export const Stats = ({ showStats, setShowStats }) => {
    const { tasks, archivedTasks } = useTasks('TODAY');

    const notCompleted = tasks.filter(task => task.archived !== true).length;
    const completed = archivedTasks.filter(task => task.date === moment().format('DD/MM/YYYY')).length;
  
    return ( showStats &&
        <div className="stats__overlay">
            <span className="stats__overlay__title">Today's Productivity</span>
            <span
                className="stats__overlay__cancel"
                onClick={() => setShowStats(false)}
            >
                <IoIosClose />
            </span>
            <div>{`${completed}/${completed + notCompleted}`}</div>
            <div> tasks completed <img src="/icons/fist.png" alt="icon"/> </div>
        </div>
    );
}