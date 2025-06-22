import { LOGO_URL } from "../../common/constants";
import { useState } from "react";

//Header component to have Logo and Navigation bar as child component
const Header = () => {
    
    const [btnName, setBtnName] = useState("Login");    

    return (
        <div className="header-container" >           
            <div >
                <img className="logo" src={LOGO_URL} alt="Home food" />
            </div>
            <div className="navigation-bar">
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <button className="btn" onClick={()=> { 
                        btnName === "Login"? setBtnName("Logout"):  setBtnName("Login");                                           
                        console.log(btnName);
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
        
    )
}

export default Header;