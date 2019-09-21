import React, { Component } from 'react'

import ThemeContext from '../context/ThemeContext'

import TimePicker from 'rc-time-picker'
import 'rc-time-picker/assets/index.css'
import moment from 'moment'

import Day from './Day'

export default class WeekTable extends Component {
  static contextType = ThemeContext

  state = {
    weekdays: [
      {
        dayName: 'Monday',
        shortName: 'Mon',
        hoursDecimal: null,
        hoursTime: null,
        hoursInMinutes: null,
        dayStartValue: '',
        dayBreakValue: '',
        dayEndValue: '',
        dayStart: '',
        dayBreak: '',
        dayEnd: '',
        visible: true,
      },
      {
        dayName: 'Tuesday',
        shortName: 'Tues',
        hoursDecimal: null,
        hoursTime: null,
        hoursInMinutes: null,
        dayStart: '',
        dayBreak: '',
        dayEnd: '',
        visible: true,
      },
      {
        dayName: 'Wednesday',
        shortName: 'Wed',
        hoursDecimal: null,
        hoursTime: null,
        hoursInMinutes: null,
        dayStart: '',
        dayBreak: '',
        dayEnd: '',
        visible: true,
      },
      {
        dayName: 'Thursday',
        shortName: 'Thurs',
        hoursDecimal: null,
        hoursTime: null,
        hoursInMinutes: null,
        dayStart: '',
        dayBreak: '',
        dayEnd: '',
        visible: true,
      },
      {
        dayName: 'Friday',
        shortName: 'Fri',
        hoursDecimal: null,
        hoursTime: null,
        hoursInMinutes: null,
        dayStart: '',
        dayBreak: '',
        dayEnd: '',
        visible: true,
      },
      {
        dayName: 'Saturday',
        shortName: 'Sat',
        hoursDecimal: null,
        hoursTime: null,
        hoursInMinutes: null,
        dayStart: '',
        dayBreak: '',
        dayEnd: '',
        visible: true,
      },
      {
        dayName: 'Sunday',
        shortName: 'Sun',
        hoursDecimal: null,
        hoursTime: null,
        hoursInMinutes: null,
        dayStart: '',
        dayBreak: '',
        dayEnd: '',
        visible: true,
      },
    ],
  }

  handleInputs = (value, name, index) => {
    const twentyFourHoursFormat = moment(value, 'k kk')
    let weekdays = [...this.state.weekdays] // create the copy of state array

    if (value !== null) {
      // alert('yes val')
      // console.log(value)
      const test = weekdays[index][name]
      console.log( weekdays )
      // weekdays[index][name]Value = value
      weekdays[index][name] = twentyFourHoursFormat // set the value for either DayStart/DayBreak/DayEnd
      this.setState({ weekdays })
      // console.log(this.state.weekdays)

      // if dayStart & dayEnd exists, or if dayStart, dayEnd & dayBreak exists
      if (
        (weekdays[index].dayStart !== '' && weekdays[index].dayEnd !== '') ||
        (weekdays[index].dayStart !== '' &&
          weekdays[index].dayEnd !== '' &&
          weekdays[index].dayBreak !== '')
      ) {
        //  do the calculateTotalDayHours function
        let totalDayHours = this.calculateTotalDayHours(
          weekdays[index].dayStart,
          weekdays[index].dayEnd,
          weekdays[index].dayBreak
        )

        const minutesIntoHours = moment
          .duration(totalDayHours, 'minutes')
          .asHours()

        const dayHours = moment.duration(totalDayHours, 'minutes').hours()
        const dayMinutes = moment.duration(totalDayHours, 'minutes').minutes()

        // and add the day's total hours to the state
        weekdays[index].hoursInMinutes = totalDayHours //new value
        weekdays[index].hoursDecimal = minutesIntoHours
        weekdays[index].hoursTime = `${dayHours}h ${dayMinutes}m`
        this.setState({ weekdays })

        this.updateTotalHoursState()
      }
    } else {
      // alert('no val')
      weekdays[index].hoursDecimal = null
      weekdays[index].hoursTime = null
      weekdays[index].hoursInMinutes = null
      weekdays[index].dayStart = ''
      weekdays[index].dayBreak = ''
      weekdays[index].dayEnd = ''
      weekdays[index][name] = twentyFourHoursFormat // set the value for either DayStart/DayBreak/DayEnd
      this.setState({ weekdays })
      // console.log(this.state.weekdays)
      // this.clearDay(index)

      // need to empty all inputs

      this.updateTotalHoursState()
    }

    // // if dayStart & dayEnd exists, or if dayStart, dayEnd & dayBreak exists
    // if (
    //   (weekdays[index].dayStart && weekdays[index].dayEnd) ||
    //   (weekdays[index].dayStart &&
    //     weekdays[index].dayEnd &&
    //     weekdays[index].dayBreak)
    // ) {
    //   //  do the calculateTotalDayHours function
    //   let totalDayHours = this.calculateTotalDayHours(
    //     weekdays[index].dayStart,
    //     weekdays[index].dayEnd,
    //     weekdays[index].dayBreak
    //   )

    //   const minutesIntoHours = moment
    //     .duration(totalDayHours, 'minutes')
    //     .asHours()

    //   const dayHours = moment.duration(totalDayHours, 'minutes').hours()
    //   const dayMinutes = moment.duration(totalDayHours, 'minutes').minutes()

    //   // and add the day's total hours to the state
    //   weekdays[index].hoursInMinutes = totalDayHours //new value
    //   weekdays[index].hoursDecimal = minutesIntoHours
    //   weekdays[index].hoursTime = `${dayHours}h ${dayMinutes}m`
    //   this.setState({ weekdays })

    //   this.updateTotalHoursState()
    // }
  }

