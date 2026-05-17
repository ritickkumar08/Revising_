import axios from "axios"
import { useEffect, useState } from "react"
import { data, useParams } from "react-router-dom"

function RestaurantDetails(){
    let {id} = useParams()
    const [reataurantItem, setRestaurantItem] = useState([])
    
    useEffect(()=>{
        async function calling(){
            const API = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.80060&lng=86.18710&restaurantId=${id}&submitAction=ENTER`
            const resp = await axios.get(API)
            console.log(resp.data.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
            
            setRestaurantItem(resp.data.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
        }
        calling();
    },[id])


    return(
        <div>
            <h1>List of items</h1>
            {
                reataurantItem.map((item)=>{
                    return(
                        <div className="border-2 w-3xl mx-auto mb-2 flex justify-around items-center">
                            <div>
                                <h1>{item.card.info.name}</h1>
                                <h4>{item.card.info.defaultPrice / 100}</h4>
                                <h4>{item.card.info.category}</h4>
                                {/* <p>{item.card.info.}</p> */} 
                            </div>
                            <div>
                                <img className="w-36 " src="https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=" alt="" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RestaurantDetails