import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";

const { Option } = Select;

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // LocalStorage'dan emailni o'qish
  useEffect(() => {
    const storageauthToken = localStorage.getItem("authToken");
    if (storageauthToken) {
      setIsLoggedIn(true); // Login holatini yangilash
    }
  }, []);
  const navigate = useNavigate();

  // Handle category change
  const handleCategoryChange = (value) => {
    navigate(`/${value}`);
  };

  return (
    <nav className="bg-white fixed w-full z-10">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/">
            <img
              className="w-[100px]"
              src="https://res.cloudinary.com/roastcollective/image/upload/v1/roasters/logos/BOX_2x.png"
              alt="BoxCars"
            />
          </Link>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to={"/Home-1"}>
            <h1>Home</h1>
          </Link>

          <Link to={"/Listings"}>
            <h1>Listings</h1>
          </Link>
          {/* Blog Select */}
          <Select
            onChange={handleCategoryChange}
            defaultValue="blog-v1"
            className="text-center"
            bordered={false} // Ant Design xususiyati bilan borderni o'chiramiz
            dropdownStyle={{ zIndex: 1050 }}
            style={{
              boxShadow: "none", // Shadowni o'chiramiz
              backgroundColor: "transparent", // Orqa fonni shaffof qilish
              padding: 0,
            }}
          >
            <Option value="blog">Blog</Option>
            <Option value="blog-v1">Blog v1</Option>
            <Option value="blog-v2">Blog v2</Option>
          </Select>

          {/* Pages Select */}
          <Select
            onChange={handleCategoryChange}
            defaultValue="blog-v1"
            className="text-center"
            bordered={false} // Ant Design xususiyati bilan borderni o'chiramiz
            dropdownStyle={{ zIndex: 1050 }}
            style={{
              boxShadow: "none", // Shadowni o'chiramiz
              backgroundColor: "transparent", // Orqa fonni shaffof qilish
              padding: 0,
            }}
          >
            <Option value="pags">Pages</Option>
            <Option value="ShopPage">Shop Page</Option>
            <Option value="faqssPage">FAQs Page</Option>
            <Option value="loanCalculator">Loan Calculator</Option>
            <Option value="pricingPage">Pricing Page</Option>
            <Option value="ServicesPage">Services Page</Option>
            <Option value="elon">E'lon</Option>
            <Option value="createBlog">Create-Blog</Option>
          </Select>

          {/* Buttons */}
          <Link to="/about">
            <button className="text-gray-800 hover:text-indigo-500">
              About
            </button>
          </Link>
          <Link to="/contact">
            <button className="text-gray-800 hover:text-indigo-500">
              Contact
            </button>
          </Link>
          {isLoggedIn ? (
            <Link to="/profile">
              <button className="text-gray-800 flex gap-2 items-center hover:text-indigo-500">
                <CiUser /> Profile
              </button>
            </Link>
          ) : (
            <Link to="/signin">
              <button className="text-gray-800 flex gap-2 items-center hover:text-indigo-500">
                <CiUser /> Sign In
              </button>
            </Link>
          )}

          <Link to="/createCartS">
            <button className="bg-white px-4 py-2 rounded-xl border border-black">
              Submit Listing
            </button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
