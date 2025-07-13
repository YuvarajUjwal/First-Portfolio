import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
const Projectitem = ({ img, title, link }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-lg shadow-[#0a192f] rounded-xl group hover:bg-gradient-to-r dark:from-orange-200 dark:to-orange-900 hover:scale-110 hover:duration-300">
      <img
        className="rounded-xl group-hover:opacity-10"
        src={img}
        alt="Project Image"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="pt-4 text-2xl uppercase font-bold text-[#0a192f] text-center">
          {title}
        </h3>
        <div className="flex m-1 justify-center ">
          <a data-tooltip-id="my-tooltip" data-tooltip-content={title} data-tooltip-place="right" className="m-1" href={link} target="_blank">
            <p className=" text-center p-3 rounded-full bg-[#d8d4dc] text-[#0a192f] font-bold cursor-pointer text-3xl">
              <AiOutlineLink />
            </p>
          </a>
        </div>
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Projectitem;
