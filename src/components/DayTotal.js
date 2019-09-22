import React, { Component } from 'react'
import ThemeContext from '../context/ThemeContext'

export default class DayTotal extends Component {
  static contextType = ThemeContext

  render() {
    const theme = this.context

    const unitsOfTime = theme.unitsOfTime

    function Total(props) {
      const isHours = props.isHours
      const totalHours = props.data.hoursTime
      const totalDecimal = props.data.decimalsTime
      let result

      const roundedDecimal = Math.round(totalDecimal * 100) / 100

      //   if hours is true
      if (isHours && totalHours) {
        result = <p>{totalHours}</p>
      } else if (isHours === false && roundedDecimal) {
        result = <p>{roundedDecimal} hours</p>
      } else {
        result = <p></p>
      }

      return <div className="day-total">{result}</div>
    }

    return <Total data={this.props} isHours={unitsOfTime} />
  }
}
