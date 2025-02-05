import React, { useEffect, useState } from "react";
import axios from "axios";
function CreateCartS() {
  // useState hooks
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState(null);
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [mileage, setMileage] = useState(null);
  const [address, setAddress] = useState("");
  const [condition, setCondition] = useState("");
  const [fuel, setFuel] = useState("");
  const [transmission, setTransmission] = useState("");

  // interior
  const [leatherSeats, setLeatherSeats] = useState(false);
  const [heatedSeats, setHeatedSeats] = useState(false);
  const [ventilatedSeats, setVentilatedSeats] = useState(false);
  const [premiumAudio, setPremiumAudio] = useState(false);
  const [multiZoneClimateControl, setMultiZoneClimateControl] = useState(false);
  const [ambientLighting, setAmbientLighting] = useState(false);
  const [powerAdjustableSeats, setPowerAdjustableSeats] = useState(false);
  const [digitalDisplay, setDigitalDisplay] = useState(false);
  const [wirelessCharging, setWirelessCharging] = useState(false);
  const [sunshade, setSunshade] = useState(false);

  // safety
  const [airbags, setAirbags] = useState(false);
  const [abs, setAbs] = useState(false);
  const [laneDepartureWarning, setLaneDepartureWarning] = useState(false);
  const [adaptiveCruiseControl, setAdaptiveCruiseControl] = useState(false);
  const [emergencyBraking, setEmergencyBraking] = useState(false);
  const [blindSpotMonitor, setBlindSpotMonitor] = useState(false);
  const [rearViewCamera, setRearViewCamera] = useState(false);
  const [tractionControl, setTractionControl] = useState(false);
  const [parkingSensors, setParkingSensors] = useState(false);
  const [tirePressureMonitoring, setTirePressureMonitoring] = useState(false);

  // exterior
  const [ledHeadlights, setLedHeadlights] = useState(null);
  const [alloyWheels, setAlloyWheels] = useState(null);
  const [panoramicSunroof, setPanoramicSunroof] = useState(null);
  const [powerLiftgate, setPowerLiftgate] = useState(null);
  const [roofRails, setRoofRails] = useState(null);
  const [tintedWindows, setTintedWindows] = useState(null);
  const [chromeTrim, setChromeTrim] = useState(null);
  const [powerFoldingMirrors, setPowerFoldingMirrors] = useState(null);
  const [rearSpoiler, setRearSpoiler] = useState(null);
  const [fogLights, setFogLights] = useState(null);

  // comfort
  const [keylessEntry, setKeylessEntry] = useState(null);
  const [pushButtonStart, setPushButtonStart] = useState(null);
  const [remoteStart, setRemoteStart] = useState(null);
  const [heatedSteeringWheel, setHeatedSteeringWheel] = useState(null);
  const [autoDimmingMirror, setAutoDimmingMirror] = useState(null);
  const [handsFreeLiftgate, setHandsFreeLiftgate] = useState(null);
  const [powerWindows, setPowerWindows] = useState(null);
  const [electricParkingBrake, setElectricParkingBrake] = useState(null);
  const [smartphoneIntegration, setSmartphoneIntegration] = useState(null);
  const [usbPorts, setUsbPorts] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      make,
      model,
      year,
      image,
      color,
      price,
      mileage,
      address,
      condition,
      interior: [
        leatherSeats || [],
        heatedSeats || [],
        ventilatedSeats || [],
        premiumAudio || [],
        multiZoneClimateControl || [],
        ambientLighting || [],
        powerAdjustableSeats || [],
        digitalDisplay || [],
        wirelessCharging || [],
        sunshade || [],
      ],
      exterior: [
        ledHeadlights || [],
        alloyWheels || [],
        panoramicSunroof || [],
        powerLiftgate || [],
        roofRails || [],
        tintedWindows || [],
        chromeTrim || [],
        powerFoldingMirrors || [],
        rearSpoiler || [],
        fogLights || [],
      ],
      safety: [
        airbags || [],
        abs || [],
        laneDepartureWarning || [],
        adaptiveCruiseControl || [],
        emergencyBraking || [],
        blindSpotMonitor || [],
        rearViewCamera || [],
        tractionControl || [],
        parkingSensors || [],
        tirePressureMonitoring || [],
      ],
      comfort: [
        keylessEntry || [],
        pushButtonStart || [],
        remoteStart || [],
        heatedSteeringWheel || [],
        autoDimmingMirror || [],
        handsFreeLiftgate || [],
        powerWindows || [],
        electricParkingBrake || [],
        smartphoneIntegration || [],
        usbPorts || [],
      ],
    };
    axios.post("https://9964742dd22bea27.mokky.dev/model", obj).then((res) => {
      console.log(res.data);
    });
  };

  const [getBrand, setGetBrand] = useState([]);
  const [getModel, setGetModel] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [carValues, setCarValues] = useState([]);
  console.log(Array.isArray(carValues));
  useEffect(() => {
    axios
      .get("http://16.171.243.1:8080/car-dealer/brand/getAllBrands")
      .then((res) => {
        setGetBrand(res.data.data || []);
      })
      .catch((err) => console.error("Brandlarni olishda xato:", err));
  }, []);

  useEffect(() => {
    if (selectedBrand) {
      axios
        .get(
          `http://16.171.243.1:8080/car-dealer/model/getAllModels/${selectedBrand}`
        )
        .then((res) => {
          setGetModel(res.data.data || []);
        })
        .catch((err) => console.error("Modellarni olishda xato:", err));
    }
  }, [selectedBrand]);

  useEffect(() => {
    axios
      .get("http://16.171.243.1:8080/car-dealer/values/allCarValues")
      .then((res) => {
        console.log(res.data.data);
        setCarValues(res.data.data);
      })
      .catch((err) => {
        console.error("Car valuelarini olishda xato:", err);
      });
  }, []);

  return (
    <div className="container mx-auto p-3 mt-16">
      <div>
        <h2 className="text-4xl mb-11 font-bold">Tell us about your car</h2>
      </div>
      <div>
        <form className=" w-[100%]" onSubmit={onSubmit}>
          {/* Brand car */}
          <div className="mb-8">
            <label className="text-[15px] font-medium">Brand</label>
            <br />
            <select
              required
              className="w-[50%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              <option value="" disabled>
                Choose a car
              </option>
              {getBrand.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </select>
          </div>

          {/* Model */}
          <div className="mb-8">
            <label className="text-[15px] font-medium">Model</label>
            <br />
            <select
              required
              className="w-[50%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
            >
              <option value="" disabled>
                Choose a model
              </option>
              {getModel.length > 0 ? (
                getModel.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.name}
                  </option>
                ))
              ) : (
                <option disabled>Hech qanday model topilmadi</option>
              )}
            </select>
          </div>

          {/* Image */}
          <div className="mb-8">
            <label className=" text-[15px] font-medium">Images</label>
            <br />
            <input
              type="text"
              className="mt-5 p-4 gap-5 rounded-xl w-[50%] bg-[#F0F2F5]"
              onChange={(e) => setImage(e.target.files)}
            />
          </div>

          {/* Year */}
          <div className="mb-8">
            <label className=" text-[15px] font-medium">Year</label>
            <br />
            <input
              type="number"
              className="bg-[#F0F2F5] outline-[#b2b3b4] w-[50%] mt-2 rounded-lg p-4"
              onClick={(e) => setYear(e.target.value)}
            />
          </div>

          {/* Color */}
          <div className="mb-8">
            <label className=" text-[15px] font-medium">Color</label>
            <br />
            <select
              required
              className="w-[50%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
              onChange={(e) => setColor(e.target.value)}
            >
              <option
                value="Choose the Color"
                disabled
                className="text-gray-200"
              >
                Choose the Color
              </option>
              {Array.isArray(carValues) &&
                carValues.map((item, index) => (
                  <option
                    key={index}
                    value={item.color}
                    className="text-gray-200"
                  >
                    {item.color}
                  </option>
                ))}
            </select>
          </div>

          {/* Price */}
          <div className="mb-8">
            <label className=" text-[15px] font-medium">Price</label>
            <br />
            <input
              type="number"
              className="bg-[#F0F2F5] outline-[#b2b3b4] w-[50%] mt-2 rounded-lg p-4"
              placeholder="Enter price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          {/* Mileage */}
          <div className="mb-8">
            <label className=" text-[15px] font-medium">Mileage</label>
            <br />
            <input
              type="number"
              className="bg-[#F0F2F5] outline-[#b2b3b4] w-[50%] mt-2 rounded-lg p-4"
              placeholder="Enter mileage"
              onChange={(e) => setMileage(e.target.value)}
            />
          </div>

          {/* Fuel */}
          {/* <div className="mb-8">
            <label className=" text-[15px] font-medium">Fuel</label>
            <br />
            <select
              className="w-[50%] outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
              onChange={(e) => setFuel(e.target.value)}
            >
              <option className="text-gray-200" disabled value="Choose">
                Choose
              </option>
              {carValues &&
                carValues.map((item, index) => (
                  <option
                    key={index}
                    className="text-gray-600"
                    value={item.fuel}
                  >
                    {item.fuel}
                  </option>
                ))}
            </select>
          </div> */}
          <div className="mb-8">
            <label className="text-[15px] font-medium">Fuel</label>
            <br />
            <select
              className="w-[50%] outline outline-1 outline-[#F0F2F5] p-4 text-gray-600 mt-2 rounded-lg bg-[#F0F2F5]"
              onChange={(e) => setFuel(e.target.value)}
            >
              <option value="Choose">Choose</option>
              {carValues &&
                carValues.fuel.map((item, index) => (
                  <option key={index} value={item} className="text-gray-200">
                    {item}
                  </option>
                ))}
            </select>
          </div>
          {/* Condition */}
          <div>
            <label className="text-[15px] font-medium">Condition</label>
            <br />
            <div className="flex justify-start mt-5 p-4 gap-5 rounded-xl w-[100%] border-2 border-[#DBDEE5]">
              <input
                type="radio"
                value="New"
                id="newUser"
                name="userType"
                onChange={(e) => setCondition(e.target.value)}
              />
              <label className="text-[17px]" htmlFor="newUser">
                New
              </label>
            </div>
            <div className="flex mt-8 justify-start p-4 gap-5 rounded-xl w-[100%] border-2 border-[#DBDEE5]">
              <input
                type="radio"
                value="Used"
                onChange={(e) => setCondition(e.target.value)}
                id="usedFor"
                name="userType"
              />
              <label className="text-[17px]" htmlFor="usedFor">
                Used
              </label>
            </div>
          </div>

          {/* Condition */}

          {/* //////////////////////////////////////////////////////////// */}

          {/* Features */}
          <div className="mt-24 mb-16">
            <h2 className="text-3xl font-semibold">Features</h2>
          </div>
          <div className="flex justify-between gap-20">
            {/* Interior */}
            <div>
              <label className="text-[23px] font-medium">Interior</label>
              <br />
              <div className="flex justify-start items-center gap-5 mb-4 mt-5">
                <input
                  type="checkbox"
                  id="leatherSeats"
                  value={"Leather Seats"}
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                  onChange={(e) => setLeatherSeats(e.target.value)}
                />
                <label htmlFor="leatherSeats">Leather Seats</label>
              </div>
              <div className="flex justify-start items-center gap-5 mb-4">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                  id="heatedSeats"
                  value={"Heated Seats"}
                  onChange={(e) => setHeatedSeats(e.target.value)}
                />
                <label htmlFor="heatedSeats">Heated Seats</label>
              </div>
              <div className="flex justify-start items-center gap-5 mb-4">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                  id="ventilatedSeats"
                  value={"Ventilated Seats"}
                  onChange={(e) => setVentilatedSeats(e.target.value)}
                />
                <label htmlFor="ventilatedSeats">Ventilated Seats</label>
              </div>
              <div className="flex justify-start items-center gap-5 mb-4">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                  id="premiumAudio"
                  onChange={(e) => setPremiumAudio(e.target.value)}
                  value={"Premium Audio"}
                />
                <label htmlFor="premiumAudio">Premium Audio</label>
              </div>
              <div className="flex justify-start items-center gap-5 mb-4">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                  id="climateControl"
                  onChange={(e) => setMultiZoneClimateControl(e.target.value)}
                  value={"Multi-Zone Climate Control"}
                />
                <label htmlFor="climateControl">
                  Multi-Zone Climate Control
                </label>
              </div>
              <div className="flex justify-start items-center gap-5 mb-4">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                  id="ambientLighting"
                  value={"Ambient Lighting"}
                  onChange={(e) => setAmbientLighting(e.target.value)}
                />
                <label htmlFor="ambientLighting">Ambient Lighting</label>
              </div>
              <div className="flex justify-start items-center gap-5 mb-4">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                  id="powerSeats"
                  value={"Power Adjustable Seats"}
                  onChange={(e) => setPowerAdjustableSeats(e.target.value)}
                />
                <label htmlFor="powerSeats">Power Adjustable Seats</label>
              </div>
              <div className="flex justify-start items-center gap-5 mb-4">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                  id="digitalDisplay"
                  onChange={(e) => setDigitalDisplay(e.target.value)}
                  value={"Digital Display"}
                />
                <label htmlFor="digitalDisplay">Digital Display</label>
              </div>
              <div className="flex justify-start items-center gap-5 mb-4">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                  id="wirelessCharging"
                  onChange={(e) => setWirelessCharging(e.target.value)}
                  value={"Wireless Charging"}
                />
                <label htmlFor="wirelessCharging">Wireless Charging</label>
              </div>
              <div className="flex justify-start items-center gap-5 mb-4">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                  id="sunshade"
                  onChange={(e) => setSunshade(e.target.value)}
                  value={"Sunshade"}
                />
                <label htmlFor="sunshade">Sunshade</label>
              </div>
            </div>
            {/* Safety */}
            <div>
              <label className="text-[23px] font-medium">Safety</label>
              <br />
              <div className="flex justify-start items-center gap-5 mb-4 mt-5">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                  id="airbags"
                  value={"Airbags"}
                  onChange={(e) => setAirbags(e.target.value)}
                />
                <label htmlFor="airbags">Airbags</label>
              </div>
              <div className="flex justify-start items-center gap-5 mb-4">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                  id="abs"
                  value={"Anti-lock Braking System (ABS)"}
                  onChange={(e) => setAbs(e.target.value)}
                />
                <label htmlFor="abs">Anti-lock Braking System (ABS)</label>
              </div>
              <div className="flex justify-start items-center gap-5 mb-4">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                  id="lane-departure"
                  value={"Lane Departure Warning"}
                  onChange={(e) => setLaneDepartureWarning(e.target.value)}
                />
                <label htmlFor="lane-departure">Lane Departure Warning</label>
              </div>
              <div className="flex justify-start items-center gap-5 mb-4">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                  id="adaptive-cruise"
                  value={"Adaptive Cruise Control"}
                  onChange={(e) => setAdaptiveCruiseControl(e.target.value)}
                />
                <label htmlFor="adaptive-cruise">Adaptive Cruise Control</label>
              </div>
              <div className="flex justify-start items-center gap-5 mb-4">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                  id="auto-emergency"
                  value={"Automatic Emergency Braking"}
                  onChange={(e) => setEmergencyBraking(e.target.value)}
                />
                <label htmlFor="auto-emergency">
                  Automatic Emergency Braking
                </label>
              </div>
              <div className="flex justify-start items-center gap-5 mb-4">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                  id="blind-spot"
                  value={"Blind Spot Monitor"}
                  onChange={(e) => setBlindSpotMonitor(e.target.value)}
                />
                <label htmlFor="blind-spot">Blind Spot Monitor</label>
              </div>
              <div className="flex justify-start items-center gap-5 mb-4">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                  id="rear-view"
                  value={"Rear View Camera"}
                  onChange={(e) => setRearViewCamera(e.target.value)}
                />
                <label htmlFor="rear-view">Rear View Camera</label>
              </div>
              <div className="flex justify-start items-center gap-5 mb-4">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                  id="traction-control"
                  value={"Traction Control"}
                  onChange={(e) => setTractionControl(e.target.value)}
                />
                <label htmlFor="traction-control">Traction Control</label>
              </div>
              <div className="flex justify-start items-center gap-5 mb-4">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                  id="parking-sensors"
                  value={"Parking Sensors"}
                  onChange={(e) => setParkingSensors(e.target.value)}
                />
                <label htmlFor="parking-sensors">Parking Sensors</label>
              </div>
              <div className="flex justify-start items-center gap-5 mb-4">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                  id="tire-pressure"
                  value={"Tire Pressure Monitoring"}
                  onChange={(e) => setTirePressureMonitoring(e.target.value)}
                />
                <label htmlFor="tire-pressure">Tire Pressure Monitoring</label>
              </div>
            </div>
            {/* Exterior */}
            <div>
              <label className="text-[23px] font-medium">Exterior</label>
              <br />
              <div className="flex justify-start items-center gap-5 mb-4 mt-5">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                  id="led-headlights"
                  value={"LED Headlights"}
                  onChange={(e) =>
                    setLedHeadlights(e.target.checked ? e.target.value : null)
                  }
                />
                <label htmlFor="led-headlights">LED Headlights</label>
              </div>
              <div className="flex justify-start items-center gap-5 mb-4">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                  id="alloy-wheels"
                  value={"Alloy Wheels"}
                  onChange={(e) =>
                    setAlloyWheels(e.target.checked ? e.target.value : null)
                  }
                />
                <label htmlFor="alloy-wheels">Alloy Wheels</label>
              </div>
              <div className="flex justify-start items-center gap-5 mb-4">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                  id="panoramic-sunroof"
                  value={"Panoramic Sunroof"}
                  onChange={(e) =>
                    setPanoramicSunroof(
                      e.target.checked ? e.target.value : null
                    )
                  }
                />
                <label htmlFor="panoramic-sunroof">Panoramic Sunroof</label>
              </div>
              <div className="flex justify-start items-center gap-5 mb-4">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                  id="power-liftgate"
                  value={"Power Liftgate"}
                  onChange={(e) =>
                    setPowerLiftgate(e.target.checked ? e.target.value : null)
                  }
                />
                <label htmlFor="power-liftgate">Power Liftgate</label>
              </div>
              <div className="flex justify-start items-center gap-5 mb-4">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                  id="roof-rails"
                  value={"Roof Rails"}
                  onChange={(e) =>
                    setRoofRails(e.target.checked ? e.target.value : null)
                  }
                />
                <label htmlFor="roof-rails">Roof Rails</label>
              </div>
              <div className="flex justify-start items-center gap-5 mb-4">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                  id="tinted-windows"
                  value={"Tinted Windows"}
                  onChange={(e) =>
                    setTintedWindows(e.target.checked ? e.target.value : null)
                  }
                />
                <label htmlFor="tinted-windows">Tinted Windows</label>
              </div>
              <div className="flex justify-start items-center gap-5 mb-4">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                  id="chrome-trim"
                  value={"Chrome Trim"}
                  onChange={(e) =>
                    setChromeTrim(e.target.checked ? e.target.value : null)
                  }
                />
                <label htmlFor="chrome-trim">Chrome Trim</label>
              </div>
              <div className="flex justify-start items-center gap-5 mb-4">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                  id="power-folding-mirrors"
                  value={"Power Folding Mirrors"}
                  onChange={(e) =>
                    setPowerFoldingMirrors(
                      e.target.checked ? e.target.value : null
                    )
                  }
                />
                <label htmlFor="power-folding-mirrors">
                  Power Folding Mirrors
                </label>
              </div>
              <div className="flex justify-start items-center gap-5 mb-4">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                  id="rear-spoiler"
                  value={"Rear Spoiler"}
                  onChange={(e) =>
                    setRearSpoiler(e.target.checked ? e.target.value : null)
                  }
                />
                <label htmlFor="rear-spoiler">Rear Spoiler</label>
              </div>
              <div className="flex justify-start items-center gap-5 mb-4">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                  id="fog-lights"
                  value={"Fog Lights"}
                  onChange={(e) =>
                    setFogLights(e.target.checked ? e.target.value : null)
                  }
                />
                <label htmlFor="fog-lights">Fog Lights</label>
              </div>
            </div>
            {/* Comfort */}
            <div>
              <label className="text-[23px] font-medium">Comfort</label>
              <br />
              <div className="flex justify-start gap-5 mb-4 mt-5">
                <label className="flex items-center gap-5">
                  <input
                    type="checkbox"
                    value={"Keyless Entry"}
                    className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                    onChange={(e) => setKeylessEntry(e.target.value)}
                  />
                  Keyless Entry
                </label>
              </div>
              <div className="flex justify-start gap-5 mb-4">
                <label className="flex items-center gap-5">
                  <input
                    type="checkbox"
                    value={"Push Button Start"}
                    className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                    onChange={(e) => setPushButtonStart(e.target.value)}
                  />
                  Push Button Start
                </label>
              </div>
              <div className="flex justify-start gap-5 mb-4">
                <label className="flex items-center gap-5">
                  <input
                    type="checkbox"
                    value={"Remote Start"}
                    className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                    onChange={(e) => setRemoteStart(e.target.value)}
                  />
                  Remote Start
                </label>
              </div>
              <div className="flex justify-start gap-5 mb-4">
                <label className="flex items-center gap-5">
                  <input
                    type="checkbox"
                    value={"Heated Steering Wheel"}
                    className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                    onChange={(e) => setHeatedSteeringWheel(e.target.value)}
                  />
                  Heated Steering Wheel
                </label>
              </div>
              <div className="flex justify-start gap-5 mb-4">
                <label className="flex items-center gap-5">
                  <input
                    type="checkbox"
                    value={"Auto-Dimming Rearview Mirror"}
                    className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                    onChange={(e) => setAutoDimmingMirror(e.target.value)}
                  />
                  Auto-Dimming Rearview Mirror
                </label>
              </div>
              <div className="flex justify-start gap-5 mb-4">
                <label className="flex items-center gap-5">
                  <input
                    type="checkbox"
                    value={"Hands-Free Liftgate"}
                    className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                    onChange={(e) => setHandsFreeLiftgate(e.target.value)}
                  />
                  Hands-Free Liftgate
                </label>
              </div>
              <div className="flex justify-start gap-5 mb-4">
                <label className="flex items-center gap-5">
                  <input
                    type="checkbox"
                    value={"Power Windows"}
                    className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                    onChange={(e) => setPowerWindows(e.target.value)}
                  />
                  Power Windows
                </label>
              </div>
              <div className="flex justify-start gap-5 mb-4">
                <label className="flex items-center gap-5">
                  <input
                    type="checkbox"
                    value={"Electric Parking Brake"}
                    className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                    onChange={(e) => setElectricParkingBrake(e.target.value)}
                  />
                  Electric Parking Brake
                </label>
              </div>
              <div className="flex justify-start gap-5 mb-4">
                <label className="flex items-center gap-5">
                  <input
                    type="checkbox"
                    value={" Smartphone Integration"}
                    className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                    onChange={(e) => setSmartphoneIntegration(e.target.value)}
                  />
                  Smartphone Integration
                </label>
              </div>
              <div className="flex justify-start gap-5 mb-4">
                <label className="flex items-center gap-5">
                  <input
                    type="checkbox"
                    value={"USB Ports"}
                    className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-blue-300 checked:border-blue-200 focus:outline-none"
                    onChange={(e) => setUsbPorts(e.target.value)}
                  />
                  USB Ports
                </label>
              </div>
            </div>
          </div>

          {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}

          {/* Submit */}
          <div className="mt-11 flex justify-end">
            <button
              type="submit"
              className="bg-[#3B7DE8] p-3 rounded-xl text-white"
            >
              Add to Cart
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateCartS;
