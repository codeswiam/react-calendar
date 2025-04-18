import React from "react";
import ChangePeriod from "./ChangePeriod";

const ChangeDate = ({state, setter}) => {
    function previousDate() {
        state.setDate(state.getDate() - 1);
        setter(new Date(state));
    }

    function nextDate() {
        state.setDate(state.getDate() + 1);
        setter(new Date(state));
    }

    // when people click on the Today button
    function resetDate() {
        setter(new Date());
      }

    return (
        <ChangePeriod previous={previousDate} current={resetDate} next={nextDate}/>
    )
  };
  
  
  export default ChangeDate;