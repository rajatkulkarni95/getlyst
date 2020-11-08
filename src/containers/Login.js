import React from "react";
import { FaSpotify } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useStore } from "../store";

export const LoginScreen = () => {
  const BACKEND_URI = process.env.REACT_APP_SERVER || "http://localhost:8080";
  const { access_token } = useStore();
  const history = useHistory();

  access_token ? history.push("/app") : console.log("stuff");

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
