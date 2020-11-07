import { useEffect } from "react";
import { useStore, useRecommendedStore } from "../store";
import { getUser, getRecommendedTracks } from "../services";
import { Navbar } from "../components/Navbar";
import { BasicForm } from "../components/BasicForm";
import { Button } from "../components/Button";

export const MainScreen = () => {
  const { access_token } = useStore();

  useEffect(() => {
    getUser();
    return () => null;
  }, [access_token]);

  const state = useRecommendedStore();

  return (
    <div className="p-4">
      <Navbar />
      <div className="m-8 flex flex-col items-center">
        <h3 className="text-white text-xl text-center font-semibold">
          What do you fancy today?
        </h3>
        <BasicForm />
        <Button handleClick={() => getRecommendedTracks(state)}>
          Fetch Songs
        </Button>
      </div>
    </div>
  );
};
