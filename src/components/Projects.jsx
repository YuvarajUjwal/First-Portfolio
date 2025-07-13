import React,{useContext} from 'react'
import Projectitem from './Projectitem'
import Bilvaimg from '../assets/BilvaL.png'
import Tangoimg from '../assets/TangoL.png'
import Pythonimg from '../assets/Python.png'
import Blockimg from '../assets/Block.png'
//import {DarkModeContext} from './Context'

const Projects = () => {
  return (
    <div className='max-w-[1040px] sm:h-screen m-auto md:pl-20 p-4 py-32' name='projects'>
      <div className="mb-10">
        <h1 className=" text-3xl md:text-4xl uppercase pb-2 font-bold text-center text-[#e9590d]">Projects</h1>
        <p className=" text-lg md:text-xl text-center text-[#0a192f] italic">My Designs</p>
      </div>

      <div className=' items-stretch grid grid-cols-2 md:grid-cols-4 gap-10'>
        <Projectitem img={Blockimg} title="Simple WSN Blockchain" link ="https://github.com/YuvarajUjwal/Simple-Blockchain-Implementation"/>
        <Projectitem img={Bilvaimg} title="Bilva Creations" link ="https://github.com/YuvarajUjwal/Project-Bilva"/>
        <Projectitem img={Tangoimg} title="Tango Six O'Clock" link ="https://github.com/YuvarajUjwal/Project-TSoC"/>
        <Projectitem img={Pythonimg} title="Python Package" link ="https://github.com/YuvarajUjwal/Python-Package"/>
      </div>
    </div>
  )
}

export default Projects
