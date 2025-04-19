import React, {useState} from "react";
import './components.css';
import DayView from "./DayView";
import WeekView from "./WeekView";
import MonthView from "./MonthView";

export default function CalendarUI() {
    const [today, setToday] = useState(new Date());
    const [view, setView] = useState("day");

    return (
        <>
            <div className="custom-toggle-group">
                <button className={`custom-toggle-button ${(view === "day") ? "active": ""}`} data-view="day" onClick={() => setView("day")}>Day</button>
                <button className={`custom-toggle-button ${(view === "week") ? "active": ""}`} data-view="week" onClick={() => setView("week")}>Week</button>
                <button className={`custom-toggle-button ${(view === "month") ? "active": ""}`} data-view="month" onClick={() => setView("month")}>Month</button>
            </div>

            <div className="view-container">
                {view === "day" && <DayView state={today} setter={setToday} />}
                {view === "week" && <WeekView state={today} />}
                {view === "month" && <MonthView state={today} />}
            </div>

            <div className="footer">
                <p>Made by wiam.</p>
            </div>
        </>

    )
}