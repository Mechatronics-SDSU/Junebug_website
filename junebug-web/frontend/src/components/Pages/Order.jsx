import { useEffect } from "react";
import { Card } from ".."

const menuRoute="/Junebug_website/menu";

// Do some fetch of restuarant list from backend


function Order() {
    return (
        <>
        <div className="order">
            <h1>Available Restaurants</h1>
            <div className="card-container">
                <Card title="Rubio's" body="This is a test" route={menuRoute}/>
                <Card title="Panda Express" body="This is a test" route={menuRoute}/>
                <Card title="Chipotle" body="This is a test" route={menuRoute}/>
                <Card title="Rubio's" body="This is a test" route={menuRoute}/>
                <Card title="Panda Express" body="This is a test" route={menuRoute}/>
                <Card title="Chipotle" body="This is a test" route={menuRoute}/>
                <Card title="Rubio's" body="This is a test" route={menuRoute}/>
                <Card title="Panda Express" body="This is a test" route={menuRoute}/>
                <Card title="Chipotle" body="This is a test" route={menuRoute}/>
                <Card title="Rubio's" body="This is a test" route={menuRoute}/>
                <Card title="Panda Express" body="This is a test" route={menuRoute}/>
                <Card title="Chipotle" body="This is a test" route={menuRoute}/>
            </div>
        </div>
        </>
    );
}

export default Order;