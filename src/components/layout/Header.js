import React from 'react';
import { IoIosStats } from 'react-icons/io';
import { AiOutlinePlus } from 'react-icons/ai';

export const Header = () => {
    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <img src="/icons/logo.png" alt="logo" />
                </div>
                <div className="settings">
                    <ul>
                        <li data-testid="add-task" className="settings__add">
                            <AiOutlinePlus />
                        </li>
                        <li className = "settings__stat">
                            <IoIosStats />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};