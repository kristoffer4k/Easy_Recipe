import '../styles/ContactUs.scss'
import React from 'react'

function Contact() {
  return (
      <React.Fragment>
        
        <form>
          <div className='header-section'>
              <p>Contact Us</p>
          </div>
          
          <div>
            <input type="text" className="input" placeholder='Full name' />
            <div>Error</div> 
          </div>
          
          <div>
            <input type="email" className="input" placeholder='Email address' />
            <div>Error</div> 
          </div>

          <div>
            <textarea className="message"  cols="30" rows="10" placeholder='Message'></textarea>
          </div>

          <div>
            <button className='button' type='submit' value='Submit'></button>
          </div>
        </form>
        
      </React.Fragment>
  )
}

export default Contact