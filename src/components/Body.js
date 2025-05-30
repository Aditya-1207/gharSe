import RestaurantCard from "./RestaurantCard";
import restaurantList from "../../common/mockData";
import { useState } from "react";


//Body component to have restaurant cards

const Body = () => {

     const [listOfRestaurants, setlistOfRestaurants] = useState(restaurantList);

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
                            return restaurant.info.avgRating>4.0
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