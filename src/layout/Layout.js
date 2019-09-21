import React, { Component } from 'react'
import Helmet from 'react-helmet'
import ThemeContext from '../context/ThemeContext'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

import '../styles/main.scss'

export default class MainLayout extends Component {
  static contextType = ThemeContext

  render() {
    const { dark } = this.context
    const { children } = this.props

    let themeClass = ''
    if (dark) {
      themeClass = 'dark'
    } else {
      themeClass = ''
    }

    return (
      <>
        <Helmet
          bodyAttributes={{
            class: `theme ${themeClass}`,
          }}
        ></Helmet>
        <Navigation />
        <main id="main-content">
          <div className="container">{children}</div>
        </main>
        <Footer />
      </>
    )
  }
}
