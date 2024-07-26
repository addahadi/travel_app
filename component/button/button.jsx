import React from 'react'
import "../button/button.css"

export const Button = ({type , icon , title , variant,valid}) => {
  return (
    <button type={type} className='button' style={variant}> 
      {valid == 1 ? <span style={{display:'flex',justifyContent:"center" , alignItems:'center', gap:"10px"}}> <img src={icon} width={17} height={17}/>{title}</span> : <span>{title}</span>}
    </button>
  )
}


