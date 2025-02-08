import React, { useEffect, useState } from "react";
import "./home.css";
import audi from "./imgs/audi.jpeg";
import bmw from "./imgs/bmw.jpeg";
import ford from "./imgs/ford.jpeg";
import lion from "./imgs/lion.jpeg";
import merc from "./imgs/merc.jpeg";
import wW from "./imgs/wW.jpeg";
import cars2 from "./cars2.jpeg";
// icons
import icon1 from "./icons/Group.png";
import icon2 from "./icons/f2.svg.png";
import icon3 from "./icons/f3.svg.png";
import icon4 from "./icons/f4.svg.png";
// icons
import { FaCheck } from "react-icons/fa6";
import HomePage3 from "../Home/HomePage3";
import axios from "axios";
import { Pagination, Select } from "antd";
import { IoBookmarkOutline } from "react-icons/io5";
import { MdOutlineSpeed } from "react-icons/md";
import { LiaGasPumpSolid } from "react-icons/lia";
import { TbManualGearbox } from "react-icons/tb";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import HomePage4 from "./HomePage4";

function HomePage() {
  const [preBrand, setPreBrand] = useState([
    {
      id: 1,
      name: "Audi",
      imgs: audi,
    },
    {
      id: 2,
      name: "BMW",
      imgs: bmw,
    },
    {
      id: 3,
      name: "Ford",
      imgs: ford,
    },
    {
      id: 4,
      name: "Mercedes Benz",
      imgs: merc,
    },
    {
      id: 5,
      name: "Peugeot",
      imgs: lion,
    },
    {
      id: 6,
      name: "Volkswagen",
      imgs: wW,
    },
  ]);
  const [icons, setIcons] = useState([
    {
      id: 1,
      icon: icon1,
      titles: "Special Financing Offers",
      desc: "Our stress-free finance department that can find financial solutions to save you money.",
    },
    {
      id: 2,
      icon: icon2,
      titles: "Trusted Car Dealership",
      desc: "Our stress-free finance department that can find financial solutions to save you money.",
    },
    {
      id: 3,
      icon: icon3,
      titles: "Transparent Pricing",
      desc: "Our stress-free finance department that can find financial solutions to save you money.",
    },
    {
      id: 4,
      icon: icon4,
      titles: "Expert Car Service",
      desc: "Our stress-free finance department that can find financial solutions to save you money.",
    },
  ]);
  const [apiResponse, setApiResponse] = useState(null);
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(12);
  const [searchModel, setSearchModel] = useState("");
  // /////////////
  const [getBrand, setGetBrand] = useState([]);
  const [getModel, setGetModel] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [searchPr, setSearchPr] = useState("");

  const handleSearch = () => {
    const obj = {
      getBrand,
      selectedBrand,
    };
    axios
      .post("http://16.171.243.1:8080/car-dealer/list/filter")
      .then((response) => {
        setCards(response.data);
        console.log("usecar", response.data); // Konsolda ma’lumotni tekshiring
      })
      .catch((error) => {
        console.error("Error fetching data:", error.status);
      });
  };
  // http://16.171.243.1:8080/car-dealer/brand/getAllBrands

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSortChange = (value) => {
    console.log("Selected sort option:", value);
    // logic edni yoziladi
  };

  useEffect(() => {
    axios
      .get("http://16.171.243.1:8080/car-dealer/brand/getAllBrands")
      .then((res) => {
        setGetBrand(res.data.data || []);
      })
      .catch((err) => console.error("Brandlarni olishda xato:", err));
  }, []);

  useEffect(() => {
    if (selectedBrand) {
      axios
        .get(
          `http://16.171.243.1:8080/car-dealer/model/getAllModels/${selectedBrand}`
        )
        .then((res) => {
          setGetModel(res.data.data || []);
        })
        .catch((err) => console.error("Modellarni olishda xato:", err));
    }
  }, [selectedBrand]);

  const indexOfLastCard = currentPage * pageSize;
  const indexOfFirstCard = indexOfLastCard - pageSize;
  // const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <>
      <div className="bgImg">
        <div className="text-center text-white relative top-28 font">
          <p className="font-medium">
            Find cars for sale and for rent near you
          </p>
          <h1 className="text-[52px] mt-3">Find Your Perfect Car</h1>
          <form className="flex justify-center items-center my-8">
            <div className="bg-white w-[55%] h-[74px] p-10 rounded-[40px] flex justify-between items-center">
              <select
                className="w-[17%] overflow-y-auto outline-none text-[14px] text-gray-600 p-2 rounded-lg bg-white"
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                <option className="text-gray-200" value="Any Makes">
                  Any Makes
                </option>
                {getBrand.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
              {/* Any Model */}
              <select
                className="w-[17%] outline-none text-[14px] text-gray-600 p-2 rounded-lg bg-white"
                onChange={(e) => setSearchModel(e.target.value)}
              >
                <option className="text-gray-200" value="Any Model">
                  Any Model
                </option>
                {getModel.length > 0 ? (
                  getModel.map((model) => (
                    <option key={model.id} value={model.id}>
                      {model.name}
                    </option>
                  ))
                ) : (
                  <option disabled>Hech qanday model topilmadi</option>
                )}
              </select>
              {/* Price  */}
              <div>
                <div>
                  <label htmlFor="price" className="text-black text-[14px]">
                    Price:
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setSearchPr(e.target.value)}
                    id="price"
                    className="text-black w-[100px] bg-white outline-none p-2 placeholder:text-[14px] placeholder:text-black ms-2"
                    placeholder="All Prices"
                  />
                </div>
              </div>
              {/* Search Cars */}
              <Link to={`/listing/${getBrand.id}`}>
                <div>
                  <button className="bg-[#405FF2] text-[14px] w-[110%] p-3 rounded-3xl">
                    Search Cars
                  </button>
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-[#F9FBFC] pr-20 pb-28 ps-20">
        <div className="container mx-auto">
          <div className="text-start pt-20">
            <h2 className="text-[35px] font-medium">
              Explore Our Premium Brands
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 md:mx-auto lg:grid-cols-6 gap-10">
            {preBrand.map((item) => (
              <div
                className="text-center mb-4 mt-11 flex justify-center items-center border-[1.5px] bg-white lg:w-[200px] w-full h-[250px] rounded-lg lg:h-[150px]"
                key={item.id}
              >
                <div>
                  <div className="flex justify-center">
                    <img
                      src={item.imgs}
                      alt={item.name}
                      className="w-[75px] h-[75px]"
                    />
                  </div>
                  <h3>{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Cards */}
      <div className="container mx-auto mt-24 mb-28">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 mt-6">
          {cards.data &&
            cards.data.Announcement.map((card) => (
              <div
                key={card.id}
                className="relative w-[300px] bg-white rounded-xl shadow-md flex flex-col"
              >
                <div className="absolute top-4 flex justify-between w-full px-4">
                  <button className="bg-green-600 text-white text-sm font-medium px-2 py-1 rounded-full shadow">
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
                    className="w-full h-40 object-cover rounded-t-xl mb-4"
                  />
                </Link>

                <div className="px-5 pb-5">
                  <h2 className="text-lg font-semibold mb-1 line-clamp-1">
                    {`${card.brand} ${card.model}`}
                  </h2>
                  <p className="text-gray-600 mb-2 line-clamp-1">
                    {new Date(card.date)
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

                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">
                      ${card.price || "0.00"}
                    </span>
                    <Link to={`/details/${card.announcementId}`}>
                      <button className="text-blue-500 flex items-center gap-1 hover:underline">
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
        <div className="mt-6 flex justify-center items-center">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={cards.length}
            onChange={handlePageChange}
          />
        </div>
      </div>
      {/* Cards */}
      {/* <div className="flex flex-col md:flex-row items-center bg-gray-100 p-8 rounded-2xl mt-10"> */}
      {/* Left Section */}
      {/* <div className="w-full  md:w-1/2 relative">
          <img
            src={cars2} // Replace with your image URL
            alt="Car on the road"
            className="rounded-xl"
          />
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black p-4 rounded-full shadow-lg focus:outline-none">
            ▶
          </button>
        </div> */}

      {/* Right Section */}
      {/* <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Get A Fair Price For Your Car Sell To Us Today
          </h2>
          <p className="text-gray-600 mb-6">
            We are committed to providing our customers with exceptional
            service, competitive pricing, and a wide range of benefits.
          </p>
          <ul className="space-y-6 mb-6">
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">
                <FaCheck />
              </span>
              We are the UK’s largest provider, with more patrols in more places
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">
                <FaCheck />
              </span>
              You get 24/7 roadside assistance
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">
                <FaCheck />
              </span>
              We fix 4 out of 5 cars at the roadside
            </li>
          </ul>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 focus:outline-none">
            Get Started →
          </button>
        </div> */}
      {/* </div> */}
      <div className="flex justify-center ">
        <div className="border-b-[1px] border-[#E1E1E1] mt-32 w-[90%]"></div>
      </div>
      <div className="container mx-auto pt-32 pb-32">
        <div className="text-start">
          <h3 className="text-[40px] font-semibold mb-10">Why Choose Us?</h3>
        </div>
        <div className="grid grid-cols-4 gap-10">
          {icons.map((item) => (
            <div className="text-start">
              <img src={item.icon} alt="" className=" size-16 mb-4" />
              <h4 className="mb-8 text-[22px] font-semibold">{item.titles}</h4>
              <p className="">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#050B20] mx-auto">
        <HomePage3 />
      </div>
      <div className=" container mx-auto">
        <HomePage4 />
      </div>
    </>
  );
}

export default HomePage;
