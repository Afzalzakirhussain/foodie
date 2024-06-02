import React from "react";

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#d9edec] from-0% to-[#d9edec] to-100% ">
      <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        {/*its a Banner image div*/}

        <div className="md:w-1/2">
          <img src="/images/home/banner.png" alt="image" />

          {/*its a rating sub containers div*/}

          <div className="flex gap-4">
            {/*its a rating sub container 1 div*/}

            <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4  ">
              <div className="flex bg-white py-2 px-3 rounded-2xl items-center gap3 shadow-md w-64 ">
                <img
                  className="rounded-2xl"
                  src="/public/images/home/b-food1.png"
                />
                <div className="space-y-1 px-1">
                  <p className="text-black font-medium mb-1">Spicy Noodles</p>

                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-yellow-500"
                      readOnly
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-yellow-500"
                      checked
                      readOnly
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-yellow-500"
                      readOnly
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-yellow-500"
                      readOnly
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-yellow-500"
                      readOnly
                    />
                  </div>
                  <p className="text-red">$18.00</p>
                </div>
              </div>
            </div>

            {/*its a rating sub container 2 div*/}

            <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4 ">
              <div className="sm:flex hidden bg-white  py-2 px-3 rounded-2xl items-center gap3 shadow-md w-64">
                <img
                  className="rounded-2xl"
                  src="/public/images/home/b-food1.png"
                />
                <div className="space-y-1 px-1">
                  <p className="text-black font-medium mb-1">Spicy Noodles</p>

                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-yellow-500"
                      readOnly
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-yellow-500"
                      checked
                      readOnly
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-yellow-500"
                      readOnly
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-yellow-500"
                      readOnly
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-yellow-500"
                      readOnly
                    />
                  </div>
                  <p className="text-red">$18.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*its a text div*/}
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug text-black">
            Taste the World, Delivered to Your{" "}
            <span className="text-red">Door</span>
          </h2>
          <p className="text-xl text-[#4A4A4A]">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>
          <div className="flex mt-4">
            <button className="bg-red px-8 py-2 font-semibold text-white rounded-full border-none hover:bg-white hover:text-black ">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
