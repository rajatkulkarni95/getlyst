import { useEffect } from "react";
import { useStore, useRecommendedStore } from "../store";
import { getUser, getRecommendedTracks } from "../services";
import { Navbar } from "../components/Navbar";
import { BasicForm } from "../components/BasicForm";
import { Button } from "../components/Button";
import { useHistory } from "react-router-dom";

export const MainScreen = () => {
  const { access_token } = useStore();

  useEffect(() => {
    getUser();
    return () => null;
  }, [access_token]);

  const state = useRecommendedStore();

  const history = useHistory();

  return (
    <div className="p-4">
      <Navbar />
      <div className="md:m-8 m-2 flex flex-col items-center">
        <h3 className="text-white text-xl text-center font-semibold">
          What do you fancy today?
        </h3>
        <BasicForm />
        <Button
          handleClick={() =>
            getRecommendedTracks(state).then(history.push("/review"))
          }
        >
          Fetch Songs
        </Button>
      </div>
    </div>
  );
};
