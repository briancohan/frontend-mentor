import Responsive from '@/components/Responsive'
import getTailwindClasses from '@/lib/getTailwindClasses'

import GradientSlider from './GradientSlider'

export const metadata = {
  title: 'Gradient',
  description: 'Gradient tool',
}

const mobileSize = {
  width: 375,
  height: 809,
}
const desktopSize = {
  width: 736,
  height: 512,
}
console.log(getTailwindClasses([mobileSize, desktopSize]))

export default function Page() {
  return (
    <Responsive mobileSize={mobileSize} desktopSize={desktopSize}>
      <GradientSlider />
    </Responsive>
  )
}

// Programatically Generated Tailwind Classes
// w-[375px] min-w-[375px] max-w-[375px] h-[809px] min-h-[809px] max-h-[809px]
// w-[736px] min-w-[736px] max-w-[736px] h-[512px] min-h-[512px] max-h-[512px]
