import React from 'react'
import TwIcon from '../twIcon/TwIcon'

const DestinationCard = () => {
  return (
    <div className='w-fit p-4 rounded-lg bg-white'>
      <img src='/destination.png' alt='' className='rounded-xl mb-4' />
      <div className='flex justify-between items-center'>
        <div className='text-xl mb-2'>
          <h3 className='font-bold mb-2'>Mountain Hike Tour</h3>
          <p>France | Paris</p>
          <p className='flex gap-2 mt-2'>
            <TwIcon iconName='rateIcon' />
            <span className='text-sm font-bold'>4.5</span>
          </p>
        </div>
        <p className='w-fit h-fit rounded-full p-3 cursor-pointer bg-[#F5FAFF]'>
          <TwIcon iconName='thumbIcon' />
        </p>
      </div>
      <div className='my-4'>
        <p className='text-xs'>Price at</p>
        <h3 className='text-2xl font-bold text-primary'>
          340,000 <span className='text-xs'>NGN</span>
        </h3>
      </div>

      <div>
        <p className='flex gap-2 items-center mb-5'>
          <span>
            <TwIcon iconName='tickIcon' />
          </span>
          2 Flights, 2 Pick Ups, 1 Hotel
        </p>
        <p className='flex gap-2 items-center mb-5'>
          <span>
            <TwIcon iconName='tickIcon' />
          </span>
          2 Flights, 2 Pick Ups, 1 Hotel
        </p>
        <p className='flex gap-2 items-center mb-5'>
          <span>
            <TwIcon iconName='tickIcon' />
          </span>
          2 Flights, 2 Pick Ups, 1 Hotel
        </p>
      </div>
    </div>
  )
}

export default DestinationCard
