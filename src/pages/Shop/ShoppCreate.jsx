import React from "react";

function ShoppCreate() {
  // sign in bo'gandan keyingi pagelar

  return (
    <div className="container">
      <div className="mt-16">
        <h1 className="text-4xl font-bold mb-5">Create a Shopping Cart</h1>
      </div>
      <div>
        <form>
          <label htmlFor="name" className="font-bold">
            Name
          </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-[50%] p-3 bg-[#E8EDF2] rounded-xl"
          />
          {/* ////// */}
          <div className="mt-5">
            <label htmlFor="description" className="font-bold">
              Description
            </label>
            <br />
            <input
              type="text"
              id="description"
              name="description"
              required
              className="w-[50%] p-3 bg-[#E8EDF2] rounded-xl"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-sky-500 text-white w-[20%] p-4 rounded-lg mt-10"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ShoppCreate;
