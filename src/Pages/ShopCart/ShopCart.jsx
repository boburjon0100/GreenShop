import "./ShopCart.scss"
import Slider from "../../Component/Slider/Slider"
import { NavLink } from "react-router-dom"
const ShopCart = () => {
   
  return (
    <>
     <div className='ShopCart'>
    <div className="product">
        <div className="text">
            <div className="products"><p>Products</p></div>
            <div className="price"><p>Price</p></div>
            <div className="quantity"><p>Quantity</p></div>
            <div className="totals"><p>Total</p></div>
        </div>
        <div className="productbox">
                <div className="products1">
                    <div className="img">
                        <img src="./public/images/main12.png" alt="" />
                    </div>
                    <div className="narx">
                        <h4>Barberton Daisy</h4>
                        <p>SKU: 1995751877966</p>
                    </div>
                </div>
                <div className="price1">
                    <p>$119.00</p>
                </div>
                <div className="quantity1">
                    <button >-</button>
                    <p >1</p>
                    <button >+</button>
                </div>
                <div className="totals1">
                    <p>$238.00</p>
                </div>
                <div className="delete">
                <i class="fa-regular fa-trash-can"></i>
                </div>
        </div>
        <div className="productbox">
                <div className="products1">
                    <div className="img">
                        <img src="./public/images/main13.png" alt="" />
                    </div>
                    <div className="narx">
                        <h4>Barberton Daisy</h4>
                        <p>SKU: 1995751877966</p>
                    </div>
                </div>
                <div className="price1">
                    <p>$119.00</p>
                </div>
                <div className="quantity1">
                    <button >-</button>
                    <p >1</p>
                    <button >+</button>
                </div>
                <div className="totals1">
                    <p>$238.00</p>
                </div>
                <div className="delete">
                <i class="fa-regular fa-trash-can"></i>
                </div>
        </div>
        <div className="productbox">
                <div className="products1">
                    <div className="img">
                        <img src="./public/images/main14.png" alt="" />
                    </div>
                    <div className="narx">
                        <h4>Barberton Daisy</h4>
                        <p>SKU: 1995751877966</p>
                    </div>
                </div>
                <div className="price1">
                    <p>$119.00</p>
                </div>
                <div className="quantity1">
                    <button >-</button>
                    <p >1</p>
                    <button >+</button>
                </div>
                <div className="totals1">
                    <p>$238.00</p>
                </div>
                <div className="delete">
                <i class="fa-regular fa-trash-can"></i>
                </div>
        </div>
 
    </div>
    <div className="total">
        <div className="cart">
            <h3>Cart Totals</h3>
        </div>
        <div className="input">
            <p>Coupon Apply</p>
            <div className="bos">
                <input type="text"  placeholder="Enter coupon code here..."/>
                <button>Apply</button>
            </div>
        </div>
        <div className="narx1">
            <p>Subtotal</p>
            <h4>$2,683.00</h4>
        </div>
        <div className="narx1">
            <p>Coupon Discount</p>
            <p>(-) 00.00</p>
        </div>
        <div className="narx1">
            <p>Shiping</p>
            <h4>$16.00</h4>
        </div>
        <div className="narx1">
            <h4>Total</h4>
            <h3 className="son">$2,699.00</h3>
        </div>
        <div className="chek">
            <button>Proceed To Checkout</button>
            <p><NavLink>Continue Shopping</NavLink></p>
        </div>
    </div>
   
</div>
<Slider/></>
   
    
   
  )
}

export default ShopCart