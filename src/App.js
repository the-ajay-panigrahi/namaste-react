import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RestaurantCard from "./components/RestaurantCard";
import restaurantData from "./utils/mockData";




const AppLayout = () => {
    let [resList, setResList] = useState(restaurantData);



    function filterTopRatedRestaurants() {
        const filteredResList = restaurantData.filter((resList) => resList.info.avgRating >= 4.3)
        setResList(filteredResList)
    }

    return (
        <>
            <Header />

            <div className="filter-btn-cont">
                <button className="filter-btn" onClick={filterTopRatedRestaurants}>Filter: Top Rated Restaurant</button>
            </div>

            <div className="res-container">
                {
                    resList.map((restaurantData) => {

                        return (<RestaurantCard key={restaurantData.info.id} resData={restaurantData} />)

                    })
                }
            </div>
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)