"use client"
import react from 'react'
import Image from 'next/image'
import homepage from '../components/Assets/hospital homepage 1.jpg'
import homepage2 from '../components/Assets/hospital homepage 2.jpg'
import homepage3 from '../components/Assets/hospital homepage 3.jpg'
import homepage4 from '../components/Assets/hospital homepage 4.jpg'
import homepage5 from '../components/Assets/hospital homepage 5.jpg'
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import {Navigation, Autoplay, Pagination} from 'swiper/modules'

export default function Service(){
    const images = [
        {
            image: homepage,
        },
        {
            image:homepage2
        },
        {
            image:homepage3
        },
        {
            image:homepage4
        },
        {
            image:homepage5
        },
    ]
    return(
        <div className='w-full' id='home'>
          <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className='h-full w-full md:top-0 top-2'
          > 
               {images.map((img, i) => (
                <SwiperSlide key={i}>
                   <div className='mt-[75px] md:mt-0'>
                    <Image src={img.image} className='object-cover md:h-full w-full' alt='image'/>
                </div> 
                </SwiperSlide>
            ))} 
          </Swiper>
        </div>
    )
}