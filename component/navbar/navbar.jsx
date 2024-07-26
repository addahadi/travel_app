import React, { useState } from 'react'
import logo from "../../public/hilink-logo.svg"
import "../navbar/navbar.css"
import { NAV_LINKS } from '../../data/data'
import { Link } from 'react-router-dom'
import { Button } from '../button/button'
import { motion } from 'framer-motion'
export const Navbar = () => {
  let  [valid , setvalid] = useState(0)
  return (
    <nav className="navbar">
        <Link href="/">
          <img src={logo} alt="logo" width={74} height={29} />
        </Link>
        <ul className='items'>
          {NAV_LINKS.map((value , index)=>{
            return <div onClick={()=>{setvalid(index)}}><Link className='item' href={value.href} key={value.key} >{value.label}</Link>
            {valid == index ? <motion.div initial={{width:0}} animate= {{width:"auto"}} style={{backgroundColor:"black" , height:3}} ></motion.div> : " "}
            </div>
          })}
        </ul>
        <div className='login'>
          <Button type="button" title="Login"  variant = {{color : "white" , backgroundColor : '#222222',height:50,width:120,
          marginRight :10

          }} icon="../public/user.svg" valid="1"/>
        </div>
    </nav>
  )
}

export default Navbar