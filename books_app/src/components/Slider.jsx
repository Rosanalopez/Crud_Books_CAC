import {get} from "../../utils/httpClient.js"
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react"

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export const Slider = () => {

    const [books,setBooks] = useState([])

    let nroPagina = 1
   
    useEffect(()=>{
    get("/libraries/book").then((data)=>{
    setBooks(data.data.books);
    })
    },[nroPagina])

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        
        {books.map((book) => (
        <SwiperSlide key={book.id} className="mt-[4rem] sm:mt-0">
          <img src={book.image} alt={book.title}/>
          <div className="text underline-offset-8" data-swiper-parallax="-100">
            <Link to={`/book/${book.id}`}><p>Ver Libro</p></Link>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
