import React from 'react'
import './Foter.scss'

const Foter = () => {
  return (
    <div className='foter'>
        <div className="qism1">
        <div className="garden">
         <div className="img">
            <img src="/images/foter3.png" alt="" />
         </div>
         <div className="text">
            <h3>Garden Care</h3>
            <p>We are an online plant shop <br /> offering a wide range of cheap <br /> and trendy plants.</p>
         </div>
        </div>
        <div className="garden">
         <div className="img">
            <img src="/images/foter2.png" alt="" />
         </div>
         <div className="text">
            <h3>Plant Renovation</h3>
            <p>We are an online plant shop <br /> offering a wide range of cheap <br /> and trendy plants.</p>
         </div>
        </div>
        <div className="garden">
         <div className="img">
            <img src="/images/foter3.png" alt="" />
         </div>
         <div className="text">
            <h3>Watering Graden</h3>
            <p>We are an online plant shop <br /> offering a wide range of cheap <br /> and trendy plants.</p>
         </div>
        </div>
        <div className="search">
            <h2>Would you like to join newsletters?</h2>
            <div className="input">
                <input type="text" placeholder='enter your email address...'/>
                <button>Join</button>
            </div>
            <p>We usually post offers and challenges in newsletter. We’re <br /> your online houseplant destination. We offer a wide range <br /> of houseplants and accessories shipped directly from our <br /> (green)house to yours! </p>
        </div>
        </div>
        <div className="qism2">
            <div className="img">
                <img src="/images/Logo.png" alt="" />
            </div>
            <div className="icon_text">
            <i class="fa-solid fa-location-dot"></i>
                <p>70 West Buckingham Ave.
                    Farmingdale, NY 11735</p>
            </div>
            <div className="icon_text">
            <i class="fa-regular fa-envelope"></i>
                <p>contact@greenshop.com</p>
            </div>
            <div className="icon_text">
            <i class="fa-solid fa-phone-volume"></i>
                <p>+88 01911 717 490</p>
            </div>
        </div>
        <div className="qism3">
            <div className="foter_open">
                <h3>My Account</h3>
                <ul>
                    <li>My Account</li>
                    <li>Our stores</li>
                    <li>Contact us</li>
                    <li>Career</li>
                    <li>Specials</li>
                </ul>
            </div>
            <div className="foter_open">
                <h3>Help & Guide</h3>
                <ul>
                    <li>Help Center</li>
                    <li>How to Buy</li>
                    <li>Shipping & Delivery</li>
                    <li>Product Policy</li>
                    <li>How to Return</li>
                </ul>
            </div>
            <div className="foter_open">
                <h3>Categories</h3>
                <ul>
                    <li>House Plants</li>
                    <li>Potter Plants</li>
                    <li>Seeds</li>
                    <li>Small Plants</li>
                    <li>Accessories</li>
                </ul>
            </div>
            <div className="link">
           <h3>Social Media</h3>
           <div className="icon">
            <span><i class="fa-brands fa-facebook"></i></span>
            <span><i class="fa-brands fa-instagram"></i></span>
            <span><i class="fa-brands fa-twitter"></i></span>
            <span><i class="fa-brands fa-linkedin-in"></i></span>
            <span><i class="fa-brands fa-youtube"></i></span>
           </div>
           <h4>We accept</h4>
           <div className="img">
            <img src="/images/foter4.png" alt="" />
           </div>
            </div>
        </div>
        <div className="qism4">
            <p>© 2021 GreenShop. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Foter