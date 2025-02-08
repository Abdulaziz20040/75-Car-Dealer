import axios from "axios";
import React, { useEffect, useState } from "react";

function CreateBlog() {
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

  return (
    <div className=" container mx-auto mt-16">
      <h2 className="font-bold text-3xl mb-10">create blog</h2>
      <form onSubmit={handleSubmit}>
        {/* Brand */}
        <label>
          <p className="mb-5">Title</p>
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
          <p className="mb-5">Img</p>
          <input type="text" className="w-full p-4 bg-[#F0F2F5] rounded-lg" />
        </label>

        {/* Colors */}
        <label className="block mt-5">
          <p className="mb-5">Colors</p>
          <input type="text" className="w-full p-4 bg-[#F0F2F5] rounded-lg" />
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

export default CreateBlog;
