import React from "react";
import ChangeDate from "./ChangeDate";

const DayView = ({state, setter}) => {
    const year = state.getFullYear();
    const month = state.toLocaleString("default", { month: "long" });
    const day = state.toLocaleString("default", { weekday: "long" });
    const date = state.getDate();

    return (
        <>
            <div className="header">
                <div className="month-year">{month} {year}</div>
                <ChangeDate state={state} setter={setter}/>
            </div>
            <div className="container">
                <div className="day-view-container">
                        <div className="month">{month}</div>
                        <div className="others">
                            <p className="day">{day.substring(0, 3)}</p>
                            <p className="date">{date}</p>
                            <p className="year">{year}</p>
                        </div>
                </div>
            </div>
        </>

    )
}

export default DayView;