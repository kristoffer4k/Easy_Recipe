import React from 'react'
import '../styles/Main.scss'

function Main() {
  return (
    <section className='main'>
      <div className='content'>
        <h1>Find the recipe you want!</h1>
        
      </div>
      <form className='form_1' >
         <input type='text' placeholder='Search by dish, ingredient or keyword'/>
         <button  type='submit'>Search</button>
       </form> 
       
    </section>
  )
}

export default Main
