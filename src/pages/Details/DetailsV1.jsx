import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoBookmarkOutline, IoCarSportOutline } from "react-icons/io5";
import { MdOutlineSpeed } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { PiEngineBold } from "react-icons/pi";
import { BsFuelPump } from "react-icons/bs";
import { GiCarDoor } from "react-icons/gi";
import { FaCalendar, FaRegCalendarDays } from "react-icons/fa6";
import { TbManualGearbox, TbVectorBezier2 } from "react-icons/tb";
import { PiSteeringWheel } from "react-icons/pi";
import { IoIosColorFill } from "react-icons/io";
import Icon from "./Icon.png";
import DetailsPage from "./DetailsPage";
import DetailsPage2 from "./DetailsPage2";
import axios from "axios";
import { Pagination } from "antd";
import { GoArrowUpRight } from "react-icons/go";
import { LiaGasPumpSolid } from "react-icons/lia";
import { FaCalendarAlt } from "react-icons/fa";

const AnnouncementDetails = () => {
  const { id } = useParams(); // URL dan 'id' parametrini olish
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
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
  const handleCardClick = (id) => {
    // Sahifani qayta yuklash
    window.location.href = `announcement/${id}`;
  };

  const handleSortChange = (value) => {
    console.log("Selected sort option:", value);
    // logic edni yoziladi
  };

  const indexOfLastCard = currentPage * pageSize;
  const indexOfFirstCard = indexOfLastCard - pageSize;
  // const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://16.171.243.1:8080/car-dealer/announcement/${id}`,
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        // Agar API muvaffaqiyatli bo'lsa, javobni saqlaymiz
        if (response.data.success) {
          setApiResponse(response.data.data);
        } else {
          setError(response.data.message || "Unexpected error occurred.");
        }
      } catch (err) {
        console.error("API fetch error:", err);
        setError("Failed to fetch details.");
      }
    };
    fetchData();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!apiResponse) {
    return <div>Loading...</div>;
  }

  const { car, description, price, savedBy, user } = apiResponse;
  // <div className=" mt-20">
  //   <h1>
  //     {apiResponse.car.brand.name} {apiResponse.car.model.name}
  //   </h1>
  //   <p>{apiResponse.description}</p>
  //   <p>Price: ${apiResponse.price}</p>
  //   <p>Condition: {apiResponse.car.condition}</p>
  //   <div>
  //     {apiResponse.car.imageUrls.map((url, index) => (
  //       <img key={index} src={url} alt={`Car Image ${index + 1}`} />`
  //     ))}
  //   </div>
  // </div>
  // );

  return (
    <div className="container mx-auto mt-10 px-4">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <a href="/" className="text-blue-500">
          Home
        </a>
        /
        <a href="/listings" className="text-blue-500">
          Listings
        </a>
        / Toyota Camry New
      </nav>
      {/* Title and Actions */}
      <div className="flex flex-col font- lg:flex-row justify-between mb-6">
        <div className="flex flex-col gap-2 mb-4">
          <h1 className="text-4xl font-semibold">
            {car.brand.name} {car.model.name} - {car.year}
          </h1>
        </div>
      </div>
      {/* Tags */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          <span className="flex justify-start items-center  gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full">
            <FaCalendarAlt className="text-blue-500" /> {car.year}
          </span>
          <span className="flex justify-start items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full">
            <MdOutlineSpeed className="text-blue-500" />{" "}
            {car.mileage === 0 ? "soon" : car.mileage}
          </span>
          <span className="flex justify-start items-center  gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full">
            <TbManualGearbox className="text-blue-500" /> {car.transmission}
          </span>
          <span className="flex justify-start items-center  gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full">
            <BsFuelPump className="text-blue-500" /> {car.fuel}
          </span>
        </div>
        <div>
          <button
            onClick={() => navigate(`/editPage/${id}`)}
            className="border-[1px] border-blue-500 text-blue-600 rounded-[9px] p-1 w-[100px]"
          >
            Edit
          </button>
        </div>
      </div>
      {/* Images Section */}
      <div className="gap-4 mb-6">
        <div className="flex justify-between items-start gap-10">
          <div className="w-[65%]">
            {car.imageUrls.slice(0, 1).map((url) => (
              <img
                src={url}
                className="rounded-lg w-[100%] object-cover"
                key={url.id}
              />
            ))}
          </div>
          {/* user card */}
          <div className="w-[39%]">
            <div className="w-[100%] h-[100px] p-5 pb-5 border-2 border-gray-[#E1E1E1] rounded-[20px] ">
              <h3 className="text-[16px] mb-3">Our Price</h3>
              <div className="mx-16">
                <p className="font-medium text-3xl">$ {price}</p>
              </div>
            </div>
            <div className="w-[100%] h-[300px] p-7 border-2 mt-5 border-gray-[#E1E1E1] rounded-[20px] ">
              <div className="w-24 h-24 border-2 border-gray-[#E9E9E9] flex justify-center items-center rounded-full">
                <img
                  src="https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg="
                  alt=""
                  className="w-20 h-20 rounded-full"
                />
              </div>
              <div className="mt-3">
                <h3 className="text-[23px] font-normal mb-2">
                  {user.firstName}
                </h3>
                <p className="font-light">943 Broadway, Brooklyn</p>
              </div>
              <div className="flex justify-between gap-5 items-start mt-5">
                <p className="flex justify-center gap-3 items-center">
                  <span className="flex justify-center items-center  w-[50px] h-[50px] text-[#405FF2] rounded-full bg-[#405FF21A]">
                    <SlLocationPin className="text-[24px]" />
                  </span>
                  Get Direction
                </p>
                <p className="flex justify-center gap-3 items-center">
                  <span className="flex justify-center items-center w-[50px] h-[50px] text-[#405FF2] rounded-full bg-[#405FF21A]">
                    <MdOutlinePhoneInTalk className="text-[24px]" />
                  </span>
                  {user.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {car.imageUrls.slice(0, 1).map((url) => (
            <img src={url} className="rounded-lg" />
          ))}
        </div> */}
      </div>
      {/* Car Overview */}
      <div className="mb-6">
        <h2 className="text-2xl font-semiBold mb-10">Car Overview</h2>
        <div className="grid grid-cols-4 items-baseline">
          <div className="grid grid-cols-1 gap-8 text-gray-600">
            {/* Body */}
            <div className="flex items-center gap-3">
              <IoCarSportOutline className="text-gray-700 text-[21px]" />
              <span className="font-medium">Body</span>
            </div>
            <div className="flex items-center gap-3">
              <CiUser className="text-gray-700 text-[21px]" />
              <span className="font-medium">Condition</span>
            </div>
            <div className="flex items-center gap-3">
              <MdOutlineSpeed className="text-gray-700 text-[21px]" />
              <span className="font-medium">Mileage</span>
            </div>
            <div className="flex items-center gap-3">
              <PiEngineBold className="text-gray-700 text-[21px]" />
              <span className="font-medium">Engine Size</span>
            </div>
            <div className="flex items-center gap-3">
              <BsFuelPump className="text-gray-700 text-[21px]" />
              <span className="font-medium">Fuel Type</span>
            </div>
          </div>

          {/* Condition */}
          <div className="grid grid-cols-1 gap-8 items-center">
            <div>
              <span className="font-semibold text-gray-900">{car.body}</span>
            </div>

            <div>
              <span className="font-semibold text-gray-900">
                {car.condition}
              </span>
            </div>

            <div>
              <span className="font-semibold text-gray-900">{car.mileage}</span>
            </div>

            <div>
              <span className="font-semibold  text-gray-900">
                {car.engine === 0 ? "soon" : car.engine}
              </span>
            </div>

            <div>
              <span className="font-semibold text-gray-900">{car.fuel}</span>
            </div>
          </div>

          {/* /////////////////////////////////////////// */}

          <div className="grid grid-cols-1 gap-8 text-gray-600">
            <div className="flex items-center gap-3 text-gray-600">
              <FaRegCalendarDays className="text-gray-700 text-[21px]" /> Year
            </div>
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-3">
                <img src={Icon} alt="" /> Cylinder:
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <div className="flex items-center gap-3">
                <TbVectorBezier2 className="text-gray-700 text-[21px]" />{" "}
                Transmission
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <div className="flex items-center gap-3">
                <PiSteeringWheel className="text-gray-700 text-[21px]" /> Color
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <div className="flex items-center gap-3">
                <IoIosColorFill className="text-gray-700 text-[21px]" /> Drive
                Type
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="flex justify-start items-center">
              <p className=" font-semibold ">{car.year}</p>
            </div>
            <div className="flex justify-start">
              <p className=" font-semibold ">
                {car.cylinder == 0 ? "soon" : car.cylinder}
              </p>
            </div>
            <div className="flex justify-start items-center">
              <p className=" font-semibold flex-col">{car.transmission}</p>
            </div>
            <div className="flex justify-start items-center">
              <p className=" font-semibold flex-col">{car.color}</p>
            </div>
            <div className="flex justify-start items-center">
              <p className=" font-semibold flex-col">{car.driveType}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <DetailsPage2 />
      </div>
      <div>
        <DetailsPage />
      </div>
      {/* Rekated things */}
      <div className="text-start mt-14 mb-8">
        <h3 className="text-[30px] font-semibold">Related Listings</h3>
      </div>
      <div>
        <>
          {/* ListV1 cards */}
          <div className="flex items-center justify-between">
            <p>
              Showing {indexOfFirstCard + 1} –{" "}
              {/* {Math.min(indexOfLastCard, cards.length)} of {cards.length}{" "} */}
              results
            </p>
            {/* <div className="flex items-center gap-4">
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
            </div> */}
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
                        <button
                          className="text-blue-500 flex items-center gap-1 hover:underline"
                          onClick={() => handleCardClick(card.announcementId)}
                        >
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
          <div className="mt-6 flex justify-center">
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={cards.length}
              onChange={handlePageChange}
            />
          </div>
        </>
      </div>
    </div>
  );
};

export default AnnouncementDetails;
