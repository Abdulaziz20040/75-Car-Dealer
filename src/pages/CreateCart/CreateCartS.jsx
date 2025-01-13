import React, { useEffect, useState } from "react";
import axios from "axios";

function CreateCart() {
  const [options, setOptions] = useState([]);
  const [brands, setBrand] = useState("");
  const [modelss, setModel] = useState("");
  const [transmissioned, setTransmission] = useState("");
  const [fuel, setFuel] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState(""); // Yangi yoki ishlatilgan uchun
  const [price, setPrice] = useState("");
  const [vin, setVin] = useState("");
  const [mileage, setMileage] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [features, setFeatures] = useState({
    interior: [],
    safety: [],
    exterior: [],
    comfort: [],
  });

  useEffect(() => {
    axios
      .get("https://9964742dd22bea27.mokky.dev/model")
      .then((res) => {
        setOptions(res.data);
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const carDetails = {
      brand: brands,
      model: modelss,
      color,
      transmission: transmissioned,
      fuel,
      condition,
      price,
      vin,
      mileage,
      additionalDetails,
      features,
    };

    axios
      .post("https://9964742dd22bea27.mokky.dev/model", carDetails)
      .then((res) => {
        console.log("Car successfully created:", res.data);
        clearForm();
      })
      .catch((err) => {
        console.error("Submission Error:", err);
      });
  };

  const clearForm = () => {
    setBrand("");
    setModel("");
    setColor("");
    setTransmission("");
    setFuel("");
    setCondition("");
    setPrice("");
    setVin("");
    setMileage("");
    setAdditionalDetails("");
    setFeatures({
      interior: [],
      safety: [],
      exterior: [],
      comfort: [],
    });
  };

  const models = options.find((car) => car.brand === brands)?.cars || [];
  const colors =
    models.filter((car) => car.model === modelss).map((car) => car.color) || [];
  const transmissions =
    models
      .filter((car) => car.model === modelss)
      .map((car) => car.transmission) || [];
  const fuels =
    models.filter((car) => car.model === modelss).map((car) => car.fuel) || [];

  return (
    <div className="mt-16 mx-20">
      <h2 className="font-bold text-3xl mb-10">
        Tell us about your future car
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Brand */}
        <label>
          <p className="mb-5">Make</p>
          <select
            value={brands}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full p-4 bg-[#F0F2F5] rounded-lg"
          >
            <option value="" disabled>
              Choose
            </option>
            {options.map((option) => (
              <option key={option.brand} value={option.brand}>
                {option.brand}
              </option>
            ))}
          </select>
        </label>

        {/* Model */}
        <label className="block mt-5">
          <p className="mb-5">Model</p>
          <select
            value={modelss}
            onChange={(e) => setModel(e.target.value)}
            className="w-full p-4 bg-[#F0F2F5] rounded-lg"
          >
            <option value="" disabled>
              Choose
            </option>
            {models.map((model) => (
              <option key={model.id} value={model.model}>
                {model.model}
              </option>
            ))}
          </select>
        </label>

        {/* Colors */}
        <label className="block mt-5">
          <p className="mb-5">Colors</p>
          <select
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full p-4 bg-[#F0F2F5] rounded-lg"
          >
            <option value="" disabled>
              Choose
            </option>
            {colors.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>
        </label>

        {/* Qo'shimcha maydonlar */}
        <label className="block mt-5">
          <p className="mb-5">Additional details</p>
          <textarea
            value={additionalDetails}
            onChange={(e) => setAdditionalDetails(e.target.value)}
            className="w-full p-4 bg-[#F0F2F5] rounded-lg"
            rows="5"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-500 text-white p-4 rounded-lg mt-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateCart;
