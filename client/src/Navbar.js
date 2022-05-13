import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

function Navbar() {

    let navigate = useNavigate()

    function handleLogout(){

        fetch(`logout/`, {
            method: "DELETE"
        })
        .catch( error => console.log(error.message))
        .then(navigate('/'))

    }

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
                <Link className='a' to="/contact">Contact</Link>
                </li>
                <li className='li'>
                    <button onClick={handleLogout}className='ab' to="/"  >Logout</button>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar