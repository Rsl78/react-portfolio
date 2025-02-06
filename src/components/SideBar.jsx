const SideBar = () => {
  return (
    <div className="text-[#000000] dark:text-[#dddddd]">
      <h1 className="text-5xl font-bold">rsl.</h1>
      <div className="absolute  bottom-3 left-6  transform -rotate-90 origin-bottom-left  md:bottom-2">
        <ul className="flex space-x-4 gap-4 md:gap-2  z-50">
          <li className="hover:text-gray-600 dark:hover:text-blue-50">
            <a className="font-semibold text-lg" href="">
              home
            </a>
          </li>
          <li className="hover:text-gray-600 dark:hover:text-blue-50">
            <a className="whitespace-nowrap font-semibold text-lg" href="">
              about me
            </a>
          </li>
          <li className="hover:text-gray-600 dark:hover:text-blue-50">
            <a className="font-semibold text-lg" href="">
              projects
            </a>
          </li>
          <li className="hover:text-gray-600 dark:hover:text-blue-50">
            <a className="font-semibold text-lg " href="">
              blogs
            </a>
          </li>
          <li className="hover:text-gray-600 dark:hover:text-blue-50">
            <a className=" whitespace-nowrap font-semibold text-lg " href="">
              contact me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
