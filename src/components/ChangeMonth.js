import React from 'react';
import ChangePeriod from "./ChangePeriod";
import { getStartOfMonth } from './MonthView';

// gets passed startOfMonth
const ChangeMonth = ({state, setter}) => {
    function previousMonth() {
        state.setMonth(state.getMonth() - 1);
        setter(new Date(state));
    }

    function nextMonth() {
        state.setMonth(state.getMonth() + 1);
        setter(new Date(state));
    }

    // when people click on the Today button
    function resetMonth() {
        setter(getStartOfMonth(new Date()));
    }

    return (
        <ChangePeriod previous={previousMonth} current={resetMonth} next={nextMonth}/>
    )
}

export default ChangeMonth