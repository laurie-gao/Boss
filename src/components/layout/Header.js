import React from 'react';
import { IoIosStats } from 'react-icons/io';
import { FiPlus } from 'react-icons/fi';

export const Header = () => {
    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <img src="/images/logo.png" alt="logo" />
                </div>
                <div className="settings">
                    <ul>
                        <li data-testid="add-task" ><FiPlus /></li>
                        <li><IoIosStats /></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};