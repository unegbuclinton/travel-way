import Footer from '@/components/footer'
import Navbar from '@/components/navbar/Navbar'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className='bg-torqorise-light'>
        <Navbar dark />
      </div>
      <div className='max-w-[1060px] mx-auto'>{children}</div>
      <Footer />
    </div>
  )
}

export default layout
