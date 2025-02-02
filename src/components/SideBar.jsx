const SideBar = () => {
  return (
    <div className="text-[#000000] dark:text-[#dddddd]">
      <h1 className="text-5xl font-bold">rsl.</h1>
      <div className="absolute  bottom-2 left-6  transform -rotate-90 origin-bottom-left">
        <ul className="flex space-x-4 gap-2 z-50">
          <li className="hover:text-gray-600 dark:hover:text-blue-50">
            <a className="  font-semibold text-lg " href="">
              contact Me
            </a>
          </li>
          <li className="hover:text-gray-600 dark:hover:text-blue-50">
            <a className="font-semibold text-lg " href="">
              Portfolio
            </a>
          </li>
          <li className="hover:text-gray-600 dark:hover:text-blue-50">
            <a className="font-semibold text-lg" href="">
              Skills
            </a>
          </li>
          <li className="hover:text-gray-600 dark:hover:text-blue-50">
            <a className="font-semibold text-lg" href="">
              About Me
            </a>
          </li>
          <li className="hover:text-gray-600 dark:hover:text-blue-50">
            <a className="font-semibold text-lg" href="">
              Home
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
