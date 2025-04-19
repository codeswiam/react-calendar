import React from 'react';
import ChangePeriod from "./ChangePeriod";
import { getStartOfWeek } from './WeekView';

// gets passed startOfWeek
const ChangeWeek = ({state, setter}) => {
    function previousWeek() {
        state.setDate(state.getDate() - 7);
        setter(new Date(state));
    }

    function nextWeek() {
        state.setDate(state.getDate() + 7);
        setter(new Date(state));
    }

    // when people click on the Today button
    function resetWeek() {
        setter(getStartOfWeek(new Date()));
      }

    return (
        <ChangePeriod previous={previousWeek} current={resetWeek} next={nextWeek}/>
    )
}

export default ChangeWeek