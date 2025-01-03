import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Button } from "antd";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 p-6 md:p-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-y-8 md:gap-y-0">
        {/* Newsletter Signup */}
        <div className="md:col-span-5 flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-2">
              Join BoxCar
            </h3>
            <p className="mb-4 text-sm">
              Receive pricing updates, shopping tips & more!
            </p>
          </div>
          <div className="relative w-full md:w-2/5">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 rounded-full pr-20 text-black focus:outline-none"
            />
            <Button
              type="primary"
              className="absolute h-[35px] mt-1 top-1 right-2  rounded-full"
            >
              Sign Up
            </Button>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Blog</li>
            <li>Services</li>
            <li>FAQs</li>
            <li>Terms</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Get in Touch</li>
            <li>Help Center</li>
            <li>Live Chat</li>
            <li>How it works</li>
          </ul>
        </div>

        {/* Our Brands */}
        <div>
          <h4 className="text-white font-semibold mb-4">Our Brands</h4>
          <ul className="space-y-2 text-sm">
            <li>Toyota</li>
            <li>Porsche</li>
            <li>Audi</li>
            <li>BMW</li>
            <li>Ford</li>
            <li>Nissan</li>
            <li>Peugeot</li>
            <li>Volkswagen</li>
          </ul>
        </div>

        {/* Vehicles Type */}
        <div>
          <h4 className="text-white font-semibold mb-4">Vehicles Type</h4>
          <ul className="space-y-2 text-sm">
            <li>Sedan</li>
            <li>Hatchback</li>
            <li>SUV</li>
            <li>Hybrid</li>
            <li>Electric</li>
            <li>Coupe</li>
            <li>Truck</li>
            <li>Convertible</li>
          </ul>
        </div>

        {/* Mobile App */}
        <div className="md:col-span-5 flex flex-col md:flex-row justify-between items-center mt-8">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h4 className="text-white font-semibold mb-4">Our Mobile App</h4>
            <div className="flex gap-2">
              <button className="flex items-center bg-gray-800 px-4 py-2 rounded-md text-white hover:bg-gray-700">
                <FaApple className="mr-2" />
                <div>
                  <p className=" text-stone-300 text-[13px]">Download on the</p>{" "}
                  <p className=" text-stone-300 text-[13px]">Apple Store</p>
                </div>
              </button>
              <button className="flex items-center bg-gray-800 px-4 py-2 rounded-md text-white hover:bg-gray-700">
                <FaGooglePlay className="mr-2" />
                <div>
                  <p className=" text-stone-300 text-[13px]">Get it on</p>
                  <p className=" text-stone-300 text-[13px]">Google Play</p>
                </div>
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            <div className="flex justify-center md:justify-end gap-4 text-xl">
              <a href="#" className="hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-white">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-white">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs mt-8 border-t border-gray-700 pt-4">
        <p>&copy; 2024 Boxcars.com. All rights reserved.</p>
        <p>
          <a href="#" className="hover:text-white">
            Terms & Conditions
          </a>
          &nbsp;&bull;&nbsp;
          <a href="#" className="hover:text-white">
            Privacy Notice
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
