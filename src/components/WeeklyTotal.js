import React, { Component } from 'react'
import ThemeContext from '../context/ThemeContext'

export default class WeeklyTotal extends Component {
  static contextType = ThemeContext

  state = {
    visible: false,
  }

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onWindowScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onWindowScroll)
  }

  onWindowScroll = () => {
    const wrappedElement = document.getElementById('weekly-target')
    if (this.isBottom(wrappedElement)) {
      this.setState({
        visible: true,
      })
      document.removeEventListener('scroll', this.trackScrolling)
    } else {
      this.setState({
        visible: false,
      })
    }
  }

  render() {
    const theme = this.context
    const { visible } = this.state

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

      return (
        <div id="weekly-total" className={visible ? 'visible' : 'not-visible'}>
          {result}
        </div>
      )
    }

    return <WeekTotal />
  }
}
