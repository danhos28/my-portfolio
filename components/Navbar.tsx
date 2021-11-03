import { useEffect, useState } from 'react';

const Navbar = ({
  isDark,
  setDark,
}: {
  isDark: boolean;
  setDark: (dark: boolean) => void;
}) => {
  const [offsetY, setOffsetY] = useState(0);
  const [hamburgerClick, setHamburgerClick] = useState<boolean>(false);

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
  }, [isDark]);

  const handleDark = () => {
    setDark(!isDark);
    if (isDark) localStorage.theme = 'light';
    else localStorage.theme = 'dark';
  };

  return (
    <nav
      className={`${
        offsetY
          ? 'shadow-md transition-all duration-200 bg-light dark:bg-dark'
          : 'bg-transparent dark:bg-transparent'
      } fixed w-screen dark:text-white z-50 flex justify-between items-center font-body px-6 sm:px-20 gap-4 h-[64px]`}
    >
      <h1 className="text-xl font-black font-sans lock">DH</h1>
      <ul
        className={`${
          hamburgerClick ? 'top-[64px] opacity-100' : 'top-[-80vh] opacity-0'
        } flex flex-col items-center gap-6 text-lg transition-all duration-500 ease-in-out sm:opacity-100 sm:transition-none list-none shadow-md sm:shadow-none absolute  left-0 py-4 sm:py-0 w-screen sm:w-auto bg-white sm:bg-light dark:bg-darkTwo sm:dark:bg-dark sm:flex sm:flex-row sm:static`}
      >
        <li className="nav-li">Home</li>
        <li className="nav-li">About</li>
        <li className="nav-li">Skills</li>
        <li className="nav-li">Projects</li>
        <li className="nav-li">Contact</li>
        <li onClick={handleDark} className="nav-li hidden sm:block">
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
      <div className="flex sm:hidden gap-2">
        <button onClick={handleDark} className="nav-li">
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
        </button>
        <button
          className="nav-li"
          onClick={() => setHamburgerClick(!hamburgerClick)}
        >
          {hamburgerClick ? (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black dark:text-white"
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
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
