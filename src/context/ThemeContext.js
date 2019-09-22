import React, { Component } from 'react'

// Default State (only used when a component does not have a matching Provider above it in the tree)
const defaultState = {
  weekTotalHoursTime: null,
  weekTotalHoursDecimal: null,
  unitsOfTime: true,
}

const ThemeContext = React.createContext(defaultState)

class ThemeProvider extends Component {
  state = {
    weekTotalHoursTime: null,
    weekTotalHoursDecimal: null,
    unitsOfTime: true,
  }

  // function to set the unit of measurement 
  toggleUnits = () => {
    this.setState(prevState => ({ unitsOfTime: !prevState.unitsOfTime }))
  }

  // function to update the weekTotalHours
  updateTotalInTime = total => {
    this.setState({ weekTotalHoursTime: total })
  }
  updateTotalInDecimal = total => {
    this.setState({ weekTotalHoursDecimal: total })
  }

  render() {
    const { children } = this.props
    const { weekTotalHoursTime, weekTotalHoursDecimal, unitsOfTime } = this.state

    // console.log(this.state)

    return (
      <ThemeContext.Provider
        value={{
          weekTotalHoursTime,
          updateTotalInTime: this.updateTotalInTime,
          weekTotalHoursDecimal,
          updateTotalInDecimal: this.updateTotalInDecimal,
          unitsOfTime,
          toggleUnits: this.toggleUnits
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContext

export { ThemeProvider }
