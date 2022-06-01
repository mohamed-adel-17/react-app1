import React, { Component } from 'react'
import style from '../Portfolio/portfolio.module.css'

export default class About extends Component {
  render() {
    return (
      <div className='bg-info'>
        <div className='container py-5'>
          <div className="row py-5">
            <div className='py-5'>
              <h2 className='fw-bold text-black text-center py-5'>ABOUT</h2>
              <div className='d-flex justify-content-center'>
                <hr className={`${style.line}`} />
                <i class="fa-solid fa-star fa-2x d-inline ms-2 me-2"></i>
                <hr className={`${style.line} `} />
              </div>

            </div>
            <div className="col-lg-4 ms-auto py-5">
              <div>
                <p className={`${style.content}`}>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
            </div>
            <div className="col-lg-4 me-auto py-5">
              <div>
                <p className={`${style.content}`}>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
