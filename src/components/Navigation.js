import React, { Component } from 'react'
import ThemeContext from '../context/ThemeContext'

export default class Navigation extends Component {
  static contextType = ThemeContext

  render() {
    const theme = this.context

    return (
      <>
        <nav className="nav">
          <div className="nav-container container">
            <div className="brand">
              {/* <a href="/">
                <span className="text">Time Card</span>
              </a> */}
              <h1>Plan your weekly hours.</h1>
            </div>
            <div className="links">
              <button
                className="decimal-switcher"
                onClick={theme.toggleUnits}
                aria-label="Switch between Decimal and Time"
                title="Switch between Decimal and Time"
              >
                {theme.unitsOfTime ? (
                  <>
                    <span role="img" aria-label="Hourly Icon">
                      ⏰
                    </span>{' '}
                    <span className="switch">Displaying: Hours</span>
                  </>
                ) : (
                  <>
                    <span role="img" aria-label="Decimal Icon">
                      🧮
                    </span>{' '}
                    <span className="switch">Displaying: Decimals</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </nav>
        <div className="container">
          {/* <h1>Plan your weekly hours.</h1> */}
        </div>
      </>
    )
  }
}
