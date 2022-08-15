import '../styles/ContactUs.scss'
import React from 'react'
import { useForm } from "react-hook-form";

const Contact = () => {

  // eslint-disable-next-line
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => alert(JSON.stringify(data));

  return (
      <React.Fragment>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='header-section'>
              <p>Contact Us</p>
          </div>
          
          <div>
            <input type="text" className="input" placeholder='Full name' 
            {...register("fullName", { required: {
              value: true,
              message: 'Full name is required',
              } })}/>
            <div>
            {errors.fullName && <span className='error'>{errors.fullName.message}</span>}  
            </div> 
          </div>
          
          <div>
            <input type="email" className="input" placeholder='Email address' />
            <div>Error</div> 
          </div>

          <div>
            <textarea className="message"  cols="30" rows="10" placeholder='Message'></textarea>
          </div>

          <div>
            <button className='button' type='submit' value='Submit'>Submit</button>
          </div>
        </form>

      </React.Fragment>
  )
}

export default Contact