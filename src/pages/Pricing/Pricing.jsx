import React, { useState } from "react";
import { Button } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

const plans = [
  {
    title: "Basic Plan",
    price: 29,
    features: [
      "50 Listings",
      "120 Days Visibility",
      "Highlighted in Search Results",
      "3 Revisions",
      "7 Days Delivery Time",
      "Products Support",
    ],
  },
  {
    title: "Standard Plan",
    price: 39,
    features: [
      "60 Listings",
      "150 Days Visibility",
      "Highlighted in Search Results",
      "3 Revisions",
      "7 Days Delivery Time",
      "Products Support",
    ],
  },
  {
    title: "Extended Plan",
    price: 89,
    features: [
      "80 Listings",
      "200 Days Visibility",
      "Highlighted in Search Results",
      "3 Revisions",
      "7 Days Delivery Time",
      "Products Support",
    ],
  },
  {
    title: "Enterprise Plan",
    price: 129,
    features: [
      "100 Listings",
      "365 Days Visibility",
      "Highlighted in Search Results",
      "3 Revisions",
      "7 Days Delivery Time",
      "Products Support",
    ],
  },
];

const Pricing = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-10 text-black">
        Membership Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className={`border rounded-xl shadow-lg p-8 cursor-pointer ${
              activeIndex === index
                ? "bg-blue-600 text-white"
                : "bg-white text-black"
            }`}
          >
            <h3
              className={`text-2xl font-bold ${
                activeIndex === index ? "text-white" : "text-black"
              }`}
            >
              ${plan.price}
            </h3>
            <h4
              className={`text-lg mb-4 ${
                activeIndex === index ? "text-gray-200" : "text-gray-600"
              }`}
            >
              {plan.title}
            </h4>
            <ul className="space-y-2 mb-10 text-left">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircleOutlined
                    className={
                      activeIndex === index ? "text-white" : "text-blue-500"
                    }
                  />
                  <span
                    className={`${
                      activeIndex === index ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <Button
              type="default"
              className={`w-full font-bold ${
                activeIndex === index
                  ? "bg-white text-blue-600 border-none hover:text-blue-700"
                  : "text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
              size="large"
            >
              Add To Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
