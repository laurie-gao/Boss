import React, { useState } from 'react';
import { IoIosStats } from 'react-icons/io';
import { AiOutlinePlus } from 'react-icons/ai';
import { AddTask } from '../AddTask';
import { Stats } from '../Stats';
import { firebase } from '../../firebase';
import { useSelectedProjectContext, useInboxContext } from '../../context';

export const Header = () => {
    const [showMain, setShowMain] = useState(false);
    const [showQuickAddTask, setShowQuickAddTask] = useState(false);
    const [showStats, setShowStats] = useState(false);
    const { setSelectedProject } = useSelectedProjectContext();
    const { setShowInbox } = useInboxContext();

    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <ul>
                        <li 
                            onClick={() => {
                                setSelectedProject('INBOX');
                                setShowInbox(true);
                            }}
                        >
                            <img src="/icons/logo.png" alt="logo" />
                        </li>
                    </ul>
                </div>
                <div className="settings">
                    <ul>
                        <li 
                            data-testid="add-task" 
                            className="settings__add"
                            onClick={() => {
                                setShowQuickAddTask(true);
                                setShowMain(true);
                            }}
                        >
                            <AiOutlinePlus /> 
                        </li>
                        <li 
                            className="settings__stat"
                            onClick={() => {
                                setShowStats(!showStats);
                            }}
                        >
                            <IoIosStats />
                        </li>
                        <li 
                            className="sign-button"
                            onClick={() => {
                                firebase.auth().signOut();
                            }}
                        >
                            <span>Sign Out</span>
                        </li>
                    </ul>
                </div>
            </nav>

            <AddTask 
                showAddTaskMain={false}
                showMainValue={showMain}
                showQuickAddTask={showQuickAddTask}
                setShowQuickAddTask={setShowQuickAddTask}
            />

            <Stats
                showStats={showStats}
                setShowStats={setShowStats}
            />
        </header>
    );
};