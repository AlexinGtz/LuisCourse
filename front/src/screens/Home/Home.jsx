import React from 'react'
import { Posts } from '../../components/Posts/Posts'
import './Home.css'



export const Home = (props) => {
  return (
    <div className='homeMainDiv'>
      <Posts />
    </div>
  )
}
