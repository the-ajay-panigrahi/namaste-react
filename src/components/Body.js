import { useEffect, useState } from "react";
import RestaurantCard, { promotedRestaurant } from "./RestaurantCard"
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {

    let [resList, setResList] = useState([]);
    let [searchText, setSearchText] = useState("");
    let [filteredResList, setFilteredResList] = useState([]);

    const onlineStatus = useOnlineStatus()

    const RestaurantPromoted = promotedRestaurant(RestaurantCard)


    const fetchData = async () => {
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.77985670251919&lng=83.36289939773746&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const jsonData = await data.json()


        setResList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredResList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

        // console.log(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(resList.length);



    if (onlineStatus === false) {
        return <h1>You are currently offline, please check your internet connection!</h1>
    }

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

                    return (<Link to={"/restaurants/" + restaurantData?.info?.id} key={restaurantData?.info?.id} >{restaurantData?.info?.promoted ? <RestaurantPromoted resData={restaurantData} /> : <RestaurantCard resData={restaurantData} />}</Link>)

                })
            }
        </div></>)
}

export default Body