import { BiLogoFacebook } from 'react-icons/bi';
import { BiLogoInstagram } from 'react-icons/bi';
import {AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import"./Footer.css"
const Footer = () => {
    return (<div className="footer">
        <div className="floor">
        <img src='./img/E-commerce Logo.PNG' alt='Logo' className="logo-image"/>
        <p className="paragraph">
            We are a team of designers and developer that create high  quality Word Press
        </p>
        <div className="micon">
            <li><a href="https://www.facebook.com/othersshop/"><BiLogoFacebook size={20}className="big"/></a></li>
            <li><a href="https://www.instagram.com/othersshop/"><BiLogoInstagram size={20} className="big"/></a></li>
            <li><a href="https://www.twitter.com/othersshop/"><AiOutlineTwitter size={20} className="big"/></a></li>
            <li><a href="https://www.youtube.com/othersshop/"><AiFillYoutube size={20} className="big"/></a></li>
        </div>
        </div>
        <div className="merge">
            <h2>My Account</h2>
            <div className="links">
                <li><a href="#">Account</a></li>
                <li><a href="#">Order</a></li>
                <li><a href="#">Cart</a></li>
                <li><a href="#">Shipping</a></li>
                <li><a href="#">Retun</a></li>

            </div>
        </div>
        <div className="merge">
            <h2>Pages</h2>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/product">Product</Link>
            <Link to="/cart">Cart</Link>
        </div>
    </div>  );
}
 
export default Footer;