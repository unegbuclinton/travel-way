import React, { FC } from 'react'

interface selectProp {
  label?: string
  options: Array<{ value: string; label: string }>
}
const SelectDropdown: FC<selectProp> = ({ label, options }) => {
  return (
    <div className='select-container'>
      <label htmlFor='selectOptions'>{label}</label>
      <select id='selectOptions'>
        {options?.map(({ value, label }) => (
          <option value={value}>{label}</option>
        ))}
      </select>
    </div>
  )
}

export default SelectDropdown
