import React, { Component } from 'react'
import ThemeContext from '../context/ThemeContext'

export default class Navigation extends Component {
  static contextType = ThemeContext

  render() {
    const theme = this.context

    return (
      <nav className="nav">
        <div className="nav-container container">
          <div className="brand">
            <a>
              <span className="text">Time Card</span>
            </a>
          </div>
          <div className="links">
            <a
              className="decimal-switcher"
              onClick={theme.toggleUnits}
              aria-label="Switch between Decimal and Time"
              title="Switch between Decimal and Time"
            >
              {theme.unitsOfTime ? <p>turn to decimal</p> : <p>turn to time</p>}
            </a>
          </div>
        </div>
      </nav>
    )
  }
}
