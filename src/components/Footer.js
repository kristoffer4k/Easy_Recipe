import '../styles/Footer.scss'
import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form";
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsPinterest } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';




function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    alert('Thank you for joining our newsletter!')
  };

  return (
    <section className='footer'>
      <div className='newsletter'>
        <h3>Subscribe to our weekly newsletter so that you never miss the newest recipes!</h3>
          <form className='form_2' onSubmit={handleSubmit(onSubmit)}>
            <div className='email-newsletter'>
            <input type='text' placeholder='Email address'
              {...register("email", {required: " ",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid e-mail address",
              }})}
              onKeyUp={() => {
                trigger("email");
              }}
            />

            <button  type='submit' className="button"
                  value="Submit">Sign Up</button>
            </div>
            <div className='error-container'>
            {errors.email && (
              <p className="error">{errors.email.message}</p>
            )}  
            </div>      
          </form>
      </div>
      
      
    <div className='social-media'>
      <li className='li-items'>
          <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer"><BsFacebook className='icon'/></a>
          <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer"><BsInstagram className='icon'/></a>
          <a href='https://www.twitter.com/' target="_blank" rel="noopener noreferrer"><BsTwitter className='icon'/></a>
          <a href='https://www.pinterest.com/' target="_blank" rel="noopener noreferrer"><BsPinterest className='icon'/></a>
          <a href='https://www.youtube.com/' target="_blank" rel="noopener noreferrer"><BsYoutube className='icon'/></a>
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