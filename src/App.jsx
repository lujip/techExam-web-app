import React from 'react'
import LandingPage from './components/LandingPage/LandingPage'
import AchievePart from './components/AchievePart/AchievePart'
import Founder from './components/Founder/Founder'
import AssociatedComp from './components/AssociatedComp/AssociatedComp'
import FeedbackDetails from './components/FeedbackDetails/FeedbackDetails'
import CommentDetails from './components/CommentDetails/CommentDetails'

const App = () => {
  return (
    <div>
      <LandingPage />
      <AchievePart />
      <Founder />
      <AssociatedComp />
      <FeedbackDetails />
      <CommentDetails />
    </div>
  )
}

export default App

