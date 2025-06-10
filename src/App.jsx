import React from 'react'
import LandingPage from './components/LandingPage/LandingPage'
import AchievePart from './components/AchievePart/AchievePart'
import Founder from './components/Founder/Founder'
import AssociatedComp from './components/AssociatedComp/AssociatedComp'
import FeedbackDetails from './components/FeedbackDetails/FeedbackDetails'
import CommentDetails from './components/CommentDetails/CommentDetails'
import Agenda from './components/Agenda/Agenda'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <LandingPage />
      <AchievePart />
      <Founder />
      <AssociatedComp />
      <FeedbackDetails />
      <CommentDetails />
      <Agenda />
      <Footer />
    </div>
  )
}

export default App

