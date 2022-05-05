import robot from "../../assets/genericdeliveryrobot.jpg";
import sdsu from "../../assets/sdsumap.jpg";
import restuarants from "../../assets/Dining_OpenLocations_Final.jpg";

function Home() {
  return (
    <div className="home">
        <h1>Junebug Delivery</h1>
        <img src={robot} alt="Junebug"/>
        <br></br>
        <p>Junebug is an autonomous food delivery robot developed by the SDSU
					Mechatronics.....</p>
        <img src={sdsu} alt="SDSU Map"/>
        <h1>Available Restuarants</h1>
        <img src={restuarants} alt="Restuarants"/>
    </div>
  );
}

export default Home;