import React from 'react'
import "./Navbar.scss"
import { NavLink } from 'react-router-dom'


const Navbar = ({ setBarsopen , setLogin , setSearch , search , barsopen}) => {
  return (
    <div className='Navbar'>
        <div className="logo"><NavLink to={"/"}><img src="/images/Logo.png" alt="" /></NavLink></div>
        <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/Shop"}>Shop</NavLink></li>
            <li><NavLink>Plant Care</NavLink></li>
            <li><NavLink>Blogs</NavLink></li>
        </ul>
        <div className="search">
          <span>3</span>
        <i class="fa-solid fa-magnifying-glass" onClick={() => setSearch(!search)}></i>
       <NavLink to={"ShopCart"}> <i class="fa-solid fa-cart-shopping"></i></NavLink>
       <NavLink ><button onClick={() => setLogin(true)}><i class="fa-solid fa-arrow-right-to-bracket"></i> Login</button></NavLink>
        </div>
        <input type="text"  placeholder = 'Find your plants'/>
        <div className="bars" onClick={() => setBarsopen(!barsopen)}><i class="fa-solid fa-bars-progress"></i></div>
    </div>
  )
}

export default Navbar