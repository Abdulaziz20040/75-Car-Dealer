import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditPage() {
  const { id } = useParams();
  const [editData, setEditData] = useState(null);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    price: "",
    body: "",
    mileage: "",
    fuel: "",
    year: "",
    transmission: "",
    driveType: "",
    condition: "",
    engine: "",
    cylinder: "",
    color: "",
    imageUrl: [],
    interiorFeature: [],
    exteriorFeature: [],
    safetyFeature: [],
    comfortFeature: [],
    dimensionsCapacityDTO: {
      length: null,
      height: null,
      luggageCapacitySeatsUp: null,
      luggageCapacitySeatsDown: null,
      wheelbase: null,
      luggageCapacitySeatsUp: null,
      luggageCapacitySeatsDown: null,
      widthIncludingMirrors: null,
      heightIncludingMirrors: null,
      width: null,
      heightRoofRails: null,
      grossWeight: null,
      maxLoadingWeight: null,
      maxRoofLoad: null,
      seatsCount: null,
    },
    towingSpecificationsDTO: {
      maxTowingWeightBraked: null,
      maxTowingWeightUnBraked: null,
      minKerbWeight: null,
      turningCycle: null,
    },
    engineDTO: {
      fuelTank: null,
      batteryCharge: null,
    },
    user: {
      id: null,
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      imageUrl: "",
    },
    description: "",
    createdAt: "",
    price: null,
    location: null,
    attributes: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://16.171.243.1:8080/car-dealer/announcement/${id}`,
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        if (response.data.success) {
          const data = response.data.data;
          setEditData(data);
          // Formni dastlabki qiymatlar bilan to'ldiramiz
          setFormData({
            brand: data.car.brand.name || "",
            model: data.car.model.name || "",
            price: data.price || "",
            body: data.car.body || "",
            mileage: data.car.mileage || null,
            fuel: data.car.fuel || "",
            year: data.car.year || null,
            transmission: data.car.transmission || "",
            driveType: data.car.driveType || "",
            condition: data.car.condition || "",
            engine: data.car.engine || null,
            cylinder: data.car.cylinder || null,
            color: data.car.color || "",
            imageUrl: data.car.imageUrls || [],
            interiorFeature: data.car.interiorFeature || [],
            exteriorFeature: data.car.exteriorFeature || [],
            safetyFeature: data.car.safetyFeature || [],
            comfortFeature: data.car.comfortFeature || [],
            dimensionsCapacityDTO: {
              length: data.car.dimensionsCapacityDTO?.length || null,
              height: data.car.dimensionsCapacityDTO?.height || null,
              luggageCapacitySeatsUp:
                data.car.dimensionsCapacityDTO?.luggageCapacitySeatsUp || null,
              luggageCapacitySeatsDown:
                data.car.dimensionsCapacityDTO?.luggageCapacitySeatsDown ||
                null,
              wheelbase: data.car.dimensionsCapacityDTO?.wheelbase || null,
              widthIncludingMirrors:
                data.car.dimensionsCapacityDTO?.widthIncludingMirrors || null,
              heightIncludingMirrors:
                data.car.dimensionsCapacityDTO?.heightIncludingMirrors || null,
              width: data.car.dimensionsCapacityDTO?.width || null,
              heightRoofRails:
                data.car.dimensionsCapacityDTO?.heightRoofRails || null,
              grossWeight: data.car.dimensionsCapacityDTO?.grossWeight || null,
              maxLoadingWeight:
                data.car.dimensionsCapacityDTO?.maxLoadingWeight || null,
              maxRoofLoad: data.car.dimensionsCapacityDTO?.maxRoofLoad || null,
              seatsCount: data.car.dimensionsCapacityDTO?.seatsCount || null,
            },
            towingSpecificationsDTO: {
              maxTowingWeightBraked:
                data.car.towingSpecificationsDTO?.maxTowingWeightBraked || null,
              maxTowingWeightUnBraked:
                data.car.towingSpecificationsDTO?.maxTowingWeightUnBraked ||
                null,
              minKerbWeight:
                data.car.towingSpecificationsDTO?.minKerbWeight || null,
              turningCycle:
                data.car.towingSpecificationsDTO?.turningCycle || null,
            },
            engineDTO: {
              fuelTank: data.car.engineDTO?.fuelTank || null,
              batteryCharge: data.car.engineDTO?.batteryCharge || null,
            },
            user: {
              id: data.user?.id || null,
              firstName: data.user?.firstName || "",
              lastName: data.user?.lastName || "",
              email: data.user?.email || "",
              phoneNumber: data.user?.phone || "",
              imageUrl: data.user?.imageUrl || null,
            },
            description: data.description || "",
            createdAt: data.createdAt || "",
            location: data.location || null,
            attributes: data.attributes || [],
          });
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://16.171.243.1:8080/car-dealer/announcement/${id}`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.data.success) {
        alert("Data successfully updated!");
      } else {
        alert("Failed to update data.");
      }
    } catch (err) {
      console.error("Update error:", err);
      alert("Error while updating data.");
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!editData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-20">
      <form className=" w-[100%]" onSubmit={handleSubmit}>
        <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-2">
          <div className="mb-8 w-[100%]">
            <label>Mileage</label> <br />
            <input
              type="text"
              name="mileage"
              value={formData.brand}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8 w-[100%] ">
            <label>Brand</label>
            <br />
            <input
              type="text"
              name="brand"
              value={formData.model}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8 w-[100%] ">
            <label>Description</label>
            <br />
            <input
              name="description"
              value={formData.color}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8 w-[100%] ">
            <label>Price</label>
            <br />
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8 w-[100%] ">
            <label>Body</label>
            <br />
            <input
              type="text"
              name="body"
              value={formData.body}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8 w-[100%]">
            <label>Millage</label>
            <br />
            <input
              type="text"
              name="price"
              value={formData.mileage}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8 w-[100%]">
            <label>Fuel</label>
            <br />
            <input
              type="text"
              name="fuel"
              value={formData.fuel}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8 w-[100%]">
            <label>Year</label>
            <br />
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8 w-[100%]">
            <label>Transmission</label>
            <br />
            <input
              type="text"
              name="price"
              value={formData.transmission}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
        </div>
        {/* First part */}
        {/* /////////////////////////////////////////////////////////////////// */}
        {/* Second part */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="mb-8 w-[100%]">
            <label>Drive Type</label>
            <br />
            <input
              type="text"
              name="driveType"
              value={formData.driveType}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8 w-[100%]">
            <label>Condition</label>
            <br />
            <input
              type="text"
              name="contdition"
              value={formData.condition}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8 w-[100%]">
            <label>Engine</label>
            <br />
            <input
              type="text"
              name="engine"
              value={formData.engine}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8 w-[100%]">
            <label>Image</label>
            <br />
            <input
              type="text"
              name="image"
              value={formData.imageUrl}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8 w-[100%]">
            <label>Interior Feature</label>
            <br />
            <input
              type="text"
              name="interiorFeature"
              value={formData.interiorFeature}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8 w-[100%]">
            <label>Exterior Feature</label>
            <br />
            <input
              type="text"
              name="exteriorFeature"
              value={formData.exteriorFeature}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8 w-[100%]">
            <label>Safety Feature</label>
            <br />
            <input
              type="text"
              name="exteriorFeature"
              value={formData.safetyFeature}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8 w-[100%]">
            <label>Comfort Feature</label>
            <br />
            <input
              type="text"
              name="exteriorFeature"
              value={formData.comfortFeature}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
        </div>
        <div className="text-start">
          <h3 className="text-[30px] mb-5 mt-4">Dimensions Capacity DTO</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="mb-8  ">
            <label>Length</label>
            <br />
            <input
              type="text"
              name="length"
              value={formData.dimensionsCapacityDTO.length}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8  ">
            <label>Height</label>
            <br />
            <input
              type="text"
              name="height"
              value={formData.dimensionsCapacityDTO.height}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8  ">
            <label>Wheelbase</label>
            <br />
            <input
              type="text"
              name="wheelbase"
              value={formData.dimensionsCapacityDTO.wheelbase}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8  ">
            <label>Height Roof Rails</label>
            <br />
            <input
              type="text"
              name="heightRoofRails"
              value={formData.dimensionsCapacityDTO.heightRoofRails}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8  ">
            <label>LuggageCapa city Seats Up</label>
            <br />
            <input
              type="text"
              name="luggageCapacitySeatsUp"
              value={formData.dimensionsCapacityDTO.luggageCapacitySeatsUp}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8  ">
            <label>Width</label>
            <br />
            <input
              type="text"
              name="width"
              value={formData.dimensionsCapacityDTO.width}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8  ">
            <label>Width Including Mirrors</label>
            <br />
            <input
              type="text"
              name="widthIncludingMirrors"
              value={formData.dimensionsCapacityDTO.widthIncludingMirrors}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8  ">
            <label>Height Including Mirrors</label>
            <br />
            <input
              type="text"
              name="heightIncludingMirrors"
              value={formData.dimensionsCapacityDTO.heightIncludingMirrors}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8  ">
            <label>Gross Weight</label>
            <br />
            <input
              type="text"
              name="grossWeight"
              value={formData.dimensionsCapacityDTO.grossWeight}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8  ">
            <label>Max Loading Weight</label>
            <br />
            <input
              type="text"
              name="maxLoadingWeight"
              value={formData.dimensionsCapacityDTO.maxLoadingWeight}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          {/* maxRoofLoad */}
          <div className="mb-8 ">
            <label>Max Roof Load</label>
            <br />
            <input
              type="text"
              name="maxRoofLoad"
              value={formData.dimensionsCapacityDTO.maxRoofLoad}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8 ">
            <label>Seats Count</label>
            <br />
            <input
              type="text"
              name="seatsCount"
              value={formData.dimensionsCapacityDTO.seatsCount}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
        </div>

        <div className="text-start">
          <h2 className="text-[30px] mb-5">Towing Specifications DTO</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="mb-8 w-[100%]">
            <label>Seats Count</label>
            <br />
            <input
              type="text"
              name="seatsCount"
              value={formData.dimensionsCapacityDTO.seatsCount}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8 w-[100%]">
            <label>Max Towing Weight Braked</label>
            <br />
            <input
              type="text"
              name="maxTowingWeightBraked"
              value={formData.towingSpecificationsDTO.maxTowingWeightBraked}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8 w-[100%]">
            <label>Max Towing Weight UnBraked</label>
            <br />
            <input
              type="text"
              name="maxTowingWeightUnBraked"
              value={formData.towingSpecificationsDTO.maxTowingWeightUnBraked}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8 w-[100%]">
            <label>Min Kerb Weight</label>
            <br />
            <input
              type="text"
              name="minKerbWeight"
              value={formData.towingSpecificationsDTO.minKerbWeight}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          {/* turningCycle */}

          <div className="mb-8 w-[100%]">
            <label>Turning Cycle</label>
            <br />
            <input
              type="text"
              name="turningCycle"
              value={formData.towingSpecificationsDTO.turningCycle}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>

          <div className="mb-8 w-[100%]">
            <label>Turning Cycle</label>
            <br />
            <input
              type="text"
              name="turningCycle"
              value={formData.towingSpecificationsDTO.turningCycle}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
        </div>
        <div className="text-start">
          <h2 className="text-[30px] mb-5">User</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="mb-8 ">
            <label>First Name</label>
            <br />
            <input
              type="text"
              name="firstName"
              value={formData.user.firstName}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8 ">
            <label>Last Name</label>
            <br />
            <input
              type="text"
              name="lastName"
              value={formData.user.lastName}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8 ">
            <label>Email</label>
            <br />
            <input
              type="text"
              name="email"
              value={formData.user.email}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8 ">
            <label>Phone</label>
            <br />
            <input
              type="text"
              name="phone"
              value={formData.user.phoneNumber}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8 ">
            <label>Description</label>
            <br />
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8 ">
            <label>Created At</label>
            <br />
            <input
              type="text"
              name="description"
              value={formData.createdAt}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8 ">
            <label>Price</label>
            <br />
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
          <div className="mb-8 ">
            <label>Attributes</label>
            <br />
            <input
              type="text"
              name="attributes"
              value={formData.attributes}
              onChange={handleInputChange}
              className="w-[90%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 bg-blue-500 text-white rounded p-2"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditPage;
