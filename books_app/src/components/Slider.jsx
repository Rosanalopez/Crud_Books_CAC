
import { get } from "../../utils/httpClient";
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
   
    useEffect(()=>{
    get("/libraries/book").then((data)=>{
    setBooks(data.data.books);
    })
    },[])

    console.log(books.data)
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
        <SwiperSlide key={book.id}>
          <img src={book.image} alt={book.title}/>
          <div className="text underline-offset-8" data-swiper-parallax="-100">
            <Link to="/books/id"><p>View book</p></Link>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
