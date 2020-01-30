import React, { useState } from 'react';
import { FaRegCalendarAlt, FaRegCalendarCheck } from 'react-icons/fa';
import { IoIosList, IoIosClose } from 'react-icons/io';
import { AiOutlinePlus } from 'react-icons/ai';
import moment from 'moment';
import { firebase } from '../firebase';
import { useSelectedProjectContext } from '../context';
import { ProjectOverlay } from './ProjectOverlay';
import { TaskDate } from './TaskDate';

export const AddTask = ({
    showAddTaskMain = true,  
    showMainValue = false, 
    showQuickAddTask,
    setShowQuickAddTask
}) => {
    const [task, setTask] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [project, setProject] = useState(''); 
    const [showMain, setShowMain] = useState(showMainValue);
    const [showProjectOverlay, setShowProjectOverlay] = useState(false);
    const [showTaskDate, setShowTaskDate] = useState(false);

    const { selectedProject } = useSelectedProjectContext();

    const addTask = () => {
        const projectId = project || selectedProject;
        let date = '';

        if (projectId === 'TODAY') {
            date = moment().format('DD/MM/YYYY')
        } else if (projectId === 'NEXT_7') {
            date = moment.add(7, 'days').format('DD/MM/YYYY');
        } 
        
        return (task && projectId && 
            firebase
                .firestore()
                .collection('tasks')
                .add({
                    archived: false,
                    projectId,
                    task,
                    date: date || taskDate,
                    userId: '1a2s3d4f5g'
                }).then(() => {
                    setTask('');
                    setProject('');
                    setShowMain('')
                    setShowProjectOverlay(false);
                })
        );
    };
    
    return (
        <div
            className={showQuickAddTask ? 'add-task add-task__overlay' : 'add-task'}
            data-testid="add-task-comp"
        >
            {showAddTaskMain && (
                <div 
                    className="add-task__shallow" 
                    data-testid="show-main-action"
                    onClick={() => setShowMain(!showMain)}
                >
                    <span className="add-task__plus">+</span>
                    <span className="add-task__text">Add Task</span>
                </div>
            )}

            {(showMain || showQuickAddTask) && (
                <div className="add-task__main" data-testid="add-task-main">
                    {showQuickAddTask && (
                        <>
                            <div data-testid="quick-add-task">
                                <h2 className="header">Quick Add Task</h2>
                                <span 
                                    className="add-task__cancel-x"
                                    data-testid="add-task-quick-cancel"
                                    onClick={() => {
                                        setShowMain(false);
                                        setShowProjectOverlay(false);
                                        setShowQuickAddTask(false);
                                    }}
                                    >
                                        <IoIosClose />
                                </span>
                            </div>
                        </>
                    )}
                    <ProjectOverlay 
                        setProject={setProject} 
                        showProjectOverlay={showProjectOverlay}
                        setShowProjectOverlay={setShowProjectOverlay}
                    />
                    <TaskDate 
                        setTaskDate={setTaskDate}
                        showTaskDate={showTaskDate}
                        setShowTaskDate={setShowTaskDate}
                    />
                    <input 
                        className="add-task__content"
                        data-testid="add-task-content"
                        type="text"
                        value={task}
                        onChange={e => setTask(e.target.value)}
                    />
                    <button
                        type="button"
                        className="add-task__submit"
                        data-testid="add-task"
                        onClick={() =>
                            showQuickAddTask
                                ?  addTask() && setShowQuickAddTask(false)
                                : addTask()
                        }
                        >Add Task</button>
                    {!showQuickAddTask && (
                        <span
                            className="add-task__cancel"
                            data-testid="add-task-main-cancel"
                            onClick={() => {
                                setShowMain(false);
                                setShowProjectOverlay(false)
                            }}>Cancel</span>
                    )}
                    <span
                        className="add-task__project"
                        data-testid="show-project-overlay"
                        onClick={() => setShowProjectOverlay(!showProjectOverlay)}
                    >
                        <IoIosList />
                    </span>
                    <span
                        className="add-task__date"
                        data-testid="show-task-date-overlay"
                        onClick={() => setShowTaskDate(!showTaskDate)}
                    >
                        <FaRegCalendarAlt />
                    </span>
                </div>
            )}
        </div>
    );
};