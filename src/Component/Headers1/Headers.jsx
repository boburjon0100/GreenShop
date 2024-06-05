import "./Header.scss"

import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Headers = () => {
  return (
    <Swiper className="sviper"
    modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
    autoplay
      spaceBetween={50}
      slidesPerView={1}
    loop={true}
    pagination={{ clickable: true }}
  
  >
    <SwiperSlide className="sviper1">
    <div className="header">
        <div className="left">
            <h3>Welcome to GreenShop</h3>
            <h1>LET’S MAKE A <br />BETTER <span>PLANET</span></h1>
                <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use <br /> our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                <button>SHOP NOW</button>
        </div>
        <div className="right">
           <img className="img1" src="/images/header1.png" alt="" />
            <img className="img2" src="/images/header1.png" alt="" />
        </div>
       
    </div>
    </SwiperSlide>

    <SwiperSlide className="sviper1">
    <div className="header">
        <div className="left">
            <h3>Welcome to GreenShop</h3>
            <h1>LET’S MAKE A <br />BETTER <span>PLANET</span></h1>
                <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use <br /> our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                <button>SHOP NOW</button>
        </div>
        <div className="right">
           <img className="img1" src="/images/header1.png" alt="" />
            <img className="img2" src="/images/header1.png" alt="" />
        </div>
       
    </div>
    </SwiperSlide>

    <SwiperSlide className="sviper1">
    <div className="header">
        <div className="left">
            <h3>Welcome to GreenShop</h3>
            <h1>LET’S MAKE A <br />BETTER <span>PLANET</span></h1>
                <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use <br /> our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                <button>SHOP NOW</button>
        </div>
        <div className="right">
           <img className="img1" src="/images/header1.png" alt="" />
            <img className="img2" src="/images/header1.png" alt="" />
        </div>
       
    </div>
    </SwiperSlide>
    
  </Swiper>

  )
}

export default Headers