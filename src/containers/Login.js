import React from "react";
import { FaSpotify } from "react-icons/fa";
import { Logo } from "../components/Logo";

export const LoginScreen = () => {
  const BACKEND_URI = process.env.REACT_APP_SERVER || "http://localhost:8080";
  return (
    <div className="flex flex-col items-center justify-center">
      <Logo />
      <a
        href={`${BACKEND_URI}/login`}
        className="bg-green-700 flex items-center hover:bg-green-900 text-white font-semibold py-2 px-5 text-xl rounded shadow-sm"
      >
        <FaSpotify className="mx-2" />
        Log in with Spotify
      </a>
    </div>
  );
};
