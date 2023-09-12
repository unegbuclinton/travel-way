import React from 'react'
import PopularHotel from './popular-hotel'

const Hotels = () => {
  return (
    <div className=''>
      <h2 className='text-sm text-primary text-center mb-4 pt-24'>
        HOTELS AVAILABLE
      </h2>
      <p className='text-[48px] max-w-[600px] mx-auto text-center'>
        Wondering what beautiful Hotels we have ready for you?
      </p>

      <div className='flex gap-10 items-center justify-between py-20'>
        <div>
          <h3 className='text-[48px] font-bold'>
            We offer premium serviced
            <span className='text-primary'> Hotels</span> at the right rate
          </h3>
          <p className='text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue
            facilisis felis sit amet hendrerit. Nulla et justo vel urna ultrices
            imperdiet Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras congue facilisis felis sit amet hendrerit. Nulla et justo vel
            urna ultrices imperdiet{' '}
          </p>
        </div>
        <img src='/Frame6.png' alt='' />
      </div>
      <PopularHotel />
    </div>
  )
}

export default Hotels
