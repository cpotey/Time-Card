import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <div>
          <p>
            <a
              href="https://connorpote.co.uk/projects"
              target="_blank"
              rel="noopener noreferrer"
            >
              About this project
            </a>
             . Built by{' '}
            <a
              href="https://connorpote.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connor Pote
            </a>
          </p>
        </div>
      </footer>
    )
  }
}
