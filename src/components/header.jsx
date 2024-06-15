import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-scroll';
import { rvc_logo, discordBlack } from "../assets";
import { navigation1, navigation2, navigation3, navigation4 } from "../constants";

const Header = () => {
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      const body = document.body;

      if (currentScroll <= 0) {
        body.classList.remove('scroll-up');
      }

      if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-up');
        body.classList.add('scroll-down');
      }

      if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-down');
        body.classList.add('scroll-up');
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScroll]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <div id='navbar' className="mt-0 top-0 left-0 z-50 w-full fixed transition-all duration-300 ease-in-out bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
          <div className='flex flex-col'>
            <div className="flex items-center w-full justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
              <Link to='top' spy={true} smooth={true} offset={-500} duration={1000} className="block w-[12rem] xl:mr-8 pt-2" href="#hero">
                <img src={rvc_logo} width={150} height={30} alt="Real value consultants" />
              </Link>
              
              <nav className="hidden lg:flex lg:items-center lg:ml-auto lg:bg-transparent">
                <div className="relative z-2 flex flex-col lg:flex-row">
                  {navigation1.map((item) => (
                    <Link
                      to='story' spy={true} smooth={true} offset={-100} duration={1000}
                      key={item.id}
                      href={item.url}
                      className="block relative font-code text-sm uppercase text-n-1 transition-colors hover:text-color-5 hover:rounded-full hover:outline px-5 py-2 md:py-4 lg:text-base lg:font-semibold"
                    >
                      {item.title}
                    </Link>
                  ))}
                  {navigation2.map((item) => (
                    <Link
                      to='service' spy={true} smooth={true} offset={0} duration={1000}
                      key={item.id}
                      href={item.url}
                      className="block relative font-code text-sm uppercase text-n-1 transition-colors hover:text-color-5 hover:rounded-full hover:outline px-5 py-2 md:py-4 lg:text-base lg:font-semibold"
                    >
                      {item.title}
                    </Link>
                  ))}
                  {navigation3.map((item) => (
                    <Link
                      to='clients' spy={true} smooth={true} offset={0} duration={1000}
                      key={item.id}
                      href={item.url}
                      className="block relative font-code text-sm uppercase text-n-1 transition-colors hover:text-color-5 hover:rounded-full hover:outline px-5 py-2 md:py-4 lg:text-base lg:font-semibold"
                    >
                      {item.title}
                    </Link>
                  ))}
                  {navigation4.map((item) => (
                    <Link
                      to='foot' spy={true} smooth={true} offset={0} duration={1000}
                      key={item.id}
                      href={item.url}
                      className="block relative font-code text-sm uppercase text-n-1 transition-colors hover:text-color-5 hover:rounded-full hover:outline px-5 py-2 md:py-4 lg:text-base lg:font-semibold"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </nav>

              <a href="https://www.linkedin.com/company/real-value-consultants/" className="hidden lg:block lg:ml-8">
                <img src={discordBlack} width={43} alt="Discord" />
              </a>

              {/* Hamburger menu button */}
              <button className="lg:hidden" onClick={toggleMenu}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
              <div className="lg:hidden">
                <div className="flex flex-col items-center">
                  {navigation1.map((item) => (
                    <Link
                      to='story' spy={true} smooth={true} offset={-100} duration={1000}
                      key={item.id}
                      href={item.url}
                      className="block relative font-code text-sm uppercase text-n-1 transition-colors hover:text-color-5 hover:rounded-full hover:outline px-5 py-2 md:py-4 lg:text-base lg:font-semibold"
                      onClick={toggleMenu}  // Close menu on click
                    >
                      {item.title}
                    </Link>
                  ))}
                  {navigation2.map((item) => (
                    <Link
                      to='service' spy={true} smooth={true} offset={0} duration={1000}
                      key={item.id}
                      href={item.url}
                      className="block relative font-code text-sm uppercase text-n-1 transition-colors hover:text-color-5 hover:rounded-full hover:outline px-5 py-2 md:py-4 lg:text-base lg:font-semibold"
                      onClick={toggleMenu}  // Close menu on click
                    >
                      {item.title}
                    </Link>
                  ))}
                  {navigation3.map((item) => (
                    <Link
                      to='clients' spy={true} smooth={true} offset={0} duration={1000}
                      key={item.id}
                      href={item.url}
                      className="block relative font-code text-sm uppercase text-n-1 transition-colors hover:text-color-5 hover:rounded-full hover:outline px-5 py-2 md:py-4 lg:text-base lg:font-semibold"
                      onClick={toggleMenu}  // Close menu on click
                    >
                      {item.title}
                    </Link>
                  ))}
                  {navigation4.map((item) => (
                    <Link
                      to='foot' spy={true} smooth={true} offset={0} duration={1000}
                      key={item.id}
                      href={item.url}
                      className="block relative font-code text-sm uppercase text-n-1 transition-colors hover:text-color-5 hover:rounded-full hover:outline px-5 py-2 md:py-4 lg:text-base lg:font-semibold"
                      onClick={toggleMenu}  // Close menu on click
                    >
                      {item.title}
                    </Link>
                  ))}
                  <a href="https://www.linkedin.com/company/real-value-consultants/" className="mt-4">
                    <img src={discordBlack} width={43} alt="Discord" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
