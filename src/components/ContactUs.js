import '../styles/ContactUs.scss'
import React from 'react'
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
      mode:'onTouched'
  });

  const onSubmit = data => console.log(data);

return (
  
    <section className='form'>
       <form onSubmit={handleSubmit(onSubmit)}>
          
          <div className="header">
            <h2>Contact us</h2>
          </div>

          <div className='body'>
            <div className="name">
              <div className='name-input'>
                <input
                  type="text"
                  placeholder="Full name"

                  {...register("fullName", { 
                      required: {
                          value: true,
                          message: 'Full name is required'
                      },
                      minLength: {
                          value: 3,
                          message: "Minimum allowed length is 3 characters",
                        },
                        maxLength: {
                          value: 20,
                          message: "Maximum allowed length is 20 characters",
                        },
                        pattern: {
                          value: /[a-zA-Z]+/,
                          message: "Please enter only alphabets",
                        }
                   })}
                />
                <div className='name-error'>
                {errors.fullName && <span>{errors.fullName.message}</span>}
                </div>
              </div>

              <div className='email'>
                <input
                  type="email"
                  placeholder="E-mail address"
                  {...register("email", { 
                      required: {
                          value: true,
                          message: 'Email is required'
                      },
                  
                        pattern: {
                          value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                          message: "Please enter a valid email",
                        }
                   })}
                />
                <div className='email-error'>
                {errors.email && <span>{errors.email.message}</span>}
                </div>
              </div>

              <div className='message'>
                <textarea
                  placeholder="message"
                  {...register("comment", { 
                      required: {
                          value: true,
                          message: 'Comment is required'
                      },
                      minLength: {
                          value: 3,
                          message: "Minimum allowed length is 3 characters",
                        },
                        maxLength: {
                          value: 60,
                          message: "Maximum allowed length is 180 characters ",
                        },

                   })}
                />
                <div className='message-error'>
                {errors.comment && <span>{errors.comment.message}</span>}
                </div>
              </div>

              <div className='button-submit'>
              <input
                  type="submit"
                  value="Submit"
                   />
              </div>
            </div>
          </div>
      </form>
    </section>
  
);
};

export default Contact