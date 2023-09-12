import React from 'react'
import TwIcon from '../twIcon/TwIcon'
import IconInput from '../IconInput'

const Footer = () => {
  return (
    <div className='bg-primary py-9 text-white'>
      <div className='flex justify-between mx-auto max-w-[1060px]'>
        <div>
          <TwIcon iconName='logo' />
          <p className='text-2xl mb-2'>You made it this far.</p>
          <p className='text-base mb-4'>
            Receive exclusive offers and be the first to hear about hotels and
            new offers.
          </p>
        </div>
        <div className='items-end flex gap-8'>
          <div className='flex-flex-col gap-y-6'>
            <h3 className='font-semibold mb-3'>Services</h3>
            <p className='mb-3'>Flight</p>
            <p className='mb-3'>Rides</p>
            <p className='mb-3'>Hotels</p>
            <p className='mb-3'>Vacation Packages</p>
          </div>
          <div className='flex-flex-col gap-y-6'>
            <h3 className='font-semibold mb-3'>Services</h3>
            <p className='mb-3'>Flight</p>
            <p className='mb-3'>Rides</p>
            <p className='mb-3'>Hotels</p>
            <p className='mb-3'>Vacation Packages</p>
          </div>
          <div className='flex-flex-col gap-y-6'>
            <h3 className='font-semibold mb-3'>Services</h3>
            <p className='mb-3'>Flight</p>
            <p className='mb-3'>Rides</p>
            <p className='mb-3'>Hotels</p>
            <p className='mb-3'>Vacation Packages</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
