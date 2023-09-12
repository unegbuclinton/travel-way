import React, { FC, ReactNode } from 'react'

interface buttonProp {
  children: ReactNode
  onClick?: () => void
  type: 'submit' | 'button'
  inverted?: boolean
}
const Button: FC<buttonProp> = ({ children, type, onClick, inverted }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`w-[140px] h-[60px] py-4 px-6 whitespace-nowrap rounded-[40px] text-sm cursor-pointer ${
        inverted
          ? 'bg-transparent border border-primary text-primary'
          : 'bg-primary text-white'
      } `}
    >
      {children}
    </button>
  )
}

export default Button
