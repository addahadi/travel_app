import React from 'react';
import { about_cart } from '../../data/data';
import "../whychoose/choose.css"
import { Button } from '../button/button';
const WhyChooseUs = () => {
  return (
    <section className='whychouseus'>
      <div className='whychouseus_text'>
        <h1 style={{fontSize:40 , fontWeight:500 , marginTop:-60}}>Why <span style={{color:"#D4AF37"}}>choose</span> us</h1>
        <span style={{lineHeight:2 ,marginTop:-10}}>We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford.</span>
        <Button valid="0" title="learn more"  variant={{width:150 , backgroundColor:"#D4AF37",color:"white" ,height:50,marginTop:35}} />
      </div>
      <div className='whychooseus_cart'>
        {about_cart.map((value)=>{
          return (
            <div className='about_cart'>
              <img src={value.svg} width={50} height={50}/>
              <div className="choose_title" style={{fontSize:18}}>{value.title}</div>
              <div className='choose_text' style={{color:"#999999" ,lineHeight:2}} >{value.text}</div>
            </div>
          )
        })}
      </div>
    </section>
  );
}

export default WhyChooseUs;
