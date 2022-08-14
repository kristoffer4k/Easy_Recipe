import React from 'react'
import '../styles/Header.scss'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <section className='header'>
      <nav>
        <div className='logo'>Easy Recipe</div>
        <ul className='ul-items'>
          <li className='li-items'>
            <Link to='/'>Home</Link>
            <Link to='tips'>Kitchen Tips</Link>
            <Link to='contact'>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Header