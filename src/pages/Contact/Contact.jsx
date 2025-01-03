import React from "react";
import { AiOutlineVerticalAlignBottom } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";

const Contact = () => {
  return (
    <div className="w-full mt-10">
      {/* Top Map Section */}
      <section className="relative w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.222411834225!2d69.2261602759826!3d41.32577677130783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bb7a0ebbae3%3A0xf9e01b5d45fc68cd!2sPDP%20Academy!5e0!3m2!1sru!2s!4v1734512223174!5m2!1sru!2s"
          className="w-full h-full"
          loading="lazy"
          title="map"
        ></iframe>
      </section>

      {/* Get In Touch */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            Elit pharetra egestas interdum blandit viverra morbi consequat mi
            non bibendum egestas quam egestas nulla.
          </p>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name*"
                className="p-3 border border-gray-300 rounded w-full"
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="p-3 border border-gray-300 rounded w-full"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="email"
                placeholder="Email*"
                className="p-3 border border-gray-300 rounded w-full"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="p-3 border border-gray-300 rounded w-full"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={4}
              className="p-3 border border-gray-300 rounded w-full"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="bg-gray-50 h-[385px] p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
          <p className="text-gray-600 mb-6">
            Elit pharetra egestas interdum blandit viverra morbi consequat.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FiMapPin className="text-blue-600 text-xl" />
              <span>
                123 Queensberry Street, North Melbourne VIC 3051, Australia
              </span>
            </div>
            <div className="flex items-center gap-4">
              <FiMail className="text-blue-600 text-xl" />
              <span>info@boxcars.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FiPhone className="text-blue-600 text-xl" />
              <span>+96 958 123 456</span>
            </div>
          </div>
          <div className="mt-6">
            <p className="font-semibold mb-2">Follow Us</p>
            <div className="flex gap-4 text-blue-600">
              <FaFacebookF className="cursor-pointer hover:text-blue-700" />
              <FaTwitter className="cursor-pointer hover:text-blue-700" />
              <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className=" py-12 px-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Our Offices</h1>
        <div className="  grid md:grid-cols-3 gap-10 text-gray-700">
          <div>
            <h3 className="font-bold mb-2">San Francisco</h3>
            <p className="text-sm">4140 Dewey Blvd, San Francisco,</p>
            <p>CA 94111, USA</p>
            <a href="#" className="text-blue-600 text-sm">
              See on Map ↗
            </a>
            <div className=" flex gap-3 items-center mt-2">
              <button className=" flex gap-2 items-center">
                <button className=" border border-spacing-2 rounded-sm ">
                  <AiOutlineVerticalAlignBottom />
                </button>
                alisan@boxcars.com
              </button>
              <button className=" flex gap-2 items-center">
                <LuPhoneCall />+ 998 77 014 50 47
              </button>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-2">New York</h3>
            <p className="text-sm">232-240 Wilson Ave, Brooklyn,</p>
            <p>NY 11237, USA</p>
            <a href="#" className="text-blue-600 text-sm">
              See on Map ↗
            </a>
            <div className=" flex gap-3 items-center mt-2">
              <button className=" flex gap-2 items-center">
                <button className=" border border-spacing-2 rounded-sm ">
                  <AiOutlineVerticalAlignBottom />
                </button>
                alisan@boxcars.com
              </button>
              <button className=" flex gap-2 items-center">
                <LuPhoneCall />+ 998 77 014 50 47
              </button>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-2">London</h3>
            <p className="text-sm">127-143 Borough High St,</p>
            <p>London SE1 1NR, UK</p>
            <a href="#" className="text-blue-600 text-sm">
              See on Map ↗
            </a>
            <div className=" flex gap-3 items-center mt-2">
              <button className=" flex gap-2 items-center">
                <button className=" border border-spacing-2 rounded-sm ">
                  <AiOutlineVerticalAlignBottom />
                </button>
                alisan@boxcars.com
              </button>
              <button className=" flex gap-2 items-center">
                <LuPhoneCall />+ 998 77 014 50 47
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
