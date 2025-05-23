import React, {useState} from "react";
import ChangeWeek from "./ChangeWeek";

// generate an array of the dates of the week
export const generateWeekDates = (startOfWeek) => {
    return Array.from({ length: 7 }, (_, i) => {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + i);
        return date;
    });
};

// calculate the first day of the week
export const getStartOfWeek = (date) => {
    const day = date.getDay(); // 0 (Sunday) to 6 (Saturday)
    const diff = date.getDate() - day + 1; // Adjust to the start of the week (Monday)
    // - day would land on sunday
    return new Date(date.setDate(diff));
};

const WeekView = ({ state }) => {
    

    const [startOfWeek, setStartOfWeek] = useState(getStartOfWeek(new Date(state)));
    const weekDates = generateWeekDates(startOfWeek);

    const year = startOfWeek.getFullYear();
    const month = startOfWeek.toLocaleString("default", { month: "long" });

    return (
        <>
            <div className="header">
                <div className="month-year">{month} {year}</div>
                <ChangeWeek state={startOfWeek} setter={setStartOfWeek}/>
            </div>

            <div className="container">
                <div className="week-view-container">
                    {weekDates.map((date, index) => (
                        <div key={index} className="day">
                            <p className="weekday">{date.toLocaleString("default", { weekday: "long" })}</p>
                            <p className="date">{date.getDate()}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default WeekView;