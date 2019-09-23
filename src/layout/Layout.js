import React, { Component } from 'react'
// import Helmet from 'react-helmet'
// import ThemeContext from '../context/ThemeContext'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

import '../styles/main.scss'

export default class MainLayout extends Component {

  render() {
    const { children } = this.props

    return (
      <>
        
        <Navigation />
        <main id="main-content">
          <div className="container">{children}</div>
        </main>
        <Footer />
      </>
    )
  }
}
