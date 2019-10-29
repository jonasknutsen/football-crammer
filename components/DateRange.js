import React from 'react'
import PropTypes from 'prop-types'

const DateRange = ({ ...rest }) => (
  <div className='date-range'>
    <h2>Choose your daterange</h2>
    <style jsx>{`
      .date-range {
        color: rgb(61, 37, 11);
      }
  `}</style>
  </div>
)

DateRange.propTypes = {
}

export default DateRange
