import React, { Component } from 'react'
import ThemeContext from '../context/ThemeContext'

export default class WeeklyTotal extends Component {
  static contextType = ThemeContext

  state = {
    visible: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onWindowScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onWindowScroll)
  }

  onWindowScroll = () => {
    let element = document.getElementById('weekly-target')
    let wrapper = document.getElementById('main-content')

    // assuming you're using https://babeljs.io/docs/plugins/transform-class-properties/
    console.log('Debounced scroll event')
    wrapper.style.backgroundColor = this.checkVisible(element)
      ? this.setState({
          visible: true,
        })
      : this.setState({
        visible: false,
      })
  }

  checkVisible = elm => {
    var rect = elm.getBoundingClientRect()
    var viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight
    )
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0)
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
