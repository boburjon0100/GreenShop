import "./Slider.scss";

import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { IconButton } from "@mui/material";
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";


const Slider = () => {

    const [slidesPerView, setSlidesPerView] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 468) {
                setSlidesPerView(1);
            } else if(window.innerWidth <= 676) {
                setSlidesPerView(2);
            } else if(window.innerWidth <= 976) {
                setSlidesPerView(3);
            } else if(window.innerWidth <= 1440) {
                setSlidesPerView(4);
            }
        };

        handleResize(); // Yuqoridagi funksiyani bir marta ishga tushiramiz, sahifa yuklandiqda to'g'ri qiymatni olish uchun
        window.addEventListener("resize", handleResize); // O'zgarishlarni kuzatish uchun resize hodisasini eshitamiz

        return () => {
            window.removeEventListener("resize", handleResize); // Komponent chiqarilganda eski hodisani o'chirib tashlaymiz
        };
    }, []); //

    return (
        <Swiper
            className="swipper1"
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={slidesPerView}
            loop={true}
            speed={1200}
            autoplay={{ delay: 2500, disableOnInteraction: true }}
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => {
                swiper.autoplay.start(); // Slayd o'zgarganda autoplayni qayta ishga tushiramiz
            }}
        >
            <h2 className="ReletedProducts">Releted Products</h2>
            <SwiperSlide>
                <div>
                <div className="box">
                <div className="box-img">
                    <img src="./public/images/main12.png" />
                </div>
                <div className="box-icon">
                    <NavLink>
                        <IconButton className="box-cart">
                            <ShoppingCartOutlined />
                        </IconButton>
                    </NavLink>
                    <NavLink>
                        <IconButton className="box-cart">
                            <FavoriteBorderOutlined />
                        </IconButton>
                    </NavLink>
                    <NavLink>
                        <IconButton className="box-cart">
                            <SearchOutlined />
                        </IconButton>
                    </NavLink>
                </div>
                <h5>Barberton Daisy</h5>
                <h6>$119.00</h6>
            </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="box">
                <div className="box-img">
                    <img src="./public/images/main13.png" />
                </div>
                <div className="box-icon">
                    <NavLink>
                        <IconButton className="box-cart">
                            <ShoppingCartOutlined />
                        </IconButton>
                    </NavLink>
                    <NavLink>
                        <IconButton className="box-cart">
                            <FavoriteBorderOutlined />
                        </IconButton>
                    </NavLink>
                    <NavLink>
                        <IconButton className="box-cart">
                            <SearchOutlined />
                        </IconButton>
                    </NavLink>
                </div>
                <h5>Angel Wing Begonia</h5>
                <h6>$169.00</h6>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="box">
                <div className="box-img">
                    <img src="./public/images/main14.png" />
                </div>
                <div className="box-icon">
                    <NavLink>
                        <IconButton className="box-cart">
                            <ShoppingCartOutlined />
                        </IconButton>
                    </NavLink>
                    <NavLink>
                        <IconButton className="box-cart">
                            <FavoriteBorderOutlined />
                        </IconButton>
                    </NavLink>
                    <NavLink>
                        <IconButton className="box-cart">
                            <SearchOutlined />
                        </IconButton>
                    </NavLink>
                </div>
                <h5>African Violet</h5>
                <h6>$119.00</h6>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="box">
                <div className="box-img">
                    <img src="./public/images/main15.png" />
                </div>
                <div className="box-icon">
                    <NavLink>
                        <IconButton className="box-cart">
                            <ShoppingCartOutlined />
                        </IconButton>
                    </NavLink>
                    <NavLink>
                        <IconButton className="box-cart">
                            <FavoriteBorderOutlined />
                        </IconButton>
                    </NavLink>
                    <NavLink>
                        <IconButton className="box-cart">
                            <SearchOutlined />
                        </IconButton>
                    </NavLink>
                </div>
                <h5>Beach Spider Lily</h5>
                <h6>$121.00</h6>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="box">
                <div className="box-img">
                    <img src="./public/images/main16.png" />
                </div>
                <div className="box-icon">
                    <NavLink>
                        <IconButton className="box-cart">
                            <ShoppingCartOutlined />
                        </IconButton>
                    </NavLink>
                    <NavLink>
                        <IconButton className="box-cart">
                            <FavoriteBorderOutlined />
                        </IconButton>
                    </NavLink>
                    <NavLink>
                        <IconButton className="box-cart">
                            <SearchOutlined />
                        </IconButton>
                    </NavLink>
                </div>
                <h5>Blushing Bromeliad</h5>
                <h6>$139.00</h6>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="box">
                <div className="box-img">
                    <img src="./public/images/main17.png" />
                </div>
                <div className="box-icon">
                    <NavLink>
                        <IconButton className="box-cart">
                            <ShoppingCartOutlined />
                        </IconButton>
                    </NavLink>
                    <NavLink>
                        <IconButton className="box-cart">
                            <FavoriteBorderOutlined />
                        </IconButton>
                    </NavLink>
                    <NavLink>
                        <IconButton className="box-cart">
                            <SearchOutlined />
                        </IconButton>
                    </NavLink>
                </div>
                <h5>Aluminum Plant</h5>
                <h6>$179.00</h6>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="box">
                <div className="box-img">
                    <img src="./public/images/main18.png" />
                </div>
                <div className="box-icon">
                    <NavLink>
                        <IconButton className="box-cart">
                            <ShoppingCartOutlined />
                        </IconButton>
                    </NavLink>
                    <NavLink>
                        <IconButton className="box-cart">
                            <FavoriteBorderOutlined />
                        </IconButton>
                    </NavLink>
                    <NavLink>
                        <IconButton className="box-cart">
                            <SearchOutlined />
                        </IconButton>
                    </NavLink>
                </div>
                <h5>&apos;Bird&apos;s Nest Fern&apos;</h5>
                <h6>$99.00</h6>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="box">
                <div className="box-img">
                    <img src="./public/images/main19.png" />
                </div>
                <div className="box-icon">
                    <NavLink>
                        <IconButton className="box-cart">
                            <ShoppingCartOutlined />
                        </IconButton>
                    </NavLink>
                    <NavLink>
                        <IconButton className="box-cart">
                            <FavoriteBorderOutlined />
                        </IconButton>
                    </NavLink>
                    <NavLink>
                        <IconButton className="box-cart">
                            <SearchOutlined />
                        </IconButton>
                    </NavLink>
                </div>
                <h5>Broadleaf Lady Palm</h5>
                <h6>$59.00</h6>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="box">
                <div className="box-img">
                    <img src="./public/images/main21.png" />
                </div>
                <div className="box-icon">
                    <NavLink>
                        <IconButton className="box-cart">
                            <ShoppingCartOutlined />
                        </IconButton>
                    </NavLink>
                    <NavLink>
                        <IconButton className="box-cart">
                            <FavoriteBorderOutlined />
                        </IconButton>
                    </NavLink>
                    <NavLink>
                        <IconButton className="box-cart">
                            <SearchOutlined />
                        </IconButton>
                    </NavLink>
                </div>
                <h5>Chinese Evergreen</h5>
                <h6>$39.00</h6>
            </div>
            </SwiperSlide>

        </Swiper>
    );
};
export default Slider;