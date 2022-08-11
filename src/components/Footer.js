import '../styles/Footer.scss'
import React from 'react'
import {Link} from 'react-router-dom'
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsPinterest } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';



function Footer() {
  return (
    <section className='footer'>
      <div className='newsletter'>
        <h3>Subscribe to our weekly newsletter<br></br>so that you never miss the newest recipes!</h3>
          <div className='form_2'>
            <input type='text' placeholder='Email address'/>
            <button  type='submit'>Sign Up</button>
          </div>
      </div>
      
      
    <div className='social-media'>
      <li className='li-items'>
          <a href='https://www.facebook.com/'><BsFacebook className='icon'/></a>
          <a href='https://www.instagram.com/'><BsInstagram className='icon'/></a>
          <a href='https://www.twitter.com/'><BsTwitter className='icon'/></a>
          <a href='https://www.pinterest.com/'><BsPinterest className='icon'/></a>
          <a href='https://www.youtube.com/'><BsYoutube className='icon'/></a>
      </li>
    </div>

    <div className='terms-privacy'>
        <li className='li-items'>
          <Link to='terms'>Terms and Conidtions</Link>
          <Link to='policy'>Privacy Policy</Link>
          <Link to='accesibility'>Accessibility</Link>
        </li>
    </div>
    </section>
  )
}

export default Footer