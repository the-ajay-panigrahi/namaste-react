import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { menuApiUrl } from "../utils/constants";
import { useParams } from "react-router";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams()


    useEffect(() => {
        fetechData()
    }, []);

    const fetechData = async () => {
        const data = await fetch(menuApiUrl + resId)
        const jsonData = await data.json()
        // console.log(jsonData);
        // console.log(jsonData.data.cards[2].card.card.info);
        // console.log(jsonData.data.cards[2].card.card.info.name);
        // console.log(jsonData.data.cards[2].card.card.info.avgRatingString);
        // console.log(jsonData.data.cards[2].card.card.info.costForTwoMessage);
        // console.log(jsonData.data.cards[2].card.card.info.cuisines);
        // console.log(jsonData.data.cards[2].card.card.info.locality);
        // console.log(jsonData.data.cards[2].card.card.info.city);
        // console.log(jsonData.data.cards[2].card.card.info.sla.restaurantId);

        setResInfo(jsonData.data)

        console.log(jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.name);
        console.log(jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info);

    }



    if (resInfo === null) {
        return <Shimmer />
    }

    const { name, avgRatingString, costForTwoMessage, cuisines, locality, city } = resInfo?.cards[2]?.card?.card?.info

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    return (<>
        <h1>{name}</h1>
        <h2>{avgRatingString} - {costForTwoMessage}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <p>{locality} - {city}</p>
        <p>Recommendations</p>
        <ul>
            {

                itemCards.map((item) => {
                    return (<li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>)
                })
            }
        </ul>
    </>)
}

export default RestaurantMenu