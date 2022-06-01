import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/Nav.modules.css'


export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div className='w-10 no'>
                    <nav className="navbar navbar-expand-lg fixed-top bg-black p-4">
                        <div className="container px-5">
                            <Link className="navbar-brand fw-bolder nav-color" to="">START REACT</Link>
                            <button className="navbar-toggler nav-color" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link fw-bold nav-color" to="portfolio">Portfolio</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-link fw-bold nav-color' to='about'>About</Link>
                                        
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link fw-bold nav-color" to="contacts">Contacts</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
