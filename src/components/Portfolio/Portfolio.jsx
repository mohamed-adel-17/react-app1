import React, { Component } from 'react'
import style from '../Portfolio/portfolio.module.css'
import image1 from '../images/cabin.png'
import image2 from '../images/cake.png'
import image3 from '../images/circus.png'
import image4 from '../images/game.png'
import image5 from '../images/safe.png'
import image6 from '../images/submarine.png'




export default class Portfolio extends Component {
  render() {
    return (
      <>
        <div className='container my-5'>
          <div className="row py-5  ">
            <div className='py-3'>
              <h2 className='fw-bold text-black text-center py-3'>PORTFOLIO</h2>
              <div className='d-flex justify-content-center'>
                <hr className={`${style.line}`} />
                <i class="fa-solid fa-star fa-2x d-inline ms-2 me-2"></i>
                <hr className={`${style.line} `} />
              </div>
            </div>
            <div className="col-md-4 my-3">
              <div className={`${style.item} w-75 m-auto position-relative `}>
                <img src={image1} alt="cabin" className='w-100' />
                <div className={`${style.layer} w-100 h-100 position-absolute top-0 d-flex align-items-center justify-content-center `} >
                  <button id='openProd' className={`btn`}><i class="fa-solid fa-magnifying-glass-plus fa-3x"></i></button>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-3">
              <div className={`${style.item} w-75 m-auto position-relative `}>
                <img src={image2} alt="cabin" className='w-100' />
                <div className={`${style.layer} w-100 h-100 position-absolute top-0 d-flex align-items-center justify-content-center `} >
                  <button id='openProd' className={`btn`}><i class="fa-solid fa-magnifying-glass-plus fa-3x"></i></button>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-3">
              <div className={`${style.item} w-75 m-auto position-relative `}>
                <img src={image3} alt="cabin" className='w-100' />
                <div className={`${style.layer} w-100 h-100 position-absolute top-0 d-flex align-items-center justify-content-center `} >
                  <button id='openProd' className={`btn`}><i class="fa-solid fa-magnifying-glass-plus fa-3x"></i></button>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-3">
              <div className={`${style.item} w-75 m-auto position-relative `}>
                <img src={image4} alt="cabin" className='w-100' />
                <div className={`${style.layer} w-100 h-100 position-absolute top-0 d-flex align-items-center justify-content-center `} >
                  <button id='openProd' className={`btn`}><i class="fa-solid fa-magnifying-glass-plus fa-3x"></i></button>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-3">
              <div className={`${style.item} w-75 m-auto position-relative `}>
                <img src={image5} alt="cabin" className='w-100' />
                <div className={`${style.layer} w-100 h-100 position-absolute top-0 d-flex align-items-center justify-content-center `} >
                  <button id='openProd' className={`btn`}><i class="fa-solid fa-magnifying-glass-plus fa-3x"></i></button>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-3">
              <div className={`${style.item} w-75 m-auto position-relative `}>
                <img src={image6} alt="cabin" className='w-100' />
                <div className={`${style.layer} w-100 h-100 position-absolute top-0 d-flex align-items-center justify-content-center `} >
                  <button id='openProd' className={`btn`}><i class="fa-solid fa-magnifying-glass-plus fa-3x"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
