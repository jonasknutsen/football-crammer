import React from 'react'
import PropTypes from 'prop-types'

const ChoiceButton = ({ name, text, ...rest }) => (
  <button name={name} {...rest}>
    {text}
    <style jsx>{`
      button {
        background-color: red;
        font-size: 2rem;
        font-weight: 300;
        padding: 2rem;
        margin: .5rem;
        letter-spacing: .1rem;
      }
      button:hover {
        opacity: .8;
      }
  `}</style>
  </button>
)

ChoiceButton.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string
}

export default ChoiceButton
