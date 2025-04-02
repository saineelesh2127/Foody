import { IMG_ID } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:bg-gray-100">
      <img
        className="w-full h-40 object-cover rounded-md"
        alt="Restaurant"
        src={IMG_ID + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg text-gray-800">{name}</h3>
      <h4 className="text-gray-600 text-sm">{cuisines.join(", ")}</h4>
      <div className="flex items-center justify-between mt-2">
        <h4 className="text-green-600 font-semibold">{avgRating} ⭐</h4>
        <h4 className="text-gray-700">{costForTwo}</h4>
      </div>
      <h4 className="text-gray-500 text-sm mt-1">{sla?.slaString}</h4>
    </div>
  );
};

export const promotedRestaurat = () => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
