import React from 'react'
import ChoiceButton from '../components/ChoiceButton'
import DateRange from '../components/DateRange'
import DayPicker from '../components/DayPicker'

class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchBy: '',
      fromDate: '',
      toDate: '',
      numOfDays: ''
    }
  }

  handleResetSearch = () => {
    this.setState({
      searchBy: '',
      fromDate: '',
      toDate: '',
      numOfDays: ''
    })
  }

  handleSearchBy = (type) => {
    this.setState({
      searchBy: type
    })
  }

  render = () => {
    return (
      <div className='app-wrapper'>
        <h2>Step 1: Choose how you want to search</h2>
        <ChoiceButton
          name='timeperiod'
          text='By timeperiod'
          active={this.state.searchBy === 'timeperiod'}
          dimmed={this.state.searchBy === 'days'}
          onClick={() => this.handleSearchBy('timeperiod')}
        />
        <ChoiceButton
          name='days'
          text='By number of days'
          active={this.state.searchBy === 'days'}
          dimmed={this.state.searchBy === 'timeperiod'}
          onClick={() => this.handleSearchBy('days')}
        />
        {this.state.searchBy === 'timeperiod' && <DateRange />}
        {this.state.searchBy === 'days' && <DayPicker />}
        <style jsx>{`
          .app-wrapper {
            max-width: 1000px;
            margin: 0 auto;
            text-align: center;
          }
      `}</style>
      </div>
    )
  }
}

export default Index
