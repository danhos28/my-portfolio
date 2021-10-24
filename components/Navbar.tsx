import { useEffect, useState } from 'react';

const Navbar = ({
  isDark,
  setDark,
}: {
  isDark: boolean;
  setDark: (dark: boolean) => void;
}) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    setDark(localStorage.theme === 'dark' ? true : false);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    console.log(isDark);
  }, [isDark]);

  const handleDark = () => {
    setDark(!isDark);
    if (isDark) localStorage.theme = 'light';
    else localStorage.theme = 'dark';
  };

  return (
    <nav
      className={
        offsetY
          ? 'fixed shadow-md bg-ligth dark:bg-dark dark:text-white transition-all duration-200 w-screen h-[64px] z-50 flex justify-between items-center font-body px-4 sm:px-20'
          : 'fixed w-screen dark:text-white h-[64px] z-50 flex justify-between items-center font-body px-4 sm:px-20'
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

        <li onClick={handleDark} className="nav-li">
          {isDark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fcf288"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
