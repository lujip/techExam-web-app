import React from 'react'
import LandingPage from './components/LandingPage/LandingPage'
import AchievePart from './components/AchievePart/AchievePart'
import Founder from './components/Founder/Founder'
import AssociatedComp from './components/AssociatedComp/AssociatedComp'
import FeedbackDetails from './components/FeedbackDetails/FeedbackDetails'

const App = () => {
  return (
    <div>
      <LandingPage />
      <AchievePart />
      <Founder />
      <AssociatedComp />
      <FeedbackDetails />
    </div>
  )
}

export default App

