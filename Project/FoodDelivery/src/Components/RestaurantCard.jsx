import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";

function RestaurantCard({restaurantData}){
 

    return(
        restaurantData.map((restaurant)=>{
            return(
                <Link to={`/restaurant/${restaurant.info.id}`}>
                    <div className="border-2 rounded-2xl">
                        <img className="h-40 w-60 rounded-2xl" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`} alt="" />
                        <h1 className="font-black">{restaurant.info.name}</h1>
                        <div className="flex"><span className="flex"><FcRating color="green"/>{restaurant.info.avgRating}</span>*<span>{restaurant.info.sla.slaString}</span></div>
                        <p>{restaurant.info.cuisines[0]}</p>
                        <p>{restaurant.info.locality}</p>
                    </div>
                </Link>
            )
        })
    )
}

export default RestaurantCard;