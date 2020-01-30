import React, { useState } from 'react';
import { IoIosStats } from 'react-icons/io';
import { AiOutlinePlus } from 'react-icons/ai';
import { AddTask } from '../AddTask';

export const Header = () => {
    const [showMain, setShowMain] = useState(false);
    const [showQuickAddTask, setShowQuickAddTask] = useState(false);

    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <img src="/icons/logo.png" alt="logo" />
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
                        <li className = "settings__stat">
                            <IoIosStats />
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
        </header>
    );
};