import Button from '@/components/button'
import React from 'react'

const AboutUs = () => {
  return (
    <div className=''>
      <h2 className='text-sm text-primary text-center font-bold mb-4 pt-24'>
        ABOUT US
      </h2>
      <p className='text-[48px] max-w-[600px] mx-auto text-center'>
        How would you like to get to know us better?
      </p>

      <div className='py-20'>
        <h2 className='mb-10 font-bold text-[34px] text-center'>ABOUT US</h2>
        <p className='text-xl text-left'>
          TravelWay is Africa’s leading, full-service online travel company. At
          TravelWay, we understand that everyone likes easy and affordable
          travel services, so we provide our customers with a one-stop booking
          portal for Affordable Flights, Hotels, Holiday Packages, Airport
          Transfers, a Loyalty program, and much more. Our portal gives
          customers the power of choice from a broad selection of top travel
          deals, and the ability to research, plan and book their domestic and
          international travel from the comfort of their homes and everywhere
          they are.
          <br />
          <br />
          TravelWay is Africa’s leading, full-service online travel company. At
          TravelWay, we understand that everyone likes easy and affordable
          travel services, so we provide our customers with a one-stop booking
          portal for Affordable Flights, Hotels, Holiday Packages, Airport
          Transfers, a Loyalty program, and much more. Our portal gives
          customers the power of choice from a broad selection of top travel
          deals, and the ability to research, plan and book their domestic and
          international travel from the comfort of their homes and everywhere
          they are.
        </p>
      </div>

      <div className='bg-white py-9 px-14 flex justify-between mb-10 rounded-lg items-start'>
        <div>
          <div className=' mb-10'>
            <input
              type='text'
              placeholder='Name'
              className='border-[#808080] border rounded-lg h-12 px-4 outline-none'
            />
          </div>
          <textarea
            placeholder='Message'
            className='resize-none w-full border-[#808080] border rounded-lg px-4 py-3 outline-none mb-4'
          ></textarea>
          <Button type='button'>Send Message</Button>
        </div>
        <div className='flex items-start justify-center gap-2 max-w-[290px]'>
          <span>
            <img src='/check.svg' alt='' className='w-[90px]' />
          </span>
          <div>
            <h3 className='mb-4 text text-lg font-600'>For customer support</h3>
            <p>
              Website and customer support in English and 41 other languages
              available 24/7. For direct enquires please dial <br />
              <span className='text-primary'>01-00099922</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
