import React, { useState, useEffect } from "react";
import { CiBookmark, CiSaveUp2 } from "react-icons/ci";
import { data, useParams } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoCarSportOutline } from "react-icons/io5";
import { MdOutlineSpeed } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { PiEngineBold } from "react-icons/pi";
import { BsFuelPump } from "react-icons/bs";
import { GiCarDoor } from "react-icons/gi";
import { FaRegCalendarDays } from "react-icons/fa6";
import { TbVectorBezier2 } from "react-icons/tb";
import { PiSteeringWheel } from "react-icons/pi";
import { IoIosColorFill } from "react-icons/io";
import Icon from "./Icon.png";
const AnnouncementDetails = () => {
  const { id } = useParams(); // URL dan 'id' parametrini olish
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://10.10.3.9:8080/car-dealer/announcement/${id}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json();
        if (result.success) {
          setApiResponse(result.data);
        } else {
          setError(result.message || "Unexpected error occurred.");
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

  const { car, description, price, bookmarkedBy, savedBy, user } = apiResponse;

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
        </a>{" "}
        /{" "}
        <a href="/listings" className="text-blue-500">
          Listings
        </a>{" "}
        / Toyota Camry New
      </nav>

      {/* Title and Actions */}
      <div className="flex flex-col lg:flex-row justify-between mb-6">
        <div className="flex flex-col gap-2 mb-4">
          <h1 className="text-4xl font-semibold">
            {car.brand.name} {car.model.name} - {car.year}
          </h1>
          {/* <p>Price: ${price}</p>
          <p>Condition: {car.condition}</p> */}

          {/* <div className="flex items-center gap-4">
            <CiBookmark />
            <p>{bookmarkedBy}</p>
          </div>
          <div className="flex items-center gap-4">
            <CiSaveUp2 />
            <p>{savedBy}</p>
          </div> */}
        </div>
      </div>

      {/* Tags */}
      <div className="flex space-x-4 mb-6">
        <span className="px-4 py-1 bg-blue-100 text-blue-500 rounded-full">
          {car.year}
        </span>
        <span className="px-4 py-1 bg-blue-100 text-blue-500 rounded-full">
          {car.millage}
        </span>
        <span className="px-4 py-1 bg-blue-100 text-blue-500 rounded-full">
          {car.transmission}
        </span>
        <span className="px-4 py-1 bg-blue-100 text-blue-500 rounded-full">
          {car.fuel}
        </span>
      </div>

      {/* Images Section */}
      <div className="gap-4 mb-6">
        <div className="flex justify-between items-start gap-10">
          <div className="w-[65%] ">
            {car.imageUrls.slice(0, 1).map((url) => (
              <img src={url} className="rounded-lg w-[100%] object-cover" />
            ))}
          </div>
          <div className="w-[35%]">
            <div className="w-[100%] h-[100px] p-5 border-2 border-gray-[#E1E1E1] rounded-[20px] ">
              <h3>Our Price</h3>
              <div className="text-center">
                <p className="font-semibold text-3xl">$ 165,000</p>
              </div>
            </div>
            <div className="w-[100%] h-[285px] p-5 border-2 mt-5 border-gray-[#E1E1E1] rounded-[20px] ">
              <div className="w-24 h-24 border-2 border-gray-[#E9E9E9] flex justify-center items-center rounded-full">
                <img
                  src="https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg="
                  alt=""
                  className="w-20 h-20 rounded-full"
                />
              </div>
              <div className="mt-3">
                <h3 className="text-[23px] font-semibold mb-2">
                  {user.firstName}
                </h3>
                <p>943 Broadway, Brooklyn</p>
              </div>
              <div className="flex justify-between items-start mt-5">
                <p className="flex justify-center gap-3 items-center">
                  <span className="flex justify-center items-center w-[36px] h-[30px] text-[#405FF2] rounded-full bg-[#405FF21A]">
                    <SlLocationPin />
                  </span>{" "}
                  Get Direction
                </p>
                <p className="flex justify-center gap-3 items-center">
                  <span className="flex justify-center items-center w-[36px] h-[30px] text-[#405FF2] rounded-full bg-[#405FF21A]">
                    <MdOutlinePhoneInTalk />
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
              <IoCarSportOutline className="text-gray-700" />
              <span className="font-medium">Body</span>
            </div>
            <div className="flex items-center gap-3">
              <CiUser className="text-gray-700" />
              <span className="font-medium">Condition</span>
            </div>
            <div className="flex items-center gap-3">
              <MdOutlineSpeed className="text-gray-700" />
              <span className="font-medium">Mileage</span>
            </div>
            <div className="flex items-center gap-3">
              <PiEngineBold className="text-gray-700" />
              <span className="font-medium">Engine Size</span>
            </div>
            <div className="flex items-center gap-3">
              <BsFuelPump className="text-gray-700" />
              <span className="font-medium">Fuel Type</span>
            </div>
            <div className="flex items-center gap-3">
              <GiCarDoor className="text-gray-700" />
              <span className="font-medium">Door</span>
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
              <span className="font-semibold text-gray-900">20</span>
            </div>

            <div>
              <span className="font-semibold  text-gray-900">3.5</span>
            </div>

            <div>
              <span className="font-semibold text-gray-900">Petrol</span>
            </div>

            <div>
              <span className="font-semibold text-gray-900">4 Doors</span>
            </div>
          </div>

          {/* /////////////////////////////////////////// */}

          <div className="grid grid-cols-1 gap-8 text-gray-600">
            <div className="flex items-center gap-3 text-gray-600">
              <FaRegCalendarDays /> Year
            </div>
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-3">
                <img src={Icon} alt="" /> Cylinder:
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <div className="flex items-center gap-3">
                <TbVectorBezier2 /> Transmission
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <div className="flex items-center gap-3">
                <PiSteeringWheel /> Color
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <div className="flex items-center gap-3">
                <IoIosColorFill /> Drive Type
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="flex justify-start items-center">
              <p className=" font-semibold ">Black, Blue, White</p>
            </div>
            <div className="flex justify-start">
              <p className=" font-semibold ">All-Wheel Drive (AWD/4WD)</p>
            </div>
            <div className="flex justify-start items-center">
              <p className=" font-semibold flex-col">Automatic</p>
            </div>
            <div className="flex justify-start items-center">
              <p className=" font-semibold flex-col">Automatic</p>
            </div>
            <div className="flex justify-start items-center">
              <p className=" font-semibold flex-col">2023</p>
            </div>
          </div>
        </div>
      </div>
      {/* Description */}
    </div>
  );
};
//salom dunyo

export default AnnouncementDetails;
