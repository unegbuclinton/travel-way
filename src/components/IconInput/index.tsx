import React, { ReactNode } from 'react'

const IconInput = ({ icon }: { icon: ReactNode }) => {
  return (
    <div className='h-[60px] flex items-center gap-2 bg-twGray/30 rounded-full px-4'>
      {icon}
      <input
        type='text'
        placeholder='Search destinations'
        className='bg-transparent outline-none border-none'
      />
    </div>
  )
}

export default IconInput
