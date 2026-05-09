function EmploeeCard({naam,designation,experience}){
    return(
        <div>
        <h1 style={{color:"green"}}>{naam}</h1>
        <h1>{designation}</h1>
        <h1 style={{color:"pink"}}>{experience}</h1>
        </div>
    ) 
}

export default EmploeeCard