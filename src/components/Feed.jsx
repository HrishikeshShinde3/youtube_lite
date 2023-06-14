import React from 'react'
import { useContext,useEffect } from 'react'
import { Context } from '../context/contextApi'
import LeftNav  from './LeftNav'


export default function Feed() {
  return (
    <div className='flex flex-row h'>
      
      <LeftNav/>
      </div>
  )
}
