import { useEffect, useState } from "react"
import axios from 'axios'

function ApiCalling(){
    const [allRest, setAllRest] = useState([])

    useEffect(()=>{
        const API = "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=22.80060&lng=86.18710&carousel=true&third_party_vendor=1"
        async function Calling(){
            const resp = await axios.get(API)
            // console.log(resp.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
            setAllRest(resp.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        }
        Calling()
    },[])

    return allRest
}
export default ApiCalling