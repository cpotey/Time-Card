import React, { Component } from 'react'
import ThemeContext from '../context/ThemeContext'

export default class WeeklyTotal extends Component {
  static contextType = ThemeContext

  render() {
    const theme = this.context

    const unitsOfTime = theme.unitsOfTime
    const weeklyTime = theme.weekTotalHoursTime
    const weeklyDecimal = theme.weekTotalHoursDecimal
    // console.log(theme)

    function WeekTotal() {
      //   console.log(unitsOfTime)
      let result

      //   if unitsoftime is true, and weekly time exists, and isnt 0h 0m
      if (unitsOfTime && weeklyTime !== null) {
        result = <h2>Your weekly total is {weeklyTime}.</h2>
      } else if (unitsOfTime === false && weeklyDecimal !== null) {
        result = <h2>Your weekly total is {weeklyDecimal} hours.</h2>
      } else {
        result = <></>
      }

      return <div id="weekly-total">{result}</div>
    }

    return <WeekTotal />
  }
}
