import React from 'react'
import SelectDropdown from '../../selectComponent'
import TwIcon from '../../twIcon/TwIcon'
import Button from '../../button'
import NumberSelectionComponent from '@/components/numberSelection'

const FlightTabComponent = () => {
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
  return (
    <div>
      <div className='flex items-center gap-3 justify-end mb-5 text-white'>
        <TwIcon iconName='userIcon' />
        <p>Passenger</p>
        <NumberSelectionComponent label='No. of passengers' />
      </div>
      <div className='flex justify-between'>
        <div className='flex items-center gap-3'>
          <SelectDropdown options={airportLocation} label='From where?' />
          <p className='mt-5'>
            <TwIcon iconName='exchangeIcon' />
          </p>
          <SelectDropdown options={airportLocation} label='To where?' />
        </div>
        <div className='flex items-center gap-3'>
          <SelectDropdown options={airportLocation} label='Leaving on?' />
          <p className='mt-5'>
            <TwIcon iconName='exchangeIcon' />
          </p>
          <SelectDropdown options={airportLocation} label='Returning on?' />
        </div>
      </div>
      <div className='flex justify-end mt-6'>
        <Button type='submit'>Search</Button>
      </div>
    </div>
  )
}

export default FlightTabComponent
