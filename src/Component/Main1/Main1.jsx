import React, { useState } from 'react'
import "./Main1.scss"
import { NavLink } from 'react-router-dom'
import Arivals from '../Arrivals/Arivals'
import Sale from '../Sale/Sale'

const Main1 = () => {

    const [products , setProducts] = useState(true);
    const [Arivalss , setArivalss] = useState(false);
    const [Sales , setSales] = useState(false);

  return (
    <div className='main1'>
        <div className="left">
            <h2>Categories</h2>
            <div className="box">
                <ul>
                    <li> <p><span className='a1'>House Plants</span></p><span>(33)</span></li>
                    <li> <p>Potter Plants</p><span>(12)</span></li>
                    <li> <p>Seeds</p><span>(65)</span></li>
                    <li> <p>Small Plants</p><span>(39)</span></li>
                    <li> <p>Big Plants</p><span>(23)</span></li>
                    <li> <p>Succulents</p><span>(17)</span></li>
                    <li><p>Trerrariums</p><span>(19)</span></li>
                    <li><p>Gardening</p><span>(13)</span></li>
                    <li><p>Accessories</p><span>(18)</span></li>
                   
                </ul>
                
            </div>
            <div className="box1">
                <h2>Price Range</h2>
                <input type="range" />
                <div className="price">
                <p>Price:</p>
                <h3>$39 - $1230</h3>
                </div>
                <button>Filter</button>
            </div>
            <div className="size">
                <h2>Size</h2>
            <ul>
                    <li><p>Small</p><span>(119)</span></li>
                    <li><p>Medium</p><span>(73)</span></li>
                    <li><p>Large</p><span>(28)</span></li>
                   
            </ul>
            </div>
            <div className="img">
                <img src="/images/main11.png" alt="" />
            </div>
             </div>
        <div className="right">
            <div className="nav">
                <ul>
                    <li><NavLink onClick={() => {setProducts(true) , setArivalss(false) , setSales(false)}}>All Plants</NavLink></li>
                    <li><NavLink onClick={() => {setProducts(false) , setArivalss(true) , setSales(false)}}>New Arrivals</NavLink></li>
                    <li><NavLink onClick={() => {setProducts(false) , setArivalss(false) , setSales(true)}}>Sale</NavLink></li>
                </ul>
                <div className="boy">
                    <p>Short by:</p>
                    <select>
                        <option >Default sorting</option>
                        <option ><NavLink onClick={() => {setProducts(false)  , setArivalss(false) , setSales(true)}} >Flase sorting</NavLink> </option>
                    </select>
                </div>
            </div>
          <div className={products ? "product activeProducts" : "product"}>
          <div className="product1">
                <div className="rasm">
                    <img src="/images/main12.png" alt="" />
                    <div className="icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-magnifying-glass"></i>

                    </div>
                </div>
                <div className="narx">
                    <p>Barberton Daisy</p>
                    <h3>$119.00</h3>
                </div>
          </div>
          <div className="product1">
                <div className="rasm">
                    <img src="/images/main13.png" alt="" />
                    <div className="icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-magnifying-glass"></i>

                    </div>
                </div>
                <div className="narx">
                    <p>Angel Wing Begonia</p>
                    <h3>$169.00</h3>
                </div>
          </div>
          <div className="product1">
                <div className="rasm">
                    <img src="/images/main14.png" alt="" />
                    <div className="icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-magnifying-glass"></i>

                    </div>
                </div>
                <div className="narx">
                    <p>African Violet</p>
                    <h3>$130.00</h3>
                </div>
          </div>
          <div className="product1">
                <div className="rasm">
                    <img src="/images/main15.png" alt="" />
                    <div className="icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-magnifying-glass"></i>

                    </div>
                </div>
                <div className="narx">
                    <p>Beach Spider Lily</p>
                    <h3>$149.00</h3>
                </div>
          </div>
          <div className="product1">
                <div className="rasm">
                    <img src="/images/main16.png" alt="" />
                    <div className="icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-magnifying-glass"></i>

                    </div>
                </div>
                <div className="narx">
                    <p>Blushing Bromeliad</p>
                    <h3>$110.00</h3>
                </div>
          </div>
          <div className="product1">
                <div className="rasm">
                    <img src="/images/main17.png" alt="" />
                    <div className="icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-magnifying-glass"></i>

                    </div>
                </div>
                <div className="narx">
                    <p>Aluminum Plant</p>
                    <h3>$128.00</h3>
                </div>
          </div>
          <div className="product1">
                <div className="rasm">
                    <img src="/images/main18.png" alt="" />
                    <div className="icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-magnifying-glass"></i>

                    </div>
                </div>
                <div className="narx">
                    <p>Bird's Nest Fern</p>
                    <h3>$156.00</h3>
                </div>
          </div>
          <div className="product1">
                <div className="rasm">
                    <img src="/images/main19.png" alt="" />
                    <div className="icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-magnifying-glass"></i>

                    </div>
                </div>
                <div className="narx">
                    <p>Broadleaf Lady Palm</p>
                    <h3>$230.00</h3>
                </div>
          </div>
          <div className="product1">
                <div className="rasm">
                    <img src="/images/main20.png" alt="" />
                    <div className="icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-magnifying-glass"></i>

                    </div>
                </div>
                <div className="narx">
                    <p>Chinese Evergreen</p>
                    <h3>$209.00</h3>
                </div>
          </div>
          </div>

          <Arivals Arivalss={Arivalss}/>

          <Sale Sales={Sales}/>


        </div>
        <div className="number">
            <div className="box">
                <div className="box1"><h2>1</h2></div>
                <div className="box1"><h2>2</h2></div>
                <div className="box1"><h2>3</h2></div>
                <div className="box1"><h2>4</h2></div>
                <div className="box1"><h2><i class="fa-solid fa-angle-right"></i></h2></div>
            </div>
        </div>
    </div>
  )
}

export default Main1