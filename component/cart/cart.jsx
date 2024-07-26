import React, { useState } from 'react'
import { Carts, NAV_Cart } from '../../data/data'
import { Link } from 'react-router-dom'
import "../cart/cart.css"
import { motion } from 'framer-motion'
export const Cart = () => {
  let [valid , setvalid] = useState(1)
  return (
    <div className='Carts'>
        <h1 >The<span style={{color:"#FFB60A"}}> best place </span>for vacation</h1>
        <ul className='nav_cart'>
            {NAV_Cart.map((value , index)=>{
                return (
                <div onClick={()=>{setvalid(index)}}><Link className='item' href={value.href} key={value.key} >{value.label}</Link>
            {valid == index ? <motion.div initial={{width:0}} animate= {{width:"auto"}} style={{backgroundColor:"black" , height:3}} ></motion.div> : " "}
            </div>
              )
            })}
        </ul>
        <div className='cart_container'>{
          Carts.map((value , index)=>{
            return (
            <div  key ={index} className='cart'>
              <img src={value.picture} width={280}  height={289} style={{borderTopLeftRadius:12 , borderTopRightRadius:12}}/>
              <div className='cart_text' >
                <div style={{color : value.color ,gap:10}}><img src='../public/location.svg' width={13} height={13}/>{value.country}</div>
                <h2 style={{fontWeight:500 , color : "#222222"}}>{value.city}</h2>
                <div style={{fontSize:12, color:"#999999"}}>7 Days Tour on 2 diverson</div>
                <h1 style={{fontWeight:500, color:"#FA7436"}}>{value.price}</h1>
              </div>
            </div>)
          })
          }</div>
    </div>
  )
}
