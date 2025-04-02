import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-6/12 mx-auto my-4">
      <div className="bg-gray-50 shadow-lg p-4 rounded-lg">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span
            className={`transition-transform duration-300 ${
              showItems ? "rotate-180" : ""
            }`}
          >
            ⬇️
          </span>
        </div>

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
