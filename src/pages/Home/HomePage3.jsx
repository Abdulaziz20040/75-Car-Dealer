import React, { useEffect, useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { triggerFocus } from "antd/es/input/Input";
import bentle from "./imgs/bentle.jpeg";
import { MdOutlineSpeed } from "react-icons/md";
import { LuFuel } from "react-icons/lu";
import { TbAutomaticGearboxFilled } from "react-icons/tb";
import axios from "axios";
import { Link } from "react-router-dom";

const testimonials = [
  {
    title: "Audi A5 – 2023",
    desc: "2.0 D5 PowerPulse Momentum 5dr AWDGeartronic Estate",
    image: bentle,
    mile: "500 Miles",
    fuel: "Petrol",
    manual: "Automatic",
    price: "20,500",
  },
  {
    title: "Audi A5 – 2023",
    desc: "2.0 D5 PowerPulse Momentum 5dr AWDGeartronic Estate",
    image: bentle,
    mile: "500 Miles",
    fuel: "Petrol",
    manual: "Automatic",
    price: "30,500",
  },
  {
    title: "Audi A5 – 2023",
    desc: "2.0 D5 PowerPulse Momentum 5dr AWDGeartronic Estate",
    image: bentle,
    mile: "500 Miles",
    fuel: "Petrol",
    manual: "Automatic",
    price: "100,500",
  },
  {
    title: "Audi A5 – 2023",
    desc: "2.0 D5 PowerPulse Momentum 5dr AWDGeartronic Estate",
    image: bentle,
    mile: "500 Miles",
    fuel: "Petrol",
    manual: "Automatic",
    price: "306,500",
  },
  {
    title: "Audi A5 – 2023",
    desc: "2.0 D5 PowerPulse Momentum 5dr AWDGeartronic Estate",
    image: bentle,
    mile: "500 Miles",
    fuel: "Petrol",
    manual: "Automatic",
    price: "36,500",
  },
  {
    title: "Audi A5 – 2023",
    desc: "2.0 D5 PowerPulse Momentum 5dr AWDGeartronic Estate",
    image: bentle,
    mile: "500 Miles",
    fuel: "Petrol",
    manual: "Automatic",
    price: "300,500",
  },
  {
    title: "Audi A5 – 2023",
    desc: "2.0 D5 PowerPulse Momentum 5dr AWDGeartronic Estate",
    image: bentle,
    mile: "500 Miles",
    fuel: "Petrol",
    manual: "Automatic",
    price: "136,500",
  },
  {
    title: "Audi A5 – 2023",
    desc: "2.0 D5 PowerPulse Momentum 5dr AWDGeartronic Estate",
    image: bentle,
    mile: "500 Miles",
    fuel: "Petrol",
    manual: "Automatic",
    price: "236,500",
  },
];

const HomePage3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(cards.data.Announcement.length - 2, 0) : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 2 >= cards.data.Announcement.length ? 0 : prev + 1
    );
  };

  return (
    <>
      <div className="container mx-auto p-3 mb-10 pb-28">
        <div className=" flex justify-between pt-28 pb-10 items-center mx-auto">
          <h2 className="text-3xl text-white font-bold text-start mb-6">
            What our customers say
          </h2>
        </div>
        <div className="">
          <div className=" mx-auto">
            <div className="flex gap-6 overflow-hidden">
              {cards.data &&
                cards.data.Announcement.slice(
                  currentIndex,
                  currentIndex + 2
                ).map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-[#1a2037] w-[100%] h-[250px] shadow-lg rounded-xl"
                  >
                    <div className=" flex justify-between">
                      <div className="w-1/2 h-[250px] md:w-1/2 ">
                        <Link to={`/details/${testimonial.announcementId}`}>
                          <img
                            src={testimonial.imageUrl}
                            alt=""
                            className="w-full rounded-bl-lg object-cover rounded-tl-lg h-[100%]"
                          />
                        </Link>
                      </div>
                      <div className="w-1/2 text-white text-start ps-5 pb-10">
                        <ul className="mt-6">
                          <li>
                            <span className="flex justify-start gap-3">
                              <p>{testimonial.brand}</p>
                              <p>{testimonial.date.substring(0, 10)}</p>
                            </span>
                            <p className="font-light text-[13px] mb-2 mt-1 text-pretty">
                              {testimonial.model}
                              {testimonial.body}
                            </p>
                          </li>
                          <li className="text-[13px] mt-6 fuelT p-0 flex justify-start gap-2 items-center">
                            <MdOutlineSpeed className="text-[20px]" />
                            {testimonial.mileage}
                          </li>
                          <li className="text-[13px] fuelT p-0 flex justify-start gap-2 items-center">
                            <LuFuel className="text-[20px]" />
                            {testimonial.fuel}
                          </li>
                          <li className="text-[13px] fuelT p-0 flex justify-start gap-2 items-center">
                            <TbAutomaticGearboxFilled className="text-[20px]" />{" "}
                            {testimonial.transmission}
                          </li>
                        </ul>
                        <div className="flex justify-between items-center">
                          <p className="text-[20px]">$ {testimonial.price}</p>
                          <Link to={`/details/${testimonial.announcementId}`}>
                            <button className="bg-transparent text-[13px] text-white">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="flex items-center justify-start mt-6">
              <button
                onClick={handlePrev}
                className="bg-gray-200 w-16 p-2 rounded-full mr-4 hover:bg-gray-300"
              >
                <LeftOutlined />
              </button>
              <button
                onClick={handleNext}
                className="bg-gray-200 w-16 p-2 rounded-full hover:bg-gray-300"
              >
                <RightOutlined />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage3;
