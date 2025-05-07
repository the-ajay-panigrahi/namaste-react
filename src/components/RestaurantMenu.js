import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurant";

const RestaurantMenu = () => {

    const { resId } = useParams()

    const resInfo  = useRestaurantMenu(resId)

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