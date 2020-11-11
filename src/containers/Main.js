import { useEffect } from "react";
import { useRecommendedStore, useStore } from "../store";
import { getUser, getRecommendedTracks } from "../services";
import { Navbar } from "../components/Navbar";
import { BasicForm } from "../components/BasicForm";
import { Button } from "../components/Button";
import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";

export const MainScreen = () => {
  const { access_token, userID } = useStore();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const user = window.localStorage.getItem("user");
    if (!user || user === "undefined") {
      getUser();
    }

    return () => null;
  }, [access_token]);

  const state = useRecommendedStore();
  const { seed_genres } = useRecommendedStore();

  const history = useHistory();

  const handleSubmit = (e) => {
    if (!seed_genres) {
      e.preventDefault();
      enqueueSnackbar("Select atleast 1 Genre", {
        preventDuplicate: true,
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
        variant: "error",
      });
    } else {
      getRecommendedTracks(state).then(history.push("/review"));
    }
  };

  return (
    <div className="p-4">
      <Navbar />
      <div className="md:m-8 m-2 flex flex-col items-center">
        <h3 className="text-white text-xl md:text-2xl text-center font-semibold">
          What do you fancy today?
        </h3>
        <BasicForm />
        <Button type="submit" handleClick={handleSubmit}>
          Fetch Songs
        </Button>
      </div>
    </div>
  );
};
