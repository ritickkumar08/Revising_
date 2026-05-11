import { useEffect, useState } from "react"

function Joke(){
    const[joke, setJoke] = useState(null);
    const[loading, setLoading] = useState(true);
    const API = 'https://official-joke-api.appspot.com/random_joke'

    useEffect(()=>{
        async function jokeFetch(){
           try {
                const data = await fetch(API)
                const resp = await data.json()
                // console.log(resp);
                setJoke(resp)
           } catch (err) {
                console.log("error",err);    
           }finally{
                setLoading(false)
           }
        }
        jokeFetch()
    },[])

    if(loading) return <p>Loading Joke...</p>
    return(
        <div>
            <p>Setup : <strong>{joke.setup}</strong></p>
            <p>PunchLine : <strong>{joke.punchline}</strong></p>
        </div>
    )
}

export default Joke