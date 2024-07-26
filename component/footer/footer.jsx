import React from 'react'
import '../footer/footer.css'
import { Button } from '../button/button'
export const Footer = () => {
  return (
    <footer className='footer'>
        <div className='read_footer'>    
                <img src="../public/hilink-logo.svg" width={70} height={70}/>
                <p className='footer text' style={{fontSize:15, width:300}}>We believe brand interaction is key in commu- nication. Real innovations and a positive.</p>
            <div className='social_media'>
                <img src="../public/youtube.svg" width={35} height={35} />
                <img src="../public/facebook.svg" width={31} height={31} />
                <img src="../public/instagram.svg" width={35} height={35} />
            </div>
        </div>
        <table>
            <tr>
                <th>About us</th>
                <th>Company</th>
                <th>Support</th>
            </tr>
            <tr>
                <td>Features</td>
                <td>Core value</td>
                <td>Support Centers</td>
            </tr>
            <tr>
                <td>Fac</td>
                <td>Partner</td>
                <td>Feedback</td>
            </tr>
            <tr>
                <td>News</td>
                <td>Blog</td>
                <td>Accessiblity</td>
            </tr>
            <tr>
                <td>Contact</td>
                <td>Pricing</td>
            </tr>
        </table>
        <div className='footer_input'>
            <h3>Get in Touch</h3>
            <input type="text" value="Your email here..." style={{color:"#666666"}}/>
            <Button valid={0} type="button" variant={{width:130 ,height:40, backgroundColor:"#fa7436",fontWeight:300 , color:"white",borderRadius:0}} title="Get Access"/>
        </div>
    </footer>
  )
}


