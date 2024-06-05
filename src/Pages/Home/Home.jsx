import React from 'react'
import "./Home.scss"
import Headers from '../../Component/Headers1/Headers'
import Main1 from '../../Component/Main1/Main1'
import Main2 from '../../Component/Main2/Main2'
import Main3 from '../../Component/Main3/Main3'

const Home = ({login}) => {
  return (
    <div >
        <Headers/> 
        <Main1/>
        <Main2/>
        <Main3/>
       
    </div>
  )
}

export default Home