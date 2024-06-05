import React from 'react'
import "./Bars.scss"
import { NavLink } from 'react-router-dom'

const Bars = ({barsopen , setBarsopen}) => {
  return (
    <div className={barsopen ? "bars1 active" : "bars1"} onDoubleClick={() => setBarsopen(false)}>
      
        <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"Shop"}>Shop</NavLink></li>
            <li><NavLink>Plant Care</NavLink></li>
            <li><NavLink>Blogs</NavLink></li>
        </ul>
    </div>
  )
}

export default Bars