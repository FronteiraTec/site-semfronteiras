// SwipeCaroussel.jsx
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { carousselsContent } from "../constants"
import Cardcaroussels from "./Cardcaroussels"


export default function SwipeCaroussel() {
  return (
    <div className="mx-auto w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-7xl mt-4 sm:mt-6 md:mt-10 py-6 sm:py-8 md:py-12">
      <Swiper 
        className="flex gap-4 min-h-[350px] sm:min-h-[380px] md:min-h-[400px]" 
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={15}
        slidesPerView={1} 
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 2, spaceBetween: 25 },
          1280: { slidesPerView: 3, spaceBetween: 30 }, 
        }}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        speed={800}
        effect="slide"
        grabCursor={true}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        loopAdditionalSlides={1}
      >
        {carousselsContent.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center pb-10 sm:pb-12">
            <Cardcaroussels title={item.title} description={item.description} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
