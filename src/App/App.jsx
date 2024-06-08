import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Navbar from '../Component/Navbar/Navbar'
import Foter from '../Component/Foter/Foter'
import Bars from '../Component/Bars/Bars'
import Shop from '../Pages/Shop/Shop'
import ShopCart from '../Pages/ShopCart/ShopCart'
import NavFoter from '../Component/NavFoter/NavFoter'
import Login from '../Component/Login/Login1'
import Search from '../Component/Search/Search'
const App = () => {
  const [barsopen , setBarsopen] = useState(false)
  const [login , setLogin] = useState(false)
  const [search , setSearch] = useState(false)
  return (
    <div className='App'>
      <Login login={login} setLogin ={setLogin} />
      <Navbar setSearch={setSearch} search={search} setLogin ={setLogin} login={login} barsopen = {barsopen} setBarsopen ={setBarsopen}/>
      <Search search={search} setSearch={setSearch}/>
      <Bars barsopen = {barsopen} setBarsopen ={setBarsopen}/>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Shop' element={<Shop/>}/>
            <Route path='/ShopCart' element={<ShopCart/>}/>
        </Routes>
        <NavFoter setLogin ={setLogin}/>
        <Foter/>
    </div>
  )
}

export default App