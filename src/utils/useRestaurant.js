import { useEffect, useState } from "react";
import { menuApiUrl } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetechData()
    }, []);

    const fetechData = async () => {
        const data = await fetch(menuApiUrl + resId)
        const jsonData = await data.json()
        setResInfo(jsonData.data)
    }

    return resInfo
}

export default useRestaurantMenu