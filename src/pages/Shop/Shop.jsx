import React, { useEffect, useState } from "react";
import axios from "axios";
import { Slider, Spin, Select, Pagination } from "antd";
import { GoArrowUpRight } from "react-icons/go";
import "../../styles/App.css";

const { Option } = Select;

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([30, 500]);

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(12);

  const categories = [
    { name: "Accessories", count: 8 },
    { name: "Body Kit", count: 4 },
    { name: "Exterior", count: 3 },
    { name: "Interior", count: 6 },
    { name: "Oils & Filters", count: 2 },
    { name: "Sound", count: 3 },
    { name: "Wheels", count: 7 },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://df2174b8e5e5a31d.mokky.dev/MEGA_news"
        );
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const onPriceChange = (value) => {
    setPriceRange(value);
    const filtered = products.filter(
      (product) => product.price >= value[0] && product.price <= value[1]
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredProducts.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className=" p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Shop</h1>
      <div className="flex  ">
        {/* Left Sidebar */}
        <div className="w-1/4 rounded-lg sticky top-4 ">
          <div className="rounded-lg border p-4 mb-6 bg-white">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <div className="space-y-2">
              {categories.map((cat, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{cat.name}</span>
                  <span className="text-gray-500">({cat.count})</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border p-4 bg-white">
            <h2 className="text-xl font-semibold mb-4">Prices</h2>
            <Slider
              range
              min={30}
              max={500}
              defaultValue={[30, 500]}
              onChange={onPriceChange}
              value={priceRange}
            />
          </div>
        </div>

        {/* Right Section - Products Grid */}
        <div className="w-3/4 pl-6">
          <div className="flex items-center justify-between mb-4">
            <p>
              Showing {indexOfFirstCard + 1} –{" "}
              {Math.min(indexOfLastCard, filteredProducts.length)} of{" "}
              {filteredProducts.length} results
            </p>
            <Select defaultValue="Default" style={{ width: 120 }}>
              <Option value="Default">Default</Option>
              <Option value="PriceLowHigh">Price: Low to High</Option>
              <Option value="PriceHighLow">Price: High to Low</Option>
            </Select>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Spin size="large" />
            </div>
          ) : (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 hide-scrollbar h-[70vh]"
              style={{ maxHeight: "calc(100vh - 6rem)" }}
            >
              {currentCards.map((product) => (
                <div className="relative w-[300px] bg-white rounded-xl shadow-md flex flex-col">
                  {/* Image */}
                  <img
                    src={product.img || "https://via.placeholder.com/300"}
                    alt={product.name || "Product Image"}
                    className="w-full h-40 object-cover rounded-t-xl mb-4"
                  />

                  {/* Product Info */}
                  <div className="px-5 pb-5">
                    <h2 className="text-lg font-semibold mb-1">
                      {product.name || "Product Name"}
                    </h2>
                    <p className="text-gray-600 mb-2">
                      {product.description || "Product Description"}
                    </p>

                    {/* Horizontal Line */}
                    <hr className="my-2" />

                    {/* Details */}

                    {/* Horizontal Line */}
                    <hr className="my-2" />

                    {/* Price and View Details */}
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-semibold">
                        ${product.price || "999.99"}
                      </span>
                      <button className="text-blue-500 flex items-center gap-1 hover:underline">
                        View Details
                        <GoArrowUpRight className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center mt-4">
            <Pagination
              current={currentPage}
              total={filteredProducts.length}
              pageSize={cardsPerPage}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
