import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='sum'>
        <div className='logo'>
            Easy Employ
        </div>
        <nav className='nav-item'>
            <ul className='ul-item'>
                <li className='li'>
                    <Link className='a' to="/main">Home</Link>
                </li>
                <li className='li'>
                    <Link className='a' to="/watchList">WatchList</Link>
                </li>
                <li className='li'>
                    <Link className='a' to="/postJob">Post Job</Link>
                </li>
                <li className='li'>
                    <Link className='a' to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar