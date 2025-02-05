import React, { useEffect, useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import axios from "axios";
import { GoArrowUpRight } from "react-icons/go";

function Services() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://df2174b8e5e5a31d.mokky.dev/MEGA_news")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === products.length - 3 ? 0 : prev + 1));
  };

  return (
    <div className="container mx-auto">
      <div className="bg-white mt-10">
        {/* Header Section */}
        <section className=" flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">Services</h1>
            <p className="text-2xl font-semibold mb-4">
              Service Options Offered by BoxCar
            </p>
            <p className="text-gray-600 max-w-[300px] mb-6">
              Choose from a broad selection of reliable car service options
              handled expertly online with BoxCar to optimize your car and
              ensure peak efficiency today.
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
              See Our Service Options
            </button>
          </div>
          <img
            src="https://s3-alpha-sig.figma.com/img/24c6/248b/237dff84dd08e98bdb2eff393d2fbe59?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k7tdbd0REoijm1CmbdPCXqG6HUILP46SX5p3FLHOsnmMw6hEzZ1fK9TA0sm908M19MoWe~6is8TFcw21vvlCys7qrT3swqv9uja5NQhub6Vqim9AGQHg74ZUUHI8vb9ENxsVn-yGW-kql3eUkWCBLfkwK5i1OE39ghC9lpm2zkWyk7ko-7E6PCG6eXLHDIubdSFefYHxDr5dk9KEoxcj5cX~c1m5oWr6bdv7~6fQsqrG3oAIsfM1D~ATc3oFvGGhZitgQMxPGhTM2td4gZts7VaWoQ3webCPiRG60T9nE59T4ovKGPy8L2lKHVU9Ojveng~ohg8FpS~PUSsJnpne5Q__"
            alt="Service Header"
            className="mt-8 w-[450px] rounded-lg shadow-lg"
          />
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <h2 className="text- text-3xl font-bold mb-10">
            Customers Get Great Benefits!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {[
              {
                icon: "/path/to/icon1.png",
                title: "Special Financing Offers",
                description:
                  "Our financial solutions can save you money, time, and energy.",
              },
              {
                icon: "/path/to/icon2.png",
                title: "Trusted Car Dealership",
                description:
                  "Your car deserves the best hands and service care.",
              },
              {
                icon: "/path/to/icon3.png",
                title: "Transparent Pricing",
                description:
                  "Clear and fixed prices with no hidden charges for peace of mind.",
              },
              {
                icon: "/path/to/icon4.png",
                title: "Expert Car Service",
                description:
                  "Professional services to meet and exceed your expectations.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg"
              >
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Services Section */}
        <div className="bg-gray-50 py-16 px-10 rounded-lg ">
          <h2 className="text-3xl font-bold text-start mb-6">Our Services</h2>

          <div className="relative mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
              {products
                .slice(currentIndex, currentIndex + 4)
                .map((card, index) => (
                  <div
                    key={index}
                    className="relative w-[300px] rounded-xl  flex flex-col"
                  >
                    {/* Bookmark Icon and Body Kit */}
                    {/* Image */}
                    <img
                      src={card.img || "https://via.placeholder.com/300"}
                      alt={card.title || "Product Image"}
                      className="w-full h-56 object-cover rounded-xl mb-3"
                    />
                    {/* Product Info */}
                    <div className="pb-5">
                      {/* Card name */}
                      <h1 className=" max-w-[300px] font-semibold line-clamp-1">
                        {card.title || "No title"}
                      </h1>
                      <p className=" line-clamp-2">
                        {card.desc || "No description"}
                      </p>
                    </div>
                    <button className=" flex items-center gap-2">
                      Explore More
                      <GoArrowUpRight />
                    </button>
                  </div>
                ))}
            </div>
            <div className="flex items-center justify-start mt-6">
              <button
                onClick={handlePrev}
                className="bg-gray-200 p-2 rounded-full mr-4 hover:bg-gray-300"
              >
                <LeftOutlined />
              </button>
              <button
                onClick={handleNext}
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
              >
                <RightOutlined />
              </button>
            </div>
          </div>
        </div>

        {/* Schedule Service Section */}
        <section className="py-16">
          <h2 className="text-center text-3xl font-bold mb-10">
            Schedule Service
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
            <form className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="date" className="block text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
              >
                Request to Schedule
              </button>
            </form>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
              <ul className="text-gray-600">
                <li>Monday: 8:00 - 17:00</li>
                <li>Tuesday: 8:00 - 17:00</li>
                <li>Wednesday: 8:00 - 17:00</li>
                <li>Thursday: 8:00 - 17:00</li>
                <li>Friday: 8:00 - 17:00</li>
                <li>Saturday: 8:00 - 17:00</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;
