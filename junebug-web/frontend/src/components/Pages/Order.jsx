import { useEffect, useState } from "react";
import { Card } from ".."

const menuRoute="/Junebug_website/menu";

// Do some fetch of restuarant list from backend


function Order() {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetch("/resty/").then(response => 
          response.json().then(data => {
                setRestaurants(data.restaurants);
                console.log(data.restaurants);
          })
        );
      }, [])

    return (
        <div className="order">
            <h1>Available Restaurants</h1>
            <div className="card-container">
                {restaurants.map(restaurant => {
                    return (
                    <Card title={restaurant.name} body="This is a test" route={menuRoute}/>
                    );
                })}
            </div>
        </div>
    );
}

export default Order;