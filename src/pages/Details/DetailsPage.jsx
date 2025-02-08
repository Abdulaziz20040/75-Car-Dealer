import React, { useState } from "react";
import "../Details/details.css";

const categories = [
  "Comfort",
  "Exterior Styling",
  "Performance",
  "Interior Design",
  "Value For The Money",
  "Reliability",
];

function DetailsPage() {
  const [rating, setRating] = useState(3); // Default rating 3
  const [ratings, setRatings] = useState({
    Comfort: 0,
    "Exterior Styling": 0,
    Performance: 0,
    "Interior Design": 0,
    "Value For The Money": 0,
    Reliability: 0,
  });

  const [submittedRatings, setSubmittedRatings] = useState(null);

  // O'rtacha baho hisoblash
  const calculateAverage = (ratings) => {
    const total = Object.values(ratings).reduce((acc, curr) => acc + curr, 0);
    return (total / Object.values(ratings).length).toFixed(1);
  };

  // Yulduzlarni render qilish
  const renderStars = (category, rating) => {
    return (
      <div>
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            style={{
              color: index < rating ? "#405FF2" : "#E9F2FF",
              cursor: "pointer",
              fontSize: "20px",
            }}
            onClick={() =>
              setRatings((prev) => ({ ...prev, [category]: index + 1 }))
            }
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  const [formData, setFormData] = useState({
    comment: "",
  });

  const postRating = async (ratings) => {
    try {
      const response = await fetch(
        "https://9964742dd22bea27.mokky.dev/selects",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ratings),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to post ratings");
      }

      const data = await response.json();
      console.log("Ratings successfully posted:", data);
    } catch (error) {
      console.error("Error posting ratings:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postRating(ratings);
    setSubmittedRatings(ratings); // submittedRatings ga ratingsni saqlash // Yulduzlarni boshlang'ich holatiga qaytarish
    setRatings({
      Comfort: 0,
      "Exterior Styling": 0,
      Performance: 0,
      "Interior Design": 0,
      "Value For The Money": 0,
      Reliability: 0,
    });
    setRating(3); // umumiy bahoni boshlang'ich holatiga qaytarish
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto">
      <div className="mt-32">
        <div>
          <h2 className="text-start text-3xl mx-5 mb-16"> 1 Review</h2>
        </div>
        {submittedRatings && (
          <div className="mt-[30px]">
            {/* Umumiy baho doirasi */}
            <div className="grid grid-cols-4">
              <div className="col-span-1 flex flex-col items-center">
                <div className="progress-container">
                  <div
                    className="circle-progress"
                    style={{
                      background: `conic-gradient(
                        #405FF2 ${
                          (calculateAverage(submittedRatings) / 5) * 100
                        }%,
                        #E9F2FF ${
                          (calculateAverage(submittedRatings) / 5) * 100
                        }%
                      )`,
                    }}
                  >
                    {calculateAverage(submittedRatings)}
                  </div>
                </div>

                <div className="cetner">
                  {calculateAverage(submittedRatings)}
                  <span className="rating-text">/ 5</span>
                </div>
              </div>

              <div className="col-span-3">
                <ul className="grid grid-cols-2 gap-11">
                  {Object.keys(submittedRatings).map((category) => (
                    <div
                      key={category}
                      className="flex justify-between gap-[30px] border-b-[1px]"
                    >
                      <div className="flex justify-between w-full items-center">
                        <p>{category}</p>
                        <p>
                          <span className="text-[#405FF2]">★</span>{" "}
                          {submittedRatings[category]}.0
                        </p>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="p-4 ">
          <div className="flex justify-start mb-5 gap-11 mt-16 items-center">
            <img src="http://placehold.it/" alt="user" />
            <p>John</p>
            <p>2023-04-10</p>
          </div>
          <div className="flex justify-start mb-5 gap-3 items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`star ${index < rating ? "active" : ""}`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                onClick={() => setRating(index + 1)} // Yulduz bosilganda o'rnatiladi
              >
                <path
                  fill={index < rating ? "#405FF2" : "#e6e6e6"} // Faol yulduz sariq bo'ladi
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            ))}
          </div>
          <div className="flex justify-start w-[50%] text-start">
            <h5>
              Etiam sit amet ex pharetra, venenatis ante vehicula, gravida
              sapien. Fusce eleifend vulputate nibh, non cursus augue placerat
              pellentesque. Sed venenatis risus nec felis mollis,
            </h5>
          </div>
        </div>

        <div>
          <h2 className="text-start mt-14 mb-14 text-[30px] font-semibold">
            Add a review
          </h2>
          <div className="">
            <div className="grid grid-cols-2 justify-between gap-5">
              {categories.map((category) => (
                <div
                  key={category}
                  className="flex justify-between border-b w-96 border-gray-300 py-2"
                >
                  <div className="text-left">{category}</div>
                  <div>{renderStars(category, ratings[category])}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-start items-center gap-3 mt-11">
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleInputChange}
              rows={10}
              cols={84}
              className="p-3 rounded-xl outline-none border-[1px] border-gray-300"
            />
          </div>
        </div>

        <div className="flex justify-start items-center gap-3 mt-11">
          <button
            type="submit"
            className="rounded-xl px-12 py-2 text-white bg-[#405FF2] hover:bg-[#243866]"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
}

export default DetailsPage;
