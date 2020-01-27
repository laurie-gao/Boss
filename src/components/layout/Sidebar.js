import React, { useState } from 'react';
import { FaChevronDown, FaRegCalendarAlt, FaRegCalendarCheck, FaInbox} from 'react-icons/fa';
import { useSelectedProjectContext } from '../../context';
import { Projects } from '../Projects';

export const Sidebar = () => {
    const { setSelectedProject } = useSelectedProjectContext;
    const [current, setCurrent] = useState('inbox');
    const [showProjects, setShowProjects] = useState(true);

    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar__generic">
                <li data-testid="inbox" className="inbox">
                    <span><FaInbox /></span>
                    <span>Inbox</span>
                </li>
                <li data-testid="today" className="today">
                    <span><FaRegCalendarCheck /></span>
                    <span>Today</span>
                </li>
                <li data-testid="next_7" className="next_7">
                    <span><FaRegCalendarAlt /></span>
                    <span>Next 7 days</span>
                </li>
            </ul>
            <div className="sidebar__middle">
                <span><FaChevronDown /></span>
                <h2>Projects</h2>
            </div>
            <ul className="siderbar__projects"></ul>
            <Projects />
        </div>
    );
};