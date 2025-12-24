import React from "react";
import logo from "../assets/rajdharma.jpg"
import "../Components/Navbar.css"

function Navbar(){
    return (

        <div className='navbar'>
            <div className='logo'>
                <img src={logo} alt='rajdharma'/>
                <h2>Rajdharma</h2>
            </div>
            
            <ul className='list'>
                <li>Home</li>
                <li>Product</li>
                <li>Features</li>
                <li>Pricing</li>

            </ul>

            <div className='sign'>
                <p>sign in</p>
                <button type='button'>Register</button>

            </div>

        </div>
    )
}

export default Navbar