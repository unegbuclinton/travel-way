'use client'
import Tab from '@/components/tab'
import React from 'react'
import DestinationCard from '@/components/destinationCard'
import Button from '@/components/button'
import { useRouter } from 'next/navigation'

const VacationPackage = () => {
  const router = useRouter()
  const vacationPackages = [
    {
      title: 'Single Package',
      component: (
        <div className='flex flex-wrap gap-4 justify-center'>
          {[1, 2, 3, 4, 5].map((_, index) => (
            <DestinationCard key={index} />
          ))}
        </div>
      ),
    },
    {
      title: 'Couple Package',
      component: (
        <div className='flex flex-wrap gap-4 justify-center'>
          {[1, 2, 3].map((_, index) => (
            <DestinationCard key={index} />
          ))}
        </div>
      ),
    },
    {
      title: 'Family Package',
      component: (
        <div className='flex flex-wrap gap-4 justify-center'>
          {[1].map((_, index) => (
            <DestinationCard key={index} />
          ))}
        </div>
      ),
    },
    {
      title: 'My friends and I Package',
      component: (
        <div className='flex flex-wrap gap-4 justify-center'>
          {[1, 2, 3, 4, 6, 7].map((_, index) => (
            <DestinationCard key={index} />
          ))}
        </div>
      ),
    },
  ]
  return (
    <div className=''>
      <h2 className='text-sm text-primary text-center font-bold mb-4 pt-24'>
        VACATION PACKAGE
      </h2>
      <p className='text-[48px] max-w-[600px] mx-auto text-center'>
        Thinking of how to spend the best time with family & friends?{' '}
      </p>

      <div className='flex gap-10 items-center justify-center py-20'>
        <Tab
          tabStyle='justify-center'
          titleColor='#000'
          tabs={vacationPackages}
        />
      </div>
      <div className='py-10'>
        <div className='mx-auto max-w-[1060px] text-center '>
          <h1 className='text-[34px] font-bold py-24'>Top Places to Visit</h1>
          <div className='flex items-center gap-4 mb-10'>
            <div className='flex flex-col gap-4'>
              <img
                src='/Frame1.png'
                alt=''
                onClick={() => router.push('/routes/vacation/332')}
              />
              <img
                src='/Frame2.png'
                alt=''
                onClick={() => router.push('/routes/vacation/34532')}
              />
            </div>

            <img src='/Frame3.png' alt='' />
            <div className='flex flex-col gap-4'>
              <img
                src='/Frame4.png'
                alt=''
                onClick={() => router.push('/routes/vacation/1132')}
              />
              <img
                src='/Frame5.png'
                alt=''
                onClick={() => router.push('/routes/vacation/314')}
              />
            </div>
          </div>
          <Button
            inverted
            type='button'
            onClick={() => router.push('/routes/vacation/vacation-places')}
          >
            VIEW MORE
          </Button>
        </div>
      </div>
    </div>
  )
}
export default VacationPackage
