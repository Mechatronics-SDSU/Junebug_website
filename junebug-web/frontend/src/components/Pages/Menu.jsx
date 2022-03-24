import { Card } from "..";

function Menu() {
    return(
        <div className="menu">
            <h1>Menu</h1>
            <div className="card-container">
                <Card title="Burrito" body="Bean and Cheese"/>
                <Card title="Salad" body="Mango Avocado"/>
                <Card title="Taco" body="Mahi Mahi Fish Taco"/>
            </div>
        </div>
    );
}

export default Menu;