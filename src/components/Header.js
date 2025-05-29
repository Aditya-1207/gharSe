import { LOGO_URL } from "../../common/constants";

//Header component to have Logo and Navigation bar as child component
const Header = () => {
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
                </ul>
            </div>
        </div>
        
    )
}

export default Header;