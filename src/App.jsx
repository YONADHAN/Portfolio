import React,{useEffect} from 'react';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:700,
      easing:"ease-in",
      delay:100,
    })
  })
  return (
    <div className='flex flex-col items-center'>
      <Home/>
      <About/>
      <Projects/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
