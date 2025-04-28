import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer";


const Body = () => {

    let [resList, setResList] = useState([]);
    let [searchText, setSearchText] = useState("");
    let [filteredResList, setFilteredResList] = useState([]);


    const fetchData = async () => {
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const jsonData = await data.json()

        setResList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredResList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    useEffect(() => {
        fetchData()
    }, [])

    return resList.length === 0 ? <Shimmer /> : (<>
        <div className="filter-cont">
            <div className="search-bar">
                <input className="input" type="text" placeholder="Search Foods..." value={searchText} onChange={(event) => {
                    setSearchText(event.target.value)

                }} />
                <button className="input-btn" onClick={() => {
                    const filteredResList = resList.filter((resData) => {
                        return resData.info.name.toLowerCase().includes(searchText.toLowerCase())

                    })
                    setFilteredResList(filteredResList)


                }}>Search</button>
            </div>
            <button className="filter-btn" onClick={() => {
                const filteredResList = resList.filter((resList) => resList?.info?.avgRating >= 4.3)
                setResList(filteredResList)
            }}>Filter: Top Rated Restaurant</button>
        </div>

        <div className="res-container">
            {
                filteredResList.map((restaurantData) => {

                    return (<RestaurantCard key={restaurantData?.info?.id} resData={restaurantData} />)

                })
            }
        </div></>)
}

export default Body