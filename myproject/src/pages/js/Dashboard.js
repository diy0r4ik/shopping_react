import React, { Component } from 'react'
import{ Nav, Navbar,NavDropdown }from "react-bootstrap"
import img from '../img/Vector.png'
import img1 from '../img/Icon.png'
import img2 from '../img/Rectangle.png'
export default class Dashboard extends Component{
    render(){
        return(
            <div>
              <div className='navbars'>
                <h1 className='logo'>Ugmonk</h1>
                <img src={img} alt=""className='logo-img'/>
                <div className='links'>
                  <li className='links_title'>Men</li>
                  <li className='links_title'>Women</li>
                  <li className='links_title'>Objects</li>
                  <li className='links_title'>Analog</li>
                </div>
                <img src={img1} alt=""className='Icon-img'/>
              </div>
              <div className='main'>
              <img src={img2} alt=""className='main-img'/>
              <h3 className='main_h5'>Analog: The Simplest Productivity System</h3>
              <a className='main_link' href='!#'>Shop now →</a>
              </div>
            </div>
        )
    }
}