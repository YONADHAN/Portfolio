import React from 'react';
import FullereneVisualization from './FullereneVisualization';

const Projects = () => {
  return (
    <div id='activities' className='container w-full  h-[1400px] sm:h-[1100px]  lg:h-[1000px] bg-gradient-to-br from-black via-black to-blue-700 relative'>
      {/* fullerene design */}
      <div data-aos="zoom-up" data-aos-delay="200" className='h-screen w-full  '>
      <FullereneVisualization/>
      </div>
      


      {/* Projects folder */}
      <div data-aos="slide-up" data-aos-delay="300" className='absolute z-20 h-[1400px] sm:h-[1100px] lg:h-[1000px] w-full top-0 bg-black/5 flex flex-col items-center '>
      {/*  */}
          <h1 className='text-7xl text-white my-10 '>ACTIVITIES</h1>
          <div className='grid  grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 overflow-scroll no-scrollbar  '>
          <div className='w-[160px] h-[160px] p-9 cursor-pointer bg-blue-600/30 hover:bg-blue-600 hover:p-3 duration-200 z-30 '><img src="../../public/image/HTML5.svg" alt="" /></div>
            <div className='w-[160px] h-[160px] p-9 cursor-pointer bg-blue-600/30 hover:bg-blue-600 hover:p-3 duration-200 z-30 '><img src="../../public/image/CSS3.svg" alt="" className='w-full h-full'/></div>
            <div className='w-[160px] h-[160px] p-9 cursor-pointer bg-blue-600/30 hover:bg-blue-600 hover:p-3 duration-200 z-30 '><img src="../../public/image/Bootstrap.svg" alt="" /></div>
            <div className='w-[160px] h-[160px] p-9 cursor-pointer bg-blue-600/30 hover:bg-blue-600 hover:p-3 duration-200 z-30 '><img src="../../public/image/Tailwind CSS.svg" alt="" /></div>
            <div className='w-[160px] h-[160px] p-9 cursor-pointer bg-blue-600/30 hover:bg-blue-600 hover:p-3 duration-200 z-30 '><img src="../../public/image/JavaScript.svg" alt="" /></div>
            <div className='w-[160px] h-[160px] p-9 cursor-pointer bg-blue-600/30 hover:bg-blue-600 hover:p-3 duration-200 z-30 '><img src="../../public/image/React.svg" alt="" /></div>
            <div className='w-[160px] h-[160px] p-9 cursor-pointer bg-blue-600/30 hover:bg-blue-600 hover:p-3 duration-200 z-30 '><img src="../../public/image/Three.js.svg" alt="" /></div>
            <div className='w-[160px] h-[160px] p-9 cursor-pointer bg-blue-600/30 hover:bg-blue-600 hover:p-3 duration-200 z-30 '><img src="../../public/image/Vite.js.svg" alt="" /></div>
            <div className='w-[160px] h-[160px] p-9 cursor-pointer bg-blue-600/30 hover:bg-blue-600 hover:p-3 duration-200 z-30'><img src="../../public/image/Firebase.svg" alt="" /></div>
            <div className='w-[160px] h-[160px] p-9 cursor-pointer bg-blue-600/30 hover:bg-blue-600 hover:p-3 duration-200 z-30'><img src="../../public/image/Node.js.svg" alt="" /></div>  
            <div className='w-[160px] h-[160px] p-9 cursor-pointer bg-blue-600/30 hover:bg-blue-600 hover:p-3 duration-200 z-30'><img src="../../public/image/Express.svg" alt="" /></div>          
            <div className='w-[160px] h-[160px] p-9 cursor-pointer bg-blue-600/30 hover:bg-blue-600 hover:p-3 duration-200 z-30'><img src="../../public/image/Python.svg" alt="" /></div>
            
          </div>

          {/* Leetcode hackerRank Github profiles */}
          <div className='w-full  absolute bottom-12 flex  items-center justify-center sm:gap-12 gap-6'>
            <div data-aos="slide-right" data-aos-delay="200" className='  lg:w-[200px] lg:h-[200px] sm:w-[150px] sm:h-[150px] w-[100px] h-[100px]  duration-300 hover:cursor-pointer bg-violet-800 rounded-lg '><div><img src="../../public/image/Leetcode.png" className='rotate-12 rounded-lg hover:rotate-0' alt="" /></div></div>
            <div data-aos="zoom-up" data-aos-delay="200" className='  lg:w-[200px] lg:h-[200px] sm:w-[150px] sm:h-[150px] w-[100px] h-[100px]  duration-300 hover:cursor-pointer bg-green-800 rounded-lg '><div><img src="../../public/image/hackerRank.png" className='rotate-12 rounded-lg hover:rotate-0' alt="" /></div></div>
            <div data-aos="slide-left" data-aos-delay="200" className='  lg:w-[200px] lg:h-[200px] sm:w-[150px] sm:h-[150px] w-[100px] h-[100px]  duration-300 hover:cursor-pointer bg-red-800 rounded-lg '><div><img src="../../public/image/github.png" className='rotate-12 rounded-lg hover:rotate-0' alt="" /></div></div>
          </div>
      </div>

      
    </div>
  );
}

export default Projects;
