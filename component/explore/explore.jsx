import React from 'react'
import { Button } from '../button/button'
import "../explore/explore.css"
export const Explore = () => {
  return (
    <div className='explore'>
        <h1 className='title'>It’s a Big World Out There, 
            <span style={{color:'orange'}}>Go Explore</span>
        </h1>
        <div className='read'>
            <p className='text'>Time tracking software used by millions. 
                A simple time tracker and timesheet app that lets you track work hours across projects......</p>
            <Button title="DISCOVER NOW" variant={{height:56 , width:204 , backgroundColor:"#FA7436"}} type='button' valid="0"/>
        </div>
    </div>
  )
}
