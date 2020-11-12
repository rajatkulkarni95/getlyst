import { Fragment } from "react";
import { SecondaryLink } from "../components/Button";
//import Navbar from "../components/Navbar";

const ErrorPage = () => {
  return (
    <Fragment>
      <h2 className="text-xl md:text-3xl text-center text-white font-semibold my-4">
        Looks like we wandered away
      </h2>
      <SecondaryLink>Go Back to Home</SecondaryLink>
    </Fragment>
  );
};

export default ErrorPage;
