import React from 'react'
import "./Home.css";
import {Link} from 'react-router-dom';
import { IoMdWatch } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { ImHeadphones } from "react-icons/im";
import { GiGamepad } from "react-icons/gi";
import { BiBox } from "react-icons/bi";
import { MdLocalShipping } from "react-icons/md";
import { AiTwotoneSecurityScan } from "react-icons/ai";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { HiOutlineSupport, HiOutlineArrowNarrowRight } from "react-icons/hi";
import { TbSofa } from "react-icons/tb";
import { MdSportsSoccer } from "react-icons/md";
import { IoGameControllerSharp } from "react-icons/io5";
import { BsCameraFill } from "react-icons/bs";
import { RiGamepadLine } from "react-icons/ri";
import { RiHeadphoneFill } from "react-icons/ri";
import { MdSmartphone } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { BsCreditCard } from "react-icons/bs";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import hyperpc from "./hyperpc.png";
import sale from "./sale.jpg";
import watch from "./watch.jpg";
import menwatch from "./menwatch.jpg";
import smartwatch from "./smartwatch.jpg";
import game from "./game.jpg";
import camera from "./camera.png";
import runningmachine from "./runningmachine.jpg";
import drone from "./drone.jpg";
import electronics from "./electronics.jpg";
import phone from "./phone.jpg";
import headphone from "./headphone.jpg";
import banner from "./banner.jpg";
import drone1 from "./drone1.jpg";
import laptop from "./laptop.jpg";
import headphone_banner from "./headphone_banner.jpg";
import hello from "./hello.jpg";
import game_banner from "./game_banner.jpg";
import logo from "./logo.png";

