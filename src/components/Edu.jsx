import React,{useContext} from "react";
import Eduitem from "./Eduitem";
//import {DarkModeContext} from './Context'

const data = [
  {
    year: "2024-Present",
    title: "Masters of Technology (Wireless Networks and Applications)",
    details:"Amrita Viswa Vidhyapeetham, Kerala",
    marks: "--"
  },
  {
    year: "2019-2023",
    title: "Bachelors of Technology (Electronics and Communication)",
    details:
      "K. L University, Andhra Pradesh",
    marks: "9.17/10 CGPA"
  },
  {
    year: "2016-2018",
    title: "XI-XII",
    details:
      "Sri Chaitanya Junior College",
    marks: "958/1000 Marks"
  },
  {
    year: "2016",
    title: "X",
    details:
      "Sri Chaitanya High School",
    marks: "9.7/10 CGPA"
  }
];

const Edu = () => {


  return (
    <div name="edu" className="max-w-[1040px] m-auto md:pl-20 p-4 py-28">
        <div className="mb-10">
        <h1 className=" text-3xl md:text-4xl uppercase pb-2 font-bold text-center text-[#e9590d]">Education</h1>
        <p className=" text-lg md:text-xl text-center text-[#0a192f] italic">My Learning Voyage</p>
        </div>
      {data.map((item, idx) => (
        <Eduitem
          key={idx}
          year={item.year}
          title={item.title}
          details={item.details}
          marks={item.marks}
        />
      ))}
    </div>
  );
};

export default Edu;
