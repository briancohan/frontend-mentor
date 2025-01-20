'use client'
import { useEffect, useRef, useState } from 'react'
interface GradientSliderProps {}

const GradientSlider: React.FC<GradientSliderProps> = ({}) => {
  const slider = useRef<HTMLDivElement>(null)
  const [fromColor, setFromColor] = useState('#000000')
  const [fromPercent, setFromPercent] = useState(0)
  const [toColor, setToColor] = useState('#ffffff')
  const [toPercent, setToPercent] = useState(100)

  const onResize = () => {
    console.log(slider.current?.offsetWidth)
  }

  return (
    <div className='w-full border' ref={slider} onResize={onResize}>
      Hello World
    </div>
  )
}

export default GradientSlider
