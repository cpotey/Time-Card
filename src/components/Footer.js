import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <div>
          <a
            href="https://ko-fi.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ko-Fi
          </a>
          <a
            href="https://patreon.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Patreon
          </a>
        </div>
        <div>
          <a
            href="https://github.com/"
            title="Open-source on GitHub"
          >
            {/* <img
              src={github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
            /> */}
            link 1
          </a>
          <a href="https://www.netlify.com/" title="Hosted by Netlify">
            {/* <img
              src={netlify}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
            /> */}
            link 2
          </a>
          <a href="https://www.gatsbyjs.org/" title="Built with Gatsby">
            {/* <img
              src={gatsby}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
            /> */}
            link 3
          </a>
        </div>
      </footer>
    )
  }
}
