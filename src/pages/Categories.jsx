import React from "react";

const categoryItems = [
  {
    id: 1,
    title: "Main Dish",
    description: "86 dishes",
    Image: "images/home/category/img1.png",
  },
  {
    id: 2,
    title: "Break Fast",
    description: "12 break fast",
    Image: "images/home/category/img2.png",
  },
  {
    id: 1,
    title: "Dessert",
    description: "48 dessert",
    Image: "images/home/category/img3.png",
  },
  {
    id: 1,
    title: "Browse All",
    description: "255 Items",
    Image: "images/home/category/img4.png",
  },
];

const Categories = () => {
  return (
    <div className="section-container ">
      <div className="text-center ">
        <p className="subtitle">Customer Favorites</p>
        <h2 className="title">Popular Catagories</h2>
      </div>

      {/* categories cards */}

      {/* <div className="flex flex-row sm:flex-wrap gap-8 justify-around items-center mt-12">
        {categoryItems.map((item, i) => (
          <div
            key={i}
            className="shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:translate-y-3 duration-300 transition-all "
          >
            <div className="flex w-full mx-auto items-center justify-center">
              <img
                src={item.Image}
                alt="image"
                className="bg-[#C1F1C6] p-5 rounded-full w-28 h-28 "
              />
            </div>
            <div className=" mt-5 space-y-1">
              <h5 className="font-bold">{item.title}</h5>
              <p className="text-secondary">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
        */}
      <div className="flex flex-row flex-wrap gap-4 sm:gap-6 md:gap-8 justify-around items-center mt-6 md:mt-12 py-14">
        {categoryItems.map((item, i) => (
          <div
            key={i}
            className="shadow-lg rounded-md bg-white py-4 sm:py-6 px-3 sm:px-5 w-full sm:w-72 md:w-60 lg:w-72 mx-auto text-center cursor-pointer hover:translate-y-3 duration-300 transition-all"
          >
            <div className="flex w-full mx-auto items-center justify-center">
              <img
                src={item.Image}
                alt="image"
                className="bg-[#C1F1C6] p-4 sm:p-5 rounded-full w-24 sm:w-28 h-24 sm:h-28"
              />
            </div>
            <div className="mt-3 sm:mt-5 space-y-1">
              <h5 className="font-bold">{item.title}</h5>
              <p className="text-secondary">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
