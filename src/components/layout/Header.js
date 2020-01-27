import React from 'react';
import { IoIosStats } from 'react-icons/io';

export const Header = () => {
    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <img src="/images/logo.png" alt="logo" />
                </div>
                <div className="settings">
                    <ul>
                        <li data-testid="add-task" className="setting__add">+</li>
                        <li><IoIosStats /></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};