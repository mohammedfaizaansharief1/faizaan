import React from 'react'

function Form() {
  return (
    <div>
        <div className="heading">
        <h2>Masuk</h2>
        <h3>Daftar</h3>
        </div>
        <div className="input">
            <input type="text"  placeholder='Nomor Ponsel atau Email'/>
            <input type="text"  placeholder='Kata Sandi'/>
            <i class="ri-eye-off-line"></i>
        </div>

    </div>
  )
}

export default Form
