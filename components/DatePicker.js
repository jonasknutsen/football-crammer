import React from 'react'
import PropTypes from 'prop-types'

const DatePicker = ({ ...rest }) => (
  <div className='date-wrapper'>
    <input type='date' {...rest} />
    <style jsx>{`
      .date-wrapper {
        margin: .5rem;
      }
      .date-wrapper input {
        font-size: 1rem;
        padding: .5rem;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      }
  `}</style>
  </div>
)

DatePicker.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  active: PropTypes.bool,
  dimmed: PropTypes.bool
}

export default DatePicker
