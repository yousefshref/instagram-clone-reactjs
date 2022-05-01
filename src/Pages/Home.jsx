import React from 'react'

import Feeds from '../components/Feeds'
import Hidding__Footer from '../components/Hidding__Footer'
import Header from './Header'
import Story from './Story'
import SuggestsFeed from './SuggestsFeed'
import Widget from './Widget'

const Home = () => {

  return (
    <>
        <Header />
        <Story />
        <Widget />
        <SuggestsFeed />
        <Feeds />
        <Hidding__Footer />
    </>
  )
}

export default Home