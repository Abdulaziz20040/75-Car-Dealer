import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios";

const BrandSlider = () => {
  const [brands, setBrands] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://16.171.243.1:8080/car-dealer/brand/getAllBrands")
      .then((response) => setBrands(response.data))
      .catch((error) => console.error("Error fetching brands:", error));
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + brands.length) % brands.length
    );
  };

  return (
    <div className="container mx-auto pt-20 relative">
      <div className="text-start mb-5">
        <h2 className="text-[35px] font-medium">Explore Our Premium Brands</h2>
      </div>
      <div className="relative flex items-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 bg-gray-200 p-2 rounded-full"
        >
          <FaChevronLeft size={24} />
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full overflow-hidden">
          {brands.slice(currentIndex, currentIndex + 4).map((item) => (
            <div
              key={item.id}
              className="text-center flex flex-col justify-center items-center border bg-white w-full h-[200px] rounded-lg shadow-lg cursor-pointer"
              onClick={() => navigate(`/allbrend?brand=${item.name}`)}
            >
              <img
                src={item.imgs}
                alt={item.name}
                className="w-[75px] h-[75px]"
              />
              <h3 className="mt-3 text-lg font-semibold">{item.name}</h3>
            </div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 bg-gray-200 p-2 rounded-full"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default BrandSlider;
