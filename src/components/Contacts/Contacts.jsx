import React from 'react'
import style from '../Portfolio/portfolio.module.css'


export default function Contacts() {
  return (
    <>
      <div className="container">
        <div className="row py-5">
        <div className='py-3'>
              <h2 className='fw-bold text-black text-center py-3'>CONTACT ME</h2>
              <div className='d-flex justify-content-center'>
                <hr className={`${style.line}`} />
                <i class="fa-solid fa-star fa-2x d-inline ms-2 me-2"></i>
                <hr className={`${style.line} `} />
              </div>
            </div>
          <div className="col-md-7 m-auto">
            <div>
              <div className={`${style.nameInput} my-2`}>
                <label htmlFor=""></label>
                <input type="text" placeholder='Name' className='form-control' />
              </div>
              <div className={`${style.nameInput}my-2`}>
                <label htmlFor=""></label>
                <input type="text" placeholder='Email Address' className=' form-control' />
              </div>
              <div className={`${style.nameInput}my-2`}>
                <label htmlFor=""></label>
                <input type="text" placeholder='Phone Number' className=' form-control' />
              </div>
              <div className={`${style.nameInput}my-2`}>
                <label htmlFor=""></label>
                <textarea  className='form-control' placeholder='Message'></textarea>
              </div>
              <button className='btn btn-info py-2 my-5'>Send</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
