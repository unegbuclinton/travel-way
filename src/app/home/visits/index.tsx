import Button from '@/components/button'
import React from 'react'

const Visits = () => {
  return (
    <div className='bg-torqorise py-10'>
      <div className='mx-auto max-w-[1060px] text-center '>
        <h1 className='text-[34px] font-bold py-24'>Top Places to Visit</h1>
        <div className='flex items-center gap-4 mb-10'>
          <div className='flex flex-col gap-4'>
            <img src='/Frame1.png' alt='' />
            <img src='/Frame2.png' alt='' />
          </div>

          <img src='/Frame3.png' alt='' />
          <div className='flex flex-col gap-4'>
            <img src='/Frame4.png' alt='' />
            <img src='/Frame5.png' alt='' />
          </div>
        </div>
        <Button inverted type='button'>
          VIEW MORE
        </Button>
      </div>
    </div>
  )
}

export default Visits
