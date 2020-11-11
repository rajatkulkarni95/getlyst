import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

const ErrorPage = () => {
  return (
    <Fragment>
      <Navbar />
      <h2 className="text-xl md:text-3xl text-center text-white font-semibold my-4">
        Looks like we wandered away
      </h2>
      <Link
        to="/"
        className="flex items-center mx-auto  w-3/4 md:w-64 justify-center px-4 py-2 border border-transparent text-sm leading-5 font-bold rounded-md text-black bg-white hover:bg-green-700 focus:outline-none focus:shadow-outline transition ease-in-out duration-150 cursor-pointer text-center"
      >
        Go Back to Home
      </Link>
    </Fragment>
  );
};

export default ErrorPage;
