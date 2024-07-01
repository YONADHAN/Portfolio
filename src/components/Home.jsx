import React from 'react';

const Home = () => {
  return (
    <div className='container bg-gradient-to-b from-black via-black to-blue-900/95 h-screen w-full text-white relative'>





        {/* Navbar portion */}
        <div data-aos="slide-down" data-aos-delay="200" className='w-full h-[70px] bg-gradient-to-r from-black via-blue-900 to-black border-b-4  border-b-blue-950/70  sm:flex justify-center sm:justify-between items-center px-8'>
            <div data-aos="slide-right" data-aos-delay="200" className='text-2xl font-bold text-center'>Y-WORKS</div>
            <div data-aos="slide-left" data-aos-delay="200" className='text-xl font-bold  flex justify-center'>
                <ul className='flex items-center gap-5 '>
                    <li className='duration-200 hover:text-blue-600'><a href="/#">Home</a></li>
                    <li className='duration-200 hover:text-blue-700'><a href="/#about">About Me</a></li>
                    <li className='duration-200 hover:text-blue-800'><a href="/#activities">Activities</a></li>
                    <li className='duration-200 hover:text-blue-900'><a href="/#contact">Contact</a></li>
                    
                </ul>
            </div>
        </div>






        {/* Designing portion */}
        <div data-aos="fade-up" data-aos-delay="100" className='flex flex-col justify-center items-center w-full h-[550px]  '>
            <p data-aos="slide-left" data-aos-delay="200"  className='text-8xl md:text-9xl lg:text-[14rem] londrina-outline-regular top-32 md:top-56 lg:top-36 text-blue-900 relative hover:text-blue-600'>WEB DESIGN</p>
            <img data-aos="zoom-in-up" data-aos-delay="300"  src="../../public/image/YonadhanWebImage.png" alt="" className='w-[320px] h-[280px] md:w-[340px] md:h-[320px]  relative bottom-5'/>
            <p data-aos="slide-right" data-aos-delay="200"  className='text-7xl md:text-7xl lg:text-9xl  font-bold z-10 relative bottom-20 md:bottom-24 lg:bottom-16 '>DEVELOPER</p>

        </div>






    </div>
  );
}

export default Home;
