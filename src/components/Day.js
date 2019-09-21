import React, { Component } from 'react'

export default class Day extends Component {
  state = {
    hours: this.props.day.hours,
  }

  setInput = event => {
    let value = event.target.value;
    this.setState({ hours: value }, this.props.handleChange(event, this.state.hours))
    console.log(this.state)
    // this.handleSubmit(value);
    
  }

  render() {
    let day = this.props.day
    // console.log(this.state.hours)

    // console.log(this.props)
    // console.log(this.state)

    return (
      <div
        id={day.dayName}
        className="day"
        // onChange={e => this.props.handleChange(e, this.state.hours)}
      >
        <h3>{day.dayName}</h3>
        <div className="column">
          <p>Start</p>
          <input
            id={this.props.id}
            type="time"
            value={this.state.hours}
            onChange={this.setInput}
          ></input>
        </div>
        <div className="column">
          <p>Break</p>
          <input type="time" placeholder="00:30"></input>
        </div>
        <div className="column">
          <p>End</p>
          <input type="time" placeholder="17:00"></input>
        </div>
        <div className="day-total">
          <p>Total</p>
          {day.hours}
        </div>

        {/* <button onClick={() => {theme.updateWeekTotalHours(day.dayName)} }></button> */}
      </div>
    )
  }
}
