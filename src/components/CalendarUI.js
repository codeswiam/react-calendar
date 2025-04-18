import React, {useState} from "react";
import './components.css';
import DayView from "./DayView";
import WeekView from "./WeekView";
import MonthView from "./MonthView";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function CalendarUI() {
    const [today, setToday] = useState(new Date());
    const [view, setView] = useState("day");

    const handleViewChange = (event, newView) => {
        if (newView) {
            setView(newView);
        }
    };

    return (
        <>
            <ToggleButtonGroup
                value={view}
                exclusive
                onChange={handleViewChange}
                aria-label="view"
            >
                <ToggleButton value="day" aria-label="day view">
                    Day
                </ToggleButton>
                <ToggleButton value="week" aria-label="week view">
                    Week
                </ToggleButton>
                <ToggleButton value="month" aria-label="month view">
                    Month
                </ToggleButton>
                <ToggleButton value="year" aria-label="year view">
                    Year
                </ToggleButton>
            </ToggleButtonGroup>

            <div className="view-container">
                {view === "day" && <DayView state={today} setter={setToday} />}
                {view === "week" && <WeekView state={today} />}
                {view === "month" && <MonthView state={today} />}
                {view === "year" && <div>Year View Placeholder</div>}
            </div>
        </>

    )
}