import { imgLink } from "../utils/constants"

const RestaurantCard = ({ resData }) => {

    const { info } = resData
    const { name, cloudinaryImageId, avgRating, costForTwo, cuisines, locality } = info

    return (
        <>
            <div className="res-card">
                <div className="logo">
                    <img src={imgLink + cloudinaryImageId} alt="img" />
                </div>
                <div className="content">
                    <div className="name">{name}</div>
                    <div className="avg-cost"><span>{avgRating}</span><span>{costForTwo}</span></div>
                    <div className="cuisines">{cuisines.join(", ")}</div>
                    <div className="locality">{locality}</div>
                </div>
            </div>

        </>
    )
}

export const promotedRestaurant = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <p>Promoted</p>
                <RestaurantCard {...props} />
            </div>
        )
    }
}


export default RestaurantCard