import { useEffect, useState } from "react"
import ApiCalling from "./ApiCalling"
import RestaurantCard from "./RestaurantCard"
import Search from "./Search";

function Body(){
    const restaurantData = ApiCalling()

    const[showRest, setShowRest] = useState([]);

    useEffect(()=>{
        if(restaurantData && restaurantData.length){
            setShowRest(restaurantData);
        }
    },[restaurantData])
    console.log(showRest);
    

    function handleFilter(){
        const filtered = restaurantData.filter((item)=>(item.info.avgRating >= 4.2))
        setShowRest(filtered)
    }

    function handleReset(){
        setShowRest(restaurantData)
    }

    return(
        <div>
            <h1 className="font-black">Restaurants with online food delivery in Jamshedpur</h1>
            <button onClick={handleFilter} className="border-2 m-2 px-6 py-2 rounded-2xl">Rating 4.2</button>
            <button onClick={handleReset} className="border-2 m-2 px-6 py-2 rounded-2xl">reset</button>
            <Search restaurantData={restaurantData} setShowRest={setShowRest}/>
            <div className="flex flex-wrap w-10/12 m-auto gap-20">
                <RestaurantCard restaurantData={showRest}/>
            </div>
        </div>
    )
}

export default Body