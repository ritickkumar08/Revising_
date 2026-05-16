function Search({restaurantData, setShowRest}){

    function handleSearch(searchedText){
        setShowRest(restaurantData.info.name.toLowerCase().includes(searchedText.toLowerCase()))
    }


    return(
        <div className="w-3xl mx-auto my-3.5 h-12">
            <input onChange={(e)=>handleSearch(e)} className="border-white w-xl h-12 rounded-2xl shadow-black shadow-sm px-4"  type="text" />
            <button className="border-orange px-3 h-12 rounded-2xl bg-orange-500 text-white ml-3 shadow-black shadow-sm">SEARCH</button>
        </div>
    )
}

export default Search