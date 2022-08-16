import '../styles/ContactUs.scss'
import React from 'react'
import { useForm } from "react-hook-form";
import Footer from './Footer';
import Header from './Header'


function ContactUs() {
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
    alert('Your message has been sent succesfully!')
  };

  return (
    
    <section className="form-section">
      <Header />
        <div className='form'>
          <div className="form-container">
            <h2 className="header">Contact Us</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="form-group name">
                <input
                  type="text"
                  className='input'
                  placeholder='Name'
                  {...register("name", { required: "Name is Required",
                  minLength: {
                    value: 2,
                    message: "Minimum Required length is 2",
                  }})}
                  onKeyUp={() => {
                    trigger("name");
                  }}
                />
                {errors.name && (
                  <p className="error">{errors.name.message}</p>
                )}
              </div>

              <div className="form-group email">
                <input
                  type="text"
                  className='input email-input'
                  placeholder='Email address'
                  {...register("email", { required: "E-mail is Required" ,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid e-mail address",
                  }})}
                  onKeyUp={() => {
                    trigger("email");
                  }}
                />
                {errors.email && (
                  <p className="error">{errors.email.message}</p>
                )}
              </div>
                
              <div className="form-group">
                <textarea
                  className='input'
                  placeholder='Your message'
                  {...register("message", { required: "Message is Required",
                  minLength: {
                    value: 10,
                    message: "Minimum Required length is 10",
                  },
                  maxLength: {
                    value: 50,
                    message: "Maximum allowed length is 180 ",
                  }
                 })}
                 onKeyUp={() => {
                  trigger("message");
                }}
                ></textarea>
                {errors.message && (
                  <p className="error">{errors.message.message}</p>
                )}
              </div>
              <div className='form-group submit'>
                <input
                  type="submit"
                  className="button"
                  value="Submit"
                />
              </div>
            </form>
          </div>
          </div>
          <Footer />
    </section>
  
  );
}

export default ContactUs;