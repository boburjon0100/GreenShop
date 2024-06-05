import { Add, EmailOutlined, Facebook, FavoriteBorder, LinkedIn, Remove, Search, Twitter } from "@mui/icons-material"
import "./MakeUp.scss"
import { Button, IconButton, Rating } from "@mui/material"
import { useState } from "react";
import { Link } from "react-router-dom";

const MakeUp = () => {

    const [total, setTotal] = useState(1);


    const minus = () => {
        if (total > 1) {
            setTotal(total - 1)
        }
    }

  return (
    <div className="ShopMakeUp">
                <div className="MakeUp-hed">
                    <div className="MakeUp-box">
                        <img src="./public/images/main12.png" />
                    </div>

                    <div className="MakeUp-box">
                        <img src="./public/images/main19.png" />
                    </div>

                    <div className="MakeUp-box">
                        <img src="./public/images/main12.png" />
                    </div>

                    <div className="MakeUp-box">
                        <img src="./public/images/main19.png" />
                    </div>
                </div>

                <div className="MakeUp-main">
                    <Link className="makeUp-icon">
                        <Search />
                    </Link>

                    <img src="./public/images/main12.png" />
                </div>

                <div className="MakeUp-fot">
                    <h2 className="alfa">Barberton Daisy</h2>
                    <div className="MakeUp-raitng">
                        <h2>$119.00</h2>
                        <div className="raitng-icon">
                            <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
                            <h3>19 Customer Review</h3>
                        </div>

                    </div>

                    <h3>Short Description:</h3>
                    <p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
                    <div className="size">
                        <h5>Size:</h5>
                        <div className="size-icon">
                            <IconButton className="size-btn">
                                S
                            </IconButton>

                            <IconButton className="size-btn">
                                M
                            </IconButton>

                            <IconButton className="size-btn">
                                L
                            </IconButton>

                            <IconButton className="size-btn">
                                XL
                            </IconButton>
                        </div>
                    </div>


                    <div className="makeUp-total">
                        <div className="makeUp-inp">
                            <IconButton className="total-btn" onClick={() => minus()}>
                                <Remove />
                            </IconButton>

                            <h3>{total}</h3>

                            <IconButton className="total-btn" onClick={() => setTotal(total + 1)}>
                                <Add />
                            </IconButton>
                        </div>

                        <Button className="buyNow" variant="contained">
                            Buy NOW
                        </Button>

                        <Button className="AddToo" variant="outlined">
                            Add to cart
                        </Button>

                        <IconButton className="hearth-icon">
                            <FavoriteBorder />
                        </IconButton>
                    </div>

              <div className="makeUp-about">
                        <h5>SKU: <span>1995751877966</span></h5>
                        <h5>Categories: <span>Potter Plants</span></h5>
                        <h5>Tags: <span>Home, Garden, Plants</span></h5>
                        <h4>
                            Share this products:
                            <IconButton>
                                <Facebook />
                            </IconButton>

                            <IconButton>
                                <Twitter />
                            </IconButton>

                            <IconButton>
                                <LinkedIn />
                            </IconButton>

                            <IconButton>
                                <EmailOutlined />
                            </IconButton>
                        </h4>
                    </div>
                </div>
            </div>
  )
}

export default MakeUp