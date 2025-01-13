import React, { useState, useEffect } from "react";
import { CiBookmark, CiSaveUp2 } from "react-icons/ci";
import { useParams } from "react-router-dom";
import img2 from "./default2.jpeg";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlinePhoneInTalk } from "react-icons/md";

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

  const { car, description, price, bookmarkedBy, savedBy } = apiResponse;

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
            <div className="w-[100%] h-[350px] p-5 border-2 mt-5 border-gray-[#E1E1E1] rounded-[20px] ">
              <div className="w-24 h-24 border-2 border-gray-[#E9E9E9] p-1 flex justify-center items-center rounded-full">
                <img src={img2} alt="" className="w-20 h-20 rounded-full" />
              </div>
              <div className="mt-3">
                <h3 className="text-[23px] font-semibold mb-2">user</h3>
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
                  +88-123456789
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
        <h2 className="text-2xl font-bold mb-4">Car Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-gray-600">
            Body: <span className="font-semibold">Sedan</span>
          </div>
          <div className="text-gray-600">
            Condition: <span className="font-semibold">New</span>
          </div>
          <div className="text-gray-600">
            Mileage: <span className="font-semibold">20</span>
          </div>
          <div className="text-gray-600">
            Engine Size: <span className="font-semibold">3.5</span>
          </div>
          <div className="text-gray-600">
            Fuel Type: <span className="font-semibold">Petrol</span>
          </div>
          <div className="text-gray-600">
            Door: <span className="font-semibold">4 Doors</span>
          </div>
          <div className="text-gray-600">
            Year: <span className="font-semibold">2023</span>
          </div>
          <div className="text-gray-600">
            Cylinder: <span className="font-semibold">12</span>
          </div>
          <div className="text-gray-600">
            Transmission: <span className="font-semibold">Automatic</span>
          </div>
          <div className="text-gray-600">
            Color: <span className="font-semibold">Black, Blue, White</span>
          </div>
          <div className="text-gray-600">
            Drive Type:{" "}
            <span className="font-semibold">All-Wheel Drive (AWD/4WD)</span>
          </div>
          <div className="text-gray-600">
            VIN: <span className="font-semibold">MC8123818</span>
          </div>
        </div>
      </div>

      {/* Description */}
    </div>
  );
};

export default AnnouncementDetails;
