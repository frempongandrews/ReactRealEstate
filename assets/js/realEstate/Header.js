import React, { Component} from 'react'
export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }

  render () {
    return (

      <header>

        <div className='logo'>
          logo
        </div>

        <nav>
          <a href='#'>create ads</a>
          <a href='#'>About us</a>
          <a href='#'>Log in</a>
          <a href='#' className='register-btn'>Register</a>
        </nav>

      </header>

    )
  }
}
