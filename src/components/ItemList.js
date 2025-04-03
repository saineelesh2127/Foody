import { IMG_ID } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispach = useDispatch();
  const handleadditem = (item) => {
    dispach(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 m-4 border-b-2 border-gray-200 text-left flex flex-col gap-2"
        >
          <div className="flex justify-between items-center">
            <div className="py-2 flex flex-col gap-1">
              <span className="font-semibold text-gray-700">
                {item.card.info.name}
              </span>
              <span className="text-gray-600">
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <div>
              <img
                className="w-20 h-20 object-cover rounded-lg"
                src={IMG_ID + item.card.info.imageId}
                alt="food"
              />
            </div>
          </div>
          <p className="text-xs text-gray-500 leading-tight">
            {item.card.info.description}
          </p>
          <div className="flex justify-end">
            <button
              className="p-2 bg-white shadow-md border border-gray-300 rounded-lg cursor-pointer transition duration-300 hover:bg-gray-100"
              onClick={() => handleadditem(item)}
            >
              ADD +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
