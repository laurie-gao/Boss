import React, { useState } from 'react';
import { FaChevronDown, FaRegCalendarAlt, FaRegCalendarCheck, FaInbox} from 'react-icons/fa';
import { useSelectedProjectContext } from '../../context';
import { Projects } from '../Projects';
import { AddProject } from '../AddProject';

export const Sidebar = () => {
    const { setSelectedProject } = useSelectedProjectContext();
    const [current, setCurrent] = useState('inbox');
    const [showProjects, setShowProjects] = useState(true);

    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar__generic">
                <li data-testid="inbox" 
                    className={current === 'inbox'? 'active' : undefined}
                    onClick={() => {
                        setCurrent('inbox');
                        setSelectedProject('INBOX');
                    }}
                >
                    <span><FaInbox /></span>
                    <span>Inbox</span>
                </li>
                <li data-testid="today"
                    className={current === 'today'? 'active' : undefined}
                    onClick={() => {
                        setCurrent('today');
                        setSelectedProject('TODAY');
                    }}
                >
                    <span><FaRegCalendarCheck /></span>
                    <span>Today</span>
                </li>
                <li data-testid="next_7" 
                    className={current === 'next_7'? 'active' : undefined}
                    onClick={() => {
                        setCurrent('next_7');
                        setSelectedProject('NEXT_7');
                    }}
                >
                    <span><FaRegCalendarAlt /></span>
                    <span>Next 7 days</span>
                </li>
            </ul>
            <div className="sidebar__middle" onClick={() => setShowProjects(!showProjects)}>
                <span>
                    <FaChevronDown className={!showProjects? 'hidden-projects' : undefined}/>
                </span>
                <h2>Projects</h2>
            </div>
            <ul className="siderbar__projects">{showProjects && <Projects />}</ul>
            {showProjects && <AddProject />}
        </div>
    );
};