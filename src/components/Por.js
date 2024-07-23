import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../styles.css";
import "./swiperStyle.css";
import mlschool from "./images/mlschool.png";
import kvpy from "./images/KVPY.jpeg";
import swc from "./images/swc.png";
import ignus from "./images/ignus.png";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const Por = () => {
  const [slide, setSlide] = useState(3);
  //let w = window.innerWidth;
  useEffect(() => {
    if (window.innerWidth <= 600) setSlide(1);
    else if (window.innerWidth > 600 && window.innerWidth <= 1000) setSlide(2);
    else if (window.innerWidth > 1000) setSlide(3);
  }, []);
  const styles = {
    backgroundColor: "inherit",
  };
  return (
    <div
      name="achievements"
      className="w-full h-full bg-gradient-to-b from-black  to-gray-900
    text-white mt-0 p-2"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Achievement & Responsibility
          </p>
        </div>
      </div>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        slidesPerView={slide}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={true}
        navigation={true}
        className="mySwiper"
      >
        {
          <>
            <SwiperSlide style={styles}>
              <div className="swiper-client-msg">
                <p className="w-full">Student Guide, SWC, IITJ</p>
              </div>
              <div className="img-container">
                <img
                  src={swc}
                  className="shadow-md hover:scale-105 duration-200 shadow-gray-600"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide style={styles}>
              <div className="swiper-client-msg">
                <p className="w-full">
                  Assitant Head, Ignus, IITJ 
                </p>
              </div>
              <div className="img-container">
                <img
                  src={ignus}
                  className="shadow-md hover:scale-105 duration-200 shadow-gray-600"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </>
        }
        
        {
          <SwiperSlide style={styles}>
            <div className="swiper-client-msg shadow-md shadow-gray-600">
              <p>Selected for Amazon ML Summer School '24</p>
            </div>
            <div className="img-container">
              <img
                src={mlschool}
                className="shadow-md hover:scale-105 duration-200 shadow-gray-600"
                alt=""
              />
            </div>
          </SwiperSlide>
        }
        
        

        
        <SwiperSlide style={styles}>
          <div className="swiper-client-msg shadow-md shadow-gray-600">
            <p>Secured AIR 297 in KVPY SA</p>
          </div>
          <div className="img-container">
            <img
              src={kvpy}
              className="shadow-md  hover:scale-105 duration-200 shadow-gray-600"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Por;
