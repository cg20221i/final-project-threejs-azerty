import { Dispatch, SetStateAction, useEffect, useRef } from 'react'

interface ButtonProps {
  btn?: string
  onSpace?: boolean
}

const Button = ({ btn, onSpace }: ButtonProps) => {
  return (
    <div
      className={`px-16 py-4 rounded-full duration-300 ${onSpace ? 'bg-white text-black animate-pulse' : 'bg-black'}`}>
      <p className='text-2xl'>{btn}</p>
    </div>
  )
}
export default Button
