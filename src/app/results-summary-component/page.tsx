import Compare from '@/components/Compare'
import Responsive from '@/components/Responsive'

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
// Tailwind needs these *somewhere* in the codebase to generate the classes
// Make sure to update the comments if the values are changed
//
// mobileImage.width:   w-[375px] max-w-[375px]
// desktopImage.width:  w-[1440px] max-w-[1440px]
// mobileSize.width:    w-[375px] max-w-[375px]
// desktopSize.width:   w-[736px] max-w-[736px]
// mobileImage.height:  h-[809px] max-h-[809px]
// desktopImage.height: h-[1080px] max-h-[1080px]
// mobileSize.height:   h-[809px] max-h-[809px]
// desktopSize.height:  h-[512px] max-h-[512px]
