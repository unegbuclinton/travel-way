import Tab from '@/components/tab'
import React from 'react'

const VacationPlace = () => {
  const vacationPlaces = [
    {
      title: 'Overview',
      component: (
        <div className=''>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia eveniet
          quasi doloremque, magni quidem pariatur officia esse distinctio amet
          vero.
        </div>
      ),
    },
    {
      title: 'Images',
      component: <div>Images</div>,
    },
    {
      title: 'Tour Offers Available',
      component: <div>Offers</div>,
    },
  ]
  return (
    <div className=''>
      <h2 className='text-sm text-primary font-bold text-center mb-4 pt-24'>
        YOU'VE CHOSEN PARIS TO VISIT
      </h2>
      <p className='text-[48px] max-w-[600px] mx-auto text-center'>
        More details about paris
      </p>

      <div className='grid grid-cols-2 gap-4 my-5'>
        <Tab
          tabStyle='justify-center'
          titleColor='#000'
          tabs={vacationPlaces}
        />
      </div>
    </div>
  )
}

export default VacationPlace
