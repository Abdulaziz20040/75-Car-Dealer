import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoBookmarkOutline } from "react-icons/io5";
import { LiaGasPumpSolid } from "react-icons/lia";
import { MdOutlineSpeed } from "react-icons/md";
import { TbManualGearbox } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";

function SearchPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios
      .get(`http://16.171.243.1:8080/car-dealer/list/${id}`)
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.status);
      });
  }, [id]);

  return (
    <div className="container mx-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 mt-6">
          <div
            key={item.id}
            className="relative w-[300px] bg-white rounded-xl shadow-md flex flex-col"
          >
            <div className="absolute top-4 flex justify-between w-full px-4">
              <button className="bg-green-600 text-white text-sm font-medium px-2 py-1 rounded-full shadow">
                {item.attribute || "Great Price"}
              </button>
              <button className="bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center shadow">
                <IoBookmarkOutline className="text-gray-500 cursor-pointer" />
              </button>
            </div>
            <Link to={`/details/${item.announcementId}`}>
              <img
                src={item.imageUrl || "https://via.placeholder.com/300"}
                alt={`${item.brand} ${item.model}`}
                className="w-full h-40 object-cover rounded-t-xl mb-4"
              />
            </Link>

            <div className="px-5 pb-5">
              <h2 className="text-lg font-semibold mb-1 line-clamp-1">
                {`${item.brand} ${item.model}`}
              </h2>
              <p className="text-gray-600 mb-2 line-clamp-1">
                {new Date(item.date)
                  .toLocaleString("uz-UZ", {
                    day: "numeric",
                    month: "long",
                  })
                  .replace(/\s/g, " -")}
              </p>

              <hr className="my-2" />

              <div className="flex justify-between text-sm text-gray-700 mb-2">
                <button className="flex flex-col items-center justify-center">
                  <MdOutlineSpeed className="text-xl" />
                  <span>{item.millage || "N/A"} Miles</span>
                </button>
                <button className="flex flex-col items-center justify-center">
                  <LiaGasPumpSolid className="text-xl" />
                  <span>{item.fuel || "N/A"}</span>
                </button>
                <button className="flex flex-col items-center justify-center">
                  <TbManualGearbox className="text-xl" />
                  <span className="line-clamp-1">
                    {item.transmission || "N/A"}
                  </span>
                </button>
              </div>

              <hr className="my-2" />

              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-semibold">
                  ${item.price || "0.00"}
                </span>
                <Link to={`/details/${item.announcementId}`}>
                  <button className="text-blue-500 flex items-center gap-1 hover:underline">
                    View Details
                    <GoArrowUpRight className="text-xl" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
