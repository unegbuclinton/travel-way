import Button from '@/components/button'
import NumberSelectionComponent from '@/components/numberSelection'
import SelectDropdown from '@/components/selectComponent'
import TwIcon from '@/components/twIcon/TwIcon'
import React from 'react'

const HotelTabComponent = () => {
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
        <p className='text-white'>Guest(s)</p>

        <NumberSelectionComponent label='No. of guests' />
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-3'>
          <SelectDropdown options={airportLocation} label='Pick up location' />
          <p className='mt-5'>
            <TwIcon iconName='exchangeIcon' />
          </p>
          <SelectDropdown options={airportLocation} label='Pick up date' />
          {/* <DateInput /> */}
          <SelectDropdown options={airportLocation} label='Pick up time' />
          <div>
            <label>Number of room(s)</label>
            <NumberSelectionComponent label='Number of rooms' />
          </div>
        </div>
      </div>
      <div className='flex justify-end mt-6'>
        <Button type='submit'>Book hotel</Button>
      </div>
    </div>
  )
}

export default HotelTabComponent
