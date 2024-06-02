import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import React, { useState } from "react";

const Cards = ({ item }) => {
  const [isHeartFillted, setIsHeartFillted] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFillted(!isHeartFillted);
  };

  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    }
    return description.slice(0, maxLength) + "...";
  };

  return (
    <div className="py-14">
      <div className="card w-96 shadow-xl  rounded-b-lg bg-white relative">
        <div
          className={`rating gap-1 absolute right-2 top-2 p-4 heartStar ${
            isHeartFillted
              ? "text-rose-500  border-rose-500"
              : "text-secondary border border-transparent"
          }`}
          onClick={handleHeartClick}
        >
          <FaHeart className="h-8 w-8 cursor-pointer" />
        </div>
        <Link to={`/menu/${item._id}`}>
          <figure>
            <img
              className="bg-white w-40 object-contain hover:scale-105 transition-all duration-200 md:h-72"
              src={item.image}
              alt="Special Dishes"
            />
          </figure>
        </Link>
        <div className="card-body bg-white rounded-b-lg">
          <h2 className="card-title">{item.name}</h2>
          <p>{truncateDescription(item.recipe, 50)}</p>
          <div className="card-actions flex justify-between items-center">
            <h5 className="font-semibold">
              <span className="text-sm text-red">$</span>
              {item.price}
            </h5>
            <button className="btn border-none bg-green text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
