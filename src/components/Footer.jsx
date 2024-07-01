import React from 'react';

const Footer = () => {
  return (
    <div className='container w-full h-[200px] bg-black/95 flex flex-col items-center  text-white'>
      <h1 data-aos="zoom-up" data-aos-delay="200" className='text-3xl my-5'>Get in touch with me</h1>
      <div data-aos="zoom-up" data-aos-delay="200" className='w-[300px] flex justify-between'>
        <div><img src="../../public/image/Linkedin.png" alt="" className='scale-50' /></div>
        <div><img src="../../public/image/whatsapp.png" alt=""className='scale-50' /></div>
        <div><img src="../../public/image/x.png" alt=""className='scale-50' /></div>
      </div>
    </div>
  );
}

export default Footer;
