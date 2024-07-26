import React from 'react'
import { Profile } from '../../data/data'
import "../search/search.css"
import { Button } from '../button/button'
export const Search = () => {
  return (
    <div className='search'>
        <img src="../public/maldive.jpg"  className="maldive"width={1263} height={820}/>
        <div className='search_bar'>
            <ul className='profile'>
                {Profile.map((value , index)=>{
                  return (
                    <div className='input_bar'>
                      <div>{value.text}</div>
                      <div className='input'>
                        <input type="text" />
                        <img src={value.icon} width={16} height={16}/>
                      </div>
                    </div>
                  )
                })}
            </ul>
            <Button type="button" variant={{height:60 , width:60 , backgroundColor:"#FA7436", marginBottom:20}} icon="../public/search.svg" valid="1"/>
        </div>
    </div>
  )
}
