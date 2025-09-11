import ItemList from "./ItemList";

const ResCategory = ({ data, showItem, setShowIndex }) => {
  //   console.log(data);

  const handleToggle = () => {
    setShowIndex();
  };

  return (
    <div className="">
      <div className="bg-gray-50 shadow-lg w-2xl mx-20 p-3 my-4 ">
        <div className="flex justify-between">
          <span
            className="font-bold text-lg cursor-pointer"
            onClick={handleToggle}
          >
            {data.title} ({data.itemCards.length})
          </span>
          <span>↓</span>
        </div>

        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default ResCategory;
