import React from 'react'
import "./Navbar.css";
import {Link} from 'react-router-dom';
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { RxDividerVertical } from "react-icons/rx";
import { MdOutlineCall } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import logo from "./logo.png";

const navbar = () => {
  return (
    <div className='container'>
      <div className='first_nav'>
          <p>Welcome to JB Communication message or remove it</p>
          <ul className='nav_items'>
              <Link to="/" className='items'><li>Contact us</li></Link>
              <Link to="/" className='items'><li>My Account</li></Link>
              <i className='BiUserCircle'><BiUserCircle/></i>
              <Link to="/" className='items'><li>Sign in / Register</li></Link>
          </ul>
      </div>
      <div className='second_nav'>
          <div className='nav_logo'>
             <img src={logo} height="65px" width="65px" alt=''/>
          </div>
          <div className='search_on_nav'>
               <p>All Categoires</p>
               <i className='AiOutlineDown'><AiOutlineDown/></i>
               <i className='RxDividerVertical'><RxDividerVertical/></i>
               <input type="search" placeholder='Search in...'/>
               <i className='FiSearch'><FiSearch/></i>
          </div>
          <div className='call_nav'>
             <i className='MdOutlineCall'><MdOutlineCall/></i>
             <p>Call Us Now:<br></br>0(xxx)xxx-xxx</p>
             <i className='MdOutlineShoppingCart'><MdOutlineShoppingCart/></i>
             <h5>Cart</h5>
          </div>
      </div>
      <div className='third_nav'>
        <div className='browse_category'>
            <i className='TfiMenuAlt'><TfiMenuAlt/></i>
            <p>Browse Categories</p>
            <i className='AiOutlineDown'><AiOutlineDown/></i>
        </div>
        <div>
        <ul className='nav_links'>
              <Link to="/" className='links'><li><a className='active'>Home</a></li></Link>
              <Link to="/" className='links'><li>Shop</li></Link>
              <i className='AiOutlineDown'><AiOutlineDown/></i>
              <Link to="/" className='links'><li>Affilate</li></Link>
              <Link to="/" className='links'><li>Payment Methods</li></Link>
              <Link to="/" className='links'><li>Support Center</li></Link>
              <Link to="/" className='links'><li>FAQ</li></Link>
              <Link to="/" className='links'><li>Blog</li></Link>
              <Link to="/" className='links'><li>About Us</li></Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default navbar
