import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoArrowUpRight } from "react-icons/go";
import { IoBookmarkOutline } from "react-icons/io5";
import { MdOutlineSpeed } from "react-icons/md";
import { LiaGasPumpSolid } from "react-icons/lia";
import { Pagination, Select } from "antd";
import { Link } from "react-router-dom";
import { TbManualGearbox } from "react-icons/tb";

const { Option } = Select;

function ListV1() {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(12);

  useEffect(() => {
    axios
      .get("http://16.171.243.1:8080/car-dealer/list")
      .then((response) => {
        setCards(response.data);
        console.log("usecar", response.data); // Konsolda ma’lumotni tekshiring
      })
      .catch((error) => {
        console.error("Error fetching data:", error.status);
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
  // const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold">ListV1</h1>
      {/* 
      {cards.length === 0 ? (
        <p>Loading or no data available...</p>
      ) : ( */}
      <>
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
        <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14">
          {cards.data &&
            cards.data.Announcement.map((card) => (
              <div
                key={card.id}
                className="relative w-[300px] bg-white rounded-xl shadow-md flex flex-col"
              >
                <div className="absolute flex justify-between w-full px-4 top-4">
                  <button className="px-2 py-1 text-sm font-medium text-white bg-green-600 rounded-full shadow">
                    {card.attribute || "Great Price"}
                  </button>
                  <button className="bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center shadow">
                    <IoBookmarkOutline className="text-gray-500 cursor-pointer" />
                  </button>
                </div>
                <Link to={`/details/${card.announcementId}`}>
                  <img
                    src={card.imageUrl || "https://via.placeholder.com/300"}
                    alt={`${card.brand} ${card.model}`}
                    className="object-cover w-full h-40 mb-4 rounded-t-xl"
                  />
                </Link>

                <div className="px-5 pb-5">
                  <h2 className="mb-1 text-lg font-semibold line-clamp-1">
                    {`${card.brand} ${card.model}`}
                  </h2>
                  <p className="mb-2 text-gray-600 line-clamp-1">
                    {new Date(card.date)
                      .toLocaleString("uz-UZ", {
                        day: "numeric",
                        month: "long",
                      })
                      .replace(/\s/g, " -")}
                  </p>

                  <hr className="my-2" />

                  <div className="flex justify-between mb-2 text-sm text-gray-700">
                    <button className="flex flex-col items-center justify-center">
                      <MdOutlineSpeed className="text-xl" />
                      <span>{card.millage || "N/A"} Miles</span>
                    </button>
                    <button className="flex flex-col items-center justify-center">
                      <LiaGasPumpSolid className="text-xl" />
                      <span>{card.fuel || "N/A"}</span>
                    </button>
                    <button className="flex flex-col items-center justify-center">
                      <TbManualGearbox className="text-xl" />
                      <span className="line-clamp-1">
                        {card.transmission || "N/A"}
                      </span>
                    </button>
                  </div>

                  <hr className="my-2" />

                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">
                      ${card.price || "0.00"}
                    </span>
                    <Link to={`/details/${card.announcementId}`}>
                      <button className="flex items-center gap-1 text-blue-500 hover:underline">
                        View Details
                        <GoArrowUpRight className="text-xl" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={cards.length}
            onChange={handlePageChange}
          />
        </div>
      </>
      {/* )} */}
    </div>
  );
}

export default ListV1;
// listV1