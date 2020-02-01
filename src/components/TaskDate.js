  
import React from 'react';
import moment from 'moment';
import { FaRegCalendarCheck, FaRegHandPointRight, FaRegPaperPlane } from 'react-icons/fa';
import { getDayOfWeek } from '../helpers';

export const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate }) => {
  const todayKey = getDayOfWeek(moment().weekday()).key;

  const setDate = (day) => { return (
      <div
        onClick={() => {
          setShowTaskDate(false);
          setTaskDate(moment().add(day, 'days').format('DD/MM/YYYY'));
        }}
        data-test-id="task-date-next-week"
      >
        <span>
          <FaRegPaperPlane />
        </span>
        <span>{getDayOfWeek((todayKey+day)%7).name}</span>
      </div>
  )};

  return (showTaskDate && (
    <div className="task-date" data-testid="task-date-overlay">
      <ul className="task-date__list">
        <li>
          <div
            onClick={() => {
              setShowTaskDate(false);
              setTaskDate(moment().format('DD/MM/YYYY'));
            }}
            data-testid="task-date-today"
          >
            <span>
              <FaRegCalendarCheck />
            </span>
            <span>Today</span>
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              setShowTaskDate(false);
              setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'));
            }}
            data-testid="task-date-tomorrow"
          >
            <span>
              <FaRegHandPointRight />
            </span>
            <span>Tomorrow</span>
          </div>
        </li>
        <li>{setDate((todayKey+2)%7)}</li>
        <li>{setDate((todayKey+3)%7)}</li>
        <li>{setDate((todayKey+4)%7)}</li>
        <li>{setDate((todayKey+5)%7)}</li>
        <li>{setDate((todayKey+6)%7)}</li>
      </ul>
    </div>
  ))};
