import { useEffect, useState } from 'react';

const Navbar = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={
        offsetY
          ? 'fixed shadow-md bg-ligth transition-all duration-200 w-screen h-[64px] z-50 flex justify-between items-center font-body px-4 sm:px-20'
          : 'fixed w-screen h-[64px] z-50 flex justify-between items-center font-body px-4 sm:px-20'
      }
    >
      <h1 className="text-xl font-bold sm:flex hidden">Daniel Hosea</h1>
      <h1 className="text-lg font-bold flex sm:hidden">Daniel</h1>
      <ul className="sm:flex gap-6 text-lg list-none hidden">
        <li className="nav-li">Home</li>
        <li className="nav-li">About</li>
        <li className="nav-li">Skills</li>
        <li className="nav-li">Portfolio</li>
        <li className="nav-li">Contact</li>
        <li className="nav-li">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </li>
      </ul>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 block sm:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </nav>
  );
};

export default Navbar;
