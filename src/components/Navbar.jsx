import React from 'react'
import { useNavigate } from 'react-router-dom';
import './navbar.css';

function Navbar() {

    const navigate = useNavigate();

    function handlingLogout() {
        navigate('/');
    }
  return (
    <div className='navbar'>
        <h2>Welcome to your own library</h2>

        <button className='logout-btn' onClick={handlingLogout}>Logout</button>
    </div>
  )
}

export default Navbar