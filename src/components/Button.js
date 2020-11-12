import { Link } from "react-router-dom";

export const Button = ({ children, type = "button", handleClick }) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className="flex mt-3 md:mt-0 items-center justify-center px-6 py-3 border border-transparent text-lg leading-5 font-bold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
    >
      {children}
    </button>
  );
};

export const LinkButton = ({ href, children }) => {
  return (
    <a
      href={href}
      className="bg-green-700 flex uppercase text-base items-center hover:bg-green-900 text-white font-semibold py-4 px-6 rounded shadow-sm"
    >
      {children}
    </a>
  );
};

export const SecondaryButton = ({ children }) => {
  return (
    <button className="hidden float-right lg:block font-sans items-center justify-center lg:px-6 lg:py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
      {children}
    </button>
  );
};

export const SecondaryLink = ({ children }) => {
  return (
    <Link
      to="/app"
      className="flex items-center mx-auto w-3/4 md:w-64 justify-center px-4 py-2 border border-transparent text-sm leading-5 font-bold rounded-md text-black bg-gray-100 hover:text-green-700 focus:outline-none focus:shadow-outline transition ease-in-out duration-150 cursor-pointer text-center"
    >
      {children}
    </Link>
  );
};
