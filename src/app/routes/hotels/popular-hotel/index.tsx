import HotelCard from '@/components/hotelCard'
import React from 'react'

const PopularHotel = () => {
  return (
    <div className='mb-4'>
      <h2 className='text-[34px] mb-10 text-center'>Popular Hotels for You</h2>
      <div className='flex flex-wrap gap-4 justify-center'>
        {[1, 2, 3, 4].map((_, index) => (
          <HotelCard key={index} />
        ))}
      </div>
    </div>
  )
}

export default PopularHotel
