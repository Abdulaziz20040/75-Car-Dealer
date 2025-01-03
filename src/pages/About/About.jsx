import React, { useState } from "react";
import { Button } from "antd";
import { FaCheckCircle, FaPlay } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import TestimonialSlider from "./TestimonialSlider";
import { Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const faqs = [
  {
    category: "Frequently Asked Questions",
    items: [
      {
        question:
          "Does BoxCar own the cars I see online or are they owned by other.",
        answer:
          "Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel.",
      },
      { question: "How do you choose the cars that you sell?", answer: "" },
      {
        question: "Can I save my favorite cars to a list I can view later?",
        answer: "",
      },
      {
        question:
          "Can I be notified when cars I like are added to your inventory?",
        answer: "",
      },
      {
        question:
          "What tools do you have to help me find the right car for me and my budget?",
        answer: "",
      },
    ],
  },
];

function About() {
  const [activeKeys, setActiveKeys] = useState([]);

  const onChange = (key) => {
    setActiveKeys(key);
  };
  return (
    <div className=" container">
      {/* Header Section */}
      <div className="bg-white py-20 flex gap-20 px-6">
        <h1 className="text-4xl font-extrabold ">
          We Value Our Clients And Want Them To Have A Nice Experience
        </h1>
        <p className="text-gray-600 mt-4 max-w-4xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Convallis integer enim eget
          sit urna. Eu duis lectus amet vestibulum varius. Nibh tellus sit sit
          at lorem facilisis. Nunc vulputate ac interdum aliquet vestibulum in
          tellus.
          <br />
          <br />
          Sit convallis rhoncus dolor purus amet orci urna. Lobortis vulputate
          vestibulum consectetur donec ipsum egestas velit laoreet justo. Eu
          dignissim egestas egestas ipsum. Sit est nunc pellentesque at a
          aliquam ultrices consequat. Velit duis velit nec amet eget eu morbi.
          Libero non diam sit viverra dignissim. Aliquam tincidunt in cursus
          euismod enim.
          <br />
          <br />
          Magna odio sed ornare ultrices. Id lectus mi amet sit at sit arcu mi
          nisl. Mauris egestas arcu mauris.
        </p>
      </div>

      {/* Stats Section */}
      <div className="py-20 px-6 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* Left Box */}
        <div className="bg-blue-500 text-white p-8 rounded-xl flex flex-col justify-center items-center">
          <h2 className="text-6xl font-bold mb-2">45</h2>
          <p className="text-lg">Years in Business</p>
        </div>

        {/* Image 1 */}
        <div className="bg-gray-200 p-4 rounded-xl flex justify-center items-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/9bdf/70c5/33bde176e4a5da3c743f72efe2617893?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kp7A-4zx2abOcHgiAPhnVhz6z5F1kkDUv-FOJl9sVTFLPKKfLB-ieC1UNGYuHz0VnRvsqIvGS9hZt1mRmm8KpgVW7-5QQrBahcgHWe3D-YQXSaAITYwwIvfsJkYIzAQyVlNQS-KN8hI4vF2ooyDXPqRwLKJS~kPuBWxJd9O2hd9fyw03RBcZSBH3vHFCC1E8PiUFJLxKn1ZHv682CrC8L5ZTxSUMFsSkloD2r03Wm5wVtk3tkODXbaoJGy1pJz-5quMkINUwuPW0cP7MQE4WUsak6wkkL9wBtqMsuGcra08nZRWXeBHqx4aP8~ioZM3-PNcmc1n9kvCCYO14JUYBKA__"
            alt="Car"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Image 2 */}
        <div className="bg-gray-200 p-4 rounded-xl flex justify-center items-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/af29/db9e/502b29ee813946f1f619a9bc8652668d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EtFoxAXhEaQLx9W8u2M2lPHubSfZuTXRuP6lFuYW~bJfUDFfoANu3MPoOw-AoIjxScQpxdk7ldNqw~-6bwxWLRow6IBalwmfW1atg7-m6JzRFrzNtOCB~tWhPneir8T0w3K1L8xYGnj-ZUSAsTK2JnavxXsQpaU0LBlM1ji~0PjwNdqlBRwXmLiuzkJtbnNoXPpt8aAC3k9oz9XFqRli9c63UvsxA0ll79JWjLYCEZ2RETBmuRJtea5M-aCuG3MmAdWbI7LHlOcjQd0OeO4JfTc4qVZMgTLFwF~fcm27-Zh70FArF-RqAxAk0jZVcrs7BwO4rK4tf0JdxTbeBAphXg__"
            alt="Car"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Image 3 */}
        <div className="bg-gray-200 p-4 rounded-xl flex justify-center items-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/6ec6/f864/5758b5a53b6e3ded84c278e88d28a73e?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p~RT0E6PQREUdPhOHihDfE0tI8a7wecAdUNl5MDXXZzAmFHRQh4GMUFzNf-MUFV6hxro6nsDgWoKlpixpXDEp8e0-~ihrFlX~AgpARvXEMsCGHprCmhd8C2-kNpWnkgbObqUC0iJFKMFzO~wpuM1cozT6JIjHiRJTYyVGkPAwXH9-g2KAcv92haHLEyVaguQ0vnKUwJ~i8uA2aO9gBfT41PVxcGPFVW-zMROmrda1MTZXbzI7J6KErWfj9oW0B6AhS8mTXVIWl9xTrH2eh8JT166GXqRHkI0NhIMSBYHbsOmwwZkqvHbyLxZqaKwiN3PVHnviLeiSN-siXfz0g4CaQ__"
            alt="Car"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 px-6 bg-white max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-start mb-10">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex items-start gap-4">
            <FaCheckCircle className="text-blue-500 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">
                Special Financing Offers
              </h3>
              <p className="text-gray-600">
                We offer great financing options to make your car purchase
                affordable.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaCheckCircle className="text-blue-500 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Trusted Car Dealership</h3>
              <p className="text-gray-600">
                With over 45 years in business, we are the most trusted
                dealership around.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaCheckCircle className="text-blue-500 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Transparent Pricing</h3>
              <p className="text-gray-600">
                No hidden fees, just clear and honest pricing.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaCheckCircle className="text-blue-500 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Expert Car Service</h3>
              <p className="text-gray-600">
                Our experienced team provides top-quality service for all your
                car needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className=" flex flex-col lg:flex-row justify-between mt-10 gap-10 bg-slate-100  rounded-lg">
        <div className="relative bg-gray-800 text-white  rounded-xl w-[900px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/6793/86ec/ecc7523c3a4079b573ebe4e52d8d437c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E8rZZZZc5osQquyK9HDYFv7yJmwuWxLV1QV8EU3i~I3xL8jgC4RuU-ynRdOvDgweWbLdHFRLX8Hul88J1yrox23ZL67y9O8LnkadgpmfQuZgZX-HJXo~ol4UrEBPkLdNoizDU7WraMdanrxZDwXWvRsXWGtjErNVyPGryLFVwLwrF6hNNEWfyaFLjIhgb-QmmaeyApVx~WTasPFe35MTtccUITFKzBp~8rsn43TTYJJIej8zjDHOQSEgui1qnFQkDar5VtyHOSz9XSkyL7WQ0lWNnhpiiJnV9eVJlJ05fLqJqwOgZ8nsbOWPtwv~gjhgbynp~CBtlwBWQD9gvorAzQ__"
            alt="Car Video"
            className="w-full h-96 object-cover opacity-60 rounded-lg"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <button className="bg-blue-500 text-white text-4xl p-6 rounded-full">
              <FaPlay />
            </button>
          </div>
        </div>
        <div className=" ">
          <h2 className="text-3xl font-bold text-start mt-10">
            Get A Fair Price For Your Car Sell To Us Today
          </h2>
          <p className="text-gray-600 text-start mt-4">
            We are committed to providing our customers with exceptional
            service, competitive pricing, and a wide range of.
          </p>
          <li className=" flex items-center gap-2 list-none">
            <FaCheckCircle className="text-blue-500" />
            We are the UK’s largest provider, with more patrols in more places
          </li>
          <li className=" flex items-center gap-2 list-none">
            <FaCheckCircle className="text-blue-500" />
            You get 24/7 roadside assistance
          </li>
          <li className=" flex items-center gap-2 list-none">
            <FaCheckCircle className="text-blue-500" />
            We fix 4 out of 5 cars at the roadside
          </li>

          <Button type="primary" size="large" className="mt-8">
            Get Started
          </Button>
        </div>
      </div>

      {/*  */}

      <div className=" flex justify-between items-center mt-20">
        <div>
          <h2 className="text-3xl font-bold text-start">836M</h2>
          <p className="text-gray-600 text-start mt-2">CARS FOR SALE</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-start">738M</h2>
          <p className="text-gray-600 text-start mt-2">DEALER REVIEWS</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-start">95M</h2>
          <p className="text-gray-600 text-start mt-2">VISITORS PER DAY</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-start">238M</h2>
          <p className="text-gray-600 text-start mt-2">VERIFIED DEALERS</p>
        </div>
      </div>

      {/* Explore Brands Section */}
      <div className=" mt-20">
        <div className=" flex justify-between items-center ">
          <h2 className="text-3xl font-bold text-start">
            Explore Our Premium Brands
          </h2>
          <button className=" flex items-center gap-2">
            Show All Brands <GoArrowUpRight />
          </button>
        </div>
        <div className="flex justify-between items-center gap-10 mt-10">
          <button className=" border-2 border-gray-300 rounded-xl p-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/7786/7001/930a7f83335c2e20a7c2b2aa202f7101?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FLLomaXCIn-tYr6N56F3QzJ-tluyh-RnjpJMMHzllySPLdELhUXIHytKfH9UGbaiOn8jFfRoNYvYO4OPWtsGr2ivsYR71nqSx9uY2enVgn6TVyST5UBaVSjAQOcFLM0565tA05VIlEHEEhXubcw5Gf-nPn0ePVOS1gvq4tM5M7T0YiPhU1OvAti5MATPsQeMra2EBytQy7d5l1~EROIfboIjxOp3IDpJBygKxbLWd8j2oSzkvkq9JWtr9hkEwETPItm1L40zSQQS-uCJT-ZqDmosWO7ybjobNO1j9ezAwbOHnVwIghMRJdJpZ7~C0BO-4lSsost6yWHehv7hosdtXQ__"
              alt="Audi"
            />
            <span className="text-gray-600">Audi</span>
          </button>
          <button className=" border-2 border-gray-300 rounded-xl p-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/bf4f/2015/de9eeefd5cce4a73d57992f2bc84735e?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eZbpXam2oDAJRptsvoD~cNr9LfBICotQx5ZmRrF4qVGUO2eXLR61FBv7rL8Cs8yiabjnyEbn4vDgj943h6w99EXBy4ylVqt20tNK5s2kxne8ECFjzHyeJyTt4uPz7Sw7ali2~htHrNB0x4AdoYp0gMmXqXwgToGOCm7XjdvhpEiwm56YhT6o1p1C-5yYD3GqzmVlwGFhQw9zXC-u6S2vh5Wp9RNYuQMyqq51p7iQtcBToxblZyMwtZLiXiFSuu0~vGrIk-FJI8nm6pKTUF7L76JaSgLZBtcn509120UE83H7QO368xuh-DWLWL6k-2GcWtqhSJqW7~sZJa1vrRZxNQ__"
              alt="BMW"
            />
            <span className="text-gray-600">BMW</span>
          </button>
          <button className=" border-2 border-gray-300 rounded-xl p-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/057d/afcd/b2ebc38c7a15af8c45656bcf31dd651e?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SL5SrgtDBvIPT1frk2GMUCixK3OB1bYsVttui1-u1cOSndWFv6I~~IkyecUlocO3U8tvfwc5ECChhZx08QOnJV0oYFnnBvIYYNx5s1saIZqKPtNQhvKthok7JpKmJ35~Ma373zkke3T-i9a5NdwjCrGaMVV0LvIu5A-8cXExAxSmW-GfNcePCIOv12IOUpzkAD1O6cQPg5cGKzQNCR4c6r4Tsm1IQMcmS3dvZMGHj9XfKsT~A20stvFAvrX5ulckwnimKx2pTHHFU65S13sZaO8avvHqJQ2p8kXg-YU3ELcuFk6pJRSDxcJ022LD3udyGaZ2iIoSC44ZhXXfcb~mBw__"
              alt="Ford"
            />
            <span className="text-gray-600">Ford</span>
          </button>
          <button className=" border-2 border-gray-300 rounded-xl p-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/9169/ee75/5e42830825dc7da7172ff0d9f468751c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CDWi~fujT7iMFQ0yyWcbHnniWaPBGSSTg4QlqnpW70IPDx6NMxDFSqHENABNwLLFt6ew3fsd~KAXqdOTeuAAFaXkj-GmWzm8LUAKx2NB~WUCIns8M~SD-Gnwcbo866CPzRiQIt7v-ktq2V48z3QMqbvqhaMJwOIsPVlM6l5pIIgpRBNYl5X4IuJB9~Ac3Wk82NvlslLrAixJjWmNUmQWzdqvq8YkCbfdPVYadNRPd0up7Weram88Koj7ucW7N4ww9FsT~88Duyzn6lOmL~Uuhmdly7QQpXa1DQqz9Uhlbab7r7uAuPPc91Mh6sFVAU6rfv5DMkEaMjaKf62QroYtIQ__"
              alt="Mercedes"
            />
            <span className="text-gray-600">Mercedes</span>
          </button>
          <button className=" border-2 border-gray-300 rounded-xl p-4">
            <img src="https://s3-alpha-sig.figma.com/img/91bd/4e40/aa54a3bec35a6c90c8b6f0c9d7d17dfe?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lCtLGPSF-fLNhvhQMGH-5arPjYQBe6BisvFOEbpWMorcCpAoGkjj~Di33lGXTK2fD3wTwTkTNUkGVVHTf4NJPaV~wGngI0AXwRCKNMPpavpK56VW44kgNxO8y7nUsKJEbmJR2e9jimrwFRKOu8rmETQgKSDQFQoKAaNZBcSKf28xxKjdI9C6d3NsSWljhEDszAeVBfC5VIFAPYIsktRdC4Z7Gd9Ze69HOelIHqJdp0e9rDjD27w410fzOmcem8JMfIPOnizdWNNJqrFfYiqSNJGW6stJHgaIVZu65gJZNGblfu5uFQNsvCAFgOdUiqNR-aTKKM79O10i22WHF3wqOg__" />
            <span className="text-gray-600">Nissan</span>
          </button>

          <buton className=" border-2 border-gray-300 rounded-xl p-4 text-center">
            <img src="https://s3-alpha-sig.figma.com/img/05a6/e90a/fa4ddde39f89666584b6d75125072301?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JjezNcgDFpB7bd-HsDp89b6INIZEPAe~Ff0~SePRTEIDtIRPallCZlwD54INhwbae-rTUAaH21Qe-ln1W7shIzJwP1Nwus38CWrWZCPfSD3ve8aDE4rQefkEf4JqTftJ7gomnIlFPxYXnb0lLQJG5QqUDcsdYzZZ~5dnaD~0SZImOpIgWs2h2skhfI3gdJYnJj1BlNq8jAP~Z7eY-8PUn5iIknp23laiRL3PbdkJdDLJcR~gdX5mZQITdW7NcZ24PJrrylA7zN2i5qslmFNqOq429Ip~TnwqQArCe9AUOXRM6zzBguP53VSHW4JP-rCtH~jfawUp7v-6eZjcvDDfaw__" />
            <span className="text-gray-600">Toyota</span>
          </buton>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 px-6 bg-white max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-start mb-10">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-start">
            <img
              src="https://s3-alpha-sig.figma.com/img/58e6/8124/2e36fd862b0651a734c8cc8b1b9477a1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hankHhMmu7wz2VdW0SqCwuVsX4xxidI9QYlV2hLUXRgxwl2~x6wlI4M5IzceeFu5v1NfVxg~JNS2spPlUSTr3ZyfGli~luN2PHypLO4kJKsl9o5Nl6emOdLOLXGJ4gRCB~fDIs8PclF7UaaffcQ1gXp0blM4wiIo9XhMcDuOLLpbo8GT97hFf2pi~MERJBdqGTzRXZuvu3OLOGpSOXEbTPnKRB3ahRxQa7hqK0jL4VAvI9DuajlN8wVBI-heyhr7W4MhdCj52k5IabfF3YoL2YLw-q85UfDGKp15RmTIJZDxg3gmJ0a0V~dxVhjJ745AD2H41tB-pm3UtAMOxgUs6g__"
              alt="Team Member"
              className="rounded-md  h-[230px] w-[200px]"
            />
            <h3 className="text-xl  font-semibold mt-4">Courtney Henry</h3>
            <p className="text-gray-600">Development Manager</p>
          </div>
          <div className="text-start">
            <img
              src="https://s3-alpha-sig.figma.com/img/6817/0533/b6fb93b8fd32787dc7ec101c686066c7?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MieNbH2g-klLxlKKG-jGdE1vkm~DdIVzHguGc95WwWFhHyKCWMCXPFaVOu-8-5Z5f7D-BWZXAkZB2vQIh9C4CSJRxdHA1~1ImT-BIloi3lFZKsFxbPn0OWMRC-JaTITPt6xZOXnF2UJyKTG2tGq8q6~WjEzc72A84oI4~DEua4-uE~14LtoGHJT07rkMf2JBlofiLUk6vr461tPu-TNRaI7~hMHWglpYb6W21DdFQvnmVN5k0wYt8mZPtG1z3rudcnRAj3Nk88xruXR7dUBSAX0obG4y-RoiK8baMtdwJhqwm9k2VD86oIypgkOBF~JFzhLHDrRL9JGzgpwAmvKPFA__"
              alt="Team Member"
              className="rounded-md  h-[230px] w-[200px]"
            />
            <h3 className="text-xl  font-semibold mt-4">Jerome Bell</h3>
            <p className="text-gray-600">Software Tester</p>
          </div>
          <div className="text-start">
            <img
              src="https://s3-alpha-sig.figma.com/img/f4de/b398/3f1196a216d39a0f991c890ac9115385?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iDhRHktIDrHl4AN5HnJq59tEc5pEB0z02fvdRR1mY5hogpTWVxKpADkuR2yINslcTUOl9XGa16oKNT47ttRteSQrkzkyz8zwT2mHtkixeMII-IFPieQOwbDIWQQhanj3GoF39MbVfA9nEeFB0BBL7hTxyGKf5jCx102TB3FvrHq7DonO3F~PXe47MBS7iR0r1qwb15299fLnxuEVy55h1~YoF8ia8Yi6SXtuaXEDOT3N5stuJYZPeNepXBQR5SU4vJnJuM4d47JYfDTrmuFQ7cisHYHPdka8FebiZJeVVqfZTMuWEqLQSwSVFxPXSlEdFnVGUtiqVyjZGlMcpnAESA__"
              alt="Team Member"
              className="rounded-md  h-[230px] w-[200px]"
            />
            <h3 className="text-xl  font-semibold mt-4">Arlene McCoy</h3>
            <p className="text-gray-600">Software Developer</p>
          </div>
          <div className="text-start">
            <img
              src="https://s3-alpha-sig.figma.com/img/1dba/0ee2/7e82cf5aa56c0317d3cd2053d376f1b2?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IZKU4qwiE~jvQfOgZfGjy4A2msK~Fq3RoOqBh7y1uG-bLDzFqy79rBErJfBmyo27Somhj1arSjheq4ugYRIB75iL2eIDWiMoDNle0c-Jm950a-B7SrEw9UjJs1B566PN5gT7iMi2QaB5i1cXR~DlOu4EK1V13OJoAEJxG6l~cHjRsGWsgiOEvpgfQGq-mHRd67DuyM80Y8I-d49ZI4MQNexgL8a3tmTkWWQA34WTQRbeQGmjnhdwnHIaRdZ-FRbKwEo8QeTVA~CuNGUPnwZAkwI--b2YHKGnZEyvvDcudsZObUrWc59NbmQVFgwZwFS4TlCuc7TG80pqIOzM405ncg__"
              alt="Team Member"
              className="rounded-md  h-[230px] w-[200px]"
            />
            <h3 className="text-xl  font-semibold mt-4">Jenny Wilson</h3>
            <p className="text-gray-600">UI/UX Designer</p>
          </div>
        </div>
      </div>

      {/* TestimonialSlider */}
      <TestimonialSlider />

      {/* Frequently Asked Questions */}

      <div className="p-6 max-w-4xl mx-auto mt-10">
        {faqs.map((section) => (
          <div key={section.category} className="mb-8">
            <h2 className="text-center text-2xl font-bold mb-4">
              {section.category}
            </h2>
            <Collapse
              bordered={false}
              ghost
              onChange={onChange}
              activeKey={activeKeys}
              expandIcon={({ isActive }) =>
                isActive ? (
                  <MinusOutlined style={{ fontSize: "18px" }} />
                ) : (
                  <PlusOutlined style={{ fontSize: "18px" }} />
                )
              }
              expandIconPosition="end"
            >
              {section.items.map((item, idx) => {
                const isActive = activeKeys.includes(
                  `${section.category}-${idx}`
                );

                return (
                  <Panel
                    header={
                      <div
                        className={`text-lg font-medium p-2 ${
                          isActive
                            ? "bg-[#f5f5f5] rounded-md"
                            : "bg-transparent"
                        }`}
                      >
                        {item.question}
                      </div>
                    }
                    key={`${section.category}-${idx}`}
                  >
                    <div
                      className={`p-4 text-gray-600 ${
                        isActive ? "bg-[#f5f5f5] rounded-md" : ""
                      }`}
                    >
                      {item.answer}
                    </div>
                  </Panel>
                );
              })}
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
