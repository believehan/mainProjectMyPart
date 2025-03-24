import React, { useState } from 'react';
import './Calendar.css';

const Calendar = ({ onDateSelect }) => {
    const today = new Date();
    const [year, setYear] = useState(today.getFullYear());
    const [month, setMonth] = useState(today.getMonth());

    const lastDate = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dates = [];

    for (let i = 0; i < firstDay; i++) {
        dates.push(null);
    }
    for (let d = 1; d <= lastDate; d++) {
        dates.push(d);
    }

    const handlePrevMonth = () => {
        if (month === 0) {
            setYear(year - 1);
            setMonth(11);
        } else {
            setMonth(month - 1);
        }
    };

    const handleNextMonth = () => {
        if (month === 11) {
            setYear(year + 1);
            setMonth(0);
        } else {
            setMonth(month + 1);
        }
    };

    return (
        <div>
            <div className='pastFuter'>
                <button className='Calbtn' onClick={handlePrevMonth}>&lt;</button>
                {year}년 {month + 1}월
                <button className='Calbtn' onClick={handleNextMonth}>&gt;</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
                {days.map((day) => (
                    <div key={day} style={{ fontWeight: 'bold', textAlign: 'center' }}>{day}</div>
                ))}
                {dates.map((date, idx) => (
                    <div
                        key={idx}
                        onClick={() => date && onDateSelect(new Date(year, month, date))}
                        style={{
                            cursor: date ? 'pointer' : 'default',
                            textAlign: 'center',
                            padding: '8px 0',
                        }}
                    >
                        {date || ''}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;