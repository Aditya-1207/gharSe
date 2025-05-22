import React from "react";
import ReactDOM from 'react-dom/client';

/**
 * App Design
 * Header
 *  - Logo
 *  - Navigation bar
 *      --Home
 *      --About
 *      --Contact Us
 *      --Cart
 * Body
 *  -Search Bar
 *      --Search bar
 *      --Search Glass
 *  -Restaurant card
 *      --Dish Image
 *      --Star Rating
 *      --ETA
 *      --Cuisine type
 * Footer
 *  -Copyright
 *  -About Us
 *  -Raise an issue
 *  -Links
 *  -Contact Us  
 */

//Header component to have Logo and Navigation bar as child component
const Header = () => {
    return (
        <div className="header-container" >
            {/* Image is added just for learning purpose, no commercial use intended */}
            <div >
                <img className="logo" src="https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-134749604.jpg" alt="GharSe Logo" />
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

const RestaurantCard = () => {
    return (
        <div>
            <h3>This is from RestaurantCard</h3>
        </div>
        
    )     
}

const Body = () => {
    return (
        <div className="body">
            <h3>This is the body</h3>
            <div className="search-container">
                <span>This will be the search bar</span>
            </div>
            <div className="restaurant-container">                
                <RestaurantCard/>
            </div>
        </div>        
    )
}

//The root level component "AppLayout"  will have all child components as per App design
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>       
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);