import "./../FirstSwiper/FirstSwiper.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import MinecraftDungeons from "./Img/MinecraftDungeons.png";

export const FirstSwiper = ({}) => {
   return (
      <div className="swiperbody">
         <div className="headtext">
            <h1>EXPLORE MINECRAFT GAMES & ADD ONS</h1>
         </div>
         <div className="swiper">
            <Swiper
               navigation={true}
               modules={[Navigation]}
               className="mySwiper"
               spaceBetween={50}
               slidesPerView={1}
               onSlideChange={() => console.log("slide change")}
               onSwiper={(swiper) => console.log(swiper)}
            >
               <SwiperSlide>
                  <img
                     src={MinecraftDungeons}
                     className="minecraftdungeons"
                     alt="MinecraftDungeons"
                  />
               </SwiperSlide>
               <SwiperSlide>Slide 2</SwiperSlide>
               <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
         </div>
      </div>
   );
};

export default FirstSwiper;
