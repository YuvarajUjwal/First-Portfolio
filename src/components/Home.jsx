import React,{useContext} from "react";
import {FaArrowRight} from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import MYU from "../assets/ME1.jpg";
import { Link } from 'react-scroll';
//import {DarkModeContext} from './Context'

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <img src={MYU} className="w-1/2 sm:w-1/3 md:w-1/4 rounded-2xl m-5 mt-60 md:mt-0 md:ml-20 shadow-md shadow-[#e9590d] hover:shadow-lg hover:shadow-[#e9590d] duration-300" alt="Yuvaraj Picture" />
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col lg:items-start items-center justify-center">
          {/* <img className="size-160p" src={myu} alt="" /> */}
          <h1 className="text-lg sm:text-xl font-bold text-[#0a192f] italic">My name is</h1>
          <h1 className="sm:text-4xl text-center text-3xl font-bold text-[#e9590d] italic">
           <span className="uppercase">Yuvaraj Ujwal Madineni</span>
          </h1>
          <h2 className=" flex sm:text-3xl text-2xl pt-4 font-vold text-[#0a192f] italic">
            {" "}
            {/* Type Animation*/}
            I'm
            <TypeAnimation
              sequence={[
                "a Graduate Student", // Types 'Graduate'
                1000, // Waits 1s
                "an Enthusiast", // Deletes 'Passionate Individual' and types 'Enthusiast'
                1000, // Waits 1s
                "a Developer", // Deletes 'Enthusiast' and types 'Developer'
                1000,
                () => {
                  console.log("Sequence completed");
                }
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "1em",
                fontStyle: "italic",
                paddingLeft: "5px"
              }}
            />
          </h2>
          <p className='text-[#0a192f] text-center lg:text-left text-lg italic px-4 sm:px-0 py-4 max-w-[700px]'>
            Passionate Wireless Networks and Applications student, seeking to develop experience with wireless technologies. Skilled in Web development and programming.
          Adaptable and dedicated in delivering quality work and managing the work load.
          </p>
          <Link to='projects' smooth={true} duration={500}>
          <button className="flex justify-center rounded-md items-center lg:hover:bg-[#e9590d] active:bg-[#d8d4dc] group lg:hover:scale-110 lg:hover:border-none duration-200 text-[#0a192f] hover:text-[#d8d4dc] sm:my-5 lg:my-0 border-2 border-[#0a192f] p-3" >View Projects <FaArrowRight className="ml-2 group-hover:rotate-90 duration-200"/> </button>
          </Link>
        </div>
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Home;
