import Carousel from '@/components/carousel'
import React from 'react'

const Testimonial = () => {
  const carousel: Array<{ img: string; name: string; testimonial: string }> = [
    {
      img: '/Frame1.png',
      name: 'Chisom Unegbu',
      testimonial:
        'Using travel way was one of the best decisions i have made while travelling across.',
    },
    {
      img: '/Frame2.png',
      name: 'Nike Sandra',
      testimonial:
        'It was a lovely experience using travel way. I have them as my first go to when i want to visit other places',
    },
    {
      img: '/Frame3.png',
      name: 'Simon Peter',
      testimonial:
        'Seamless experience when using the travel way platform. And there is alot of points to be earned',
    },
  ]
  return (
    <div className='relative pt-20 pb-14 '>
      <div className='relative mx-auto max-w-[1060px] z-10'>
        <h2 className='mb-10 text-[34px] font-bold text-center'>
          Testimonies From Clients
        </h2>

        <Carousel carouselSlides={carousel} />
      </div>
    </div>
  )
}

export default Testimonial
