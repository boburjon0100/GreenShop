import React from 'react'
import "./Main2.scss"

const Main2 = () => {
  return (
    <div className='main2'>
        <div className="left">
            <div className="rasm">
                <img src="/images/main21.png" alt="" />
            </div>
            <div className="text">
                <h2> SUMMER CACTUS <br /> & SUCCULENTS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, facere saepe corporis repellat molestias </p>  
                <button>Find More<i class="fa-solid fa-arrow-right"></i></button>
                

            </div>
        </div>
        <div className="left">
            <div className="rasm">
                <img src="/images/main22.png" alt="" />
            </div>
            <div className="text">
                <h2> WINTER CACTUS <br /> & SUCCULENTS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, facere saepe corporis repellat </p>  
                <button>Find More<i class="fa-solid fa-arrow-right"></i></button>
                

            </div>
        </div>
    </div>
  )
}

export default Main2