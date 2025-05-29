import RestaurantCard from "./RestaurantCard";
import restaurantList from "../../common/mockData";

//Body component to have restaurant cards

const Body = () => {
    return (
        <div className="body">
            <h3>This is the body</h3>
            <div className="search-container">
                <input className="search-bar" placeholder="Search for restaurants, cuisines..." />
            </div>
            <div className="restaurant-container">                
                {/* Map to iterate on the restaurant list.
                Key is important from React 19 so thatReact can track which items changed between re-renders in order to maintain 
                the virtual DOM diffing. */}
                {restaurantList.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                )
                )};
            </div>
        </div>        
    )
}
export default Body;