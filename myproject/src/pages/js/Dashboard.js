import React, { Component } from 'react'
import{ Nav, Navbar,NavDropdown }from "react-bootstrap"
import img from '../img/Vector.png'
import img1 from '../img/Icon.png'
import img2 from '../img/Rectangle.png'
import img3 from '../img/card1.png'
import img4 from '../img/main3.png'
import img5 from '../img/main4.png'
import img6 from '../img/men.png'
import img7 from '../img/women.png'
import img8 from '../img/oral_shop.png'
import img9 from '../img/guy.png'
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
                <div className='main4_box'>
                    <img src={img5} alt=" " className='main4-img'/>
                    <div className='left_text'>
                    <h1 className='left_title'>Refillable Discbound Journals</h1>
                    <p className='left_p'>Heirloom quality you'll be holding onto for life</p>
                    <a className='left_a' href=''>Shop the collection →</a>
                  </div>
                </div>
              </div>
              <div className='main5'>
                <h1 className='main5_title'>Our mission is to create simple, beautiful objects that combine form and function.</h1>
                <div className='main5_cards'>
                  <div className='men_card'>
                    <img src={img6} alt=" " className='men-img'/>
                    <a className='card_a' href=''>Shop Mens →</a>
                  </div>
                
                  <div className='women_card'>
                    <img src={img7} alt=" " className='women-img'/>
                    <a className='card_a' href=''>Shop Womens →</a>  
                  </div>
                </div>
                <div className='oral_shop'>
                  <div className='oral_shop_card'>
                    <img src={img8} alt=" " className='oral_shop-img'/>
                    <a className='card_a' href=''>Shop Objects →</a>
                  </div>
                </div>
              </div>
              <div className='main6'>
                <img src={img9} alt=" " className='guy-img'/>
                <h1 className='main6_title'>A design studio in Downingtown, PA, creating and curating products that combine form & function</h1>
                <a href=''>Read Our Story →</a>
              </div>
              <div className='main7'>
                <h1 className='main7_title'>Stay in the loop</h1>
                <p className='main6_p'>Be the first to know when new products drop and get behind-the-scenes content straight from Ugmonk’s founder.</p>
                <div className='main7_box'></div>
              </div>
              <div className='footer'>
                <ul className='footer_left'>
                  <li a href=''>Customer Service</li>
                  <li a href=''>Customer Service</li>
                  <li a href=''>Customer Service</li>
                  <li a href=''>Customer Service</li>
                  <li a href=''>Customer Service</li>
                  <li a href=''>Customer Service</li>
                </ul>
                <ul className='footer_right'>
                  <li a href=''>About</li>
                  <li a href=''>About</li>
                  <li a href=''>About</li>
                  <li a href=''>About</li>
                  <li a href=''>About</li>
                  <li a href=''>About</li>
                </ul>
                <div className='footer_info'>
                <img src={img} alt=" " className='logo-img'/>
                </div>
              </div>
            </div>
        )
    }
}