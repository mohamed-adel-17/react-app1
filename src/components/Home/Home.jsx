import React from 'react'
import style from '../Home/home.module.css'
import image1 from '../images/a.svg';
import Portfolio from '../Portfolio/Portfolio';
import About from '../About/About'
import Contacts from '../Contacts/Contacts'

export default function Home() {
    return (
        <>
            <div className='homeUpPage'>
                <div className='row bg-info'>
                    <div className='vh-100 d-flex align-items-center justify-content-center'>
                        <div className='m-auto py-5'>
                            <div className='m-auto py-5'>
                                <div className='w-25 m-auto d-block'>
                                    <img src={image1} alt="asd" className='w-100' />
                                </div>
                            </div>
                            <div className='text-center '>
                                <h2 className={`${style.name} text-black py-3`}>START REACT</h2>
                                <div className='d-flex justify-content-center'>
                                    <hr className={`${style.line}`} />
                                    <i class="fa-solid fa-star fa-2x d-inline ms-2 me-2 border-2"></i>
                                    <hr className={`${style.line}`} />
                                </div>
                                <h4 className={`${style.desc} my-3`}>Graphic Artist - Web Designer - Illustrator</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <Portfolio />
                <About />
                <Contacts />
            </div>
        </>
    )
}
