'use client'
import React, { RefObject, useEffect, useRef, useState } from 'react'
import TwIcon from '../twIcon/TwIcon'

const NumberSelectionComponent = ({ label }: { label: string }) => {
  const [showSelecton, setShowSelection] = useState<boolean>(false)
  const [value, setValue] = useState<number>(1)

  const toggleIndicator = () => {
    setShowSelection((prev) => !prev)
  }

  const addValue = () => {
    setValue((prev) => prev + 1)
  }
  const deductValue = () => {
    if (value > 1) {
      setValue((prev) => prev - 1)
    }
  }

  const containerRef: RefObject<HTMLDivElement> = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowSelection(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  return (
    <div ref={containerRef} className='relative'>
      <p
        onClick={toggleIndicator}
        className='flex py-2.5 px-3 text-white rounded-lg border w-fit items-center gap-2 cursor-pointer'
      >
        {value}
        <span>
          <TwIcon iconName='arrowDown' />
        </span>
      </p>
      <div
        className={`${
          showSelecton ? 'opacity-100 block' : 'opacity-0 hidden'
        } py-6 px-8 bg-white rounded-lg duration-150 absolute bottom-[-195px] w-fit`}
      >
        <p className='text-black text-center py-4'>{label}</p>
        <div className='flex items-center gap-4'>
          <p
            onClick={deductValue}
            className='flex justify-center items-center rounded-lg cursor-pointer p-2 hover:bg-twGray/40'
          >
            <TwIcon iconName='minusIcon' />
          </p>
          <p className='flex justify-center text-black items-center w-[40px] h-[40px] rounded-full border-2'>
            {value}
          </p>
          <p
            onClick={addValue}
            className='flex justify-center items-center rounded-lg cursor-pointer p-2 hover:bg-twGray/40'
          >
            <TwIcon iconName='addIcon' />
          </p>
        </div>
        <p
          onClick={() => setValue(1)}
          className='text-primary cursor-pointer mt-3'
        >
          Clear
        </p>
      </div>
    </div>
  )
}

export default NumberSelectionComponent
