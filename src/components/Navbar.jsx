import React from 'react'
import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
    <div className={styles.maindiv}>
        <div className={styles.about}>
        <Link style={{textDecoration:"none",marginLeft:"30px",font:"14px",fontWeight:"400",color:"white"}} to="./About">About</Link>
        <Link style={{textDecoration:"none",marginLeft:"30px",font:"14px",fontWeight:"400",color:"white"}}to="./Contact">Contact</Link>
        <Link style={{textDecoration:"none",marginLeft:"30px",font:"14px",fontWeight:"400",color:"white"}} to="./Faq">FAQ</Link>
        <Link style={{textDecoration:"none",marginLeft:"30px",font:"14px",fontWeight:"400",color:"white"}} to="./Returns">Returns</Link>
       
        </div>
        <div className={styles.log}>
        <h6>Login</h6>
        <h6>Checkout</h6>
        <h6>Support</h6>
        
        </div>
    </div>
    <div className={styles.sss}>
        <img src="https://images.streetstylestore.com/new-sssnew-images/sss-logo.jpg" alt="aa" />
        <div className={styles.log}>
          <h1>sssss</h1> 
        </div>
    </div>
    </div>
  )
}

export default Navbar