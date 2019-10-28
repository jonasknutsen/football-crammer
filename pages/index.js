import React from 'react'
import ChoiceButton from '../components/ChoiceButton'

class Index extends React.Component {
  render = () => {
    return (
      <div>
        <h2>Choose how you want to search</h2>
        <ChoiceButton name='timeperiod' text='By timeperiod' />
        <ChoiceButton name='days' text='By number of days' />
      </div>
    )
  }
}

export default Index