  // Return the days total
  calculateTotalDayHours = (dayStart, dayEnd, dayBreak) => {
    if (dayBreak) {
      const dayStartInMinutes = moment
        .duration(dayStart.format('HH:mm'))
        .asMinutes()
      const dayBreakInMinutes = moment
        .duration(dayBreak.format('HH:mm'))
        .asMinutes()
      const dayEndInMinutes = moment
        .duration(dayEnd.format('HH:mm'))
        .asMinutes()

      let totalDayHours =
        dayEndInMinutes - dayStartInMinutes - dayBreakInMinutes
      return totalDayHours
    } else {
      // get the dayStart and End, convert into minutes. Subtract the end mins from the start.
      const dayStartInMinutes = moment
        .duration(dayStart.format('HH:mm'))
        .asMinutes()
      const dayEndInMinutes = moment
        .duration(dayEnd.format('HH:mm'))
        .asMinutes()

      let totalDayHours = dayEndInMinutes - dayStartInMinutes
      return totalDayHours
    }
  }

  //  function to update the weekTotalHoursTime & Decimal within ThemeContext
  updateTotalHoursState = () => {
    let weekdays = [...this.state.weekdays]
    const reducer = (accumulator, currentValue) => accumulator + currentValue

    // get the weekday hours and put them into an array
    let hoursTimeArray = weekdays.map(a => a.hoursInMinutes)
    let hoursDecimalArray = weekdays.map(a => a.hoursDecimal)

    // Reduce arrays to a single integer
    let reduceTimeHours = hoursTimeArray.reduce(reducer)
    let reduceDecimalHours = hoursDecimalArray.reduce(reducer)

    // Turn total minutes into hours and minutes
    let totalHours = Math.floor(reduceTimeHours / 60)
    let totalMinutes = reduceTimeHours % 60
    const reduceTotalTime = `${totalHours}h ${totalMinutes}m`

    // update the state within ThemeContext
    this.context.updateTotalInDecimal(reduceDecimalHours)
    this.context.updateTotalInTime(reduceTotalTime)
  }

  clearDay = index => {
    let weekdays = [...this.state.weekdays] // create the copy of state array

    weekdays[index].hoursDecimal = null
    weekdays[index].hoursTime = null
    weekdays[index].hoursInMinutes = null
    weekdays[index].dayStart = ''
    weekdays[index].dayBreak = ''
    weekdays[index].dayEnd = ''
    this.setState({ weekdays })

    // need to empty inputs
    // const input = `daystart-${index}`
    // this.refs.input.value = ''

    this.updateTotalHoursState()
  }

  render() {
    const theme = this.context

    // Default open values for TimePicker
    const startTime = moment()
      .hour(9)
      .minute(0)
    const breakTime = moment()
      .hour(0)
      .minute(30)
    const endTime = moment()
      .hour(17)
      .minute(0)

    let totalResult
    // if (theme.unitsOfTime) {
    //   totalResult = <div>{day.hoursTime}</div>
    // } else {
    //   totalResult = <div>{day.hoursDecimal}</div>
    // }

    return (
      <>
        <h1>Plan your weekly hours.</h1>

        {this.state.weekdays.map((day, index) => (
          <div key={index} id={index} className={`${day.dayName} day`}>
            <div className="column day-name">
              <h3>{day.dayName}</h3>
            </div>
            <div className="column day-start">
              <TimePicker
                className={`daystart-${index}`}
                name="dayStart"
                showSecond={false}
                value={this.state.dayStartValue}
                onChange={(value, e) =>
                  this.handleInputs(value, 'dayStart', index)
                }
                defaultOpenValue={startTime}
                placeholder={'9:00 am'}
                use12Hours
                // allowEmpty={false}
              />
            </div>
            <div className="column day-break">
              <TimePicker
                name="dayBreak"
                showSecond={false}
                onChange={(value, e) =>
                  this.handleInputs(value, 'dayBreak', index)
                }
                defaultOpenValue={breakTime}
                placeholder={'0:30'}
                // allowEmpty={false}
              />
            </div>
            <div className="column day-end">
              <TimePicker
                name="dayEnd"
                showSecond={false}
                onChange={(value, e) =>
                  this.handleInputs(value, 'dayEnd', index)
                }
                defaultOpenValue={endTime}
                placeholder={'5:00 pm'}
                use12Hours
                // allowEmpty={false}
              />
            </div>
            <div className="column day-total">
              {/* {day.hoursInMinutes && theme.unitsOfTime == true ? (
                <div>{day.hoursTime}</div>
              ) : (
                <div></div>
              )} */}
              {totalResult}
            </div>
            {/* <button
              onClick={() => {
                this.clearDay(index)
              }}
              type="button"
            >
              clear
            </button> */}
          </div>
        ))}

        <div id="weekly-total">
          {theme.weekTotalHoursTime ? (
            <h2>Your total weekly hours are {theme.weekTotalHoursTime}.</h2>
          ) : (
            <h2></h2>
          )}
        </div>
      </>
    )
  }
}
