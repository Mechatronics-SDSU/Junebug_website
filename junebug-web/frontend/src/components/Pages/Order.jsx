import { useEffect, useState} from "react";
import { Card } from ".."

const menuRoute = "/Junebug_website/menu";

// TODO: Menu route parameter based on resturant id

function Order() {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetch("/restaurants/all/").then(response =>
            response.json().then(data => {
                setRestaurants(data.restaurants);
            })
        );
    }, [])

    return (
        <div className="order">
            <h1>Available Restaurants</h1>
            <div className="card-container">
                {restaurants.map(restaurant => {
                    return (
                        <Card
                            title={restaurant.name}
                            body={restaurant.cuisine}
                            route={menuRoute + "/" + restaurant.restID}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Order;