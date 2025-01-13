import axios from "axios";
import React, { useEffect, useState } from "react";

function Elon() {
  const [elon, setElon] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [mileses, setMileses] = useState("");
  const [transmis, setTransmis] = useState("");

  // Form submit qilish funksiyasi
  const handleSubmit = (e) => {
    e.preventDefault();

    const newElon = {
      title,
      desc,
      price,
      img,
      mileses,
      transmis,
    };

    axios
      .post("https://df2174b8e5e5a31d.mokky.dev/MEGA_news", newElon)
      .then((res) => {
        console.log("Yangi e'lon:", res.data);
        setElon((prev) =>
          Array.isArray(prev) ? [...prev, res.data] : [res.data]
        );
        clearForm();
      })
      .catch((err) => {
        console.error("E'lonni qo'shishda xato:", err);
      });
  };
  // Formani tozalash funksiyasi
  const clearForm = () => {
    setTitle("");
    setDesc("");
    setPrice("");
    setImg("");
    setMileses("");
    setTransmis("");
  };

  useEffect(() => {
    axios
      .get("https://df2174b8e5e5a31d.mokky.dev/MEGA_news")
      .then((res) => {
        console.log(res.data.news);
        setElon(res.data.news);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="mt-16">
        <h1 className="text-[40px] font-bold">Create an announcement</h1>
      </div>
      <div className="w-[50%]">
        <form className="w-[100%]" onSubmit={handleSubmit}>
          <div className="mt-5">
            <label htmlFor="title" className="text-black mb-4 text-[20px]">
              Title
            </label>
            <br />
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              name="title"
              required
              placeholder={"New car models available"}
              className="w-[50%] p-3 bg-[#E8EDF2] rounded-xl"
            />
          </div>

          <div className="mt-5">
            <label htmlFor="content" className="text-black mb-4 text-[20px]">
              Description
            </label>
            <br />
            <input
              name=""
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              id=""
              className="w-[50%] p-3 bg-[#E8EDF2] rounded-xl"
              placeholder="Description"
            ></input>
          </div>

          <div className="mt-5">
            <label htmlFor="content" className="text-black mb-4 text-[20px]">
              Image
            </label>
            <br />
            <input
              value={img}
              onChange={(e) => setImg(e.target.value)}
              name="image"
              id="image"
              className="w-[50%] p-3 bg-[#E8EDF2] rounded-xl"
              placeholder="Image URL"
            ></input>
          </div>

          <div className="mt-6">
            <label htmlFor="date" className="text-black mb-4 text-[20px]">
              Miles
            </label>
            <br />
            <input
              type="number"
              onChange={(e) => setMileses(e.target.value)}
              value={mileses}
              id="date"
              name="date"
              required
              placeholder={"Enter miles"}
              className="w-[50%] p-3 bg-[#E8EDF2] rounded-xl"
            />
          </div>
          <div className="mt-5 mb-5">
            <label htmlFor="date" className="text-black mb-4 text-[20px]">
              Transmission
            </label>
            <br />
            <select
              style={{ WebkitAppearance: "none" }}
              name="carName"
              value={transmis}
              onChange={(e) => setTransmis(e.target.value)}
              className="w-[50%] p-4 bg-[#F0F2F5] rounded-lg"
            >
              <option value="Select" disabled>
                Select
              </option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
              <option value="Semi-Auto">Semi-Auto</option>
            </select>
          </div>

          <div>
            <label htmlFor="price" className="text-black mb-4 text-[20px]">
              Price
            </label>
            <br />
            <input
              type="number"
              value={price}
              id="price"
              onChange={(e) => setPrice(e.target.value)}
              name="price"
              required
              placeholder={"$"}
              className="w-[50%] p-3 bg-[#E8EDF2] rounded-xl"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-sky-500 text-white w-[20%] p-4 rounded-lg mt-10"
            >
              Add
            </button>
          </div>
        </form>
      </div>

      <div className="w-[50%]">
        <h2 className="text-[30px] font-bold">Announcements</h2>
        {elon &&
          elon.map((item, index) => (
            <div key={index} className="mt-5 p-3 border rounded-lg">
              <h3 className="font-bold text-[20px]">{item.title}</h3>
              <p>{item.desc}</p>
              <img src={item.img} alt={item.title} className="w-[100%]" />
              <p>Miles: {item.mileses}</p>
              <p>Transmission: {item.transmis}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Elon;
