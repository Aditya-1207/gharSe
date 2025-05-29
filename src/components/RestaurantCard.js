import { CDN_URL } from "../../common/constants";

//Restaurant card will have dish image, Rest. rating, ETA and Cuisine type
const RestaurantCard = (props) => {
    const {resData} = props;
    
    
    //Maintain object destructuring
    const {cloudinaryImageId,name,avgRating,deliveryTime,cuisines,costForTwo,sla} = resData?.info;
    const {link} = resData?.cta;

    return (
        <div className="restaurantCard">
            <div>
                <img className="restaurantImage" src={CDN_URL+cloudinaryImageId}></img>
            </div>
            <div className="restaurantName">
                <h3>{name}</h3>
            </div> 
            <div className="ratingAndETA">
                 <div className="rating">
                    <h4>{avgRating}</h4>
                </div>
                <div className="ETA">
                    <h4>{sla.deliveryTime} mins</h4>
                </div>
            </div>           
            <div className="cuisineType">
                <h4>{cuisines.join()}</h4>
            </div>           
            <div className="Cost for two">
                <h4>{costForTwo}</h4>
            </div>   
            <div className="link" >
                <h4>{<a href="{link}">Location</a>}</h4>
            </div>             
        </div>       
    )     
}

export default RestaurantCard;