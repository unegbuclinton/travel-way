import FlightTabComponent from '@/components/tabComponents/flightTabComponent'
import Navbar from '@/components/navbar/Navbar'
import SelectDropdown from '@/components/selectComponent'
import Tab from '@/components/tab'
import TwIcon from '@/components/twIcon/TwIcon'
import React, { ReactNode } from 'react'
import RideTabComponent from "@/components/tabComponents/rideTabComponent'"
import HotelTabComponent from '@/components/tabComponents/hotelTabComponent'

const HeroSection = () => {
  const Title = ({ text, icon }: { text: string; icon: ReactNode }) => {
    return (
      <p className='flex gap-2 text-xl items-center'>
        {text}
        <span>{icon}</span>
      </p>
    )
  }
  const tabs = [
    {
      title: <Title text='Flight' icon={<TwIcon iconName='flightIcon' />} />,
      component: <FlightTabComponent />,
    },
    {
      title: <Title text='Rides' icon={<TwIcon iconName='rideIcon' />} />,
      component: <RideTabComponent />,
    },
    {
      title: <Title text='Hotels' icon={<TwIcon iconName='hotelIcon' />} />,
      component: <HotelTabComponent />,
    },
  ]

  const cardItems: Array<{ icon: ReactNode; title: string; subtitle: string }> =
    [
      {
        icon: <TwIcon iconName='cardOneIcon' />,
        title: 'Search Destination',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue facilisis felis sit amet hendrerit. Nulla et justo vel urna ultrices imperdiet Lorem ipsum dolor sit amet,',
      },
      {
        icon: <TwIcon iconName='cardIconTwo' />,
        title: 'Book Ticket',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue facilisis felis sit amet hendrerit. Nulla et justo vel urna ultrices imperdiet Lorem ipsum dolor sit amet, ',
      },
      {
        icon: <TwIcon iconName='cardIconThree' />,
        title: 'Explore the World',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue facilisis felis sit amet hendrerit. Nulla et justo vel urna ultrices imperdiet Lorem ipsum dolor sit amet, ',
      },
    ]
  return (
    <div
      className='hero-image relative bg-cover bg-center h-screen'
      style={{ backgroundImage: "url('/heroImage.png')" }}
    >
      <div className='relative z-10'>
        <Navbar />
        <div className='max-w-[1060px] mx-auto mt-[40px]'>
          <h1 className='text-[48px] text-white mb-[40px] font-bold max-w-[530px]'>
            Explore the Beauty of the World...
          </h1>
          <div className='w-full bg-twGray/10 rounded p-8'>
            <Tab tabs={tabs} />
          </div>
        </div>
        <div className='flex justify-center gap-[40px] max-w-[1060px] mt-[50px] mx-auto pt-[70px] pb-10 bg-white rounded-lg'>
          {cardItems?.map(({ icon, title, subtitle }) => (
            <div className='flex flex-col justify-center items-center'>
              {icon}
              <h2 className='font-bold text-xl mt-8'>{title}</h2>
              <p className='text-base text-center max-w-[275px]'>{subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroSection
