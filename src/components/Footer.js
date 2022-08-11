import '../styles/Footer.scss'
import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <section className='footer'>
      <div className='newsletter'>
        <h3>Subscribe to our weekly newsletter<br></br>so that you never miss the newest recipes!</h3>
        <input type='text' placeholder='Email address'/>
        <button  type='submit'>Sign Up</button>
      </div>
      
    <div className='social-media'>
      <h4>Follow us on</h4>
      <li className='li-items'>
          <a href='https://www.facebook.com/'>Facebook</a>
          <a href='https://www.instagram.com/'>Insta</a>
          <a href='https://www.twitter.com/'>Twitter</a>
          <a href='https://www.pinterest.com/'>Pinterest</a>
          <a href='https://www.youtube .com/'>Youtube</a>
      </li>
    </div>

    <div className='terms-privacy'>
        <li className='li-items'>
          <Link to='terms'>Terms and conidtions</Link>
          <p>|</p>
          <Link to='policy'>Privacy policy</Link>
          <p>|</p>
          <Link to='accesibility'>Accessibility</Link>
        </li>
    </div>
    </section>
  )
}

export default Footer