import React from "react";
import ChangeDate from "./ChangeDate";

const DayView = ({state, setter}) => {
    const year = state.getFullYear();
    const month = state.toLocaleString("default", { month: "long" });
    const day = state.toLocaleString("default", { weekday: "long" });
    const date = state.getDate();

    return (
        <>
            <div className="day-view-container">
                <div className="main">
                    <p className="month">{month}</p>
                    <p className="day">{day}</p>
                    <p className="date">{date}</p>
                    <p className="year">{year}</p>
                </div>
            </div>
            <ChangeDate state={state} setter={setter}/>
        </>

    )
}

export default DayView;