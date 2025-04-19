import React, { useState } from 'react';
import { getStartOfWeek, generateWeekDates } from './WeekView';
import ChangeMonth from "./ChangeMonth";

const Week = ({weekDates}) => {
    return (
        <div className="week">
            {weekDates.map((date, index) => (
                <div key={index} className="day">
                    <span className="weekday">{date.toLocaleString("default", { weekday: "long" })}</span>
                    <span className="date">{date.getDate()}</span>
                </div>
            ))}
        </div>
    )
}

// get the first day of the month
export const getStartOfMonth = (date) => {
    const startOfMonth = new Date(date);
    startOfMonth.setDate(1); // Set to the first day of the month
    return startOfMonth;
};

const MonthView = ({ state }) => {

    // gets all the weeks in the month
    const getMonthWeeks = (startOfMonth) => {
        const monthWeeks = [];
        let currentStartOfWeek = getStartOfWeek(new Date(startOfMonth));

        do {
            const weekDates = generateWeekDates(currentStartOfWeek);
            monthWeeks.push(weekDates);

            // Move to the next week's start date and see if it's still the same month before looping
            currentStartOfWeek = new Date(weekDates[weekDates.length - 1]);
            currentStartOfWeek.setDate(currentStartOfWeek.getDate() + 1);
        } while (startOfMonth.getMonth() === currentStartOfWeek.getMonth()); 

        return monthWeeks;
    }

    const [startOfMonth, setStartOfMonth] = useState(getStartOfMonth(new Date(state)));
    const year = startOfMonth.getFullYear();
    const month = startOfMonth.toLocaleString("default", { month: "long" });

    const monthWeeks = getMonthWeeks(startOfMonth);

    return (
        <>
            <div className="header">
                <div className="month-year">{month} {year}</div>
                <ChangeMonth state={startOfMonth} setter={setStartOfMonth}/>
            </div>
            
            <div className="container">
                <div className="month-view-container">
                    {monthWeeks.map((weekDates, index) => (
                        <div key={index} className="week">
                            <Week weekDates={weekDates}/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MonthView;