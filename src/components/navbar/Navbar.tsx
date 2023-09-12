'use client'
import React from 'react'
import TwIcon from '../twIcon/TwIcon'
import Link from 'next/link'
import Button from '../button'
import SearchInput from '../IconInput'

const Navbar = ({ dark }: { dark?: boolean }) => {
  const currentPath =
    typeof window !== 'undefined' ? window.location.pathname : ''
  const navLinks: Array<{ to: string; label: string }> = [
    { to: '/home', label: 'Home' },
    { to: '/routes/hotels', label: 'Hotels' },
    { to: '/routes/vacation', label: 'Vacation Packages' },
    { to: '/routes/bookings', label: 'My Bookings' },
    { to: '/routes/about', label: 'About Us' },
  ]
  return (
    <nav className='flex justify-center py-8'>
      <div className='flex items-center gap-[32px]'>
        <TwIcon iconName='logo' />
        <ul className='flex gap-[24px]'>
          {navLinks?.map(({ to, label }) => (
            <Link
              className={`text-xl pb-1 font-normal ${
                dark
                  ? 'text-[#404040] hover:text-primary hover:font-semibold w-fit hover:border-b border-primary'
                  : 'text-white hover:border-b '
              } duration-200 ${currentPath === to ? 'font-bold border-b' : ''}`}
              href={to}
            >
              {label}
            </Link>
          ))}
        </ul>
        <SearchInput icon={<TwIcon iconName='searchIcon' />} />
        <Button type='button'>SIGN UP</Button>
      </div>
    </nav>
  )
}

export default Navbar
