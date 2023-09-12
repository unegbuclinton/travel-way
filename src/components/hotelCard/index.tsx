import React from 'react'
import TwIcon from '../twIcon/TwIcon'
import Button from '../button'

const HotelCard = () => {
  return (
    <div className='rounded-lg p-5 bg-white max-w-[500px] mb-2 cursor-pointer hover:scale-105 duration-150'>
      <div
        className='relative h-[240px]'
        style={{
          backgroundImage: "url('/Frame2.png')",
          backgroundSize: 'cover',
          borderRadius: '8px',
        }}
      >
        <p className='flex justify-center items-center w-10 h-10 rounded-full bg-[#F5FAFF] absolute top-3 right-3'>
          <TwIcon iconName='thumbIcon' />
        </p>
      </div>
      <div className='flex justify-between items-center'>
        <div className='text-xl mb-2'>
          <h3 className='font-bold mb-2'>Burj Beach Hotel</h3>
          <p>Dubai | United Arab Nation</p>
          <p className='flex gap-2 mt-2'>
            .
            <TwIcon iconName='rateIcon' />
            <span className='text-sm font-bold'>4.5</span>
          </p>
        </div>
        <h3 className='text-2xl font-bold text-primary'>
          40,000 <span className='text-xs'>NGN</span>
        </h3>
      </div>
      <Button type='button'>BOOK NOW</Button>
    </div>
  )
}

export default HotelCard
