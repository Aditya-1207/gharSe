import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

// Main Body component: Displays restaurant cards and search/filter UI

const Body = () => {
    //State to hold list of restaurants
     const [listOfRestaurants, setlistOfRestaurants] = useState([]);
     //State to hold a copy of restaurants 
     const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);
     //State to hold search input value
     const [searchText, setSearchText] = useState([]);

     //Fetch live data from Swiggy API
     useEffect(()=>{
        liveData();      
     },[]);

     //Function to fetch and set restaurant data
     const liveData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.489421252484462&lng=73.79558242857456&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#");       
        const json = await data.json();
        //Optional chaining to confirm existence of restaurant list
        setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     }

    //Add Shimmer loading effect based on conditional rendering     
    return listOfRestaurants===0? (
            <Shimmer/>
        ) :(
            <div className="body">        
                {/* Search and filter controls */}    
                <div className="search-container">
                    <input className="search-bar" placeholder="Search for restaurants, cuisines..." value={searchText}
                        onChange={(event)=> {                    
                            setSearchText(event.target.value);
                        }                
                    }/>
                    {/* Search based on Restaurant name from input*/}
                    <button className="btn" onClick={()=>{
                        const filterSearchList = listOfRestaurants.filter(
                            (restaurant)=> {                           
                                return restaurant.info.name.toLowerCase().includes(searchText);
                            }
                        );
                        setFilteredListOfRestaurant(filterSearchList);
                        }}>Search
                    </button>
                     {/* Button to filter top rated restaurants */}
                    <div className="topRatedFilter btn">
                        <button className="topRatedButton" onClick={ () => {
                            // Filter the list and set it to useState function
                            const filteredList = listOfRestaurants.filter(
                                (restaurant) => {
                                    return restaurant.info.avgRating>4.5
                                }
                            );
                            setFilteredListOfRestaurant(filteredList);
                        }
                        }>Top Rated Restaurants</button>
                    </div>
                    {/* Button to clear filters and reload original data */}
                    <div>
                        <button className="clear-button" onClick={()=> {
                                liveData();
                            }
                        }>Clear Filter</button>
                    </div>
                </div>            
                <div className="restaurant-container">                
                    {/* Map to iterate on the restaurant list.
                    Key is mandatory so that React can track which items changed between re-renders in order to maintain 
                    the virtual DOM diffing. */}

                    {filteredListOfRestaurant.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    )
                    )};
                </div>
            </div>        
    )
}
export default Body;