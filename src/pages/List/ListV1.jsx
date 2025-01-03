import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoArrowUpRight } from "react-icons/go";
import { IoBookmarkOutline } from "react-icons/io5";
import { MdOutlineSpeed } from "react-icons/md";

import { Pagination, Select } from "antd";

const { Option } = Select;

function ListV1() {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(12);

  useEffect(() => {
    axios
      .get("https://df2174b8e5e5a31d.mokky.dev/MEGA_news")
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSortChange = (value) => {
    console.log("Selected sort option:", value);
    // logic edni yoziladi
  };

  const indexOfLastCard = currentPage * pageSize;
  const indexOfFirstCard = indexOfLastCard - pageSize;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-semibold">ListV1</h1>

      {/* ListV1 cards */}
      <div className="flex items-center justify-between">
        <p>
          Showing {indexOfFirstCard + 1} –{" "}
          {Math.min(indexOfLastCard, cards.length)} of {cards.length} results
        </p>
        <div className="flex items-center gap-4">
          <span>Sort by:</span>
          <Select
            defaultValue="Default"
            style={{ width: 120 }}
            onChange={handleSortChange}
          >
            <Option value="Default">Default</Option>
            <Option value="PriceLowHigh">Price: Low to High</Option>
            <Option value="PriceHighLow">Price: High to Low</Option>
          </Select>
        </div>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {currentCards.map((card, index) => (
          <div
            key={index}
            className="relative w-[300px] bg-white rounded-xl shadow-md flex flex-col"
          >
            {/* Bookmark Icon and Great Price */}
            <div className="absolute top-4 flex justify-between w-full px-4">
              <button className="bg-green-600 text-white text-sm font-medium px-2 py-1 rounded-full shadow">
                {card.badge || "Great Price"}
              </button>
              <button className="bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center shadow">
                <IoBookmarkOutline className="text-gray-500 cursor-pointer" />
              </button>
            </div>

            {/* Image */}
            <img
              src={card.img || "https://via.placeholder.com/300"}
              alt={card.title || "Product Image"}
              className="w-full h-40 object-cover rounded-t-xl mb-4"
            />

            {/* Product Info */}
            <div className="px-5 pb-5">
              <h2 className="text-lg font-semibold mb-1 line-clamp-1">
                {card.title || "Product Name"}
              </h2>
              <p className="text-gray-600 mb-2 line-clamp-1">
                {card.desc || "Product Description"}
              </p>

              {/* Horizontal Line */}
              <hr className="my-2" />

              {/* Details */}
              <div className="flex justify-between text-sm text-gray-700 mb-2">
                <button className="flex flex-col items-center justify-center">
                  <MdOutlineSpeed className="text-xl" />
                  <span className="text-sm">{card.miles || "20 Miles"}</span>
                </button>
                <button className="flex flex-col items-center justify-center">
                  <MdOutlineSpeed className="text-xl" />
                  <span>{card.fuel || "Petrol"}</span>
                </button>
                <button className="flex flex-col items-center justify-center">
                  <span>{card.transmission || "Automatic"}</span>
                </button>
              </div>

              {/* Horizontal Line */}
              <hr className="my-2" />

              {/* Price and View Details */}
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-semibold">
                  ${card.price || "999.99"}
                </span>
                <button className="text-blue-500 flex items-center gap-1 hover:underline">
                  View Details
                  <GoArrowUpRight className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={cards.length}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default ListV1;
