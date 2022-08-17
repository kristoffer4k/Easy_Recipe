import React from 'react'
import '../styles/Contest.scss'

function Contest() {
  return (
    <section className='contest'>
        <div className='content'>
            <h2>Send us a photo of your prepared dish cooked from our recipes and win a <strong>$10</strong> voucher!</h2>
            <div>
              <button onClick={() => alert('Uploading photos via our website is temporary blocked. Please send us your photo to our e-mail address support@easyrecipe.com')} type='submit'>+</button>
              <p>Upload photo</p>
            </div>
        </div>
    </section>
  )
}

export default Contest