'use client'
import React, { FC, useState } from 'react'
import TwIcon from '../twIcon/TwIcon'

interface manualCarouselprop {
  carouselSlides: Array<any>
  // currentIndex: number
}
const Carousel: FC<manualCarouselprop> = ({ carouselSlides }) => {
  const [activeIndex, setActiveIndex] = useState(1)

  const nextSlide = () => {
    setActiveIndex((prev) => prev + 1)
    if (activeIndex === carouselSlides.length - 1) {
      setActiveIndex(0)
    }
  }
  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1)
    }
  }
  return (
    <div className='max-w-[1060px] w-full m-auto px-1 relative group '>
      <div className='flex flex-col items-center'>
        <img
          src={carouselSlides[activeIndex]?.img}
          alt=''
          className='rounded-full w-[200px] h-[200px]'
        />
        <p className='font-semibold mt-4 text-2xl'>
          {carouselSlides[activeIndex]?.name}
        </p>
      </div>
      <div className='flex justify-between mt-6'>
        <TwIcon iconName='openingCurly' />
        <TwIcon iconName='closingCurly' />
      </div>
      <p className='text-center mt-4 text-xl'>
        {carouselSlides[activeIndex]?.testimonial}
      </p>

      <div className='w-full flex justify-between absolute top-[75%]  mt-[-100px] z-10 pl-5 pr-7'>
        <div
          onClick={prevSlide}
          className={`flex justify-center items-center cursor-pointer ${
            activeIndex < 1 ? 'invisible' : ''
          } hover:scale-105 duration-150 w-10 h-10 bg-primary rounded-full`}
        >
          <TwIcon iconName='arrowLeft' />
        </div>
        <div
          onClick={nextSlide}
          className='flex justify-center items-center cursor-pointer hover:scale-110 duration-150 w-10 h-10 bg-primary rounded-full'
        >
          <TwIcon iconName='arrowRight' />
        </div>
      </div>
    </div>
  )
}

export default Carousel
