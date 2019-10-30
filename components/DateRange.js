import React from 'react'
import DatePicker from './DatePicker.js'

const DateRange = ({ ...rest }) => (
  <div className='date-range'>
    <h2>Step 2: Choose your date range</h2>
    <div className='date-picker'>
      <DatePicker {...rest} />
      <DatePicker {...rest} />
    </div>
    <style jsx>{`
      .date-range {
        margin-top: 1rem;
        color: rgb(61, 37, 11);
      }
      .date-picker {
        display: flex;
        justify-content: center;
      }
  `}</style>
  </div>
)

DateRange.propTypes = {
}

export default DateRange
