import React from "react";
import { FaSpotify } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { LinkButton } from "../components/Button";
import { Logo } from "../components/Logo";
import { useStore } from "../store";

const LoginScreen = () => {
  const BACKEND_URI = process.env.REACT_APP_SERVER || "http://localhost:8080";
  const { access_token } = useStore();
  const history = useHistory();

  access_token ? history.push("/app") : console.log("stuff");

  return (
    <div className="flex flex-col items-center justify-center">
      <Logo />
      <LinkButton href={`${BACKEND_URI}/login`}>
        {" "}
        <FaSpotify className="mx-2 text-2xl" />
        Log in with Spotify
      </LinkButton>
    </div>
  );
};

export default LoginScreen;
