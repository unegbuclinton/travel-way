import Button from '@/components/button'
import DateInput from '@/components/dateInput'
import SelectDropdown from '@/components/selectComponent'
import TwIcon from '@/components/twIcon/TwIcon'
import React from 'react'

const RideTabComponent = () => {
  const airportLocation: Array<{ label: string; value: string }> = [
    {
      value: 'Murtala Muhammed airport',
      label: 'Murtala Muhammed airport',
    },
    {
      value: 'Abuja International airport',
      label: 'Abuja International airport',
    },
    {
      value: 'Akwa ibom international airport',
      label: 'Akwa ibom international airport',
    },
  ]
  const carClass: Array<{ label: string; value: string }> = [
    {
      value: 'First class',
      label: 'First class',
    },
    {
      value: 'Economy class',
      label: 'Economy class',
    },
    {
      value: 'Business class',
      label: 'Business class',
    },
  ]
  return (
    <div>
      <div className='flex items-center gap-3 justify-end mb-5'>
        <TwIcon iconName='userIcon' />
        <p className='text-white'>Car class</p>
        <SelectDropdown options={carClass} />
      </div>
      <div className='flex justify-between'>
        <div className='flex items-center gap-3'>
          <SelectDropdown options={airportLocation} label='Pick up location' />
          <p className='mt-5'>
            <TwIcon iconName='exchangeIcon' />
          </p>
          <SelectDropdown options={airportLocation} label='Pick up date' />

          <div className='ml-7'>
            <SelectDropdown options={airportLocation} label='Pick up time' />
          </div>
        </div>
      </div>
      <div className='flex justify-end mt-6'>
        <Button type='submit'>Book ride</Button>
      </div>
    </div>
  )
}

export default RideTabComponent
