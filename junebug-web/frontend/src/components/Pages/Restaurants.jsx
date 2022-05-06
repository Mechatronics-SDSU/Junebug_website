import { useEffect, useState} from "react";
import { RestCard } from ".."

const menuRoute = "/Junebug_website/menu/";

function Restaurants() {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetch("/restaurants/all/").then(response =>
            response.json().then(data => {
                setRestaurants(data.restaurants);
            })
        );
    }, [])

    return (
        <div className="restaurants">
            <h1>Available Restaurants</h1>
            <div className="card-container">
                {restaurants.map(restaurant => {
                    return (
                        <RestCard
                            key={restaurant.id}
                            object={restaurant}
                            route={menuRoute + restaurant.restID}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Restaurants;