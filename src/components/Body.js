import RestaurentCard from "./RestaurentCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContex";
const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { loggedInUser, setName } = useContext(UserContext);
  // const promoted = promotedRestaurat();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4818519&lng=78.55720319999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const OnlineStatus = useOnlineStatus();
  if (OnlineStatus === false)
    return (
      <div class="offline-message">
        You are offline. Please check your connection.
      </div>
    );

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="container mx-auto p-6">
      {/* Search & Filter Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6 p-6 bg-white rounded-lg shadow-lg">
        <input
          type="text"
          className="border border-gray-400 px-4 py-2 rounded-lg w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          placeholder="Search for restaurants"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300 ease-in-out shadow"
          onClick={() => {
            const filtered = restaurantList.filter((res) =>
              res.info.name.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredData(filtered);
          }}
        >
          Search
        </button>
        <button
          className="px-6 py-2 bg-gray-400 text-white font-semibold rounded-lg hover:bg-gray-500 transition duration-300 ease-in-out shadow"
          onClick={() => {
            const filtered = restaurantList.filter(
              (res) => res.info.avgRating >= 4.2
            );
            setFilteredData(filtered);
          }}
        >
          Top Rated Restaurants
        </button>

        {/* Small Username Input Box */}
        <div className="flex items-center gap-2 border border-gray-400 px-3 py-2 rounded-lg">
          <label className="text-gray-700 font-medium">User:</label>
          <input
            className="w-28 p-1 text-sm border-none focus:outline-none focus:ring-0"
            value={loggedInUser}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </div>
      </div>

      {/* Restaurant Cards Grid */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredData.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <promoted resData={restaurant} />
            ) : (
              <RestaurentCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
