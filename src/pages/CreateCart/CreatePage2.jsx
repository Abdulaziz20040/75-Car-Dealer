import React from "react";

function CreatePage2() {
  return (
    <div className="container mx-auto">
      <div className="text-start">
        <h3>Dimensions Capacity DTO</h3>
      </div>
      <div>
        <div className="mb-8">
          <label className="text-[15px] font-medium">Length</label>
          <br />
          <input
            type="number"
            className="bg-[#F0F2F5] outline-[#b2b3b4] w-[50%] mt-2 rounded-lg p-4"
          />
        </div>
        <div className="mb-8">
          <label className="text-[15px] font-medium">Height</label>
          <br />
          <input
            type="number"
            className="bg-[#F0F2F5] outline-[#b2b3b4] w-[50%] mt-2 rounded-lg p-4"
          />
        </div>
        <div className="mb-8">
          <label className="text-[15px] font-medium">Wheelbase</label>
          <br />
          <input
            type="number"
            className="bg-[#F0F2F5] outline-[#b2b3b4] w-[50%] mt-2 rounded-lg p-4"
          />
        </div>
        <div className="mb-8">
          <label className="text-[15px] font-medium">
            Height with Roof Rails
          </label>
          <br />
          <input
            type="number"
            className="bg-[#F0F2F5] outline-[#b2b3b4] w-[50%] mt-2 rounded-lg p-4"
          />
        </div>
        <div className="mb-8">
          <label className="text-[15px] font-medium">
            Luggage Capacity (Seats Up)
          </label>
          <br />
          <input
            type="number"
            className="bg-[#F0F2F5] outline-[#b2b3b4] w-[50%] mt-2 rounded-lg p-4"
          />
        </div>
        <div className="mb-8">
          <label className="text-[15px] font-medium">
            Luggage Capacity (Seats Down)
          </label>
          <br />
          <input
            type="number"
            className="bg-[#F0F2F5] outline-[#b2b3b4] w-[50%] mt-2 rounded-lg p-4"
          />
        </div>
        <div className="mb-8">
          <label className="text-[15px] font-medium">Width</label>
          <br />
          <input
            type="number"
            className="bg-[#F0F2F5] outline-[#b2b3b4] w-[50%] mt-2 rounded-lg p-4"
          />
        </div>
        <div className="mb-8">
          <label className="text-[15px] font-medium">
            Width Including Mirrors
          </label>
          <br />
          <input
            type="number"
            className="bg-[#F0F2F5] outline-[#b2b3b4] w-[50%] mt-2 rounded-lg p-4"
          />
        </div>
        <div className="mb-8">
          <label className="text-[15px] font-medium">
            Height Including Mirrors
          </label>
          <br />
          <input
            type="number"
            className="bg-[#F0F2F5] outline-[#b2b3b4] w-[50%] mt-2 rounded-lg p-4"
          />
        </div>
        <div className="mb-8">
          <label className="text-[15px] font-medium">Gross Weight</label>
          <br />
          <input
            type="number"
            className="bg-[#F0F2F5] outline-[#b2b3b4] w-[50%] mt-2 rounded-lg p-4"
          />
        </div>
        <div className="mb-8">
          <label className="text-[15px] font-medium">Max Loading Weight</label>
          <br />
          <input
            type="number"
            className="bg-[#F0F2F5] outline-[#b2b3b4] w-[50%] mt-2 rounded-lg p-4"
          />
        </div>
        <div className="mb-8">
          <label className="text-[15px] font-medium">Max Roof Load</label>
          <br />
          <input
            type="number"
            className="bg-[#F0F2F5] outline-[#b2b3b4] w-[50%] mt-2 rounded-lg p-4"
          />
        </div>
        <div className="mb-8">
          <label className="text-[15px] font-medium">Seats Count</label>
          <br />
          <input
            type="number"
            className="bg-[#F0F2F5] outline-[#b2b3b4] w-[50%] mt-2 rounded-lg p-4"
          />
        </div>
      </div>
      <div>
        <div className="text-start">
          <h3 className="text-[28px] font-normal mb-8">
            Towing Specifications DTO
          </h3>
        </div>
        <div className="mb-8">
          <label className="text-[15px] font-medium">
            Max Towing Weight (Braked)
          </label>
          <br />
          <input
            type="number"
            className="bg-[#F0F2F5] outline-[#b2b3b4] w-[50%] mt-2 rounded-lg p-4"
          />
        </div>
        <div className="mb-8">
          <label className="text-[15px] font-medium">
            Max Towing Weight (Unbraked)
          </label>
          <br />
          <input
            type="number"
            className="bg-[#F0F2F5] outline-[#b2b3b4] w-[50%] mt-2 rounded-lg p-4"
          />
        </div>
        <div className="mb-8">
          <label className="text-[15px] font-medium">Min Kerb Weight</label>
          <br />
          <input
            type="number"
            className="bg-[#F0F2F5] outline-[#b2b3b4] w-[50%] mt-2 rounded-lg p-4"
          />
        </div>
        <div className="mb-8">
          <label className="text-[15px] font-medium">Turning Cycle</label>
          <br />
          <input
            type="number"
            className="bg-[#F0F2F5] outline-[#b2b3b4] w-[50%] mt-2 rounded-lg p-4"
          />
        </div>
      </div>
      <div>
        <div className="mb-8">
          <label className="text-[15px] font-medium">Description</label>
          <br />
          <input
            type="text"
            className="bg-[#F0F2F5] outline-[#b2b3b4] w-[50%] mt-2 rounded-lg p-4"
          />
        </div>
        <div className="mb-8">
          <label className="text-[15px] font-medium">Created At</label>
          <br />
          <input
            type="datetime-local"
            className="bg-[#F0F2F5] outline-[#b2b3b4] w-[50%] mt-2 rounded-lg p-4"
          />
        </div>
        <div className="mb-8">
          <label className="text-[15px] font-medium">Price</label>
          <br />
          <input
            type="number"
            className="bg-[#F0F2F5] outline-[#b2b3b4] w-[50%] mt-2 rounded-lg p-4"
          />
        </div>
        <div className="mb-8">
          <label className="text-[15px] font-medium">Location</label>
          <br />
          <input
            type="text"
            className="bg-[#F0F2F5] outline-[#b2b3b4] w-[50%] mt-2 rounded-lg p-4"
            placeholder="Enter location"
          />
        </div>
        <div className="mb-8">
          <label className="text-[15px] font-medium">Attributes</label>
          <br />
          <textarea className="bg-[#F0F2F5] outline-[#b2b3b4] w-[50%] mt-2 rounded-lg p-4" />
        </div>
      </div>
    </div>
  );
}

export default CreatePage2;
