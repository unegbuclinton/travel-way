import Button from '@/components/button'
import React from 'react'

const Bookings = () => {
  return (
    <div className=''>
      <h2 className='text-sm text-primary font-bold text-center mb-4 pt-24'>
        MY BOOKINGS
      </h2>
      <p className='text-[48px] max-w-[600px] mx-auto text-center'>
        Care to take a look at your previous Bookings?
      </p>

      <div className='flex gap-10 items-center justify-center py-20'>
        <div className='py-10 pl-20 pr-10 rounded-lg bg-white flex items-center gap-10'>
          <div className='flex gap-3 items-start bg-primary/10 py-6 rounded-lg pl-4 pr-8'>
            <img src='/notify.svg' alt='' className='w-8' />
            <p>
              To gain access to your previous bookings you must log in
              <br />
              your details first for identification.
            </p>
          </div>
          <Button type='button'>LOG IN</Button>
        </div>
      </div>
    </div>
  )
}

export default Bookings
