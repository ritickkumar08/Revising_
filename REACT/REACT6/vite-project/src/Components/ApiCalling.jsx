import { useEffect } from "react"
import { useState } from "react"
import axios from 'axios'

function ApiCalling(){
    const[todos, setTodos] = useState([])
    const API = "https://jsonplaceholder.typicode.com/todos"

    // useEffect(()=>{
    //     fetch(API)
    //     .then((data)=>{return data.json()})
    //     .then((resp)=>{setTodos(resp)})
    //     .catch((err)=>{console.log(err)})
    // },[])

    // useEffect(()=>{
    //     async function apiCall(){
    //         const data = await fetch(API)
    //         const resp = await data.json();
    //         setTodos(resp)
    //     }
    //     apiCall()
    // },[])

    // useEffect(()=>{
    //     async function apiCall(){
    //         const resp = await axios.get(API)
    //         setTodos(resp.data)
    //     }
    //     apiCall()
    // },[])

    useEffect(()=>{
        axios.get(API)
        .then((resp) => setTodos(resp.data))
        .catch((err) =>{console.log(err)})
    },[])



    return(
        <div>
            <h1>API calling</h1>
            {
                todos.map((item)=>{
                    return(
                        <div>
                            <h1>{item.title}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ApiCalling