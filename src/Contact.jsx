import  { useState } from 'react';
import Select from 'react-select';


const Contact = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const countryCodes = [
    { label: 'Afghanistan (+93)', value: '+93' },
    { label: 'Albania (+355)', value: '+355' },
    { label: 'Algeria (+213)', value: '+213' },
    // Add more countries...
  ];
  
    const handleChange = (selectedOption) => {
      setSelectedCountry(selectedOption);
    };

  return (
    <div className=" mx-[1.5rem] h-full">
      <h1 className=" mt-[2rem] font-bold text-[1.4rem] text-center">Contact Us @ Spring</h1>

      <p className=" md:w-[60%] mx-auto mt-5 text-center">Thank you for considering to contact us. Before reaching out, we recommend checking our FAQ section to see if your question has already been answered. You may find the information you need without having to wait for a response.
        If the answer to you question is not in the FAQ and still need to get in touch, please feel free to fill out the contact form below. We strive to respond to all inquiries promptly and look forward to assisting you.</p>
      <input type="text" name="" id="" className=" block border-2 border-[#F6DA6F] mx-auto justify-center outline-none p-2 my-[2rem] w-[100%] md:w-[50%]" placeholder="Enter Your Full Name" />
      <input type="email" name="" id="" className=" block border-2 border-[#F6DA6F] mx-auto justify-center outline-none p-2 my-[2rem] w-[100%] md:w-[50%]" placeholder="Enter Your Email Address" />
      <div className="relative">
      <Select
        className="absolute top-full w-[100%] mx-auto md:w-[50%] border border-[#F6DA6F] bg-white z-10 outline-none"
        options={countryCodes}
        value={selectedCountry}
        onChange={handleChange}
        placeholder="Select Country Code"
      />
      <input
        type="text"
        name="phone"
        id="phone"
        className="block border-2 border-[#F6DA6F] mx-auto outline-none p-2 my-[2rem] w-[100%] md:w-[50%]"
        placeholder="Enter Your Phone Number"
        value={selectedCountry ? selectedCountry.value : ''}
      />
    </div>
      <input type="text" name="" id="" className=" block border-2 border-[#F6DA6F] mx-auto justify-center outline-none p-2 my-[2rem] w-[100%] md:w-[50%]" placeholder="Enter Your Project Name" />
      <input type="text" name="" id="" className=" block border-2 border-[#F6DA6F] mx-auto justify-center outline-none p-2 my-[2rem] w-[100%] md:w-[50%]" placeholder="Enter Your Desired Design" />
     

      <button className=" flex bg-black text-white p-[0.3rem] mx-auto  px-4 mt-6">Submit</button> 
    </div>
  )
}

export default Contact