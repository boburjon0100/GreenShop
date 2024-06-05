import React from 'react'
import "./NavFoter.scss"
import { NavLink } from 'react-router-dom'

const NavFoter = ({setLogin}) => {
  return (
    <div className='NavFoter'>
        <NavLink to={"/"}><i class="fa-solid fa-house" ></i></NavLink>
        <i class="fa-solid fa-heart"></i>
        <div className="icon">
        <i class="fa-solid fa-expand"></i>
        </div>
        <NavLink to={"/ShopCart"}><i class="fa-solid fa-cart-shopping"></i></NavLink>
        <i class="fa-solid fa-user"  onClick={() => setLogin(true)}></i>
    </div>
  )
}

export default NavFoter