const Home = () => {
  return (
    <div className='home_container'>
        <div className='first_grid'>
            <div className='sidebar'>
               <ul className='sidebar_contents'>
                   <Link to="/"><li className='sidebar_icon'><IoMdWatch/> &nbsp; Fashion</li></Link>
                   <Link to="/"><li className='sidebar_icon'><AiOutlineHome/> &nbsp; Home & Garden</li></Link>
                   <Link to="/"><li className='sidebar_icon'><BsFillHeartPulseFill/> &nbsp; Health & Beauty</li></Link>
                   <Link to="/"><li className='sidebar_icon'><ImHeadphones/> &nbsp; Gadget</li></Link>
                   <Link to="/"><li className='sidebar_icon'><GiGamepad/> &nbsp; Toy & Games</li></Link>
                   <Link to="/"><li className='sidebar_icon'><BiBox/> &nbsp; Accessories</li></Link>
                </ul>
            </div>
            <div className='add_pic'>
                    <img src={hyperpc} height="370px" width="550px" alt='' div className='pic1'/>
                   <div>
                       <img src={sale} height="183px" width="250px" alt='' className='pic2'/>
                       <img src={watch} height="183px" width="250px" alt='' className='pic3'/>
                   </div>
            </div>
        </div>
        <div className='second_grid'>
            <div className='box'>
               <i className='box_icon'><MdLocalShipping/></i>
               <h5>Free Shipping & Returns <br></br><p>For all orders over $99</p></h5>
               <hr></hr>
               <i className='box_icon'><AiTwotoneSecurityScan/></i>
               <h5>Secure Payment<br></br><p>We ensure secure payment</p></h5>
               <hr></hr>
               <i className='box_icon'><RiMoneyDollarCircleFill/></i>
               <h5>Money Back Guarantee<br></br><p>Any back within 30 days</p></h5>
               <hr></hr>
               <i className='box_icon'><HiOutlineSupport/></i>
               <h5>Customer Support<br></br><p>Call or email us 24/7</p></h5>
            </div>
        </div>
        <div className='third_grid'>
            <div className='view'>
                <h3>Latest Products<br></br><span className='divider'></span></h3>
                <p>View All Products</p>
                <i className='HiOutlineArrowNarrowRight'><HiOutlineArrowNarrowRight/></i>
            </div>
            <hr></hr>
            <div className='products'>
                <div className='product'>
                   <img src={menwatch} height="170px" width="160px" alt=''/>
                    <p>Watch</p>
                    <ul>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <h6>&nbsp; (1 reviews)</h6>
                    </ul>
                    <h5>$89.00</h5>
                </div>
                <div className='product'>
                   <img src={smartwatch} height="170px" width="160px" alt=''/>
                    <p>Smart Watch</p>
                    <ul>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <h6>&nbsp; (4 reviews)</h6>
                    </ul>
                    <h5>$159.00</h5>
                </div>
                <div className='product'>
                   <img src={game} height="170px" width="160px" alt=''/>
                    <p>Video Game</p>
                    <ul>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <h6>&nbsp; (2 reviews)</h6>
                    </ul>
                    <h5>$75.00</h5>
                </div>
                <div className='product'>
                   <img src={camera} height="170px" width="160px" alt=''/>
                    <p>Camera</p>
                    <ul>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <h6>&nbsp; (1 reviews)</h6>
                    </ul>
                    <h5>$215.00</h5>
                </div>
                <div className='product'>
                   <img src={runningmachine} height="170px" width="160px" alt=''/>
                    <p>Running Machine</p>
                    <ul>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <h6>&nbsp; (0 reviews)</h6>
                    </ul>
                    <h5>$168.00</h5>
                </div>
            </div>
        </div>
        <div className='forth_grid'>
         <div className='category'>
            <li className='category_icon'><IoMdWatch/> <br></br> <p>Fashion</p></li>
            <li className='category_icon'><TbSofa/> <br></br> <p>Furniture</p></li>
            <li className='category_icon'><MdSportsSoccer/> <br></br> <p>Sports</p></li>
            <li className='category_icon'><IoGameControllerSharp/> <br></br> <p>Toys</p></li>
            <li className='category_icon'><BsCameraFill/> <br></br> <p>Cameras</p></li>
            <li className='category_icon'><RiGamepadLine/> <br></br> <p>Games</p></li>
            <li className='category_icon'><RiHeadphoneFill/> <br></br> <p>Headphones</p></li>
            <li className='category_icon'><MdSmartphone/> <br></br> <p>Smartphones</p></li>
         </div>
        </div>
        <div className='fifth_grid'>
           <img src={drone} height="130px" width="540px" alt='' className='img1'/>
           <img src={electronics} height="130px" width="540px" alt='' className='img2'/>
        </div>
        <div className='sixth_grid'>
        <div className='view'>
                <h3>Featured Products<br></br><span className='divider'></span></h3>
                <p>More Products</p>
                <i className='HiOutlineArrowNarrowRight'><HiOutlineArrowNarrowRight/></i>
            </div>
            <hr></hr>
            <div className='products'>
                <div className='product'>
                   <img src={headphone} height="170px" width="160px" alt=''/>
                    <p>Headphone</p>
                    <ul>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star checked'></i></li>
                        <h6>&nbsp; (2 reviews)</h6>
                    </ul>
                    <h5>$59.00</h5>
                </div>
                <div className='product'>
                   <img src={smartwatch} height="170px" width="160px" alt=''/>
                    <p>Smart Watch</p>
                    <ul>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <h6>&nbsp; (4 reviews)</h6>
                    </ul>
                    <h5>$159.00</h5>
                </div>
                <div className='product'>
                   <img src={game} height="170px" width="160px" alt=''/>
                    <p>Video Game</p>
                    <ul>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <h6>&nbsp; (2 reviews)</h6>
                    </ul>
                    <h5>$75.00</h5>
                </div>
                <div className='product'>
                   <img src={camera} height="170px" width="160px" alt=''/>
                    <p>Camera</p>
                    <ul>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <h6>&nbsp; (1 reviews)</h6>
                    </ul>
                    <h5>$215.00</h5>
                </div>
                <div className='product'>
                   <img src={phone} height="170px" width="160px" alt=''/>
                    <p>Smart Phone</p>
                    <ul>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <h6>&nbsp; (1 reviews)</h6>
                    </ul>
                    <h5>$105.00</h5>
                </div>
            </div>
        </div>
        <div className='seventh_grid'>
           <img src={banner} height="150px" width="1070px" alt='' className='large_pic'/>
        </div>
        <div className='eighth_grid'>
        <div className='view'>
                <h3>Top Selling Products<br></br><span className='divider'></span></h3>
                <p>More Products</p>
                <i className='HiOutlineArrowNarrowRight'><HiOutlineArrowNarrowRight/></i>
            </div>
            <hr></hr>
            <div className='products'>
                <div className='product'>
                   <img src={headphone} height="170px" width="160px" alt=''/>
                    <p>Headphone</p>
                    <ul>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star checked'></i></li>
                        <h6>&nbsp; (2 reviews)</h6>
                    </ul>
                    <h5>$59.00</h5>
                </div>
                <div className='product'>
                   <img src={smartwatch} height="170px" width="160px" alt=''/>
                    <p>Smart Watch</p>
                    <ul>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <h6>&nbsp; (4 reviews)</h6>
                    </ul>
                    <h5>$159.00</h5>
                </div>
                <div className='product'>
                   <img src={phone} height="170px" width="160px" alt=''/>
                    <p>Smart Phone</p>
                    <ul>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <h6>&nbsp; (1 reviews)</h6>
                    </ul>
                    <h5>$105.00</h5>
                </div>
                <div className='product'>
                   <img src={drone1} height="170px" width="160px" alt=''/>
                    <p>Drone</p>
                    <ul>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <h6>&nbsp; (7 reviews)</h6>
                    </ul>
                    <h5>$100.00</h5>
                </div>
                <div className='product'>
                   <img src={camera} height="170px" width="160px" alt=''/>
                    <p>Camera</p>
                    <ul>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star checked'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <h6>&nbsp; (1 reviews)</h6>
                    </ul>
                    <h5>$215.00</h5>
                </div>
            </div>
        </div>
        <div className='ninth_grid'>
            <img src={laptop} height="350px" width="560px" alt='' className='laptop_pic'/>
            <img src={headphone_banner} height="170px" width="490px" alt='' className='headphone_pic'/>
            <div className='extra'>
            <img src={hello} height="161px" width="235px" alt='' className='hello_pic'/>
            <img src={game_banner} height="161px" width="235px" alt='' className='game_pic'/>
            </div>
        </div>
        <div className='tenth_grid'>
            <div className='subscribe'>
               <i className='FiMail'><FiMail/></i>
               <h4>SUBSCRIBE TO OUR NEWSLETTER<br></br><p>Get all the latest information on Events, Sales and Offers</p></h4>
               <input type="text" placeholder='Your E-mail Address'/>
               <div className='subscribe_btn'>
                <h5>SUBSCRIBE</h5>
                <i className='HiOutlineArrowNarrowRight'>&nbsp;< HiOutlineArrowNarrowRight/></i>
               </div>
            </div>
            <hr></hr>
            <div className='about'>
            <div className='one'>
                 <img src={logo} height="65px" width="65px" alt=''/>
                 <p>Lorem ipsum is a name for a common type of placeholder text.<br></br>
                    Also known as filler or dummy text, this is text copy that serves <br></br>to fill a 
                    space without saying anything meaningful.</p>
                <h5>Got Question? Call us 24/7</h5>
                <h4>0-000-000-0000</h4>
            </div>
            <div className='two'>
                 <h5>COMPANY</h5>
                 <p>About Us</p>
                 <p>Contact Us</p>
                 <p>Privacy Policy</p>
            </div>
            <div className='three'>
                 <h5>MY ACCOUNT</h5>
                 <p>Order Status</p>
                 <p>Order History</p>
                 <p>View Cart</p>
                 <p>Sign In</p>
                 <p>Help</p>
            </div>
            <div className='four'>
                 <h5>CUSTOMER SERVICE</h5>
                 <p>Payment Methods</p>
                 <p>Money-back-guarantee</p>
                 <p>Products Returns</p>
                 <p>Support Center</p>
                 <p>Term and Condition</p>
                 <p>Shipping</p>
            </div>
            </div>
        </div>
        <div className='eleven_grid'>
            <p>Copyrignt © {new Date().getFullYear()} JB Communication. All Rights Reserved.</p>
            <h5>We are using safe payment for</h5>
            <i className='payment'><BsCreditCard/></i>
            <i className='payment'><FaCcPaypal/></i>
            <i className='payment'><FaCcVisa/></i>
        </div>
    </div>
  )
}

export default Home
