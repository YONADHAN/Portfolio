import React from 'react';
import emailjs from 'emailjs-com';


const SERVICE_ID = "service_3iygf8h";
const TEMPLATE_ID = "template_02pl74v";
const PUBLIC_KEY = "3YT6X6TQrKLQzVV4E";

const ContactForm = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        console.log("EmailJS result:", result.text);
        alert('Message Sent Successfully');
      }, (error) => {
        console.log("EmailJS error:", error.text);
        alert('Something went wrong!');
      });
    e.target.reset();
  };

  return (
    <>
      <span id='contact'></span>
      <div  className="relative w-full h-screen py-28 bg-gradient-to-tr from-black via-black to-blue-700 flex justify-center items-center text-white">
      <form data-aos="slide-up" data-aos-delay="200" className="bg-gradient-to-tr from-black via-black to-blue-700 p-8 rounded-lg shadow-lg w-[400px] h-[580px] sm:w-[500px] sm:h-[580px]" onSubmit={handleOnSubmit}>
        <h2 className="text-2xl font-semibold mb-4 text-center">Contact Me</h2>
        <div className="mb-4">
          <label htmlFor="from_name" className="block text-sm font-medium mb-1">Name</label>
          <input type="text" id="from_name" name="from_name" placeholder="Your name.." required 
                 className="w-full px-3 py-2 rounded-lg border-2 border-black focus:outline-none focus:ring-2 focus:ring-black text-black" />
        </div>
        <div className="mb-4">
          <label htmlFor="from_email" className="block text-sm font-medium mb-1">E-mail</label>
          <input type="email" id="from_email" name="from_email" placeholder="Your email.." required 
                 className="text-black w-full px-3 py-2 rounded-lg border-2 border-black focus:outline-none focus:ring-2 focus:ring-black" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
          <textarea id="message" name="message" rows="8" placeholder="Your message.." required 
                    className="text-black w-full px-3 py-2 rounded-lg border-2 border-black resize-none focus:outline-none focus:ring-2 focus:ring-black" />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg border-2 border-black shadow-lg transform transition-transform duration-200 hover:shadow-none hover:-translate-x-1 hover:-translate-y-1">
          Submit
        </button>
      </form>
    </div>
    </>
  );
}

export default ContactForm;
