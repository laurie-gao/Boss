import React from 'react';
import { FaChevronDown, FaRegCalendarAlt, FaRegCalendarCheck, FaInbox} from 'react-icons/fa';

export const Sidebar = () => {
    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar__upper">
                <li>
                    <span><FaInbox /></span>
                    <span>Inbox</span>
                </li>
                <li>
                    <span><FaRegCalendarCheck /></span>
                    <span>Today</span>
                </li>
                <li>
                    <span><FaRegCalendarAlt /></span>
                    <span>Next 7 days</span>
                </li>
            </ul>

            <div className="sidebar__middle">
                <span><FaChevronDown /></span>
                <h2>Projects</h2>
            </div>

            <ul className="siderbar__projects">list of projects</ul>
        </div>
    );
};