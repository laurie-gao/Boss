  
import React, {useState} from 'react';
import moment from 'moment';
import { FaRegCalendarCheck, FaRegHandPointRight, FaRegPaperPlane } from 'react-icons/fa';
import { getDayOfWeek } from '../helpers';
import Calendar from 'react-calendar';

export const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate }) => {
  const todayKey = getDayOfWeek(moment().weekday()).key;
  const [date, setDate] = useState(new Date());

  console.log(date.toDateString());

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
      </ul>
        <Calendar
              minDetail="month"
              minDate={new Date()}
              onChange={ date => {
                setTaskDate(moment(date.toDateString, 'ddd MMM DD YYYY').format('DD/MM/YYYY'));
                setShowTaskDate(false);
              }}
              value={date}
        />
    </div>
  ))};
