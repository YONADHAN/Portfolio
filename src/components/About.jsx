import React from 'react';
import Cube from './Cube';
const About = () => {
  return (
    <div id='about' className='container min-h-screen w-full overflow-hidden bg-gradient-to-b from-blue-900/95 via-black to-black relative flex flex-col lg:flex-row items-center justify-around '>

      <div data-aos="fade-right" data-aos-delay="200" className='group text-white w-[450px] sm:w-[600px] h-[500px] p-10 ml-3 mt-5 border-8 rounded-3xl border-blue-600 flex flex-col items-center justify-center gap-2 shadow-blue-500 shadow-2xl'>
        <h1 className='text-3xl  sm:text-4xl md:text-3xl lg:text-4xl text-white duration-200 group-hover:text-blue-600 font-bold flex justify-center'><span className='-rotate-90 duration-200 group-hover:rotate-0 mr-1'>Hello,</span> I&apos;m Yonadhan <span className='rotate-90 duration-200 group-hover:rotate-0 ml-2'> M M</span></h1>
        <p className=' text-xl sm:text-2xl font-bold rotate-180 duration-200 group-hover:rotate-0'>About Me</p>
        
       <div >
          <div className='rotate-6 duration-200 group-hover:rotate-0 text-center text-sm sm:text-base'>
                <h3 className='text-blue-600 font-bold mt-4 '>B.TECH IN ELECTRONICS AND COMMUNICATION ENGINEERING</h3>
                <p>TKM COLLEGE OF ENGINEERING KOLLAM</p>
          </div>
            <div className='-rotate-3 mt-12 duration-200 group-hover:rotate-0 text-sm sm:text-base text-center'>
                <h3 className='text-blue-600 font-bold'>HIGHER SECONDARY EDUCATION IN SCIENCE(BIO-MATHS)</h3>
                <p>ST.BERCHUMANS HIGHER SECONDARY SCHOOL CHANGANACHERRY</p>
            </div>
       </div>


      </div>

     <div data-aos="fade-left" data-aos-delay="200" className='rotate-0 flex justify-center items-center mt-10 sm:mt-0 mb-12 sm:mb-0'  style={{ width: '400px', height: '400px'}}>
      <Cube size={700} />
    </div>  



    </div>
  );
}

export default About;
