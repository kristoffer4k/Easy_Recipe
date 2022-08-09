import React from 'react'
import '../styles/Main.scss'
// import { FaSearch } from 'react-icons/fa';

function Main() {
  return (
    <section className='main'>
      <div className='content'>
        <h1>The easiest and fastest way to find<br></br>the recipe you want!</h1>
        
      </div>
      <form className='form_1' >
         {/* <FaSearch className='icon'/> */}
         <input type='text' className='icon' placeholder='Search by dish, ingredient or keyword'/>
         <button  type='submit'>Search</button>
       </form> 
       
    </section>
  )
}

export default Main