'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const VacationPlaces = () => {
  const router = useRouter()
  return (
    <div className=''>
      <h2 className='text-sm text-primary font-bold text-center mb-4 pt-24'>
        PLACES TO VISIT
      </h2>
      <p className='text-[48px] max-w-[600px] mx-auto text-center'>
        How about we look at the best places to go on Tour?
      </p>

      <div className='grid grid-cols-2 gap-4 my-5'>
        {[1, 2, 3, 4, 5]?.map((_, idx) => (
          <div
            className='relative w-full h-[450px] bg-cover bg-center rounded-lg'
            style={{ backgroundImage: "url('/Frame5.png')" }}
            onClick={() => router.push('/routes/vacation/4550')}
          >
            <p className='absolute bottom-10 left-10 text-2xl font-bold text-white'>
              City of love
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VacationPlaces
