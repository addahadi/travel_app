import React from 'react'
import { Button } from '../button/button'
import "../about us/about.css"
export const About = () => {
  return (
    <div className='about_bar'>
        <img src="../public/mountain.jpg" alt="mountain" width={580} height={633}/>
        <div className='about_text'>
            <p style={{color:"#FA7436"}}>ABOUT US</p>
            <h1>
                The Best And Most Trusted <span style={{}}>Service</span>
            </h1>
            <p className='second_text'>We are the largest holiday service provider in the world with partners and places 
                spread all over the world by prioriti-zing service and customer satisfaction.</p>
            <Button title="Learn more" valid="0" variant={{height:48 , width:155 , backgroundColor:"#FA7436"}}/>
        </div>
        <ul>

        </ul>
    </div>
  )
}
