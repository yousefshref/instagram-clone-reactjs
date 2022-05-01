import { Avatar } from '@mui/material'
import React from 'react'
import './css/StoryItem.css'

const StoryItem = () => {
  return (
    <div className='story__item'>
        <i><Avatar /></i>
        <p>mohammedhassan</p>
    </div>
  )
}

export default StoryItem