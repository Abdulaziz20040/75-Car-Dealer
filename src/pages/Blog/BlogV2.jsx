import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoArrowUpRight } from "react-icons/go";

function BlogV2() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://df2174b8e5e5a31d.mokky.dev/MEGA_news")
      .then((res) => {
        setPosts(res.data || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API request error: ", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row justify-between mt-10">
      {/* Chap tomoni scrollable */}
      <div className="w-full lg:w-[65%] h-[82vh] hide-scrollbar bg-white p-4">
        {posts.length > 0 ? (
          posts.map((item, index) => (
            <div key={index} className="py-4 -mt-6 mb-8">
              <img
                src={item.img || "https://via.placeholder.com/500"}
                alt={item.title || "Placeholder"}
                className="w-full h-[400px] md:h-[368px] rounded-xl object-cover mb-3"
              />

              <div className="flex gap-2">
                <h2 className="text-gray-600">{item.author || "Admin"}</h2>
                <p className="text-gray-600">{item.postDate || "No date"}</p>
              </div>

              <h1 className="text-2xl font-semibold mb-3">
                {item.title || "No title"}
              </h1>

              <p className="text-gray-600 mb-4 line-clamp-2">
                {item.desc || "No description available"}
              </p>

              <button className="flex items-center gap-2">
                Read More <GoArrowUpRight />
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center mt-10">No posts available</p>
        )}
      </div>

      {/* O'ng tomon Informatsiyalar */}
      <div className="w-full lg:w-[30%]  p-4  sticky lg:top-0 top-0 h-auto">
        {/* Kategoriyalar */}
        <div className="mb-4 shadow-sm border rounded-xl p-4 h-[250px] hide-scrollbar">
          <h2 className="text-lg font-semibold mb-2">Categories</h2>
          <ul>
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <li
                  key={index}
                  className="text-gray-600 mb-1 hover:text-gray-900 cursor-pointer"
                >
                  {category}
                </li>
              ))
            ) : (
              <li className="text-gray-400">No categories</li>
            )}
          </ul>
        </div>

        {/* Teglar */}
        <div className="mb-4 border shadow-sm rounded-xl p-4 h-[230px] hide-scrollbar">
          <h2 className="text-lg font-semibold mb-2">Tags</h2>
          <ul className="flex gap-2 flex-wrap">
            {tags.length > 0 ? (
              tags.map((tag, index) => (
                <li
                  key={index}
                  className="p-2 bg-green-300 text-black rounded-lg cursor-pointer"
                >
                  #{tag}
                </li>
              ))
            ) : (
              <li className="text-gray-400">No tags</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BlogV2;
