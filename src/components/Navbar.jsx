import React, { useState,useContext } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaWhatsapp,
  FaLinkedinIn,
  FaRegEnvelope,
  FaRegUser,FaSun,FaMoon
} from "react-icons/fa";
import { Link } from "react-scroll";
//import {DarkModeContext} from './Context'
import MYPDF from "../assets/MYU.pdf";
import Logo from "../assets/MYU.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
   

    <div className="mb-4 fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#d8d4dc] text-[#0a192f] z-20 shadow-md shadow-[#0a192f]">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <img
            className="hover:cursor-pointer"
            src={Logo}
            alt="Logo Image"
            style={{ width: "100px" }}
          />
        </Link>
      </div>

      {/* menu */}
      <ul className="hidden lg:flex">
        <li className="text-lg px-4 hover:scale-125 hover:text-[#e9590d] cursor-pointer">
          <Link  to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="text-lg px-4 hover:scale-125 hover:text-[#e9590d] cursor-pointer">
          <Link to="work" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li className="text-lg px-4 hover:scale-125 hover:text-[#e9590d] cursor-pointer">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="text-lg px-4 hover:scale-125 hover:text-[#e9590d] cursor-pointer">
          <Link to="edu" smooth={true} duration={500}>
            Education
          </Link>
        </li>
        <li className="text-lg px-4 hover:scale-125 hover:text-[#e9590d] cursor-pointer">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        {/* <li className="text-lg text-[#0a192f] dark:text-gray-300 px-4 hover:scale-125 hover:duration-300 cursor-pointer">
          { darkMode ? <FaSun onClick={thememode} size={25}/> : <FaMoon onClick={thememode} size={25}/>} 

        </li> */}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className=" text-2xl lg:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "absolute top-0 right-0 w-full h-screen bg-[#d8d4dc] flex flex-col justify-center items-center lg:hidden transition-transform duration-300 transform translate-x-full ease-in-out"
            : "absolute top-0 right-0 w-full h-screen bg-[#d8d4dc] flex flex-col justify-center items-center lg:hidden transition-transform duration-300 transform translate-x-0 ease-in-out"
        }
      >
        <li className="py-6 text-3xl px-4 cursor-pointer">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-3xl px-4 cursor-pointer">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li className="py-6 text-3xl px-4 cursor-pointer">
          {" "}
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-3xl px-4 cursor-pointer">
          {" "}
          <Link onClick={handleClick} to="edu" smooth={true} duration={500}>
            Education
          </Link>
        </li>
        <li className="py-6 text-3xl px-4 cursor-pointer">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <div className=" flex justify-between pt-6 max-w-[250px] w-full">
          {" "}
          {/* Social Icons*/}
          <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content="LinkedIn"
            data-tooltip-place="bottom"
            href="https://www.linkedin.com/in/"
            target="_blank"
          >
            <FaLinkedinIn
              className="cursor-pointer hover:scale-150 text-[#0a192f] hover:text-orange-600"
              size={30}
            />
          </a>
          <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Github"
            data-tooltip-place="bottom"
            href="https://github.com/"
            target="_blank"
          >
            <FaGithub
              className="cursor-pointer hover:scale-150 text-[#0a192f] hover:text-orange-600"
              size={30}
            />
          </a>
          <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content="WhatsApp"
            data-tooltip-place="bottom"
            href="https://wa.me/919xxxxxxxx"
            target="_blank"
          >
            <FaWhatsapp
              className="cursor-pointer hover:scale-150 text-[#0a192f] hover:text-orange-600"
              size={30}
            />
          </a>
          <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Email"
            data-tooltip-place="bottom"
            href="mailto: xyzaabc@gmail.com"
          >
            <FaRegEnvelope
              className="cursor-pointer hover:scale-150 text-[#0a192f] hover:text-orange-600"
              size={30}
            />
          </a>
          <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Resume"
            data-tooltip-place="bottom"
            href={MYPDF}
            download
          >
            <FaRegUser
              className="cursor-pointer hover:scale-150 text-[#0a192f] hover:text-orange-600"
              size={30}
            />
          </a>
        </div>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="px-4 cursor-pointer w-[160px] h-[60px] flex justify-between items-center transition-transform duration-300 transform -translate-x-24 hover:-translate-x-0 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/madineni-yuvaraj-ujwal-6a9631198/"
              target="_blank"
            >
              Linkedin <FaLinkedinIn size={30} />
            </a>
          </li>
          <li className="px-4 cursor-pointer w-[160px] h-[60px] flex justify-between items-center transition-transform duration-300 transform -translate-x-24 hover:-translate-x-0 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/YuvarajUjwal"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="px-4 cursor-pointer w-[160px] h-[60px] flex justify-between items-center transition-transform duration-300 transform -translate-x-24 hover:-translate-x-0 bg-green-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://wa.me/919798106423"
              target="_blank"
            >
              WhatsApp <FaWhatsapp size={30} />
            </a>
          </li>
          <li className="px-4 cursor-pointer w-[160px] h-[60px] flex justify-between items-center transition-transform duration-300 transform -translate-x-24 hover:-translate-x-0 bg-red-700">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto: myumbumsd1008@gmail.com"
            >
              Email <FaRegEnvelope size={30} />
            </a>
          </li>
          <li className="px-4 cursor-pointer w-[160px] h-[60px] flex justify-between items-center transition-transform duration-300 transform -translate-x-24 hover:-translate-x-0 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              download
              href={MYPDF}
            >
              Resume <FaRegUser size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
