import Button from '@/components/button'
import React from 'react'

const AboutUs = () => {
  return (
    <div className='single-flat_layout relative pt-20 pb-14'>
      <div className='mx-auto max-w-[1060px] text-center'>
        <h1 className='font-bold text-[34px]'>About Us</h1>
        <p className='py-10 leading-7'>
          TravelWay is Africa’s leading, full-service online travel company. At
          TravelWay, we understand that everyone likes easy and affordable
          travel services, so we provide our customers with a one-stop booking
          portal for Affordable Flights, Hotels, Holiday Packages, Airport
          Transfers, a Loyalty program, and much more. Our portal gives
          customers the power of choice from a broad selection of top travel
          deals, and the ability to research, plan and book their domestic and
          international travel from the comfort of their homes and everywhere
          they are.{' '}
        </p>
        <Button inverted type='button'>
          VIEW MORE
        </Button>
      </div>
    </div>
  )
}

export default AboutUs
