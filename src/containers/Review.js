import { useStore } from "../store";
import { getPlaylistDetails } from "../services";
import { useEffect } from "react";
import { useSnackbar } from "notistack";
import { Navbar } from "../components/Navbar";

export const Review = () => {
  const { playlistID, playlistData, selectedGenres } = useStore();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    getPlaylistDetails(playlistID)
      .then()
      .catch(
        enqueueSnackbar("Unable to Get Playlist Details", {
          preventDuplicate: true,
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
          variant: "error",
        })
      );
  }, []);

  const {
    uri,
    name,
    images,
    tracks: { total },
  } = playlistData;

  return (
    <>
      <Navbar />
    </>
  );
};
