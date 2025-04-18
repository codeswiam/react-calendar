import React from 'react';
import ChangePeriod from "./ChangePeriod";

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
        setter(new Date());
      }

    return (
        <ChangePeriod previous={previousWeek} current={resetWeek} next={nextWeek}/>
    )
}

export default ChangeWeek