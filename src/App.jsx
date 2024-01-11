import { GlobalStyles } from './styles/GlobalStyles'

import './App.css'
import Quote from './sections/Quote'
import HeroSection from './sections/HeroSection'
import PhoneModal from './sections/PhoneModal.jsx'
import DesignSection from './sections/DesignSection'
import DisplaySetion from './sections/DisplaySetion.jsx'
import ProcessorSection from './sections/ProcessorSection.jsx'
import BatterySection from './sections/BatterySection.jsx'
import ColorSection from './sections/colorSection.jsx'






function App() {


  return (
    <>
      <GlobalStyles/>
      <Quote/>
      {/* <PhoneModal/> */}
      <HeroSection/>
      <DesignSection/>
      <DisplaySetion/>
      <ProcessorSection/>
      <BatterySection/>
      <ColorSection/>
    </>
  )
}

export default App
