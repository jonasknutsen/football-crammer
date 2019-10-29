import React from 'react'
import PropTypes from 'prop-types'

const ChoiceButton = ({ name, text, active, dimmed, ...rest }) => (
  <button name={name} className={`${active ? 'active' : ''} ${dimmed ? 'dimmed' : ''}`} {...rest}>
    {text}
    <style jsx>{`
      button {
        background-color: rgb(86, 166, 106);
        font-size: 2rem;
        font-weight: 300;
        padding: 2rem;
        margin: .5rem;
        letter-spacing: .1rem;
        color: #fff;
      }
      button:hover {
        opacity: .8;
      }
      .active {
        background-color: rgb(45, 115, 55);
      }
      .dimmed {
        background-color: rgb(174, 200, 194);
      }
  `}</style>
  </button>
)

ChoiceButton.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  active: PropTypes.bool,
  dimmed: PropTypes.bool
}

export default ChoiceButton
