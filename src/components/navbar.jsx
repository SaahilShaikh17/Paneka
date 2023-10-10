import "./navbar.css"
import React from 'react';
import { Link } from 'react-router-dom';

import LoginImg from '../assets/login2.svg';

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="home">
        <Link to='/home'>Paneka</Link>
        </div>
        <div className='links'>
            <Link to='/fixtures'>Fixtures</Link>
            <Link to='/table'>Table</Link>
            <Link to='/forum'>Forum</Link>
            <Link to='/news'>News</Link>
            <Link to='/about'>About</Link>
        </div>
        <div className="login">
        <Link to='/login'><p/>Log in&nbsp;<img src={LoginImg} alt="Login"></img></Link>
        </div>
    </div>
  )
}