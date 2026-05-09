import { useEffect, useState } from "react"

export const fakeFetch = (url) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            if(url === 'https://example.com/api/users.status'){
                resolve({
                    status: 200,
                    message: "Success",
                    data:{
                        users:[
                        {name: 'Raju', status:'Online'},
                        {name: 'Pankaj', status:'Offline'},
                        {name: 'Sakshi', status:'Offline'},
                        {name: 'Kishore', status:'Offline'},
                        ]
                    }
                })
            }else{
                reject({
                    status:404,
                    message:'no users found'
                })
            }
        }, 2000)
    })
}


function Online(){
    const [user,setUser] = useState([]);
    const API = 'https://example.com/api/users.status'
    // console.log(API);
    
    useEffect(()=>{
        async function fake(){
            const data = await fakeFetch(API);
            // console.log(data);   
            const resp = data.data.users;
            // console.log(resp);
            setUser(resp);
        }
        fake();
    },[])

    return(
        <div>
            {
                user.map((item,index) => {
                    return(
                        <div key={index}>
                            <span style={{display:"flex", alignContent:"center", alignItems:"center", color: item.status === "Online" ? "green" : "red" }}><h1>{item.name}</h1> - {item.status}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Online;