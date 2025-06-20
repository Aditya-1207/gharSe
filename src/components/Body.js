import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";

//Body component to have restaurant cards

const Body = () => {

     const [listOfRestaurants, setlistOfRestaurants] = useState([]);

     useEffect(()=>{
        console.log("From useEffect");   
        liveData();      
     },[]);

     const liveData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.489421252484462&lng=73.79558242857456&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#");
        
        const json = await data.json();
        console.log(json);

        //Optional chaining to confirm existence of chaining
        setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     }

    
    return (
        <div className="body">
            <h3>This is the body</h3>
            <div className="search-container">
                <input className="search-bar" placeholder="Search for restaurants, cuisines..." />
            </div>
            {/* Added a top rated filter button using React Hooks: useState function */}
            <div className="topRatedFilter">
                <button className="topRatedButton" onClick={ () => {
                    // Filter the list and set it to useState function
                    const filteredList = listOfRestaurants.filter(
                        (restaurant) => {
                            return restaurant.info.avgRating>4.5
                        }
                    );
                    setlistOfRestaurants(filteredList);
                }
                }>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-container">                
                {/* Map to iterate on the restaurant list.
                Key is mandatory from React 19 so that React can track which items changed between re-renders in order to maintain 
                the virtual DOM diffing. */}

                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                )
                )};
            </div>
        </div>        
    )
}
export default Body;