import { useState } from 'react';
import { AiOutlineArrowRight, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import spring from './assets/SPRING.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="flex justify-between items-center mx-[1.5rem] md:mx-[5rem]">
        <a href="/">
          <div className="mt-[2.1rem]">
            <img src={spring} alt="Logo" />
          </div>
        </a>
        <div className="hidden md:flex justify-around gap-[3rem] items-center mt-[2rem] text-[1.1rem]">
          <Link to="/">Home</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/About">About</Link>

          <div>
            <button className="flex bg-black text-white p-[0.5rem] rounded-full px-3 mt-[-0.6rem]">
              Get Start <AiOutlineArrowRight className="mt-1 ml-1" />
            </button>
          </div>
        </div>
        <div onClick={handleNav} className="block md:hidden mt-8">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </nav>

      <nav
        className={
          nav
            ? 'text-gray-300 fixed h-screen left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#000] ease-in-out duration-700'
            : 'fixed left-[-100%]'
        }
      >
        <div className="gap-[2.5rem]">
          <div className="flex flex-col justify-around gap-[3rem] mt-[2rem] ml-8 text-[1.1rem]">
            <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/About">About</Link>

            <div>
              <button className="flex bg-[#F6DA6F] text-black p-[0.4rem] rounded-full px-3">
                Get Start <AiOutlineArrowRight className="mt-1 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
