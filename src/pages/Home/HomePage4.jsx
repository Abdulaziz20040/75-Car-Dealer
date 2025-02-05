import React, { useState } from "react";
import volvo from "./imgs/volvo.jpeg";
import bentle2 from "./imgs/bentle2.jpeg";
import audi2 from "./imgs/audi2.jpeg";

function HomePage4() {
  const [brands, setBrands] = useState([
    "Ford",
    "Honda",
    "Hyundai",
    "Infiniti",
    "Jaguar",
    "Jeep",
    "Chrysler",
    "Citroen",
    "Cupra",
    "Dacia",
    "DS",
    "Fiat",
    "Land Rover",
    "Lexus",
    "Mercedes-Benz",
    "Mazda",
    "MG",
    "Kia",
    "Abarth",
    "Romeo",
    "Audi",
    "Bentley",
    "BMW",
    "Chevrolet",
    "Mini",
    "Mitsubishi",
    "Nissan",
    "Peugeot",
    "Porsche",
    "Renault",
  ]);

  const [blogPost, setPost] = useState([
    {
      id: 1,
      title: "2024 BMW ALPINA XB7 with exclusive details, extraordinary",
      imgs: bentle2,
      author: "Admin",
      data: "November 22, 2023",
    },
    {
      id: 2,
      title: "2024 BMW ALPINA XB7 with exclusive details, extraordinary",
      imgs: volvo,
      author: "Admin",
      data: "November 22, 2023",
    },
    {
      id: 3,
      title: "2024 BMW ALPINA XB7 with exclusive details, extraordinary",
      imgs: audi2,
      author: "Admin",
      data: "November 22, 2023",
    },
  ]);

  return (
    <>
      <div className="text-start pt-28">
        <h3 className="text-[32px] font-semibold mb-11">
          Shop BoxCar Your Way
        </h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {brands.map((item) => (
          <ul className="text-start">
            <li key={item} className="mb-5">
              {item}
            </li>
          </ul>
        ))}
      </div>
      <div className="mb-20">
        <div className="text-start mt-24">
          <h2 className="text-[32px] font-semibold mb-11">Latest Blog Posts</h2>
        </div>
        <div className="grid grid-cols-1 mb-14 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPost.map((item) => (
            <div>
              <div className="w-96 flex justify-center items-start">
                <img
                  src={item.imgs}
                  alt=""
                  className="w-full h-[200px] rounded-[11px] object-cover"
                />
              </div>
              <div>
                <div className="flex justify-start mt-3 mb-3 items-center">
                  <p>{item.author}</p> <p>{item.data}</p>
                </div>
                <p className="text-start font-semibold text-[17px]">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage4;
