import React from 'react'

const Workitem = ({year, title, details}) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-l-red-950 text-[#d8d4dc]'>
      <li className='mb-10 ml-4 '>
        <div className='absolute w-3 h-3 bg-[#e9590d] rounded-full mt-1.5 -left-1.5 border-black'/>
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-[#d8d4dc] bg-[#e9590d] rounded-md'>{year}</span>
          <span className='text-lg font-semibold text-[#0a192f]'>{title}</span>
          {/* <span className='my-1 text-sm font-normal leading-none text-black'>{duration}</span> */}
        </p>
        <p className='my-2 text-base font-normal text-[#0a192f] '>{details}</p>
      </li>
    </ol>
  )
}

export default Workitem
