import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { useParams } from "react-router-dom";

function DetailsPage2() {
  const { id } = useParams();
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://16.171.243.1:8080/car-dealer/announcement/${id}`,
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        // Agar API muvaffaqiyatli bo'lsa, javobni saqlaymiz
        if (response.data.success) {
          setApiResponse(response.data.data);
        } else {
          setError(response.data.message || "Unexpected error occurred.");
        }
      } catch (err) {
        console.error("API fetch error:", err);
        setError("Failed to fetch details.");
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!apiResponse) {
    return <div>Loading...</div>;
  }

  const { car, description, price, savedBy, user } = apiResponse;

  // const [engineTr, setEngineTr] = useState([
  //   {
  //     name: "Fuel Tank Capacity (Litres)",
  //     values: 100,
  //   },
  //   {
  //     name: "Max. Towing Weight - Braked (kg)",
  //     values: 1200,
  //   },
  //   {
  //     name: "Max. Towing Weight - Unbraked (kg)",
  //     values: 1500,
  //   },
  //   {
  //     name: "Minimum Kerbweight (kg)",
  //     values: 1150,
  //   },
  //   {
  //     name: "Max. Fuel Efficiency (km/L)",
  //     values: 12,
  //   },
  // ]);

  return (
    <>
      <div className=" container p-3 m-auto">
        <div className="mt-[85px] mb-[85px] border-b-[1px]"></div>
        {/* Desc */}
        <div className="text-start mb-14">
          <h2 className="text-[30px] mb-10 font-normal">Description</h2>
          <p className="text-[17px] leading-8">
            Quisque imperdiet dignissim enim dictum finibus. Sed consectetutr
            convallis enim eget laoreet. Aenean vitae nisl mollis, porta risus
            vel, dapibus lectus. Etiam ac suscipit eros, eget maximus
          </p>
          <br />
          <p className="text-[17px] leading-8">
            Etiam sit amet ex pharetra, venenatis ante vehicula, gravida sapien.
            Fusce eleifend vulputate nibh, non cursus augue placerat
            pellentesque. Sed venenatis risus nec felis mollis, in pharetra urna
            euismod. Morbi aliquam ut turpis sit amet ultrices. Vestibulum
            mattis blandit nisl, et tristique elit scelerisque nec. Fusce
            eleifend laoreet dui eget aliquet. Ut rutrum risus et nunc pretium
            scelerisque.
          </p>
        </div>
        {/* Line */}
        <div className="mt-14 mb-14 border-b-[1px]"></div>
        {/* Line */}

        {/* Features */}
        <div className="mb-14">
          <h2 className="text-start text-[30px] font-medium mt-10 mb-[45px]">
            Features
          </h2>
          <div class="grid grid-cols-4 mt-8">
            <div class="mb-5 text-start">
              <h3 class="text-[22px] mb-9 font-medium">Interior</h3>
              <ul class="text-start">
                {car.interiorFeature.map((item) => (
                  <div class="flex justify-start items-center gap-5 mb-6">
                    <>
                      <div class="bg-[#E9F2FF] p-[8px] rounded-full">
                        <FaCheck size={13} color="#405FF2" />
                      </div>

                      <li>{item}</li>
                    </>
                  </div>
                ))}
              </ul>
            </div>
            <div class="mb-5 text-start">
              <h3 class="text-[22px] mb-9 font-medium">Safety</h3>
              <ul class="text-start">
                {car.safetyFeature.map((item) => (
                  <div class="flex justify-start items-center gap-5 mb-6">
                    <div class="bg-[#E9F2FF] p-[8px] rounded-full">
                      <FaCheck size={13} color="#405FF2" />
                    </div>
                    <li>{item}</li>
                  </div>
                ))}
              </ul>
            </div>
            <div class="mb-5 text-start">
              <h3 class="text-[22px] mb-9 font-medium">Exterior</h3>
              <ul class="text-start">
                {car.interiorFeature.map((item) => (
                  <div class="flex justify-start items-center gap-5 mb-6">
                    <div class="bg-[#E9F2FF] p-[8px] rounded-full">
                      <FaCheck size={13} color="#405FF2" />
                    </div>
                    <li>{item}</li>
                  </div>
                ))}
              </ul>
            </div>
            <div class="mb-5 text-start">
              <h3 class="text-[22px] mb-9 font-medium">
                Comfort & Convenience
              </h3>
              <ul class="text-start">
                {car.comfortFeature.map((item) => (
                  <div class="flex justify-start items-center gap-5 mb-6">
                    <div class="bg-[#E9F2FF] p-[8px] rounded-full">
                      <FaCheck size={13} color="#405FF2" />
                    </div>
                    <li>{item}</li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr />
        {/* Dimensions & Capacity */}
        <div className="mb-28">
          <div>
            <h2 className="text-start text-[30px] mt-14">
              Dimensions & Capacity
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-10 mt-11">
            <div className="text-start">
              <p className="font-normal">Length</p>
            </div>
            <div className="text-start">
              <p>{car.dimensionsCapacityDTO.length}</p>
            </div>
            <div className="text-start">
              <p className="font-normal">Height</p>
            </div>
            <div className="text-start">
              <p>{car.dimensionsCapacityDTO.height}</p>
            </div>
            <div className="text-start">
              <p className="font-normal">Wheelbase</p>
            </div>
            <div className="text-start">
              <p>{car.dimensionsCapacityDTO.wheelbase}</p>
            </div>
            <div className="text-start">
              <p className="font-normal">Height (including roof rails)</p>
            </div>
            <div className="text-start">
              <p>{car.dimensionsCapacityDTO.heightIncludingMirrors}</p>
            </div>
            <div className="text-start">
              <p className="font-normal">
                Luggage Capacity (Seats Up – Litres)
              </p>
            </div>
            <div className="text-start">
              <p>{car.dimensionsCapacityDTO.luggageCapacitySeatsUp}</p>
            </div>
            <div className="text-start">
              <p className="font-normal">
                Luggage Capacity (Seats Down – Litres)
              </p>
            </div>
            <div className="text-start">
              <p>{car.dimensionsCapacityDTO.luggageCapacitySeatsDown}</p>
            </div>
            <div className="text-start">
              <p className="font-normal">Width</p>
            </div>
            <div className="text-start">
              <p>{car.dimensionsCapacityDTO.width}</p>
            </div>
            <div className="text-start">
              <p className="font-normal">Width (including mirrors)</p>
            </div>
            <div className="text-start">
              <p>{car.dimensionsCapacityDTO.widthIncludingMirrors}</p>
            </div>
            <div className="text-start">
              <p className="font-normal">Gross Vehicle Weight (kg)</p>
            </div>
            <div className="text-start">
              <p>{car.dimensionsCapacityDTO.grossWeight}</p>
            </div>
            <div className="text-start">
              <p className="font-normal">Max. Loading Weight (kg)</p>
            </div>
            <div className="text-start">
              <p>{car.dimensionsCapacityDTO.maxLoadingWeight}</p>
            </div>
            <div className="text-start">
              <p className="font-normal">Max. Roof Load (kg)</p>
            </div>
            <div className="text-start">
              <p>{car.dimensionsCapacityDTO.maxRoofLoad}</p>
            </div>
            <div className="text-start">
              <p className="font-normal">Count of Seats</p>
            </div>
            <div className="text-start">
              <p>{car.dimensionsCapacityDTO.seatsCount}</p>
            </div>
          </div>
        </div>
        <hr />

        {/* Engine and Transmission */}
        <div className="mb-10">
          <div className="mb-10">
            <div className="grid grid-cols-1 gap-11 text-start">
              <h2 className="text-[30px] mt-14">Transmission</h2>
            </div>
            <div className="grid grid-cols-4 gap-8 mt-11">
              <div className="text-start">Max. Towing Weight - Braked (kg)</div>
              <div className="text-start">
                {car.towingSpecificationsDTO.maxTowingWeightBraked}
              </div>
              <div className="text-start">
                Max. Towing Weight - Unbraked (kg)
              </div>
              <div className="text-start">
                {car.towingSpecificationsDTO.maxTowingWeightUnBraked}
              </div>
              <div className="text-start">Max. Fuel Efficiency (km/L)</div>
              <div className="text-start">
                {car.towingSpecificationsDTO.turningCycle}
              </div>
              <div className="text-start">Minimum Kerbweight (kg)</div>
              <div className="text-start">
                {car.towingSpecificationsDTO.minKerbWeight}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="grid grid-cols-1 text-start">
            <h2 className="text-[30px] mt-14">Engine</h2>
          </div>
          <div className="grid grid-cols-4 gap-x-5 mt-11">
            <div className="text-start mb-10">
              <p>Fuel Tank Capacity (Litres)</p>
            </div>
            <div className="text-start mb-10">{car.engineDTO.fuelTank}</div>
          </div>
        </div>
        {/* Location */}
        <section className="relative w-[900px] h-[500px] mb-20">
          <div className="mt-14 mb-16">
            <h3 className="text-[30px]">Location</h3>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.222411834225!2d69.2261602759826!3d41.32577677130783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bb7a0ebbae3%3A0xf9e01b5d45fc68cd!2sPDP%20Academy!5e0!3m2!1sru!2s!4v1734512223174!5m2!1sru!2s"
            className="w-full h-full rounded-xl"
            loading="lazy"
            title="map"
          ></iframe>
        </section>
      </div>
    </>
  );
}

export default DetailsPage2;
