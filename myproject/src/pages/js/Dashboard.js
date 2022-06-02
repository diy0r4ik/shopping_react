import React, { Component } from 'react'
import{ Nav, Navbar,NavDropdown }from "react-bootstrap"
import img from '../img/Vector.png'
import img1 from '../img/Icon.png'
import img2 from '../img/Rectangle.png'
import img3 from '../img/card1.png'
import img4 from '../img/main3.png'
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
              <main className='main2'>
                <div className='links2'>
                  <li className='links2_title'>New Arrivals</li>
                  <li className='links2_title'>Analog</li>
                  <li className='links2_title'>Final Stock</li>
                  <li className='links2_title'>Best Sellers</li>
                  <li className='links2_title'>Clothing</li>
                  <li className='links2_title'>Objects</li>
                </div>
                <div className='cards'>
                  <div className='card'>
                    <img src={img3} alt=""className='card-img'/>
                    <h5 className='card_text'>Analog Starter Kit</h5>
                    <h6 className='card_text2'>(Walnut)</h6>
                    <h6 className='card_text3'>$103.00</h6>
                    <h6 className='card_text4'>$89.00</h6>
                  </div>
                  <div className='card'>
                    <img src={img3} alt=""className='card-img'/>
                    <h5 className='card_text'>Analog Starter Kit</h5>
                    <h6 className='card_text2'>(Walnut)</h6>
                    <h6 className='card_text3'>$103.00</h6>
                    <h6 className='card_text4'>$89.00</h6>
                  </div>
                  <div className='card'>
                    <img src={img3} alt=""className='card-img'/>
                    <h5 className='card_text'>Analog Starter Kit</h5>
                    <h6 className='card_text2'>(Walnut)</h6>
                    <h6 className='card_text3'>$103.00</h6>
                    <h6 className='card_text4'>$89.00</h6>
                  </div>
                  <div className='card'>
                    <img src={img3} alt=""className='card-img'/>
                    <h5 className='card_text'>Analog Starter Kit</h5>
                    <h6 className='card_text2'>(Walnut)</h6>
                    <h6 className='card_text3'>$103.00</h6>
                    <h6 className='card_text4'>$89.00</h6>
                  </div>
                </div>
                <button className='card_btn'>Shop New Arrivals →</button>
              </main>
              <div className='main3'>
                  <img src={img4} alt=" " className='main3-img'/>
                <div className='circle'>
                  <p className='circle_text'>1.9 million cards shipped!</p>
                </div>
                <div className='main3_title'>Analog — The simplest productivity system</div> 
                <div className='main3_btn'>Now Available →</div>
                <a className='main3_link' href=''>Show me how it works</a> 
              </div>
              <div className='main4'>
                <div className='main4_box'></div>
              </div>
            </div>
        )
    }
}