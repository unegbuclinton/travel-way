import DestinationCard from '@/components/destinationCard'
import React from 'react'

const Destination = () => {
  return (
    <div className='double-flat_layout relative pt-20 pb-20'>
      <div className='relative mx-auto max-w-[1060px] z-10'>
        <h2 className='mb-10 text-[34px] font-bold text-center'>
          Popular Destinations
        </h2>
        <div className='flex gap-6'>
          <DestinationCard />
          <DestinationCard />
          <DestinationCard />
        </div>
      </div>
    </div>
  )
}

export default Destination
