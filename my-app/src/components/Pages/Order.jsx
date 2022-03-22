import { Card } from ".."

function Order() {
    return (
        <div className="order">
            <h1>Available Restaurants</h1>
            <div className="card-container">
                <Card title="Rubio's" body="This is a test" />
                <Card title="Panda Express" body="This is a test" />
                <Card title="Chipotle" body="This is a test" />
            </div>
        </div>
    );
}

export default Order;