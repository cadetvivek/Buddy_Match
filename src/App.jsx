import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Faq from './components/FAQ/Faq'
import FitnessLandingPage from './components/Dashbord/FitnessLanding'
import PricingPlans from './components/Plane/Plane'
import Search from './components/Search/Search'
import Buddy from './components/Buddy/Buddy'
// import Footer from './components/Footer/Footer'
function App() {
  return (
    <>
      <div>
        <FitnessLandingPage/>
       <PricingPlans/>
        <Search/>
         <Buddy/>
        <Faq/>
       
      </div>
    </>
  )
}

export default App
