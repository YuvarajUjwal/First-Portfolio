import React,{useContext} from "react";
import Workitem from "./Workitem";
//import {DarkModeContext} from './Context'

const data = [
  {
    year: "July, 2023 - July, 2024",
    title: "Freelance Developer",
    details:
      "Worked as a freelancer onboard at Koncept India, to design the fronted of websites.",
    duration: "1 year"
  },
  {
    year: "July, 2022 - November, 2022",
    title: "Student Intern",
    details:
      "Worked as an intern onboard at Pentagon Rugged Systems Pvt. Ltd, to design a prototype for methane monitoring.",
    duration: "5 Months"
  },
  {
    year: "May, 2021 - June, 2021",
    title: "Student Intern",
    details:
      "Remotely worked as an intern at VI Solutions, to accumulate experience in NI LabVIEW.",
    duration: "1 year"
  },
  {
    year: "July, 2023 - July, 2024",
    title: "Student Intern",
    details:
      "Remotely Worked as an intern at NPHSAT Systems Pvt. Ltd, to design the fronted of websites.",
    duration: "1 year"
  },
];

const Work = () => {

  return (
    <div name="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-28">
        <div className="mb-10">
        <h1 className=" text-3xl md:text-4xl uppercase pb-2 font-bold text-center text-[#e9590d]">Experience</h1>
        <p className=" text-lg md:text-xl text-[#0a192f] text-center italic">My Work Circuit</p>
        </div>
      {data.map((item, idx) => (
        <Workitem
          key={idx}
          year={item.year}
          title={item.title}
          details={item.details}
          // duration={item.duration}
        />
      ))}
    </div>
  );
};

export default Work;
