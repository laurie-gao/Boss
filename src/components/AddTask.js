import React, { useState } from 'react';
import { FaRegCalendarAlt, FaRegCalendarCheck } from 'react-icons/fa';
import moment from 'moment';
import { firebase } from '../firebase';
import { useSelectedProjectContext } from '../context';

export const AddTask({ 
    showAddTaskMain = true,  
    showMainValue = false, 
    showQuickAddTask,
    setShowQuickAddTask
}) => <p>Add Task</p>;