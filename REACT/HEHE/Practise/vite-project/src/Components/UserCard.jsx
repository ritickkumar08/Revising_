function UserCard({name, age, role="guest"}){
    return(
        <div style={{border:"1px solid black", padding:"16px", borderRadius:"50px"}}>
            <h1>{name}</h1>
            <h2>{age}</h2>
            <h2>{role}</h2>

        </div>
    )
}

export default UserCard