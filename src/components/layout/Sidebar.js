import React, { useState } from 'react';
import { FaChevronDown, FaRegCalendarAlt, FaRegCalendarCheck, FaInbox} from 'react-icons/fa';
import { useSelectedProjectContext, useInboxContext } from '../../context';
import { Projects } from '../Projects';
import { AddProject } from '../AddProject';

export const Sidebar = () => {
    const { setSelectedProject } = useSelectedProjectContext();
    const { showInbox, setShowInbox } = useInboxContext();
    const [current, setCurrent] = useState('inbox');
    const [showProjects, setShowProjects] = useState(true);
    const [ activeProject, setActiveProject] = useState(true);

    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar__generic">
                <li data-testid="inbox" 
                    className={(current === 'inbox' || showInbox ) && (activeProject || showInbox) ? 'active' : undefined}
                >
                    <div
                        onClick={() => {
                            setCurrent('inbox');
                            setSelectedProject('INBOX');
                            setActiveProject(true);
                        }}
                    >
                        <span><FaInbox /></span>
                        <span>Inbox</span>
                    </div>
                </li>
                <li data-testid="today"
                    className={(current === 'today' && !showInbox && activeProject)? 'active' : undefined}
                >
                    <div
                        onClick={() => {
                            setCurrent('today');
                            setSelectedProject('TODAY');
                            setShowInbox(false);
                            setActiveProject(true);
                        }}
                    >
                        <span><FaRegCalendarCheck /></span>
                        <span>Today</span>
                    </div>
                </li>
                <li data-testid="next_7" 
                    className={(current === 'next_7' && !showInbox && activeProject)? 'active' : undefined}
                >
                    <div
                        onClick={() => {
                            setCurrent('next_7');
                            setSelectedProject('NEXT_7');
                            setShowInbox(false);
                            setActiveProject(true);
                        }}
                    >
                        <span><FaRegCalendarAlt /></span>
                        <span>Next 7 days</span>
                    </div>
                </li>
            </ul>
            <div className="sidebar__middle" onClick={() => setShowProjects(!showProjects)}>
                <span>
                    <FaChevronDown className={!showProjects? 'hidden-projects' : undefined}/>
                </span>
                <h2>Lists</h2>
            </div>
            <ul className="siderbar__projects">
                {showProjects && 
                    <Projects activeProject={activeProject} setActiveProject={setActiveProject} />}
            </ul>
            {showProjects && <AddProject />}
        </div>
    );
};