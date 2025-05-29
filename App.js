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
 * 
 *  Disclaimer: All the images added in the code are just for learning purpose, no commercial use intended
 */

//Header component to have Logo and Navigation bar as child component
const Header = () => {
    return (
        <div className="header-container" >           
            <div >
                <img className="logo" src="https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-134749604.jpg" alt="Home food" />
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

//Restaurant card will have dish image, Rest. rating, ETA and Cuisine type
const RestaurantCard = (props) => {
    const {resData} = props;
    const cdnUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    
    //Maintain object destructuring
    const {cloudinaryImageId,name,avgRating,deliveryTime,cuisines,costForTwo,sla} = resData?.info;
    const {link} = resData?.cta;

    return (
        <div className="restaurantCard">
            <div>
                <img className="restaurantImage" src={cdnUrl+cloudinaryImageId}></img>
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

const restaurantList = [
                                    {
                                        "info": {
                                            "id": "34724",
                                            "name": "Subway",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/579f6319-ba31-45f1-8ff1-e525e2f61a64_34724.JPG",
                                            "locality": "Warje",
                                            "areaName": "Warje",
                                            "costForTwo": "₹350 for two",
                                            "cuisines": [
                                                "sandwich",
                                                "Salads",
                                                "wrap",
                                                "Healthy Food"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "2",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "6.3K+",
                                            "sla": {
                                                "deliveryTime": 22,
                                                "lastMileTravel": 0.3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "0.3 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-29 00:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "bolt/big%20RX%20listing%2018px.png",
                                                        "description": "bolt!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "bolt/big%20RX%20listing%2018px.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹150 OFF",
                                                "subHeader": "ABOVE ₹299",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-73094107-7b3c-43b8-b84c-01d26c8b0bf5"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/pune/subway-warje-rest34724",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "518510",
                                            "name": "EatFit",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/26/457efb96-1c05-45b0-ae0d-9e03e34eecbd_518510.jpg",
                                            "locality": "Paud Road",
                                            "areaName": "Kothrud",
                                            "costForTwo": "₹270 for two",
                                            "cuisines": [
                                                "Chinese",
                                                "Healthy Food",
                                                "Tandoor",
                                                "Pizzas",
                                                "North Indian",
                                                "Thalis",
                                                "Biryani"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "76139",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "2.6K+",
                                            "sla": {
                                                "deliveryTime": 31,
                                                "lastMileTravel": 4.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "4.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-28 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Ratnesh_Badges/Rx_Awards_2025/Healthy.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/Healthy.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹99"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-73094107-7b3c-43b8-b84c-01d26c8b0bf5"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/pune/eatfit-paud-road-kothrud-rest518510",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "518514",
                                            "name": "Great Indian Khichdi by EatFit",
                                            "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
                                            "locality": "Paud Road",
                                            "areaName": "Kothrud",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Indian",
                                                "Home Food",
                                                "Healthy Food",
                                                "Snacks"
                                            ],
                                            "avgRating": 4.2,
                                            "veg": true,
                                            "parentId": "319582",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "1.5K+",
                                            "sla": {
                                                "deliveryTime": 30,
                                                "lastMileTravel": 4.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "4.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-28 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹99"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-73094107-7b3c-43b8-b84c-01d26c8b0bf5"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/pune/great-indian-khichdi-by-eatfit-paud-road-kothrud-rest518514",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "774428",
                                            "name": "Kwality Walls Ice Cream and More",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/a2fbdd94-b3af-4fab-89c8-6fd240cd6951_774428.JPG",
                                            "locality": "Indira Shankar Nagar",
                                            "areaName": "Kothrud",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Ice Cream",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.6,
                                            "veg": true,
                                            "parentId": "582",
                                            "avgRatingString": "4.6",
                                            "totalRatingsString": "304",
                                            "sla": {
                                                "deliveryTime": 25,
                                                "lastMileTravel": 4.3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "4.3 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-29 05:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹125 OFF",
                                                "subHeader": "ABOVE ₹299",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-73094107-7b3c-43b8-b84c-01d26c8b0bf5"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/pune/kwality-walls-ice-cream-and-more-indira-shankar-nagar-kothrud-rest774428",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "518515",
                                            "name": "Home Plate by EatFit",
                                            "cloudinaryImageId": "e975b355e30661b40e3522641689cede",
                                            "locality": "Paud Road",
                                            "areaName": "Kothrud",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "North Indian",
                                                "Home Food",
                                                "Healthy Food",
                                                "Indian",
                                                "Punjabi",
                                                "South Indian",
                                                "Rajasthani",
                                                "Maharashtrian",
                                                "Snacks",
                                                "Desserts"
                                            ],
                                            "avgRating": 4,
                                            "veg": true,
                                            "parentId": "301197",
                                            "avgRatingString": "4.0",
                                            "totalRatingsString": "693",
                                            "sla": {
                                                "deliveryTime": 34,
                                                "lastMileTravel": 4.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "4.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-28 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "textExtendedBadges": [
                                                    {
                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                        "shortDescription": "options available",
                                                        "fontColor": "#7E808C"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "",
                                                                    "fontColor": "#7E808C",
                                                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                                                    "shortDescription": "options available"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹79"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-73094107-7b3c-43b8-b84c-01d26c8b0bf5"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/pune/home-plate-by-eatfit-paud-road-kothrud-rest518515",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "558835",
                                            "name": "HRX by EatFit",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/5/5b72a7bc-77ed-4ae3-a317-440d2bfa3782_558835.jpg",
                                            "locality": "Paud Road Kothrud",
                                            "areaName": "Karve Road",
                                            "costForTwo": "₹450 for two",
                                            "cuisines": [
                                                "Healthy Food",
                                                "Salads",
                                                "Burgers"
                                            ],
                                            "avgRating": 4.4,
                                            "parentId": "335529",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "685",
                                            "sla": {
                                                "deliveryTime": 35,
                                                "lastMileTravel": 4.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "4.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-28 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "textExtendedBadges": [
                                                    {
                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                        "shortDescription": "brand",
                                                        "fontColor": "#7E808C"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "",
                                                                    "fontColor": "#7E808C",
                                                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                                                    "shortDescription": "brand"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹139"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-73094107-7b3c-43b8-b84c-01d26c8b0bf5"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/pune/hrx-by-eatfit-paud-road-kothrud-karve-road-rest558835",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "147547",
                                            "name": "Yenna Dosa",
                                            "cloudinaryImageId": "fyg9qf4t8vuzpa5fvyn8",
                                            "locality": "Bibwewadi",
                                            "areaName": "Bibwewadi",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "South Indian"
                                            ],
                                            "avgRating": 4.6,
                                            "veg": true,
                                            "parentId": "227837",
                                            "avgRatingString": "4.6",
                                            "totalRatingsString": "7.8K+",
                                            "sla": {
                                                "deliveryTime": 53,
                                                "lastMileTravel": 11,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "50-55 mins",
                                                "lastMileTravelString": "11.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-28 22:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "20% OFF",
                                                "subHeader": "UPTO ₹50"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.2",
                                                    "ratingCount": "3.2K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-73094107-7b3c-43b8-b84c-01d26c8b0bf5"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/pune/yenna-dosa-bibwewadi-rest147547",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "35790",
                                            "name": "The Belgian Waffle Co.",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/d8ebf51c-c824-48f4-abce-71cb12649b57_35790.JPG",
                                            "locality": "Bibwewadi",
                                            "areaName": "Balewadi",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Waffle",
                                                "Desserts",
                                                "Ice Cream",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.6,
                                            "veg": true,
                                            "parentId": "2233",
                                            "avgRatingString": "4.6",
                                            "totalRatingsString": "9.2K+",
                                            "sla": {
                                                "deliveryTime": 62,
                                                "lastMileTravel": 12.1,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "60-65 mins",
                                                "lastMileTravelString": "12.1 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-29 06:55:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-Desserts.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.3",
                                                    "ratingCount": "1.1K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-73094107-7b3c-43b8-b84c-01d26c8b0bf5"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/pune/the-belgian-waffle-co-bibwewadi-balewadi-rest35790",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "636810",
                                            "name": "The Flour Works",
                                            "cloudinaryImageId": "k5nzqa4ckiddvn0jmsxk",
                                            "locality": "Deron Hills",
                                            "areaName": "Baner",
                                            "costForTwo": "₹1000 for two",
                                            "cuisines": [
                                                "European",
                                                "American",
                                                "Bakery"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "208292",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "629",
                                            "sla": {
                                                "deliveryTime": 57,
                                                "lastMileTravel": 12,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "55-60 mins",
                                                "lastMileTravelString": "12.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-28 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "newg.png",
                                                        "description": "Gourmet"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Gourmet",
                                                                    "imageId": "newg.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "40% OFF",
                                                "subHeader": "UPTO ₹80"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-73094107-7b3c-43b8-b84c-01d26c8b0bf5"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/pune/the-flour-works-deron-hills-baner-rest636810",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "711213",
                                            "name": "Gourmet Ice Cream Cakes by Baskin Robbins",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/12/ea1037cb-8f82-43b0-907b-a9e883e4b805_711213.JPG",
                                            "locality": "Law College",
                                            "areaName": "Erandwane",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Ice Cream Cakes",
                                                "Desserts",
                                                "Ice Cream",
                                                "Bakery"
                                            ],
                                            "avgRating": 4.7,
                                            "veg": true,
                                            "parentId": "21932",
                                            "avgRatingString": "4.7",
                                            "totalRatingsString": "17",
                                            "sla": {
                                                "deliveryTime": 62,
                                                "lastMileTravel": 7,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "60-65 mins",
                                                "lastMileTravelString": "7.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-28 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "newg.png",
                                                        "description": "Gourmet"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Gourmet",
                                                                    "imageId": "newg.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "20% OFF",
                                                "subHeader": "UPTO ₹50"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-73094107-7b3c-43b8-b84c-01d26c8b0bf5"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/pune/gourmet-ice-cream-cakes-by-baskin-robbins-law-college-erandwane-rest711213",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "652960",
                                            "name": "BK Cafe",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/27/233eb386-a51a-4e17-a688-56caa8a5e582_652960.jpg",
                                            "locality": "Paud Road",
                                            "areaName": "Kothrud",
                                            "costForTwo": "₹350 for two",
                                            "cuisines": [
                                                "Beverages",
                                                "Cafe",
                                                "Snacks"
                                            ],
                                            "parentId": "337525",
                                            "avgRatingString": "--",
                                            "sla": {
                                                "deliveryTime": 45,
                                                "lastMileTravel": 5.7,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "40-45 mins",
                                                "lastMileTravelString": "5.7 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-29 06:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹59"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.1",
                                                    "ratingCount": "7.5K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_EXTERNAL"
                                        },
                                        "analytics": {
                                            "context": "seo-data-73094107-7b3c-43b8-b84c-01d26c8b0bf5"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/pune/bk-cafe-paud-road-kothrud-rest652960",
                                            "type": "WEBLINK"
                                        }
                                    }
                                ];


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