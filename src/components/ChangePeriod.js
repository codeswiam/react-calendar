import React from 'react'

// The buttons at the bottom that let you change days, weeks and months
const ChangePeriod = ({previous, current, next}) => {
  return (
    <div className="buttons">
        <button className="prev" onClick={previous}>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"/>
            </svg>
        </button>
        <button className="reset" onClick={current}>
            TODAY
        </button>
        <button className="next" onClick={next}>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="32px"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"/>
            </svg>
        </button>
    </div>
  )
}

export default ChangePeriod