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
        className="bg-green-700 flex uppercase text-base items-center hover:bg-green-900 text-white font-semibold py-4 px-6 rounded shadow-sm"
      >
        <FaSpotify className="mx-2" />
        Log in with Spotify
      </a>
    </div>
  );
};
