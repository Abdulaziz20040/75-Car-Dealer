import React, { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const testimonials = [
  {
    title: "Great Work",
    content:
      "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn't on our original designs.",
    author: "Leslie Alexander",
    role: "Facebook",
    image:
      "https://media.nngroup.com/media/people/photos/20211213_Vegas-tanner.jpg.256x256_q75_autocrop_crop-smart_upscale.jpg",
  },
  {
    title: "Awesome Design",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.",
    author: "Jenny Wilson",
    role: "UI/UX Designer",
    image:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Perfect Quality",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.",
    author: "Courtney Henry",
    role: "Software Developer",
    image:
      "https://i.pinimg.com/564x/76/ef/80/76ef80aabceb73ce67b2f7a43d419062.jpg",
  },
  {
    title: "High Standards",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    author: "Darlene Robertson",
    role: "Engineer",
    image:
      "https://plus.unsplash.com/premium_photo-1677231559666-53bed9be43ba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWd5cHRpYW4lMjBtYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Excellent Support",
    content:
      "Sed dignissimos, nisi quis interdum consequat, velit odio pellentesque nulla, id pulvinar risus augue ac mauris.",
    author: "Albert Flores",
    role: "Designer",
    image:
      "https://blogs.nvidia.com/wp-content/uploads/2024/07/sigg24-social-ace-kv-1200x628-1.jpg",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 3 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 3 ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-gray-50 py-16 px-10 rounded-lg ">
      <div className=" flex justify-between items-center mx-auto">
        <h2 className="text-3xl font-bold text-start mb-6">
          What our customers say
        </h2>
        <div className="text-start text-gray-500 mb-8">
          Rated 4.7 / 5 based on 28,370 reviews Showing our 4 & 5 star reviews
        </div>
      </div>
      <div className="relative mx-auto">
        <div className="flex gap-6 overflow-hidden">
          {testimonials
            .slice(currentIndex, currentIndex + 3)
            .map((testimonial, index) => (
              <div
                key={index}
                className="flex-1 p-6 bg-white shadow-lg rounded-lg transition-transform duration-500"
              >
                <div className=" flex justify-between items-center">
                  <h3 className="text-lg font-semibold mb-4">
                    {testimonial.title}
                  </h3>
                  <span className=" text-4xl text-bold">"</span>
                </div>
                <p className="text-gray-500 mb-4">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
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
          {/* lin */}
          <button
            onClick={handleNext}
            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          >
            <RightOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
