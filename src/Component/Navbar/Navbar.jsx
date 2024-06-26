import React from 'react'
import "./Navbar.scss"
import { NavLink } from 'react-router-dom'


const Navbar = ({ setBarsopen , setLogin , barsopen}) => {
  return (
    <div className='Navbar'>
        <div className="logo"><NavLink to={"/"}><img src="/images/Logo.png" alt="" /></NavLink></div>
        <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/Shop"}>Shop</NavLink></li>
            <li><NavLink to={"/Found"}>Plant Care</NavLink></li>
            <li><NavLink to={"/Found"}>Blogs</NavLink></li>
        </ul>
        <div className="search">
          <span>3</span>
        <NavLink to={"/Search"}><i class="fa-solid fa-magnifying-glass"></i></NavLink>
       <NavLink to={"ShopCart"}> <i class="fa-solid fa-cart-shopping"></i></NavLink>
       <NavLink ><button onClick={() => setLogin(true)}><i class="fa-solid fa-arrow-right-to-bracket"></i> Login</button></NavLink>
        </div>
        <input type="text"  placeholder = 'Find your plants'/>
        <div className="bars" onClick={() => setBarsopen(!barsopen)}><i class="fa-solid fa-bars-progress"></i></div>
    </div>
  )
}

export default Navbar