import Compare from '@/components/Compare'
import Responsive from '@/components/Responsive'
import getTailwindClasses from '@/lib/getTailwindClasses'

import data from './data.json'
import ResultSummary from './ResultsSummary'

export const metadata = {
  title: 'Results Summary Component',
}

const mobileImage = {
  src: '/results-summary-component/design/mobile-design.jpg',
  alt: 'mobile design',
  width: 375,
  height: 809,
}
const desktopImage = {
  src: '/results-summary-component/design/desktop-design.jpg',
  alt: 'desktop design',
  width: 1440,
  height: 1080,
}
const mobileSize = {
  width: 375,
  height: 809,
}
const desktopSize = {
  width: 736,
  height: 512,
}
console.log(getTailwindClasses([mobileImage, desktopImage, mobileSize, desktopSize]))

const component = <ResultSummary data={data} />

export default function Challenge() {
  return (
    <div className='w-screen h-screen overflow-y-scroll snap-mandatory snap-y'>
      <Responsive mobileSize={mobileSize} desktopSize={desktopSize}>
        {component}
      </Responsive>
      <Compare image={mobileImage} size={mobileSize} title='Mobile View'>
        {component}
      </Compare>
      <Compare image={desktopImage} size={desktopSize} title='Desktop View'>
        {component}
      </Compare>
    </div>
  )
}

// Programatically Generated Tailwind Classes
// w-[375px] min-w-[375px] max-w-[375px] h-[809px] min-h-[809px] max-h-[809px]
// w-[1440px] min-w-[1440px] max-w-[1440px] h-[1080px] min-h-[1080px] max-h-[1080px]
// w-[375px] min-w-[375px] max-w-[375px] h-[809px] min-h-[809px] max-h-[809px]
// w-[736px] min-w-[736px] max-w-[736px] h-[512px] min-h-[512px] max-h-[512px]
